import {
  Mesh,
  SphereGeometry,
  TextureLoader,
  MeshPhongMaterial,
  BackSide,
} from "three";

const Skybox = (scene) => {
  const skyGeometry = new SphereGeometry(360, 25, 25);
  const skyLoader = new TextureLoader();
  const skyTexture = skyLoader.load("/custom-sky.png");
  const skyMaterial = new MeshPhongMaterial({
    map: skyTexture,
  });
  const skybox = new Mesh(skyGeometry, skyMaterial);
  skybox.material.side = BackSide;
  scene.add(skybox);
};

export default Skybox;
