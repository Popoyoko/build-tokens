import webColorsTs from "./webColorsTs.js";
import webSizesTs from "./webSizesTs.js";
import webComponentsTs from "./webComponentsTs.js";
import FigmaSizes from "./FigmaSizesJson.js";
import FigmaComponents from "./FigmaComponentsJson.js";

const initializeCustomFormats = () => {
    webColorsTs(),
    webSizesTs(),
    webComponentsTs(),
    FigmaSizes();
    FigmaComponents();
};

export default initializeCustomFormats;
