import {
  GiWaterfall,
  GiStonePile,
  GiWindow,
  GiVillage,
  GiCarousel,
  GiSubmarine,
  GiSailboat,
  GiWindchimes,
  GiFilmProjector,
  GiWashingMachine,
  GiSoundWaves,
} from 'react-icons/gi/index';
import {
  BsFire,
  BsFillDropletFill,
  BsFillCloudRainFill,
  BsFillCloudRainHeavyFill,
  BsUmbrellaFill,
  BsSoundwave,
  BsPeopleFill,
  BsFillKeyboardFill,
} from 'react-icons/bs/index';
import {
  BiSolidTree,
  BiWater,
  BiSolidTraffic,
  BiSolidCoffeeAlt,
  BiSolidPlaneAlt,
  BiSolidDryer,
  BiSolidTrain,
} from 'react-icons/bi/index';
import {
  FaWater,
  FaWind,
  FaLeaf,
  FaRegSnowflake,
  FaTree,
  FaCarSide,
  FaCity,
  FaRoad,
  FaChurch,
  FaSubway,
  FaShoppingBasket,
  FaKeyboard,
  FaClock,
  FaFan,
} from 'react-icons/fa/index';
import {
  PiTentFill,
  PiRoadHorizonFill,
  PiSirenBold,
  PiVinylRecord,
} from 'react-icons/pi/index';
import {
  MdOutlineThunderstorm,
  MdTempleBuddhist,
  MdConstruction,
  MdLocationPin,
  MdSmartToy,
  MdWaterDrop,
  MdRadio,
} from 'react-icons/md/index';
import {
  RiSparkling2Fill,
  RiFilePaper2Fill,
  RiBubbleChartFill,
} from 'react-icons/ri/index';
import {
  TbScubaMask,
  TbBeerFilled,
  TbSailboat,
  TbBowlFilled,
  TbWiper,
} from 'react-icons/tb/index';
import { HiOfficeBuilding } from 'react-icons/hi/index';
import { AiFillExperiment } from 'react-icons/ai/index';
import { IoRestaurant } from 'react-icons/io5/index';
import { FaBookOpen } from 'react-icons/fa6/index';
import { IoIosRadio } from 'react-icons/io/index';

import type { Categories } from './types';

import { getAssetPath } from '@/helpers/path';

