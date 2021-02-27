import { useChallenge } from '../hooks/ChallengesContext'

import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
  const { challengesCompleted } = useChallenge();

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}
