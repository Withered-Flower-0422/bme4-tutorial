import Hero from "@site/src/components/Hero"
import Logo from "@site/src/components/Logo"
import Layout from "@theme/Layout"

import styles from "./styles.module.scss"

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.container}>
          <Logo />
          <Hero />
        </div>
      </main>
    </Layout>
  )
}
