import StyleDictionary from "style-dictionary";

const semanticColorsAttributes = () => {
  StyleDictionary.registerTransform({
    name: "attribute/semantic/colors",
    type: "attribute",
    matcher: (token) => token.type === "color",
    transformer: (token) => {
      const attrNames = ["type", "semantic", "state"];
      const originalAttrs = token.attributes || {};
      const generatedAttrs = {};

      for (let i = 0; i < token.path.length && i < attrNames.length; i++) {
        generatedAttrs[attrNames[i]] = token.path[i];
      }

      return Object.assign(generatedAttrs, originalAttrs);
    },
  });
};

export const compositionAttributes = () => {
  StyleDictionary.registerTransform({
    name: "component/composition/prop",
    type: "attribute",
    matcher: (token) =>
      token.path.length === 3 && token.path[1] === "Composition",
    transformer: (token) => {
      const attrNames = ["component", "composition", "prop", "value"];
      let generatedAttrs = {};

      console.log("compoisition is running");

      for (let i = 0; i < token.path.length && i < attrNames.length; i++) {
        generatedAttrs = { name: token.path[0], [token.path[2]]: token.value };
      }

      return Object.assign(generatedAttrs);
    },
  });
};

export default semanticColorsAttributes;
