import { Card } from "./components/Card";
import styles from "./style.module.css";

const App = () => {
  return (
    <div className="App">
      <div className={styles.containerCard}>
        {itemCard.map((item, index) => {
          return (
            <Card
              key={index}
              description={item.description}
              path={item.path}
              title={item.title}
              variant_color_icon={item.variant_color_icon as any}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

const itemCard = [
  {
    path: "/button-page",
    description: "Component Button",
    title: "Button",
    variant_color_icon: "#ffb508",
  },
];
