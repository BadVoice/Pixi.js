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
    // No pixi here, All HTML DOM baby!
    document.addEventListener("keydown", this.onKeyDown.bind(this));
    document.addEventListener("keyup", this.onKeyUp.bind(this));

    const initialScore = 0;
    const updateScoreOnScene = (newScore) => {
      this.scoreText.text = "Score: " + newScore;
    };

    this.myTank = new Tank(initialScore, updateScoreOnScene);

    this.screenHight = screenHight;
    this.screenWidth = screenWidth;

    this.scoreContainer = new Container();
    this.scoreText = new Text("Score: " + initialScore, { fill: 0xffffff });
    this.scoreText.position.set(-50, -300);

    this.scoreContainer.addChild(this.scoreText);

    this.addChild(this.myTank.view, this.marker, this.scoreContainer);
    console.log("Сцена создана");
    window["TANK"] = this.myTank;
  }

  // simple example without keyboard class
  onKeyDown(e) {
    console.log("KeyDown event", e);

    // if (e.code === "KeyW") {
    //   this.myTank.startTracks();
    //   console.log(this.myTank._view.)
    // }

    if (e.code === "KeyD") {
      this.myTank.startTracks();
      this.myTank.rotateBodyBy(0.1);
    }

    if (e.code === "KeyA") {
      this.myTank.startTracks();
      this.myTank.rotateBodyBy(-0.1);
    }
  }

  // simple example without keyboard class
  onKeyUp(e) {
    console.log("KeyUp event", e);
    if (e.code === "KeyD") {
      this.myTank.stopTracks();
    }

    if (e.code === "KeyA") {
      this.myTank.stopTracks();
    }
  }
}
