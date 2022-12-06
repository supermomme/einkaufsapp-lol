import moment from 'moment'
import {
  mdiHammer,
  mdiSausage,
  mdiFoodApple,
  mdiFruitPear,
  mdiBottleSoda,
  mdiGlassMugVariant,
  mdiCandle,
  mdiBaguette,
  mdiEgg,
  mdiCheese,
} from '@mdi/js';


export default [
  { summary: "3 Salami", deadline: moment().add(3, 'day'), icon: mdiHammer, iconColor: '#000000' },
  { summary: "1 Wurst", deadline: moment().add(1, 'day'), icon: mdiSausage, iconColor: '#000000' },
  { summary: "6 Apfel", deadline: moment().add(1, 'day'), icon: mdiFoodApple, iconColor: '#000000' },
  { summary: "23 Birne", deadline: moment().add(3, 'day'), icon: mdiFruitPear, iconColor: '#000000' },
  { summary: "9 Kirschen", deadline: moment().add(3, 'day'), icon: mdiHammer, iconColor: '#000000' },
  { summary: "4 Mate", deadline: moment().add(1, 'day'), icon: mdiBottleSoda, iconColor: '#000000' },
  { summary: "5 Cola", deadline: moment().add(1, 'day'), icon: mdiBottleSoda, iconColor: '#000000' },
  { summary: "1 Bier", deadline: moment().add(1, 'day'), icon: mdiGlassMugVariant, iconColor: '#000000' },
  { summary: "4 Tomaten", deadline: null, icon: mdiHammer, iconColor: '#000000' },
  { summary: "4 Kerzen", deadline: null, icon: mdiCandle, iconColor: '#000000' },
  { summary: "9 Brote", deadline: moment().add(1, 'day'), icon: mdiBaguette, iconColor: '#000000' },
  { summary: "1 Ei", deadline: moment().add(6, 'day'), icon: mdiEgg, iconColor: '#000000' },
  { summary: "10 Schinken", deadline: moment().add(7, 'day'), icon: mdiHammer, iconColor: '#000000' },
  { summary: "2 Brötchen", deadline: moment().add(6, 'day'), icon: mdiHammer, iconColor: '#000000' },
  { summary: "1 Käse", deadline: moment().add(7, 'day'), icon: mdiCheese, iconColor: '#000000' },
]  