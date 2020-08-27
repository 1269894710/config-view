import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ConfigFlex from "../commponents/ConfigFlex";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logo}>浙江省退役军人</div>
          <div className={styles.title}>退役军人数据驾驶舱</div>
        </div>
        <div className={styles.content}>
          <ConfigFlex />
        </div>
      </main>


    </div>
  )
}
