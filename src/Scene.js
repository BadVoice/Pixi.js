import { Container, Graphics } from "pixi.js";
import { Tank } from "./Tank";

export class Scene extends Container {
  screenHight;
  screenWidth;
  marker = new Graphics();

  myTank = new Tank();

  constructor(screenHight, screenWidth, marker) {
    super();

    this.screenHight = screenHight;
    this.screenWidth = screenWidth;
    this.marker = marker;

    this.addChild(this.myTank.view, this.marker);
  }
}
