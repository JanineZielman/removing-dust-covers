import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Link from "next/link";

import { linkResolver } from "../prismicio";

export const Header = ({ navigation, settings }) => {

  return (
    <header>
      <Link href="/"><h1>{prismicH.asText(settings.data.siteTitle)}</h1></Link>
      <div className="navigation">
        {navigation.data.menu.map((item, i) => {
          return(
            <PrismicLink key={`link${i}`} field={item.link}>{item.label}</PrismicLink>
          )
        })}
      </div>
    </header>
  );
};
