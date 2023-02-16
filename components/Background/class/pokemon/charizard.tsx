import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Charizard = (scene, loader: GLTFLoader) => {
  let object = null;

  const position = () => {
    object.translateY(-2);
    object.translateX(-10);
    object.translateZ(16.5);
    object.rotateY(Math.PI / 2);
    object.scale.set(0.8, 0.8, 0.8);
  };

  loader.load("/charizard.glb", (gltf) => {
    object = gltf.scene;
    position();
    scene.add(object);
  });
};

export default Charizard;
