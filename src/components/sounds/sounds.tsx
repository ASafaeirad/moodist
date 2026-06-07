import { Sound } from './sound';

import styles from './sounds.module.css';

import type { Sound as SoundType } from '@/data/types';

interface SoundsProps {
  sounds: SoundType[];
}

export function Sounds({ sounds }: SoundsProps) {
  return (
    <div className={styles.sounds}>
      {sounds.map(sound => (
        <Sound key={sound.label} {...sound} />
      ))}
    </div>
  );
}
