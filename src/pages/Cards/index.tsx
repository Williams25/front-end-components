import {
  CardHoverIcon,
  CardFlipHover,
  CardGlass,
  CardHexagon,
  CardGlassProduct,
  CardSlidingProduct,
  CardProductScale
} from "src/components";

const Cards = () => {
  return (
    <div className="section-container-components">
      <div className="components-items">
        <CardHoverIcon
          variant_color_icon="#37ba82"
          title="Lorem ipsium"
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever`}
        />
      </div>

      <div className="components-items">
        <CardFlipHover
          imagesCover="/assets/img/br-galaxy-watch4-398979-sm-r870nzkpzto-481128469.webp"
          imagesDetails="/assets/img/br-galaxy-watch4-398979-sm-r870nzkpzto-481128460.webp"
          price="1.599,00"
          title="Galaxy Watch4 BT 44mm - Preto"
        />
      </div>

      <div className="components-items">
        <CardGlass
          email="#"
          github="#"
          twitter="#"
          image="/assets/img/pexels-leticia-azevedo-9459781.jpg"
          subTitle="Front-end developer"
          title="xxxxxx"
        />
      </div>

      <div className="components-items">
        <CardHexagon
          image={"/assets/img/pexels-leticia-azevedo-9459781.jpg"}
          title="XXXXX"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever"
        />
      </div>

      <div className="components-items">
        <CardGlassProduct />
      </div>

      <div className="components-items">
        <CardSlidingProduct />
      </div>

      <div className="components-items">
        <CardProductScale />
      </div>
    </div>
  );
};

export default Cards;
