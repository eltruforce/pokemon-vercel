import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Grass = (scene, loader: GLTFLoader) => {
  let object = null;

  const clone = (x, z) => {
    const cloneObject = object.clone();
    cloneObject.translateY(-2);
    cloneObject.translateX(x);
    cloneObject.translateZ(z);
    cloneObject.rotateY(Math.PI / 4);
    scene.add(cloneObject);
  };

  loader.load("/grass.glb", (gltf) => {
    object = gltf.scene;
    clone(-9, 11);
    clone(-7, 11);
    clone(-6, 12);
    clone(-6, 14);
    clone(-9, 13);
    clone(-7, 13);
    clone(-5, 13);
    clone(-5, 15);
    clone(-9, 16);
    clone(-7, 16.5);
    clone(-6, 16);
    clone(-8, 17);
  });
};

export default Grass;
