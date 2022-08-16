import { ShowTsxAndCss } from "src/components/ShowTsxAndCss";
import { Content } from "./styles";

export type AnimatedCircularProgressProps = {
  percent: number;
};

export const AnimatedCircularProgress = ({
  percent = 90
}: AnimatedCircularProgressProps) => {
  const totalPercent = 440 - (440 * percent) / 100;
  return (
    <>
      <Content totalPercent={totalPercent} percent={percent}>
        <div className="card">
          <div className="percent">
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>

            <div className="content">
              <h2>{percent}%</h2>
            </div>
          </div>
        </div>
      </Content>
      <ShowTsxAndCss
        tsx={`export type AnimatedCircularProgressProps = {
        percent: number;
      };

      export const AnimatedCircularProgress = ({
        percent = 90
      }: AnimatedCircularProgressProps) => {
        const totalPercent = 440 - (440 * percent) / 100;
        return (
          <Content totalPercent={totalPercent} percent={percent}>
            <div className="card">
              <div className="percent">
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70" />
                  <circle cx="70" cy="70" r="70" />
                </svg>

                <div className="content">
                  <h2>{percent}%</h2>
                </div>
              </div>
            </div>
          </Content>
        );
      };
      `}
        css={`
          .card {
            position: relative;
            width: 250px;
            height: 250px;
            background-color: #2a2a2a;
            display: flex;
            align-items: center;
            justify-content: center;

            & .percent {
              position: relative;
              width: 150px;
              height: 150px;

              & .dot {
                position: absolute;
                inset: 5px;
                z-index: 10;
                animation: animationDot 2s linear forwards;

                &::before {
                  content: "";
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  background-color: #04fc43;
                  top: -5px;
                  left: 50%;
                  transform: translateX(-50%);
                  border-radius: 50%;
                  box-shadow: 0 0 10px #04fc43, 0 0 30px #04fc43;
                }
              }

              & svg {
                position: relative;
                width: 150px;
                height: 150px;
                transform: rotate(270deg);

                & circle {
                  width: 100%;
                  height: 100%;
                  fill: transparent;
                  stroke-width: 2;
                  stroke: #191919;
                  transform: translate(5px, 5px);
                  transition: all 1s linear;

                  &:nth-child(2) {
                    opacity: 0;
                    stroke: #04fc43;
                    stroke-dasharray: 440;
                    stroke-dashoffset: 440;
                    animation: fadeInCircle 2s linear forwards;
                    animation-delay: 0s;
                  }
                }
              }

              & .content {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #04fc43;
                text-shadow: 0 0 10px #04fc43, 0 0 30px #04fc43;
                font-size: 2em;
                animation: fadeIn 1s linear forwards;
                animation-delay: 2.5s;
                opacity: 0;
              }
            }
          }

          @keyframes animationDot {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(calc(3.6deg * ${percent}));
            }
          }
          @keyframes fadeInCircle {
            from {
              opacity: 0;
            }
            to {
              stroke-dashoffset: ${totalPercent};
              opacity: 1;
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      />
    </>
  );
};
