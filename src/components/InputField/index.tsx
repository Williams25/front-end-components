import { Content } from "./styles";
export const InputField = () => {
  return (
    <Content>
      <div className="inputBox">
        <input type="text" required />
        <span>First Name</span>
      </div>
    </Content>
  );
};
