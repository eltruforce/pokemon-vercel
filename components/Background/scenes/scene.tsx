import { Scene as SceneThree } from "three";
import Camera from "../class/camera";
import Lights from "../class/lights";
import Loader from "../class/loader";
import Charizard from "../class/pokemon/charizard";
import Entei from "../class/pokemon/entei";
import Groudon from "../class/pokemon/groudon";
import Logo from "../class/pokemon/logo";
import Pokeball from "../class/pokemon/pokeball";
import Zekrom from "../class/pokemon/zekrom";
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
    new Pokeball(this, loader);
    new Entei(this, loader);
    new Groudon(this, loader);
    new Charizard(this, loader);
    new Zekrom(this, loader);
    this.update(renderer);

    this.update(renderer);
  }
  private update(renderer) {
    renderer.render(this, this.camera);
    requestAnimationFrame(this.update.bind(this, renderer));
  }
}
