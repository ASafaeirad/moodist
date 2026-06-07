import {
  GiStonePile,
  GiWindow,
  GiSailboat,
  GiSoundWaves,
} from 'react-icons/gi/index';
import {
  BsFire,
  BsFillCloudRainFill,
  BsFillCloudRainHeavyFill,
  BsUmbrellaFill,
} from 'react-icons/bs/index';
import {
  BiSolidTree,
  BiWater,
  BiSolidPlaneAlt,
  BiSolidDryer,
  BiSolidTrain,
} from 'react-icons/bi/index';
import {
  FaWater,
  FaWind,
  FaLeaf,
  FaTree,
  FaCarSide,
  FaRoad,
  FaChurch,
  FaClock,
  FaFan,
} from 'react-icons/fa/index';
import { PiTentFill, PiVinylRecord } from 'react-icons/pi/index';
import {
  MdOutlineThunderstorm,
  MdTempleBuddhist,
  MdWaterDrop,
} from 'react-icons/md/index';
import { RiBubbleChartFill } from 'react-icons/ri/index';
import {
  TbScubaMask,
  TbSailboat,
  TbBowlFilled,
  TbWiper,
} from 'react-icons/tb/index';
import { FaBookOpen } from 'react-icons/fa6/index';

import type { Sound } from './types';

import { getAssetPath } from '@/helpers/path';

const river: Sound = {
  icon: BiWater,
  id: 'river',
  label: 'River',
  src: getAssetPath('/sounds/nature/river.mp3'),
};
const waves: Sound = {
  icon: FaWater,
  id: 'waves',
  label: 'Waves',
  src: getAssetPath('/sounds/nature/waves.mp3'),
};
const campfire: Sound = {
  icon: BsFire,
  id: 'campfire',
  label: 'Campfire',
  src: getAssetPath('/sounds/nature/campfire.mp3'),
};
const wind: Sound = {
  icon: FaWind,
  id: 'wind',
  label: 'Wind',
  src: getAssetPath('/sounds/nature/wind.mp3'),
};
const howlingWind: Sound = {
  icon: FaWind,
  id: 'howling-wind',
  label: 'Howling Wind',
  src: getAssetPath('/sounds/nature/howling-wind.mp3'),
};
const windInTrees: Sound = {
  icon: BiSolidTree,
  id: 'wind-in-trees',
  label: 'Wind in Trees',
  src: getAssetPath('/sounds/nature/wind-in-trees.mp3'),
};
const walkOnGravel: Sound = {
  icon: GiStonePile,
  id: 'walk-on-gravel',
  label: 'Walk on Gravel',
  src: getAssetPath('/sounds/nature/walk-on-gravel.mp3'),
};
const jungle: Sound = {
  icon: FaTree,
  id: 'jungle',
  label: 'Jungle',
  src: getAssetPath('/sounds/nature/jungle.mp3'),
};

const lightRain: Sound = {
  icon: BsFillCloudRainFill,
  id: 'light-rain',
  label: 'Light Rain',
  src: getAssetPath('/sounds/rain/light-rain.mp3'),
};
const heavyRain: Sound = {
  icon: BsFillCloudRainHeavyFill,
  id: 'heavy-rain',
  label: 'Heavy Rain',
  src: getAssetPath('/sounds/rain/heavy-rain.mp3'),
};
const thunder: Sound = {
  icon: MdOutlineThunderstorm,
  id: 'thunder',
  label: 'Thunder',
  src: getAssetPath('/sounds/rain/thunder.mp3'),
};
const rainOnWindow: Sound = {
  icon: GiWindow,
  id: 'rain-on-window',
  label: 'Rain on Window',
  src: getAssetPath('/sounds/rain/rain-on-window.mp3'),
};
const rainOnCarRoof: Sound = {
  icon: FaCarSide,
  id: 'rain-on-car-roof',
  label: 'Rain on Car Roof',
  src: getAssetPath('/sounds/rain/rain-on-car-roof.mp3'),
};
const rainOnUmbrella: Sound = {
  icon: BsUmbrellaFill,
  id: 'rain-on-umbrella',
  label: 'Rain on Umbrella',
  src: getAssetPath('/sounds/rain/rain-on-umbrella.mp3'),
};
const rainOnTent: Sound = {
  icon: PiTentFill,
  id: 'rain-on-tent',
  label: 'Rain on Tent',
  src: getAssetPath('/sounds/rain/rain-on-tent.mp3'),
};
const rainOnLeaves: Sound = {
  icon: FaLeaf,
  id: 'rain-on-leaves',
  label: 'Rain on Leaves',
  src: getAssetPath('/sounds/rain/rain-on-leaves.mp3'),
};

