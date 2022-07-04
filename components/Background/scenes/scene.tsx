import { Scene as SceneThree } from "three";
import Camera from "../class/camera";
import Lights from "../class/lights";
import Skybox from "../class/skybox";

export default class Scene extends SceneThree {
  private camera: Camera;

  constructor(renderer) {
    super();
    this.camera = new Camera();
    new Lights(this);
    new Skybox(this);
    this.update(renderer);

    this.update(renderer);
  }
  private update(renderer) {
    renderer.render(this, this.camera);
    requestAnimationFrame(this.update.bind(this, renderer));
  }
}
