import { Container, Sprite, AnimatedSprite, Texture } from "pixi.js";

export class Tank extends Container {
  myTankHull = new Sprite();
  myTankWeapon = new Sprite();
  myRightTankTruck = new Sprite();
  myLeftTankTruck = new Sprite();
  myTankContainer = new Container();

  constructor() {
    super();

    this.myLeftTankTruck = Sprite.from("./sprites/Tracks/Track_2_A.png");
    this.myLeftTankTruck.anchor.set(1.6, 0.55);
    this.myLeftTankTruck.rotation = 1.57;

    this.myRightTankTruck = Sprite.from("./sprites/Tracks/Track_2_A.png");
    this.myRightTankTruck.anchor.set(-0.7, 0.55);
    this.myRightTankTruck.rotation = 1.57;

    this.myTankHull = Sprite.from("./sprites/Hulls_Color_A/Hull_07.png");
    this.myTankHull.anchor.set(0.5);
    this.myTankHull.rotation = 1.57;

    this.myTankWeapon = Sprite.from("./sprites/Weapon_Color_A/Gun_08.png");
    this.myTankWeapon.anchor.set(0.5);
    this.myTankWeapon.rotation = 1.57;

    this.myTankContainer.addChild(
      this.myLeftTankTruck,
      this.myRightTankTruck,
      this.myTankHull,
      this.myTankWeapon
    );

    this.myTankContainer.on("click", this.onClicky, this);
    this.myTankContainer.eventMode = "dynamic";
  }

  onClicky(e) {
    console.log("Click");
  }
}
