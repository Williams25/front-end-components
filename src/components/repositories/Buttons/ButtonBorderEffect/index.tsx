import { ShowTsxAndCss } from "src/components/ShowTsxAndCss";
import { Content } from "./styles";
export const ButtonBorderEffect = () => {
  return (
    <>
      <Content>
        <button>
          <span />
          <span />
          <span />
          <span />
          button
        </button>
      </Content>
      <ShowTsxAndCss
        tsx={`export const ButtonBorderEffect = () => {
  return (
    <button>
      <span />
      <span />
      <span />
      <span />
      button
    </button>
  );
};
`}
        css={` button {
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  text-transform: capitalize;
  color: #fafafaaa;
  background-color: #262c37;
  letter-spacing: 0.2em;
  font-weight: 600;
  transition: 0.2s;
  border: 0;
  overflow: hidden;

  &:hover {
    color: #ffffff;
    background-color: #262c48;
  }

  & span {
    display: block;
    position: absolute;
    background-color: #2894ff;

    &:nth-child(1) {
      left: 0;
      bottom: 0;
      width: 1px;
      height: 100%;

      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.5s;
    }
    &:nth-child(2) {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
      transition-delay: 0.5s;
    }
    &:nth-child(3) {
      right: 0;
      bottom: 0;
      width: 1px;
      height: 100%;

      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.5s;
    }
    &:nth-child(4) {
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;

      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s;
      transition-delay: 0.5s;
    }
  }

  &:hover span {
    &:nth-child(1) {
      transform: scaleY(1);
      transform-origin: bottom;
      transition: transform 0.5s;
    }
    &:nth-child(2) {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.5s;
    }
    &:nth-child(3) {
      transform: scaleY(1);
      transform-origin: bottom;
      transition: transform 0.5s;
    }
    &:nth-child(4) {
      transform: scaleX(1);
      transform-origin: right;
      transition: transform 0.5s;
    }
  }`}
      />
    </>
  );
};
