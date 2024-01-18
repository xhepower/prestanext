import styles from "../../shared/Loader/Loader.module.css";

function Loader() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loader;
