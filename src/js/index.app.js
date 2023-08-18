import * as utils from "./modules/utils.js";
import * as blackBanner from "./modules/black-banner.js";
import * as price from "./modules/price.js";
import * as sliders from "./modules/sliders.js";
import * as masks from "./modules/masks.js";
import { useDynamicAdapt } from "./libs/dynamicAdapt.js";

useDynamicAdapt("max");

utils.isWebp();
