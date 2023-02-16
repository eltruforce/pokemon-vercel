import { Scene as SceneThree } from "three";
import Camera from "../class/camera";
import Lights from "../class/lights";
import Loader from "../class/loader";
import Charizard from "../class/pokemon/charizard";
import Entei from "../class/pokemon/entei";
import Grass from "../class/pokemon/grass";
import Groudon from "../class/pokemon/groudon";
import Logo from "../class/pokemon/logo";
import Pokeball from "../class/pokemon/pokeball";
import Zekrom from "../class/pokemon/zekrom";
import Skybox from "../class/skybox";

const Scene = (renderer) => {
  const scene = new SceneThree();
  const loader = Loader();
  const camera = Camera();

  new Lights(scene);
  new Skybox(scene);
  new Logo(scene, loader);
  new Pokeball(scene, loader);
  new Entei(scene, loader);
  new Groudon(scene, loader);
  new Charizard(scene, loader);
  new Zekrom(scene, loader);
  new Grass(scene, loader);

  const update = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(update);
  };

  update();
};

export default Scene;
