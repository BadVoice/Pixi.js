import { Container, Graphics } from "pixi.js";
import { Tank } from "./Tank";

export class Scene extends Container {
  screenHight;
  screenWidth;
  marker = new Graphics();
  myTank;

  constructor(screenHight, screenWidth) {
    super();

    this.screenHight = screenHight;
    this.screenWidth = screenWidth;
    this.myTank = new Tank();
    this.addChild(this.myTank.view, this.marker);
  }
}
