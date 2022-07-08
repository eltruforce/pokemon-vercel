import { Scene as SceneThree } from "three";
import Camera from "../class/camera";
import Lights from "../class/lights";
import Loader from "../class/loader";
import Logo from "../class/pokemon/logo";
import Skybox from "../class/skybox";

export default class Scene extends SceneThree {
  private camera: Camera;

  constructor(renderer) {
    super();
    const loader = new Loader();
    this.camera = new Camera();
    new Lights(this);
    new Skybox(this);
    new Logo(this, loader);
    this.update(renderer);

    this.update(renderer);
  }
  private update(renderer) {
    renderer.render(this, this.camera);
    requestAnimationFrame(this.update.bind(this, renderer));
  }
}
