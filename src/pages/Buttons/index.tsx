import {
  Button,
  GlowingSocialMedia,
  CheckButton,
  ButtonBorderEffect
} from "src/components";

const Buttons = () => {
  return (
    <div className="section-container-components">
      <div className="components-items">
        <Button variant="button-dark" title="Button" />
      </div>
      <div className="components-items">
        <ButtonBorderEffect />
      </div>
      <div className="components-items">
        <GlowingSocialMedia />
      </div>
      <div className="components-items">
        <CheckButton />
      </div>
    </div>
  );
};

export default Buttons;
