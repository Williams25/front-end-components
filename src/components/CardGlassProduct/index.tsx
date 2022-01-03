import styles from "./styles.module.css";
export const CardGlassProduct = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        <img src="/assets/img/nike01.png" alt="" />
        <h2>Nike</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.size}>
          <h3>Tamanho: </h3>
          <span>7</span>
          <span>7</span>
          <span>7</span>
          <span>7</span>
        </div>

        <div className={styles.color}>
          <h3>Cor: </h3>
          <span />
          <span />
          <span />
          <span />
        </div>

        <a href="#">Comprar</a>
      </div>
    </div>
  );
};