const road: Sound = {
  icon: FaRoad,
  id: 'road',
  label: 'Road',
  src: getAssetPath('/sounds/urban/road.mp3'),
};

const church: Sound = {
  icon: FaChurch,
  id: 'church',
  label: 'Church',
  src: getAssetPath('/sounds/places/church.mp3'),
};
const temple: Sound = {
  icon: MdTempleBuddhist,
  id: 'temple',
  label: 'Temple',
  src: getAssetPath('/sounds/places/temple.mp3'),
};
const underwater: Sound = {
  icon: TbScubaMask,
  id: 'underwater',
  label: 'Underwater',
  src: getAssetPath('/sounds/places/underwater.mp3'),
};
const laundryRoom: Sound = {
  icon: BiSolidDryer,
  id: 'laundry-room',
  label: 'Laundry Room',
  src: getAssetPath('/sounds/places/laundry-room.mp3'),
};
const library: Sound = {
  icon: FaBookOpen,
  id: 'library',
  label: 'Library',
  src: getAssetPath('/sounds/places/library.mp3'),
};

const train: Sound = {
  icon: BiSolidTrain,
  id: 'train',
  label: 'Train',
  src: getAssetPath('/sounds/transport/train.mp3'),
};
const insideATrain: Sound = {
  icon: BiSolidTrain,
  id: 'inside-a-train',
  label: 'Inside a Train',
  src: getAssetPath('/sounds/transport/inside-a-train.mp3'),
};
const airplane: Sound = {
  icon: BiSolidPlaneAlt,
  id: 'airplane',
  label: 'Airplane',
  src: getAssetPath('/sounds/transport/airplane.mp3'),
};
const sailboat: Sound = {
  icon: GiSailboat,
  id: 'sailboat',
  label: 'Sailboat',
  src: getAssetPath('/sounds/transport/sailboat.mp3'),
};
const rowingBoat: Sound = {
  icon: TbSailboat,
  id: 'rowing-boat',
  label: 'Rowing Boat',
  src: getAssetPath('/sounds/transport/rowing-boat.mp3'),
};

const clock: Sound = {
  icon: FaClock,
  id: 'clock',
  label: 'Clock',
  src: getAssetPath('/sounds/things/clock.mp3'),
};
const singingBowl: Sound = {
  icon: TbBowlFilled,
  id: 'singing-bowl',
  label: 'Singing Bowl',
  src: getAssetPath('/sounds/things/singing-bowl.mp3'),
};
const ceilingFan: Sound = {
  icon: FaFan,
  id: 'ceiling-fan',
  label: 'Ceiling Fan',
  src: getAssetPath('/sounds/things/ceiling-fan.mp3'),
};
const boilingWater: Sound = {
  icon: MdWaterDrop,
  id: 'boiling-water',
  label: 'Boiling Water',
  src: getAssetPath('/sounds/things/boiling-water.mp3'),
};
const bubbles: Sound = {
  icon: RiBubbleChartFill,
  id: 'bubbles',
  label: 'Bubbles',
  src: getAssetPath('/sounds/things/bubbles.mp3'),
};
const vinylEffect: Sound = {
  icon: PiVinylRecord,
  id: 'vinyl-effect',
  label: 'Vinyl Effect',
  src: getAssetPath('/sounds/things/vinyl-effect.mp3'),
};
const windshieldWipers: Sound = {
  icon: TbWiper,
  id: 'windshield-wipers',
  label: 'Windshield Wipers',
  src: getAssetPath('/sounds/things/windshield-wipers.mp3'),
};

const brownNoise: Sound = {
  icon: GiSoundWaves,
  id: 'brown-noise',
  label: 'Brown Noise',
  src: getAssetPath('/sounds/noise/brown-noise.wav'),
};

export const sounds: Sound[] = [
  river,
  waves,
  campfire,
  wind,
  howlingWind,
  windInTrees,
  walkOnGravel,
  jungle, // FIX
  lightRain,
  heavyRain,
  thunder,
  rainOnWindow,
  rainOnCarRoof,
  rainOnUmbrella,
  rainOnTent,
  rainOnLeaves,
  road,
  church,
  temple,
  underwater,
  laundryRoom,
  library,
  train,
  insideATrain,
  airplane,
  sailboat,
  rowingBoat,
  clock,
  singingBowl,
  ceilingFan,
  boilingWater,
  bubbles,
  vinylEffect,
  windshieldWipers,
  brownNoise,
];
