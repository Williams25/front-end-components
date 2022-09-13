import { AnimatedCircularProgress } from "src/components";

const ProgressBar = () => {
  return (
    <div className="section-container-components">
      <div className="components-items">
        <AnimatedCircularProgress percent={75} />
      </div>
    </div>
  );
};

export default ProgressBar;
