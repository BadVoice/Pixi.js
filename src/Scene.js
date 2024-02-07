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

    this.myTank.myTankContainer.x = this.screenWidth / 3;
    this.myTank.myTankContainer.y = this.screenHight / 2;

    this.addChild(this.myTank.myTankContainer);
  }
}
