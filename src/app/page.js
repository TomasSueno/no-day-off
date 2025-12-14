import Image from "next/image";
import styles from "./page.module.scss"

export default async function Home() {
  return (
    // zjednodušiť - musi to byť urobene rychlo
    <>
      <section className={styles.heroSection}>
        <h1 className={styles.progress_text}>You do some hard work for 23 days streak. Great!</h1>
        <h1 className={styles.progress_text}>This week you did 342 pushups. Nice!</h1>
        <div className={styles.citateDiv}>
        <p className={styles.citate}>„Once you have commitment, you need the discipline and hard work to get you there.“</p>
        <p className={styles.author}>- Haile Gebrselassie</p>
        </div>

        <div className={styles.divide_sections}></div>

        <button type="button">Plan your activity</button>
        <button type="button">Add your activity</button>
        <button type="button">Get Assumption for your activity</button>
      </section>
    </>
)
}
