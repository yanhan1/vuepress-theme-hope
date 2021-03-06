/* eslint-disable @typescript-eslint/naming-convention */
import { resolve } from "path";
import { i18n } from "@mr-hope/vuepress-shared-utils";

import { Context, PluginOptionAPI } from "@mr-hope/vuepress-types";
import { CopyCodeOptions } from "../types";

export = (options: CopyCodeOptions, context: Context): PluginOptionAPI => {
  const { themeConfig } = context;
  const baseLang = options.baseLang || themeConfig.baseLang || "en-US";
  const baseLangPath = i18n.lang2path(baseLang);
  const copyCodeConfig = i18n.config.copyCode;

  copyCodeConfig["/"] = copyCodeConfig[baseLangPath];

  return {
    name: "copy-code",

    define: {
      CODE_COPY_OPIONS: options,
      CODE_COPY_I18N: copyCodeConfig,
    },

    clientRootMixin: resolve(__dirname, "../src/clientRootMixin.js"),
  };
};
