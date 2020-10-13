import Head from "next/head";
import styles from "../styles/Home.module.css";
import Document, { Html } from "next/document";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tensor Flow Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
        ></link>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Tensor Flow <a href="https://www.tensorflow.org/">React Test!</a>
        </h1>

        <p className={styles.description}>
          More information
          <code className={styles.code}>https://www.tensorflow.org/</code>
        </p>
        <i class="devicon-github-plain">
          {" "}
          <a href="https://www.tensorflow.org/"> Repositorio </a>
        </i>
        <h6>Built by David Londoño and Alejandro Montoya</h6>
        <div>Teachable Machine Image Model Prueba</div>
        <button type="button" onclick="init()">
          Start
        </button>
        <div id="webcam-container"></div>
        <div id="label-container"></div>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
