import type { IconType } from 'react-icons';

export interface Sound {
  icon: IconType;
  id: string;
  label: string;
  src: string;
}

export type Sounds = Array<Sound>;

export interface Category {
  icon: IconType;
  id: string;
  sounds: Sounds;
  title: string;
}

export type Categories = Array<Category>;