export const sounds: {
  categories: Categories;
} = {
  categories: [
    {
      icon: BiSolidTree,
      id: 'nature',
      sounds: [
        {
          icon: BiWater,
          id: 'river',
          label: 'River',
          src: getAssetPath('/sounds/nature/river.mp3'),
        },
        {
          icon: FaWater,
          id: 'waves',
          label: 'Waves',
          src: getAssetPath('/sounds/nature/waves.mp3'),
        },
        {
          icon: BsFire,
          id: 'campfire',
          label: 'Campfire',
          src: getAssetPath('/sounds/nature/campfire.mp3'),
        },
        {
          icon: FaWind,
          id: 'wind',
          label: 'Wind',
          src: getAssetPath('/sounds/nature/wind.mp3'),
        },
        {
          icon: FaWind,
          id: 'howling-wind',
          label: 'Howling Wind',
          src: getAssetPath('/sounds/nature/howling-wind.mp3'),
        },
        {
          icon: BiSolidTree,
          id: 'wind-in-trees',
          label: 'Wind in Trees',
          src: getAssetPath('/sounds/nature/wind-in-trees.mp3'),
        },
        {
          icon: GiWaterfall,
          id: 'waterfall',
          label: 'Waterfall',
          src: getAssetPath('/sounds/nature/waterfall.mp3'),
        },
        {
          icon: FaRegSnowflake,
          id: 'walk-in-snow',
          label: 'Walk in Snow',
          src: getAssetPath('/sounds/nature/walk-in-snow.mp3'),
        },
        {
          icon: FaLeaf,
          id: 'walk-on-leaves',
          label: 'Walk on Leaves',
          src: getAssetPath('/sounds/nature/walk-on-leaves.mp3'),
        },
        {
          icon: GiStonePile,
          id: 'walk-on-gravel',
          label: 'Walk on Gravel',
          src: getAssetPath('/sounds/nature/walk-on-gravel.mp3'),
        },
        {
          icon: BsFillDropletFill,
          id: 'droplets',
          label: 'Droplets',
          src: getAssetPath('/sounds/nature/droplets.mp3'),
        },
        {
          icon: FaTree,
          id: 'jungle',
          label: 'Jungle',
          src: getAssetPath('/sounds/nature/jungle.mp3'),
        },
      ],
      title: 'Nature',
    },
    {
      icon: BsFillCloudRainFill,
      id: 'rain',
      sounds: [
        {
          icon: BsFillCloudRainFill,
          id: 'light-rain',
          label: 'Light Rain',
          src: getAssetPath('/sounds/rain/light-rain.mp3'),
        },
        {
          icon: BsFillCloudRainHeavyFill,
          id: 'heavy-rain',
          label: 'Heavy Rain',
          src: getAssetPath('/sounds/rain/heavy-rain.mp3'),
        },
        {
          icon: MdOutlineThunderstorm,
          id: 'thunder',
          label: 'Thunder',
          src: getAssetPath('/sounds/rain/thunder.mp3'),
        },
        {
          icon: GiWindow,
          id: 'rain-on-window',
          label: 'Rain on Window',
          src: getAssetPath('/sounds/rain/rain-on-window.mp3'),
        },
        {
          icon: FaCarSide,
          id: 'rain-on-car-roof',
          label: 'Rain on Car Roof',
          src: getAssetPath('/sounds/rain/rain-on-car-roof.mp3'),
        },
        {
          icon: BsUmbrellaFill,
          id: 'rain-on-umbrella',
          label: 'Rain on Umbrella',
          src: getAssetPath('/sounds/rain/rain-on-umbrella.mp3'),
        },
        {
          icon: PiTentFill,
          id: 'rain-on-tent',
          label: 'Rain on Tent',
          src: getAssetPath('/sounds/rain/rain-on-tent.mp3'),
        },
        {
          icon: FaLeaf,
          id: 'rain-on-leaves',
          label: 'Rain on Leaves',
          src: getAssetPath('/sounds/rain/rain-on-leaves.mp3'),
        },
      ],
      title: 'Rain',
    },
    {
      icon: FaCity,
      id: 'urban',
      sounds: [
        {
          icon: PiRoadHorizonFill,
          id: 'highway',
          label: 'Highway',
          src: getAssetPath('/sounds/urban/highway.mp3'),
        },
        {
          icon: FaRoad,
          id: 'road',
          label: 'Road',
          src: getAssetPath('/sounds/urban/road.mp3'),
        },
        {
          icon: PiSirenBold,
          id: 'ambulance-siren',
          label: 'Ambulance Siren',
          src: getAssetPath('/sounds/urban/ambulance-siren.mp3'),
        },
        {
          icon: BsSoundwave,
          id: 'busy-street',
          label: 'Busy Street',
          src: getAssetPath('/sounds/urban/busy-street.mp3'),
        },
        {
          icon: BsPeopleFill,
          id: 'crowd',
          label: 'Crowd',
          src: getAssetPath('/sounds/urban/crowd.mp3'),
        },
        {
          icon: BiSolidTraffic,
          id: 'traffic',
          label: 'Traffic',
          src: getAssetPath('/sounds/urban/traffic.mp3'),
        },
        {
          icon: RiSparkling2Fill,
          id: 'fireworks',
          label: 'Fireworks',
          src: getAssetPath('/sounds/urban/fireworks.mp3'),
        },
      ],
      title: 'Urban',
    },
    {
      icon: MdLocationPin,
      id: 'places',
      sounds: [
        {
          icon: BiSolidCoffeeAlt,
          id: 'cafe',
          label: 'Cafe',
          src: getAssetPath('/sounds/places/cafe.mp3'),
        },
        {
          icon: BiSolidPlaneAlt,
          id: 'airport',
          label: 'Airport',
          src: getAssetPath('/sounds/places/airport.mp3'),
        },
        {
          icon: FaChurch,
          id: 'church',
          label: 'Church',
          src: getAssetPath('/sounds/places/church.mp3'),
        },
        {
          icon: MdTempleBuddhist,
          id: 'temple',
          label: 'Temple',
          src: getAssetPath('/sounds/places/temple.mp3'),
        },
        {
          icon: MdConstruction,
          id: 'construction-site',
          label: 'Construction Site',
          src: getAssetPath('/sounds/places/construction-site.mp3'),
        },
        {
          icon: TbScubaMask,
          id: 'underwater',
          label: 'Underwater',
          src: getAssetPath('/sounds/places/underwater.mp3'),
        },
        {
          icon: TbBeerFilled,
          id: 'crowded-bar',
          label: 'Crowded Bar',
          src: getAssetPath('/sounds/places/crowded-bar.mp3'),
        },
        {
          icon: GiVillage,
          id: 'night-village',
          label: 'Night Village',
          src: getAssetPath('/sounds/places/night-village.mp3'),
        },
        {
          icon: FaSubway,
          id: 'subway-station',
          label: 'Subway Station',
          src: getAssetPath('/sounds/places/subway-station.mp3'),
        },
        {
          icon: HiOfficeBuilding,
          id: 'office',
          label: 'Office',
          src: getAssetPath('/sounds/places/office.mp3'),
        },
        {
          icon: FaShoppingBasket,
          id: 'supermarket',
          label: 'Supermarket',
          src: getAssetPath('/sounds/places/supermarket.mp3'),
        },
        {
          icon: GiCarousel,
          id: 'carousel',
          label: 'Carousel',
          src: getAssetPath('/sounds/places/carousel.mp3'),
        },
        {
          icon: AiFillExperiment,
          id: 'laboratory',
          label: 'Laboratory',
          src: getAssetPath('/sounds/places/laboratory.mp3'),
        },
        {
          icon: BiSolidDryer,
          id: 'laundry-room',
          label: 'Laundry Room',
          src: getAssetPath('/sounds/places/laundry-room.mp3'),
        },
        {
          icon: IoRestaurant,
          id: 'restaurant',
          label: 'Restaurant',
          src: getAssetPath('/sounds/places/restaurant.mp3'),
        },
        {
          icon: FaBookOpen,
          id: 'library',
          label: 'Library',
          src: getAssetPath('/sounds/places/library.mp3'),
        },
      ],
      title: 'Places',
    },
    {
      icon: FaCarSide,
      id: 'transport',
      sounds: [
        {
          icon: BiSolidTrain,
          id: 'train',
          label: 'Train',
          src: getAssetPath('/sounds/transport/train.mp3'),
        },
        {
          icon: BiSolidTrain,
          id: 'inside-a-train',
          label: 'Inside a Train',
          src: getAssetPath('/sounds/transport/inside-a-train.mp3'),
        },
        {
          icon: BiSolidPlaneAlt,
          id: 'airplane',
          label: 'Airplane',
          src: getAssetPath('/sounds/transport/airplane.mp3'),
        },
        {
          icon: GiSubmarine,
          id: 'submarine',
          label: 'Submarine',
          src: getAssetPath('/sounds/transport/submarine.mp3'),
        },
        {
          icon: GiSailboat,
          id: 'sailboat',
          label: 'Sailboat',
          src: getAssetPath('/sounds/transport/sailboat.mp3'),
        },
        {
          icon: TbSailboat,
          id: 'rowing-boat',
          label: 'Rowing Boat',
          src: getAssetPath('/sounds/transport/rowing-boat.mp3'),
        },
      ],
      title: 'Transport',
    },
    {
      icon: MdSmartToy,
      id: 'things',
      sounds: [
        {
          icon: BsFillKeyboardFill,
          id: 'keyboard',
          label: 'Keyboard',
          src: getAssetPath('/sounds/things/keyboard.mp3'),
        },
        {
          icon: FaKeyboard,
          id: 'typewriter',
          label: 'Typewriter',
          src: getAssetPath('/sounds/things/typewriter.mp3'),
        },
        {
          icon: RiFilePaper2Fill,
          id: 'paper',
          label: 'Paper',
          src: getAssetPath('/sounds/things/paper.mp3'),
        },
        {
          icon: FaClock,
          id: 'clock',
          label: 'Clock',
          src: getAssetPath('/sounds/things/clock.mp3'),
        },
        {
          icon: GiWindchimes,
          id: 'wind-chimes',
          label: 'Wind Chimes',
          src: getAssetPath('/sounds/things/wind-chimes.mp3'),
        },
        {
          icon: TbBowlFilled,
          id: 'singing-bowl',
          label: 'Singing Bowl',
          src: getAssetPath('/sounds/things/singing-bowl.mp3'),
        },
        {
          icon: FaFan,
          id: 'ceiling-fan',
          label: 'Ceiling Fan',
          src: getAssetPath('/sounds/things/ceiling-fan.mp3'),
        },
        {
          icon: BiSolidDryer,
          id: 'dryer',
          label: 'Dryer',
          src: getAssetPath('/sounds/things/dryer.mp3'),
        },
        {
          icon: GiFilmProjector,
          id: 'slide-projector',
          label: 'Slide Projector',
          src: getAssetPath('/sounds/things/slide-projector.mp3'),
        },
        {
          icon: MdWaterDrop,
          id: 'boiling-water',
          label: 'Boiling Water',
          src: getAssetPath('/sounds/things/boiling-water.mp3'),
        },
        {
          icon: RiBubbleChartFill,
          id: 'bubbles',
          label: 'Bubbles',
          src: getAssetPath('/sounds/things/bubbles.mp3'),
        },
        {
          icon: MdRadio,
          id: 'tuning-radio',
          label: 'Tuning Radio',
          src: getAssetPath('/sounds/things/tuning-radio.mp3'),
        },
        {
          icon: IoIosRadio,
          id: 'morse-code',
          label: 'Morse Code',
          src: getAssetPath('/sounds/things/morse-code.mp3'),
        },
        {
          icon: GiWashingMachine,
          id: 'washing-machine',
          label: 'Washing Machine',
          src: getAssetPath('/sounds/things/washing-machine.mp3'),
        },
        {
          icon: PiVinylRecord,
          id: 'vinyl-effect',
          label: 'Vinyl Effect',
          src: getAssetPath('/sounds/things/vinyl-effect.mp3'),
        },
        {
          icon: TbWiper,
          id: 'windshield-wipers',
          label: 'Windshield Wipers',
          src: getAssetPath('/sounds/things/windshield-wipers.mp3'),
        },
      ],
      title: 'Things',
    },
    {
      icon: BsSoundwave,
      id: 'noise',
      sounds: [
        {
          icon: GiSoundWaves,
          id: 'white-noise',
          label: 'White Noise',
          src: getAssetPath('/sounds/noise/white-noise.wav'),
        },
        {
          icon: GiSoundWaves,
          id: 'pink-noise',
          label: 'Pink Noise',
          src: getAssetPath('/sounds/noise/pink-noise.wav'),
        },
        {
          icon: GiSoundWaves,
          id: 'brown-noise',
          label: 'Brown Noise',
          src: getAssetPath('/sounds/noise/brown-noise.wav'),
        },
      ],
      title: 'Noise',
    },
  ],
};
