import * as PIXI from "pixi.js";
import { loadAssets } from "./common/assets";
import { appConstants } from "./common/constants";

const WIDTH = appConstants.size.WIDTH;
const HEIGHT = appConstants.size.HEIGHT;

const gameState = {
  stopped: false,
};

const createScene = () => {
  const app = new PIXI.Application({
    background: "#fafafa",
    antialias: true,
    width: WIDTH,
    height: HEIGHT,
  });
  document.body.appendChild(app.view);
  gameState.app = app;
  const rootConainer = app.stage;
  rootConainer.interactive = true;
  rootConainer.hitArea = app.screen;
};
const initInteraction = () => {
  console.log("initInteraction");
};

export const initGame = () => {
  loadAssets((progress) => {
    if (progress === "all") {
      createScene();
      initInteraction();
    }
  });
};
