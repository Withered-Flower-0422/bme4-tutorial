import Hero from "@site/src/components/Hero"
import Logo from "@site/src/components/Logo"
import StarrySky from "@site/src/components/StarrySky"
import Layout from "@theme/Layout"

import styles from "./styles.module.scss"

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <StarrySky />
        <div>
          <Logo />
          <Hero />
        </div>
      </main>
    </Layout>
  )
}
