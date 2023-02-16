import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Zekrom = (scene, loader: GLTFLoader) => {
  let object = null;
  let counter = 0;

  const position = () => {
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * -1) / 460 + 0.4;
      object.translateZ(36.6);
      object.translateY(0.5);
      object.translateX(ratio);
    } else {
      object.translateZ(38.5);
      object.translateY(1.8);
      object.translateX(0.4);
    }
  };

  const update = () => {
    counter += 0.01;
    if (object) object.rotation.y = Math.sin(counter) / 7 + 1.2;
    requestAnimationFrame(update);
  };

  loader.load("/zekrom.glb", (gltf) => {
    object = gltf.scene;
    position();
    scene.add(object);
  });
  update();
};

export default Zekrom;
