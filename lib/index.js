import StyleDictionary from "style-dictionary";
import { registerTransforms } from "@tokens-studio/sd-transforms";
import getAllThemes from "./common/getAllThemes.js";
import semanticColorsAttributes from "./transforms/index.js";
import initializeCustomFormats from "./formats/index.js";
registerTransforms(StyleDictionary);
initializeCustomFormats();
semanticColorsAttributes();
import * as path from "path";
export const buildTokens = async (folderPath) => {
    const tokensPath = path.resolve(folderPath);
    const buildPath = "tokens";
    const basePath = tokensPath;
    const themes = await getAllThemes(basePath);
    const baseConfig = (themeName, modeName = undefined) => {
        const genericTokens = `${basePath}/*.json`;
        const brandings = `${basePath}/Branding/**.json`;
        const semantics = `${basePath}/Semantics/${themeName}/${modeName}.json`;
        const coreSemantics = `${basePath}/Semantics/${themeName}/Core.json`;
        const components = `${basePath}/Components/${themeName}.json`;
        const fileName = (type) => {
            if (modeName) {
                if (type === "color") {
                    return `Color${themeName}${modeName}`;
                }
                else if (type === "size") {
                    return `Sizes${themeName}`;
                }
                else if (type === "components") {
                    return `Component`;
                }
                else {
                    return `${themeName}${modeName}`;
                }
            }
            return themeName;
        };
        return {
            source: [genericTokens, coreSemantics, semantics, brandings, components],
            platforms: {
                figma: {
                    transforms: ["name/cti/pascal"],
                    buildPath: `${buildPath}/Figma/`,
                    files: [
                        {
                            destination: `${fileName("size")}.json`,
                            format: "Figma/sizes/json",
                        },
                    ],
                },
                figmaComponents: {
                    transforms: ["name/cti/pascal"],
                    buildPath: `${buildPath}/Figma/`,
                    files: [
                        {
                            destination: `${fileName("components")}.json`,
                            format: "Figma/components/json",
                        },
                    ],
                },
                webColors: {
                    transforms: ["name/cti/pascal", "attribute/semantic/colors"],
                    buildPath: `${buildPath}/web/`,
                    files: [
                        {
                            destination: `${fileName("color")}.ts`,
                            format: "web/colors/ts",
                        },
                    ],
                },
                webSizes: {
                    transforms: ["name/cti/pascal", "attribute/semantic/colors"],
                    buildPath: `${buildPath}/web/`,
                    files: [
                        {
                            destination: `${fileName("size")}.ts`,
                            format: "web/sizes/ts",
                        },
                    ],
                },
                webComponents: {
                    transforms: ["name/cti/pascal", "attribute/semantic/colors"],
                    buildPath: `${buildPath}/web/`,
                    files: [
                        {
                            destination: `${fileName("components")}.ts`,
                            format: "web/components/ts",
                        },
                    ],
                },
            },
        };
    };
    const configs = () => {
        let configs = [];
        themes.forEach((theme) => {
            const { name } = theme;
            if (theme.modes.length > 0) {
                theme.modes.forEach((mode) => {
                    configs.push(baseConfig(name, mode));
                });
            }
            else {
                configs.push(baseConfig(name));
            }
        });
        return configs;
    };
    configs().forEach((config) => {
        const sd = StyleDictionary.extend(config);
        sd.cleanAllPlatforms();
        sd.buildAllPlatforms();
    });
};
