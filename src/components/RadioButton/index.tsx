import { useState } from "react";
import { Content } from "./styles";

export const RadioButton = () => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  const isYes = () => {
    setNo(false);
    setYes(!yes);
  };

  const isNo = () => {
    setYes(false);
    setNo(!no);
  };

  return (
    <Content>
      <div className="container">
        <label htmlFor="yes">
          <input
            type="radio"
            id="yes"
            defaultChecked={yes}
            onChange={isYes}
          />
          <span className="check"></span>
          Yes
        </label>

        <label htmlFor="no">
          <input type="radio" id="no" defaultChecked={no} onChange={isNo} />
          <span className="check"></span>
          No
        </label>
      </div>
    </Content>
  );
};
