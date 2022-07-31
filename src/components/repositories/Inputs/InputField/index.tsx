import { ShowTsxAndCss } from "src/components/ShowTsxAndCss";
import { Content } from "./styles";
export const InputField = () => {
  return (
    <>
      <Content>
        <div className="inputBox">
          <input type="text" required />
          <span>First Name</span>
        </div>
      </Content>
      <ShowTsxAndCss
        tsx={`export const InputField = () => {
        return (
          <div className="inputBox">
            <input type="text" required />
            <span>First Name</span>
          </div>
        );
      };
      `}
        css={`
          .inputBox {
            position: relative;
            width: 250px;

            & input {
              width: 100%;
              padding: 10px;
              border: 1px solid #21558b;
              background-color: #071a2e;
              color: #fff;
              border-radius: 4px;
              outline: none;
              font-size: 1em;
              transition: border 0.5s;
            }
            & span {
              position: absolute;
              left: 0;
              padding: 10px;
              font-size: 1em;
              pointer-events: none;
              text-transform: uppercase;
              transition: transform 0.5s;
              color: #fff;
            }

            & input:valid ~ span,
            & input:focus ~ span {
              color: #fafafa;
              transform: translateX(10px) translateY(-7px);
              -ms-transform: translateX(10px) translateY(-7px);
              background-color: #21558b; // passar msm background do input
              font-size: 0.65em;
              padding: 0 10px;
              font-weight: 500;
              border-left: 1px solid #1ea7fd;
              border-right: 1px solid #1ea7fd;
              letter-spacing: 0.2em;
            }

            & input:valid,
            & input:focus {
              border: 1px solid #1ea7fd;
            }
          }
        `}
      />
    </>
  );
};
