import loading from "../img/loading.svg";

import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loader_container}>
      {/* <img className={styles.loader} src={loading} alt="Loading" /> */}
      <h2>Carregando...</h2>
    </div>
  );
}

export default Loading;
