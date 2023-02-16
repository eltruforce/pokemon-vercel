import { AmbientLight, DirectionalLight, HemisphereLight } from "three";

const Lights = (scene) => {
  scene.add(new AmbientLight(0xffffff, 0.8));
  scene.add(new HemisphereLight(0xffffff, 0.8));

  const sun = new DirectionalLight(0xffffff, 0.5);
  sun.position.set(20, 20, 5);

  scene.add(sun);
};

export default Lights;
