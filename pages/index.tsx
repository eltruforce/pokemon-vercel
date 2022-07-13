import Background from "../components/Background";
import Section from "../components/section";
import Section2 from "../components/section2";
import Section3 from "../components/section3";

function HomePage() {
  return (
    <div>
      <div id="container">
        <Section />
        <Section2 />
        <Section3 />
      </div>
      <Background />
    </div>
  );
}

export default HomePage;
