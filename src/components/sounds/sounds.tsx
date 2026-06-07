import { Sound } from './sound';

import styles from './sounds.module.css';

import type { Sounds } from '@/data/types';

interface SoundsProps {
  functional: boolean;
  sounds: Sounds;
}

export function Sounds({ functional, sounds }: SoundsProps) {
  return (
    <div className={styles.sounds}>
      {sounds.map(sound => (
        <Sound key={sound.label} {...sound} functional={functional} />
      ))}
    </div>
  );
}
