import { AnimatedSprite, Container, Sprite } from "pixi.js";
import { Tank } from "./Tank";

export class Scene extends Container {
  screenWidth;
  screenHight;

  myTank = new Tank();

  constructor(screenHight, screenWidth) {
    super();

    this.screenHight = screenHight;
    this.screenWidth = screenWidth;

    this.addChild(this.myTank.myTankContainer);
  }
}
