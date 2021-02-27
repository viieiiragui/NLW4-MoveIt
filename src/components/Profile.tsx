import { useChallenge } from '../hooks/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

interface IUserGithub {
  name: string
  avatar_url: string
}

export function Profile(props: IUserGithub) {
  const { level } = useChallenge();

  return (
    <div className={styles.profileContainer}>
      <img src={props?.avatar_url} alt={props.name} />
      <div>
        <strong>{props.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
