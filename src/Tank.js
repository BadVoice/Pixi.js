import { Container, Sprite, AnimatedSprite, Texture } from "pixi.js";

export const createAnimatedSprite = (
  texturesName,
  position = { x: 0, y: 0 },
  anchor = { x: 0.5, y: 0.5 },
  rotation = 0
) => {
  const texturesNames = texturesName.map((texture) => Texture.from(texture));

  const animatedSprite = new AnimatedSprite(texturesNames);
  animatedSprite.position.copyFrom(position);
  animatedSprite.anchor.copyFrom(anchor);
  animatedSprite.rotation = rotation;
  return animatedSprite;
};

export const createSprite = (
  texturesName,
  position = { x: 0, y: 0 },
  anchor = { x: 0.5, y: 0.5 },
  rotation = 0
) => {
  const sprite = new Sprite(Texture.from(texturesName));
  console.log(texturesName);
  sprite.position.copyFrom(position);
  sprite.anchor.copyFrom(anchor);
  sprite.rotation = rotation;
  if (!sprite) {
    console.error(`Ошибка загрузки текстуры ${sprite}`);
  } else {
    console.log(`Текстура ${sprite} успешно загружена`);
  }
  return sprite;
};

export class Tank {
  constructor(score, updateScoreCallback) {
    this.enemyTankHealth = 100;
    this.score = score;
    this.updateScoreCallback = updateScoreCallback;

    this._view = new Container();
    this._tracksLeft = createAnimatedSprite(
      ["./sprites/Tracks/Track_2_A.png", "./sprites/Tracks/Track_2_B.png"],
      {
        x: 0,
        y: -60,
      }
    );
    this._tracksLeft.play();
    this._tracksLeft.animationSpeed = 0.15;
    this._tracksLeft.rotation = 1.57;

    this._tracksRight = createAnimatedSprite(
      ["./sprites/Tracks/Track_2_A.png", "./sprites/Tracks/Track_2_B.png"],
      {
        x: 0,
        y: 60,
      }
    );
    this._tracksRight.play();
    this._tracksRight.animationSpeed = 0.15;
    this._tracksRight.rotation = 1.57;

    this._view.addChild(this._tracksLeft, this._tracksRight);
    this.view.addChild(
      createSprite(
        "./public/sprites/Hulls_Color_B/Hull_07.png",
        { x: 0, y: 0 },
        { x: 0.5, y: 0.5 },
        1.57
      )
    );
    this.view.addChild(
      createSprite(
        "./public/sprites/Weapon_Color_B/Gun_07.png",
        { x: 0, y: 0 },
        { x: 0.5, y: 0.5 },
        1.57
      )
    );

    this._view.on("pointertap", this._onClicky, this);
    this._view.eventMode = "dynamic";
  }

  get view() {
    return this._view;
  }

  _onClicky(event) {
    console.log("Click");
    this.enemyTankHealth -= 10;

    if (this.enemyTankHealth <= 0) {
      this.enemyTankHealth = 100;
      this.score += 100;
      console.log(this.score);
      console.log(
        "Противник уничтожен! Получено 100 очков. Общий счет: " + this.score
      );

      this.updateScoreCallback(this.score);
    }
  }
}
