import { defineConfig, presetWind3, transformerVariantGroup } from "unocss";
import { presetCatppuccin } from 'unocss-catppuccin';

export default defineConfig({
  presets: [
    presetWind3(),
    presetCatppuccin({
      prefix: false,
      defaultFlavour: "macchiato",
    })
  ],
  transformers: [
    transformerVariantGroup()
  ]
});
