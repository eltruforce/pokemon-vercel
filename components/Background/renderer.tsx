import { WebGL1Renderer } from "three";
import Scene from "./scenes/scene";

const Renderer = () => {
  const renderer = new WebGL1Renderer({
    antialias: true,
    canvas: document.getElementById("bg"),
  });

  const config = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", resize);
  };

  const resize = () => {
    window.location.reload();
  };

  config();

  new Scene(renderer);
};

export default Renderer;
