import { useEffect } from "react";
import Renderer from "./renderer";

const Background = () => {
  useEffect(() => {
    new Renderer();
  }, []);

  return <canvas id="bg" />;
};

export default Background;
