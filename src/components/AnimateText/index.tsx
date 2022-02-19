import { ShowTsxAndCss } from "../ShowTsxAndCss";
import styles from "./styles.module.css";
export const AnimateText = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li>
          <a href="#" data-text="&nbsp;Home">
            &nbsp;Home&nbsp;
          </a>
        </li>
      </ul>

      <ShowTsxAndCss
        tsx={`import styles from "./styles.module.css";
        
export const AnimateText = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li>
          <a href="#" data-text="&nbsp;Home">
            &nbsp;Home&nbsp;
          </a>
        </li>
      </ul>
    </>
  );
};`}
        css={`
          .menu {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .menu li {
            position: relative;
            list-style: none;
          }

          .menu li a {
            position: relative;
            font-size: 4em;
            text-decoration: none;
            line-height: 1em;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: transparent;
            -webkit-text-stroke: 1px rgba(0, 0, 55, 0.9);
          }

          .menu li a::before {
            content: attr(data-text);
            position: absolute;
            color: #00ade1;
            overflow: hidden;
            width: 0;
            transition: all 0.7s ease-in-out;
            transition-delay: 0.2s;
            border-right: 8px solid #00ade1;
            -webkit-text-stroke: 1px #00ade1;
          }

          .menu li a:hover::before {
            width: 100%;
            filter: drop-shadow(0 0 25px #00ade1);
          }
        `}
      />
    </>
  );
};
