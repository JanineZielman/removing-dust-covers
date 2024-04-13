import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { linkResolver } from "../prismicio";

export const Header = ({ navigation, settings }) => {

  function toggleMenu() {
    var element = document.getElementById("navItems");
    element.classList.toggle("active");
  }

  console.log(navigation)

  return (
    <header>
      <h1>{prismicH.asText(settings.data.siteTitle)}</h1>
      <div className="navigation">
        {navigation.data.menu.map((item, i) => {
          return(
            <PrismicLink field={item.link}>{item.label}</PrismicLink>
          )
        })}
      </div>
    </header>
  );
};
