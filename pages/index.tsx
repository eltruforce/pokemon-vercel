import { useEffect } from "react";
import {
  Scene,
  WebGL1Renderer,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from "three";

function HomePage() {
  useEffect(() => {
    const scene = new Scene();
    const renderer = new WebGL1Renderer({
      antialias: true,
      canvas: document.getElementById("bg"),
    });
    const camera = new PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // move camera
    camera.position.z = 6;

    // create cube
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0xffffff });
    const cube = new Mesh(geometry, material);

    scene.add(cube);

    renderer.setSize(window.innerWidth, window.innerHeight);

    function animate() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return <canvas id="bg" />;
}

export default HomePage;
