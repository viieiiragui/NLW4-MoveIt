import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Input from '../components/Input';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const { push } = useRouter();
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (username) {
      push(`/${username}`);
    }
  }

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <section>
        <div className={styles.homeBackground} />

        <div className={styles.homeContent}>
          <div>
            <img src="/logo-full-white.svg" alt="Move it logo" />
          </div>

          <h1>Bem-vindo</h1>
          <div className={styles.homeInformation}>
            <img src="/github-logo.svg" alt="Github logo" />
            <span>Faça login com seu Github para começar</span>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Digite seu username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </form>
          </div>
        </div>
      </section>


    </div>
  )
}
