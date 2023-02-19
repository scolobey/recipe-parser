import {LanguageConfig} from './interfaces';

const baseUnits = "q.b."

const units = {
  barattolo: ['barattolo', 'barattoli'],
  bicchiere: ['bicchiere'],
  bottiglia: ['bottiglie', 'bottiglia'],
  bustina: ['bustina', 'bustine'],
  cubetto: ['cubetto', 'cubetti'],
  cucchiaio: ['cucchiai', 'cucchiaio'],
  cucchiaino: ['cucchiaini', 'cucchiaino'],
  confezione: ['confezioni', 'confezione'],
  grammo: ['g', 'g.', 'gr', 'gr.', 'grammi', 'grammo'],
  chilogrammo: [
    'kg.',
    'kg',
    'kilogrammo',
    'chilogrammi',
    'kilogrammo',
    'chilogrammo',
  ],
  fetta: ['fetta', 'fette'],
  fettina: ['fettina', 'fettine'],
  fogliolina: ['fogliolina', 'foglioline'],
  foglia: ['foglie', 'foglia'],
  foglio: ['fogli', 'foglio'],
  litro: ['l.', 'l', 'lt', 'litro'],
  gambo: ['gambo', 'gambi'],
  mazzo: ['mazzo', 'mazzi'],
  mazzetto: ['Mazzetto', 'mazzetti', 'mazzetto'],
  lattina: ['Lattina', 'lattina'],
  milligrammo: ['mg.', 'mg', 'milligrammo'],
  millilitro: ['ml', 'ml.', 'millilitro'],
  panetto: ['Panetto', 'panetti', 'panetto'],
  pacco: ['pkg', 'pkgs', 'pacchetto', 'pacco'],
  pezzo: ['pezzo', 'pcs', 'pcs.', 'pezzi'],
  pizzico: ['pizzico', 'pizzichi'],
  tazza: ['tazza', 'tazzina', 'tazzine'],
  sacco: ['sacco', 'sacchi'],
  spicchio: ['spicchio', 'spicchi'],
  scatola: ['scatola', 'scatole'],
  vasetto: ['vasetto', 'vasetti'],
  filo: ['filo'],
  ciuffo: ['ciuffo'],
  scatoletta: ['scatoletta'],
  manciata: ['manciata'],
  rametto: ['rametto', 'rametti'],
  rotolo: ['rotolo'],
  pugno: ['pugno', 'pugni'],
  bicchierino: ['bicchierino'],
  // noce: ['noce'],
} as {[key: string]: string[]};

const pluralUnits = {
  barattolo: 'barattoli',
  bicchiere: 'bicchieri',
  bustina: 'bustine',
  bottiglia: 'bottiglie',
  cubetto: 'cubetti',
  gambo: 'gambi',
  tazza: 'tazze',
  quarto: 'quarti',
  cucchiaio: 'cucchiai',
  cucchiaino: 'cucchiaini',
  confezione: 'confezioni',
  grammo: 'grammi',
  chilogrammo: 'chilogrammi',
  litro: 'litri',
  milligrammo: 'milligrammi',
  millilitro: 'millilitri',
  spicchio: 'spicchi',
  scatola: 'scatole',
  pizzico: 'pizzichi',
  lattina: 'lattine',
  fetta: 'fette',
  fettina: 'fettine',
  pezzo: 'pezzi',
  panetto: 'panetti',
  foglio: 'fogli',
  fogliolina: 'foglioline',
  foglia: 'foglie',
  mazzo: 'mazzi',
  mazzetto: 'mazzetti',
  vasetto: 'vasetti',
  filo: 'fili',
  ciuffo: 'ciuffi',
  sacco: 'sacchi',
  scatoletta: 'scatolette',
  manciata: 'manciate',
  rametto: 'rametti',
  rotolo: 'rotoli',
  bicchierino: 'bicchierini',
  pugno: 'pugni',
  //noce: 'noci'
} as {[key: string]: string};

const symbolUnits = {
  bicchiere: '',
  bustina: '',
  cubetto: '',
  gambo: '',
  tazza: '',
  quarto: '',
  cucchiaio: '',
  spicchio: '',
  scatola: '',
  pizzico: '',
  lattina: '',
  fetta: '',
  pezzo: '',
  panetto: '',
  foglia: '',
  mazzetto: '',
  manciata: '',
  vasetto: '',
  grammo: 'g',
  cucchiaino: 'cc',
  chilogrammo: 'kg',
  litro: 'lt',
  milligrammo: 'mg',
  millilitro: 'ml',
} as {[key: string]: string};

const prepositions = ['di', "d'"];

const joiners = ['o'];

const toTaste = ['quanto basta'];

export const numbersSmall: {[key: string]: number} = {
  zero: 0,
  mezzo: 0.5,
  mezza: 0.5,
  metà: 0.5,
  meta: 0.5,
  uno: 1,
  una: 1,
  un: 1,
  due: 2,
  tre: 3,
  quattro: 4,
  cinque: 5,
  sei: 6,
  sette: 7,
  otto: 8,
  nove: 9,
  dieci: 10,
  undici: 11,
  dodici: 12,
  dozzina: 12,
  tredici: 13,
  quattordici: 14,
  quindici: 15,
  sedici: 16,
  diciassette: 17,
  diciotto: 18,
  diciannove: 19,
  venti: 20,
  ventuno: 21,
  trenta: 30,
  trentuno: 31,
  quaranta: 40,
  quarantuno: 41,
  cinquanta: 50,
  cinquantuno: 51,
  sessasanta: 60,
  sessasantuno: 61,
  settanta: 70,
  settantuno: 71,
  ottanta: 80,
  ottantuno: 81,
  novanta: 90,
  novantuno: 91,
};

export const numbersMagnitude: {[key: string]: number} = {
  cento: 100,
  etto: 100,
  mille: 1000,
  mila: 1000,
  millione: 1000000,
  milliardo: 1000000000,
  trilliardo: 1000000000000,
};

export const LangIta: LanguageConfig = {
  baseUnits,
  units,
  pluralUnits,
  symbolUnits,
  prepositions,
  joiners,
  toTaste,
  numbersSmall,
  numbersMagnitude,
  isCommaDelimited: true,
};