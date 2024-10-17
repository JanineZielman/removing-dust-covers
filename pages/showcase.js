import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { useEffect } from "react";

const Showcase = ({ navigation, page, settings, models}) => {
  console.log(models)
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.siteTitle)}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={prismicH.asText(settings.data.siteTitle)} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.image.url} />
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" async ></script>
      </Head>
      <div className="showcase">
        {models.map((item, i) => {
          return(
            <div className="model" key={`model${i}`}>
              <model-viewer disable-zoom field-of-view="20deg" interaction-prompt="none" camera-orbit="auto auto auto" auto-rotate camera-controls touch-action="pan-y" src={item.data.model.url} alt="A 3D model of an astronaut"></model-viewer>
              <h3>{item.data.title}</h3>
              <p>{item.data.subtitle}</p>
              <PrismicRichText field={item.data.description}/>
            </div>
          )
        })}
      </div>
    </Layout>
  );
};

export default Showcase;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getSingle("showcase");
  const models = await client.getAllByType("model");


  return {
    props: {
      navigation,
      settings,
      page,
      models
    },
  };
}
