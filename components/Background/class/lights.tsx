import { AmbientLight, HemisphereLight } from "three";

export default class Lights {
  constructor(scene) {
    scene.add(new AmbientLight(0xffffff, 0.8));
    scene.add(new HemisphereLight(0xffffff, 0.8));
  }
}
