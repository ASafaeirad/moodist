import { Sounds } from '@/components/sounds';

import styles from './categories.module.css';

import type { Sounds as SoundsType } from '@/data/types';

interface CategoriesProps {
  sounds: SoundsType;
}

export function Categories({ sounds }: CategoriesProps) {
  return (
    <div className={styles.allSounds}>
      <Sounds functional sounds={sounds} />
    </div>
  );
}
