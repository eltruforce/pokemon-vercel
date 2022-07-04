import { WebGL1Renderer } from "three";
import Scene from "./scenes/scene";

export default class Renderer extends WebGL1Renderer {
  constructor() {
    super({ antialias: true, canvas: document.getElementById("bg") });
    this.setSize(window.innerWidth, window.innerHeight);
    new Scene(this);
  }
}
