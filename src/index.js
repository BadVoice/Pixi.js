import { Application, Sprite, Assets, Container } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas"),
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const mediumTankContainer = new Container();

Assets.addBundle("tank-medium", {
  hyllA07: "./public/sprites/Hulls_Color_A/Hull_07.png",
  weaponA08: "./public/sprites/Weapon_Color_A/Gun_08.png",
  trackA2: "./public/sprites/Tracks/Track_2_A.png",
});

await Assets.loadBundle("tank-medium");

const hull = Sprite.from("./sprites/Hulls_Color_A/Hull_07.png");
const weapon = Sprite.from("./sprites/Weapon_Color_A/Gun_08.png");

hull.anchor.set(0.5);
weapon.anchor.set(0.5);

mediumTankContainer.addChild(hull, weapon);

mediumTankContainer.x = app.screen.width / 2;
mediumTankContainer.y = app.screen.height / 2;

app.stage.addChild(mediumTankContainer);
