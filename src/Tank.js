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
  sprite.position.copyFrom(position);
  sprite.anchor.copyFrom(anchor);
  sprite.rotation = rotation;
  return sprite;
};

export class Tank {
  constructor() {
    this._view = new Container();
    this._tracksLeft = createAnimatedSprite(["trackA2", "trackB2"], {
      x: 0,
      y: -60,
    });
    this._tracksLeft.play();
    this._tracksLeft.animationSpeed = 0.15;
    this._tracksLeft.rotation = 1.57;

    this._tracksRight = createAnimatedSprite(["trackA2", "trackB2"], {
      x: 0,
      y: 60,
    });
    this._tracksRight.play();
    this._tracksRight.animationSpeed = 0.15;
    this._tracksRight.rotation = 1.57;

    this._view.addChild(this._tracksLeft, this._tracksRight);
    this.view.addChild(
      createSprite("hullA07", { x: 0, y: 0 }, { x: 0.5, y: 0.5 }, 1.57)
    );
    this.view.addChild(
      createSprite("weaponA08", { x: 0, y: 0 }, { x: 0.5, y: 0.5 }, 1.57)
    );
  }

  get view() {
    return this._view;
  }
}
