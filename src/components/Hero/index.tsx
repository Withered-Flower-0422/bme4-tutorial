import clsx from "clsx"
import Link from "@docusaurus/Link"
import Heading from "@theme/Heading"
import Translate from "@docusaurus/Translate"

import styles from "./styles.module.scss"

export default function Hero() {
  return (
    <div className={styles.container}>
      <Heading as="h1" className={clsx("hero__title", styles.title)}>
        <Translate>BME4 教程</Translate>
      </Heading>
      <p className={clsx("hero__subtitle", styles.subtitle)}>
        <Translate>基于 BME4 Ver. 4.0 Alpha15 编写</Translate>
      </p>
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/start">
          <Translate>快速上手</Translate>
        </Link>
      </div>
    </div>
  )
}
