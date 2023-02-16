import { PerspectiveCamera } from "three";

const Camera = () => {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const container = document.getElementById("container");

  const moveCamera = () => {
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const offsetHeight = container.offsetHeight;

    const t = (scrollTop * 100) / (scrollHeight - offsetHeight);

    camera.position.z = t * 0.35;
    camera.position.x = t * 0.025;
    camera.rotation.y = t * 0.025;
  };

  container.onscroll = moveCamera;
  moveCamera();
  camera.position.y = 2;

  return camera;
};

export default Camera;
