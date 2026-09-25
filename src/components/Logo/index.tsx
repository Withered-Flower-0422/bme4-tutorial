import styles from "./styles.module.scss"

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src="img/ballex-logo.webp" alt="logo" className={styles.logo} />
    </div>
  )
}
