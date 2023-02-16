import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Groudon = (scene, loader: GLTFLoader) => {
  let object = null;

  const position = () => {
    object.translateY(-2);
    object.translateX(-9);
    object.translateZ(11.5);
    object.rotateY(Math.PI / 6);
  };

  loader.load("/groudon.glb", (gltf) => {
    object = gltf.scene;
    position();
    scene.add(object);
  });
};

export default Groudon;
