import styles from "src/styles/Cards/styles.module.css";
import { Card, CardFlipHover, CardGlass, CardHexagon } from "src/components";

const Cards = () => {
  return (
    <div className={styles.container}>
      <Card variant_color_icon="#37ba82" description="Lorem ipsium" />

      <CardFlipHover
        images={{
          image1:
            "/assets/img/br-galaxy-watch4-398979-sm-r870nzkpzto-481128469.webp",
          image2:
            "/assets/img/br-galaxy-watch4-398979-sm-r870nzkpzto-481128460.webp",
        }}
        price="1.599,00"
        title="Galaxy Watch4 BT 44mm - Preto"
      />

      <CardGlass
        email="#"
        github="#"
        twitter="#"
        image="/assets/img/pexels-leticia-azevedo-9459781.jpg"
        subTitle="Front-end developer"
        title="xxxxxx"
      />

      <CardHexagon
        image={"/assets/img/pexels-leticia-azevedo-9459781.jpg"}
        title="XXXXX"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever"
      />
    </div>
  );
};

export default Cards;
