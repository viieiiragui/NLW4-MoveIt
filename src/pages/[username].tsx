import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from "../components/ChallengeBox";

import { ChallengeProvider } from '../hooks/ChallengesContext';
import { CountdownProvider } from '../hooks/CountdownContext';

import styles from '../styles/pages/Username.module.css';

interface IUserGithub {
  name: string
  avatar_url: string
}

interface HomeProps {
  user: IUserGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Username(props: HomeProps) {
  const { user } = props;

  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile {...user} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.params;
  const res = await fetch(`https://api.github.com/users/${username}`);
  const user = await res.json();

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
