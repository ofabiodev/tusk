import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { i18n } from "./i18n";
import { createElement } from "react";
import icons from "./icons";

export const source = loader({
  i18n,
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(key) {
    if (key && key in icons) {
      return createElement(icons[key]);
    }
  }
});
