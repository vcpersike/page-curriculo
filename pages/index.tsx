import Image from 'next/image'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
        <h1>Victor Raphael Persike Silva</h1>
      </div>
    </div>
  );
}
