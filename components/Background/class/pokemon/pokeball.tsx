import { AnimationMixer, Clock, Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Pokeball = (scene, loader: GLTFLoader) => {
  let object = null;
  const clock = new Clock();
  let animation = null;

  const position = () => {
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * 5) / 460 + 10;
      object.translateY(-1);
      object.translateX(ratio);
      object.translateZ(-23);
      object.rotateY(-Math.PI / 1.5);
    } else {
      object.translateY(5.8);
      object.translateZ(-20);
      object.rotateY(-Math.PI / 2);
    }
    object.rotateZ(Math.PI / 20);
    object.scale.set(2, 2, 2);
  };

  const update = () => {
    const delta = clock.getDelta();
    if (animation) animation.update(delta);
    requestAnimationFrame(update);
  };

  const animate = (gltf) => {
    animation = new AnimationMixer(object);
    const action = animation.clipAction(gltf.animations[0]);
    action.play();
  };

  loader.load("/pokeball.glb", (gltf) => {
    object = gltf.scene;
    position();
    animate(gltf);
    scene.add(object);
  });

  update();
};

export default Pokeball;
