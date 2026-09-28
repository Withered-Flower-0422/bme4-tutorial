import styles from "./styles.module.scss"

export default function StarrySky() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className={styles[`layer${i + 1}`]} key={Math.random()} />
      ))}
    </>
  )
}
