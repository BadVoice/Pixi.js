import { Application, Assets, Container, Graphics } from "pixi.js";
import { Scene } from "./Scene";

export default class App {
  constructor(options) {
    this.app = new Application({
      view: document.getElementById("pixi-canvas"),
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: 0x6495ed,
      width: 1700,
      height: 700,
    });
    this.stage = this.app.stage;
    this.scene = new Scene(this.app.screen.height, this.app.screen.width);
  }

  async init() {
    console.log("Инициализация приложения");
    await this.load();
    this.resize();
    this.runGame();
  }

  async load() {
    console.log("Нужна async await загрузка бандла и проверка на кеш?");
    await Assets.loadBundle("tank-medium");
  }

  resize() {
    const { width: w, height: h } = this.app.view;
    console.log("Ресайз приложения", w, h);
    this.app.resize(w, h);
  }

  runGame() {
    const marker = new Graphics();
    marker.beginFill(0xff0000, 1);
    marker.drawCircle(0, 0, 10);
    marker.endFill();

    this.stage.position.set(
      this.app.screen.width / 2,
      this.app.screen.height / 2
    );

    this.app.stage.addChild(this.scene);
    this.scene.addChild(marker);
  }
}
