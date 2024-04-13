import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { useEffect } from "react";

const Index = ({ navigation, page, settings}) => {

  function update(e){
    var x = e.clientX || e.touches?.[0].clientX
    var y = e.clientY || e.touches?.[0].clientY
  
    document.getElementById('home')?.style.setProperty('--cursorX', x + 'px')
    document.getElementById('home')?.style.setProperty('--cursorY', y + 'px')
  }

  useEffect(() => {
    document.addEventListener('mousemove',update)
    document.addEventListener('touchmove',update)
  })
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
      </Head>
      <div className="container home" id="home">
        <video muted autoPlay loop className="hero">
          <source src={page.data.video.url}type="video/mp4"/>
        </video>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client.getSingle("home");


  return {
    props: {
      navigation,
      settings,
      page
    },
  };
}
