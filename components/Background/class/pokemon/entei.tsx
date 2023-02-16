import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Entei = (scene, loader: GLTFLoader) => {
  let object = null;

  const position = () => {
    object.translateY(-3);
    object.translateX(-11);
    object.translateZ(14);
    object.rotateY(Math.PI / 2);
    object.scale.set(0.65, 0.65, 0.65);
  };

  loader.load("/entei.glb", (gltf) => {
    object = gltf.scene;
    position();
    scene.add(object);
  });
};

export default Entei;
