import { useEffect } from "react";
import Background from "../components/Background";
import Section from "../components/section";

class Human {
  public name: string;
  private height: number;
  private weight: number;

  constructor(name: string, height: number, weight: number) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.greet();
  }

  private greet() {
    console.log("Hi, I am a human and my name is: " + this.name);
  }
}

class Fighter extends Human {
  private power = 100;
  private defense = 100;

  constructor(name, scene: Scene) {
    super(name, 1.7, 80);
    console.log(this.name);
    console.log(scene);
  }

  public duplicateStats() {
    this.power *= 2;
    this.defense *= 2;
    console.log(this.power);
    console.log(this.defense);
  }

  public execute(fn) {
    fn();
  }
}

class Scene {
  private score = 0;

  constructor() {
    const fighter = new Fighter("name", this);
    const human = new Human("human", 1.8, 90);

    // fighter.execute(this.increaseScore.bind(this));
  }

  private increaseScore() {
    this.score += 10;
    console.log(this);
  }
}

function HomePage() {
  return (
    <div>
      <div className="containe">
        <Section />
        <Section />
        <Section />
      </div>
      <Background />
    </div>
  );
}

export default HomePage;
