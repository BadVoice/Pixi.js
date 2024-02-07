import { Container, Sprite } from "pixi.js";

export class Scene extends Container {
  screenWidth;
  screenHight;

  myTankHull = new Sprite();
  myTankWeapon = new Sprite();
  myTankContainer = new Container();
  constructor(screenHight, screenWidth) {
    super();

    this.screenHight = screenHight;
    this.screenWidth = screenWidth;

    this.myTankHull = Sprite.from("./sprites/Hulls_Color_A/Hull_07.png");
    this.myTankHull.anchor.set(0.5);
    this.myTankHull.rotation = 1.57;

    this.myTankWeapon = Sprite.from("./sprites/Weapon_Color_A/Gun_08.png");
    this.myTankWeapon.anchor.set(0.5);
    this.myTankWeapon.rotation = 1.57;

    this.myTankContainer.x = this.screenWidth / 3;
    this.myTankContainer.y = this.screenHight / 2;
    this.myTankContainer.addChild(this.myTankHull, this.myTankWeapon);
    this.addChild(this.myTankContainer);
  }
}
