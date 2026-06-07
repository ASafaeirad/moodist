import { BiSolidHeart } from 'react-icons/bi/index';

import { Category } from './category';
import { Donate } from './donate';
import { Sounds } from '@/components/sounds';

import styles from './categories.module.css';

import type { Sounds as SoundsType } from '@/data/types';

interface CategoriesProps {
  favorites: SoundsType;
  sounds: SoundsType;
}

export function Categories({ favorites, sounds }: CategoriesProps) {
  return (
    <>
      {favorites.length > 0 && (
        <Category
          functional={false}
          Icon={BiSolidHeart}
          id="favorites"
          sounds={favorites}
          title="Favorites"
        />
      )}

      <div className={styles.allSounds} id="category-all">
        <Sounds functional sounds={sounds} />
      </div>

      <Donate />
    </>
  );
}
