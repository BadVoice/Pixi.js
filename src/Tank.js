import { Container, Sprite } from "pixi.js";

export class Tank extends Container {
  myTankHull = new Sprite();
  myTankWeapon = new Sprite();
  myTankContainer = new Container();

  constructor() {
    super();

    this.myTankHull = Sprite.from("./sprites/Hulls_Color_A/Hull_07.png");
    this.myTankHull.anchor.set(0.5);
    this.myTankHull.rotation = 1.57;

    this.myTankWeapon = Sprite.from("./sprites/Weapon_Color_A/Gun_08.png");
    this.myTankWeapon.anchor.set(0.5);
    this.myTankWeapon.rotation = 1.57;

    this.myTankContainer.addChild(this.myTankHull, this.myTankWeapon);
  }
}
