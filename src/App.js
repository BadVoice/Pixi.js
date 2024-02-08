import { Application, Assets, Graphics } from "pixi.js";
import { Scene } from "./Scene";

const app = new Application({
  view: document.getElementById("pixi-canvas"),
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 1700,
  height: 700,
});

Assets.addBundle("tank-medium", {
  hullA07: "./public/sprites/Hulls_Color_A/Hull_07.png",
  weaponA08: "./public/sprites/Weapon_Color_A/Gun_08.png",
  trackA2: "./public/sprites/Tracks/Track_2_A.png",

  trackB2: "./public/sprites/Tracks/Track_2_B.png",
  weaponB08: "./public/sprites/Weapon_Color_B/Gun_07.png",
  hullB07: "./public/sprites/Hulls_Color_B/Hull_01.png",
});

await Assets.loadBundle("tank-medium");

function init() {
  load();
  resize();
}
init();

function resize() {
  const { clientWidth: w, clientHeight: h } = app.view;
  app.resize(w, h);
}
async function load() {
  console.log("Нужна async await загрузка бандла в ООП");
}

const runGame = () => {
  const marker = new Graphics();
  marker.beginFill(0xff0000, 1);
  marker.drawCircle(0, 0, 10);
  marker.endFill();

  app.stage.position.set(app.screen.width / 2, app.screen.height / 2);

  const scene = new Scene(app.screen.height, app.screen.width, marker);

  app.stage.addChild(scene);
};
runGame();

export default app;
