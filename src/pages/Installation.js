import FrameComponent1 from "../components/FrameComponent1";
import BackgroundShadow from "../components/BackgroundShadow";
import Background2 from "../components/Background2";
import Background1 from "../components/Background1";
import Footer from "../components/Footer";
import "./Installation.css";

const Installation = () => {
  return (
    <div className="installation">
      <FrameComponent1 />
      <BackgroundShadow />
      <Background2 />
      <Background1 />
      <Footer
        bestMvno2023svg="/best-mvno-2023svg@2x.png"
        logoNTTpng="/logonttpng@2x.png"
      />
    </div>
  );
};

export default Installation;
