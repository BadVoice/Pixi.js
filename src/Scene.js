import { Container, Graphics, Text } from "pixi.js";
import { Tank } from "./Tank";

export class Scene extends Container {
  screenHight;
  screenWidth;
  marker = new Graphics();
  myTank;
  scoreContainer;
  scoreText;

  constructor(screenHight, screenWidth) {
    super();

    const initialScore = 0;
    const updateScoreOnScene = (newScore) => {
      this.scoreText.text = "Score: " + newScore;
    };

    this.myTank = new Tank(initialScore, updateScoreOnScene);

    this.screenHight = screenHight;
    this.screenWidth = screenWidth;

    this.scoreContainer = new Container();
    this.scoreText = new Text("Score: " + initialScore, { fill: 0xffffff });
    this.scoreText.position.set(-50, -202);

    this.scoreContainer.addChild(this.scoreText);

    this.addChild(this.myTank.view, this.marker, this.scoreContainer);
  }
}
