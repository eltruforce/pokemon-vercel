import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Logo = (scene, loader: GLTFLoader) => {
  let object = null;
  let counter = 0;

  const position = () => {
    object.translateZ(-10);
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * 2.28) / 460 + 4;
      object.translateY(4);
      object.translateX(ratio);
    } else {
      object.translateY(7);
    }
  };

  const update = () => {
    counter += 0.01;
    if (object) object.rotation.y = Math.sin(counter) / 5;

    requestAnimationFrame(update);
  };

  loader.load("/logo.glb", (gltf) => {
    object = gltf.scene;
    position();
    scene.add(object);
  });

  update();
};

export default Logo;
