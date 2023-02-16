import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Loader = () => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();

  dracoLoader.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/"
  );
  dracoLoader.preload();
  dracoLoader.setDecoderConfig({ type: "js" });

  loader.setDRACOLoader(dracoLoader);
  return loader;
};

export default Loader;
