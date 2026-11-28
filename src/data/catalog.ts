import type { CatalogTrack, CategoryMeta, SearchSuggestion } from '../types/game.ts';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'all-india',
    name: 'All India Mix',
    shortTag: 'ALL',
    subtitle: 'Full catalog',
    tagline: 'Every era and genre shuffled together',
    accent: '#ff6b42',
  },
  {
    id: 'old-is-gold',
    name: 'Old is Gold (60s–80s)',
    shortTag: 'OLD',
    subtitle: 'Golden era',
    tagline: 'Evergreen Kishore, Lata, Asha, Rafi, Mukesh & R.D. Burman',
    accent: '#eab308',
  },
  {
    id: 'bollywood-classics',
    name: '90s–2000s Classics',
    shortTag: '90S',
    subtitle: 'Retro nostalgia',
    tagline: 'Golden nostalgia & timeless soundtracks',
    accent: '#8b5cf6',
  },
  {
    id: 'modern-bollywood',
    name: 'New & Viral Bollywood',
    shortTag: 'MOD',
    subtitle: '2010s–present',
    tagline: '2010s blockbusters to 2025–2026 viral Hindi hits',
    accent: '#f59e0b',
  },
  {
    id: 'desi-pop',
    name: 'Desi Pop & Viral',
    shortTag: 'POP',
    subtitle: 'Trending hooks',
    tagline: 'Coke Studio, viral reels & Indian pop anthems',
    accent: '#ec4899',
  },
  {
    id: 'punjabi',
    name: 'Punjabi Bangers',
    shortTag: 'PNJ',
    subtitle: 'High energy',
    tagline: 'High-energy Punjabi chart-toppers',
    accent: '#10b981',
  },
  {
    id: 'dhh-indie',
    name: 'DHH, Sufi & Indie',
    shortTag: 'DHH',
    subtitle: 'Underground & indie',
    tagline: 'Desi hip-hop, Sufi soul, 90s Indipop & indie rock',
    accent: '#06b6d4',
  },
];

export const TRACK_CATALOG: CatalogTrack[] = [
  {
    "id": 1282127385,
    "title": "Doli Men Sawaar Sajni Ka Pyar",
    "trackName": "Doli Men Sawaar Sajni Ka Pyar",
    "artistName": "R.D. Burman",
    "albumName": "Balika Badhu (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/d4/ea/03/d4ea0342-8f2c-9a71-e4b4-c91216d48cc6/191773222758.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1443137846,
    "title": "Yamma Yamma",
    "trackName": "Yamma Yamma",
    "artistName": "Mohd. Rafi & R.D. Burman",
    "albumName": "Shaan (Original Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/25/d2/8225d230-ba70-71f9-1a5f-04583b798bf2/00044006461724.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 6804590514,
    "title": "Dilbar Mere",
    "trackName": "Dilbar Mere (From \"Satte Pe Satta\")",
    "artistName": "Kishore Kumar, Anette & R.D. Burman",
    "albumName": "Satte Pe Satta (Original Motion Picture Soundtrack / Remastered)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e4/c8/cf/e4c8cf96-21c4-254f-c43f-4161f9d634d8/26UM1IM09129.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1698286014,
    "title": "Tera Mujhse",
    "trackName": "Tera Mujhse (From “Aa Gale Lag Jaa”)",
    "artistName": "Kishore Kumar & R.D. Burman",
    "albumName": "Kishore Kumar Evergreen Hits",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/cb/84/2d/cb842ddc-40be-3857-06ac-bf00f6cf9624/23UMGIM82576.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1781351984,
    "title": "Gulabi Ankhen",
    "trackName": "Gulabi Ankhen (From \"The Train\")",
    "artistName": "Mohd. Rafi & R.D. Burman",
    "albumName": "Mohammed Rafi Old Love Songs",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/15/dc/ba/15dcba54-b285-e65a-1916-3283b6f18ed9/24UM1IM28990.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1443908744,
    "title": "Aa Dekhen Zara",
    "trackName": "Aa Dekhen Zara",
    "artistName": "Asha Bhosle, R.D. Burman & Kishore Kumar",
    "albumName": "Rocky (Original Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e5/88/fb/e588fbdc-d51c-3566-19b9-5b326d9ba0b2/00602498246665.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1765491221,
    "title": "Pyar Karne Wale",
    "trackName": "Pyar Karne Wale (From \"Shaan\")",
    "artistName": "Asha Bhosle & R.D. Burman",
    "albumName": "Asha Bhosle Hindi Songs",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1c/57/ae/1c57aebf-b671-9786-4e34-e5732af09330/24UMGIM93358.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1443802491,
    "title": "Jana O Meri Jana",
    "trackName": "Jana O Meri Jana",
    "artistName": "R.D. Burman",
    "albumName": "Sanam Teri Kasam (Original Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0e/04/bd/0e04bdd7-f423-cb48-0f86-f2450d03e685/00602498246689.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1443485697,
    "title": "Mehbooba Mehbooba",
    "trackName": "Mehbooba Mehbooba",
    "artistName": "R.D. Burman",
    "albumName": "Sholay (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ab/d9/7a/abd97a69-3c36-0763-0389-57ae8a8dac81/00044006490120.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1103779867,
    "title": "Aisa Sama Na Hota",
    "trackName": "Aisa Sama Na Hota",
    "artistName": "R.D. Burman & Lata Mangeshkar",
    "albumName": "Zameen Aasman (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/37/47/aa/3747aad4-8827-f825-3451-f9b63bc1b0d1/dj.ffydpxsz.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1344827350,
    "title": "Jeena Yahan Marna Yahan",
    "trackName": "Jeena Yahan Marna Yahan",
    "artistName": "Mukesh",
    "albumName": "Mera Naam Joker (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/11/97/81/119781c0-4cf1-f856-69d5-ba7c980e3de3/191773211424.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1337261256,
    "title": "Kabhi Kabhi Mere Dil Mein",
    "trackName": "Kabhi Kabhi Mere Dil Mein",
    "artistName": "Mukesh",
    "albumName": "Kabhi Kabhie (Original Motion Picture Soundtrack) [Dialogues Version]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/81/5c/64/815c64aa-110e-082d-dfaf-a4ef1e9f1092/191773203092.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1340757121,
    "title": "Dil Tadap Tadap Ke Kah Raha",
    "trackName": "Dil Tadap Tadap Ke Kah Raha",
    "artistName": "Mukesh & Lata Mangeshkar",
    "albumName": "Madhumati (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/42/36/4f/42364f16-3322-97e7-867e-7a55cdb7cd86/191773224691.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1340799830,
    "title": "Kahin Door Jab Din Dhal Jaye",
    "trackName": "Kahin Door Jab Din Dhal Jaye",
    "artistName": "Mukesh",
    "albumName": "Anand (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d8/18/f0/d818f09c-0055-551a-482f-b821399d3008/191773203825.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1337261231,
    "title": "Kabhi Kabhi Mere Dil Mein (Duet)",
    "trackName": "Kabhi Kabhi Mere Dil Mein (Duet)",
    "artistName": "Mukesh & Lata Mangeshkar",
    "albumName": "Kabhi Kabhie (Original Motion Picture Soundtrack) [Dialogues Version]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/81/5c/64/815c64aa-110e-082d-dfaf-a4ef1e9f1092/191773203092.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 402013792,
    "title": "Thee Illai",
    "trackName": "Thee Illai",
    "artistName": "Naresh Iyer, Mukesh, Gopal Rao, Harris Jayaraj & Mahathi",
    "albumName": "Engeyum Kadhal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/d2/a4/6c/d2a46c24-3a50-e5bb-064d-a59a17a632b7/884977799705.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1726345634,
    "title": "Joota Japani",
    "trackName": "Joota Japani",
    "artistName": "KR$NA, Mukesh, Shankar - Jaikishan & Shailendra",
    "albumName": "Joota Japani - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/53/6e/3d/536e3d41-fe71-9b51-d242-239d3050d66a/197190909999.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 323073094,
    "title": "Suhana Safar",
    "trackName": "Suhana Safar (From \"Madhumati\")",
    "artistName": "Mukesh",
    "albumName": "Bollywood - Before The Slumdog Millionaire Years",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music/58/34/f6/mzi.dohwzwil.tif/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1338741073,
    "title": "Lag Ja Gale Se Phir",
    "trackName": "Lag Ja Gale Se Phir",
    "artistName": "Lata Mangeshkar",
    "albumName": "Woh Kaun Thi? (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4f/59/b4/4f59b41c-6997-9861-2a3d-8c77e7183306/191773223571.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1337283476,
    "title": "Tere Bina Zindagi Se",
    "trackName": "Tere Bina Zindagi Se",
    "artistName": "Lata Mangeshkar & Kishore Kumar",
    "albumName": "Aandhi (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/38/d6/e838d6b2-73ea-c36e-4b17-ad21de48c1c6/191773199487.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1337270047,
    "title": "Bahon Mein Chale Aao",
    "trackName": "Bahon Mein Chale Aao",
    "artistName": "Lata Mangeshkar",
    "albumName": "Anamika (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/10/68/d4/1068d4fe-424e-7c47-a89e-6751fecc9a06/191773203948.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1357699889,
    "title": "Bheegi Bheegi Raaton Mein",
    "trackName": "Bheegi Bheegi Raaton Mein",
    "artistName": "Lata Mangeshkar & Kishore Kumar",
    "albumName": "Ajanabee (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/ae/67/a2ae6722-4fde-c1c6-ebb9-5db5f0c529f0/191773222642.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1281286072,
    "title": "Rimjhim Gire Sawan (Duet)",
    "trackName": "Rimjhim Gire Sawan (Duet)",
    "artistName": "Kishore Kumar & Lata Mangeshkar",
    "albumName": "Manzil (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/45/9d/7c/459d7c5f-0fd7-f2f0-383e-037f263de760/191773225506.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1337283927,
    "title": "Tum Aa Gaye Ho Noor Aa Gaya",
    "trackName": "Tum Aa Gaye Ho Noor Aa Gaya",
    "artistName": "Lata Mangeshkar & Kishore Kumar",
    "albumName": "Aandhi (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/38/d6/e838d6b2-73ea-c36e-4b17-ad21de48c1c6/191773199487.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 673575199,
    "title": "Dholna",
    "trackName": "Dholna",
    "artistName": "Lata Mangeshkar & Udit Narayan",
    "albumName": "Dil To Pagal Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bd/76/33/bd76333b-c994-6bb7-f83e-201c1392f8c3/849486005907_cover.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 673583141,
    "title": "Tere Liye",
    "trackName": "Tere Liye",
    "artistName": "Lata Mangeshkar & Roop Kumar Rathod",
    "albumName": "Veer-Zaara (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/54/bf/16/54bf16a4-e56b-64aa-4afa-f5a122d1e283/849486008182_cover.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1130322192,
    "title": "Jiya Jale",
    "trackName": "Jiya Jale",
    "artistName": "Lata Mangeshkar & M. G. Sreekumar",
    "albumName": "Dil Se (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8e/f8/85/8ef88544-a6c7-018b-0a75-dc3b6b024fa0/cover.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1443537726,
    "title": "Wada Karo",
    "trackName": "Wada Karo",
    "artistName": "Kishore Kumar & Lata Mangeshkar",
    "albumName": "Aa Gale Lag Jaa",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5f/b8/df/5fb8df54-b049-594d-b1cb-94b770930bbc/06UMGIM47678.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1606716634,
    "title": "Valaiyosai",
    "trackName": "Valaiyosai",
    "artistName": "Ilaiyaraaja, S.P. Balasubrahmanyam & Lata Mangeshkar",
    "albumName": "Sathya (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6d/0a/9f/6d0a9f41-7d88-7d81-4b8c-fe42ee46bfa6/886449044788.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 673575197,
    "title": "Are Re Are",
    "trackName": "Are Re Are",
    "artistName": "Lata Mangeshkar & Udit Narayan",
    "albumName": "Dil To Pagal Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bd/76/33/bd76333b-c994-6bb7-f83e-201c1392f8c3/849486005907_cover.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 305751217,
    "title": "O Paalanhaare",
    "trackName": "O Paalanhaare",
    "artistName": "A.R. Rahman, Lata Mangeshkar & Udit Narayan",
    "albumName": "Lagaan (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/41/5b/88/415b88d2-00fc-2f74-fe21-f2d4b6f6ec5a/888880946072.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 673575202,
    "title": "Koi Ladki Hai",
    "trackName": "Koi Ladki Hai",
    "artistName": "Lata Mangeshkar & Udit Narayan",
    "albumName": "Dil To Pagal Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bd/76/33/bd76333b-c994-6bb7-f83e-201c1392f8c3/849486005907_cover.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1443477485,
    "title": "Saagar Kinare",
    "trackName": "Saagar Kinare",
    "artistName": "Lata Mangeshkar & Kishore Kumar",
    "albumName": "Saagar (Original Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/be/28/b4/be28b4a5-5b0e-231a-b3ed-0c172fb0bb7b/00044006423326.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1352485479,
    "title": "Zara Sa Jhoom Loon Main",
    "trackName": "Zara Sa Jhoom Loon Main",
    "artistName": "Asha Bhosle & Abhijeet",
    "albumName": "Dilwale Dulhania Le Jayenge (Original Motion Picture Soundtrack) [Dialogues Version]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/46/58/97/465897ed-fe10-e218-4cac-02c69ca36ad0/191773207717.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1337334623,
    "title": "Chura Liya Hai Tumne Jo Dil Ko",
    "trackName": "Chura Liya Hai Tumne Jo Dil Ko",
    "artistName": "Asha Bhosle & Mohd. Rafi",
    "albumName": "Yaadon Ki Baaraat (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/8a/c8/be/8ac8be22-33bf-6dbe-a8ab-ccacfe43f45b/191773203979.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 673612582,
    "title": "Sharara",
    "trackName": "Sharara",
    "artistName": "Asha Bhosle",
    "albumName": "Mere Yaar Ki Shaadi Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/46/b1/df/46b1dfa8-4adc-d6d2-e044-99f7aefb4d42/849486008007_cover.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 673575206,
    "title": "Le Gayi",
    "trackName": "Le Gayi",
    "artistName": "Asha Bhosle",
    "albumName": "Dil To Pagal Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bd/76/33/bd76333b-c994-6bb7-f83e-201c1392f8c3/849486005907_cover.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1553465321,
    "title": "O Bhavre",
    "trackName": "O Bhavre",
    "artistName": "Asha Bhosle & K. J. Yesudas",
    "albumName": "Daud (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/db/42/a1/db42a132-6cab-eef7-bfcd-cf2fe9e02677/8901854009497.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 951408247,
    "title": "Nee Partha",
    "trackName": "Nee Partha",
    "artistName": "Hariharan & Asha Bhosle",
    "albumName": "Heyram (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/c1/d9/48/c1d94885-727a-88d7-273b-8df6c55de792/845151001755.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1127700606,
    "title": "Sapne Mein",
    "trackName": "Sapne Mein",
    "artistName": "Asha Bhosle & Suresh Wadkar",
    "albumName": "Satya (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/07/40/da/0740da6d-63e3-335b-5b79-209f47d5840c/cover.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1536507644,
    "title": "Tumse Milke",
    "trackName": "Tumse Milke",
    "artistName": "Asha Bhosle & Suresh Wadkar",
    "albumName": "Parinda (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/47/77/00/4777003b-5ebc-199c-f9e3-fc4ee3e21f94/8901854004393.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1550793906,
    "title": "Rangeela Re",
    "trackName": "Rangeela Re",
    "artistName": "Asha Bhosle & Aditya Narayan",
    "albumName": "Rangeela (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ba/c2/7d/bac27dfe-7eb9-286e-0fb3-5c370d7311c0/8901854004461.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 1443779432,
    "title": "Raat Shabnami",
    "trackName": "Raat Shabnami",
    "artistName": "Asha Bhosle",
    "albumName": "Jaanam Samjha Karo",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/36/5d/d4/365dd47a-33eb-ee3e-53f3-b0369ea42378/00602498252338.rgb.jpg/300x300bb.jpg",
    "category": "old-is-gold"
  },
  {
    "id": 300388792,
    "title": "Kal Ho Naa Ho",
    "trackName": "Kal Ho Naa Ho",
    "artistName": "Shankar Ehsaan Loy & Sonu Nigam",
    "albumName": "Kal Ho Naa Ho (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fb/82/da/fb82dab1-d0cd-714c-000c-6450774fd5d4/888880945587.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1352484512,
    "title": "Tujhe Dekha To",
    "trackName": "Tujhe Dekha To",
    "artistName": "Lata Mangeshkar & Kumar Sanu",
    "albumName": "Dilwale Dulhania Le Jayenge (Original Motion Picture Soundtrack) [Dialogues Version]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/46/58/97/465897ed-fe10-e218-4cac-02c69ca36ad0/191773207717.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1340749968,
    "title": "Pehla Nasha",
    "trackName": "Pehla Nasha",
    "artistName": "Udit Narayan & Sadhana Sargam",
    "albumName": "Jo Jeeta Wohi Sikandar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/96/c9/3a/96c93aa7-1872-8297-493a-2fc72d540af0/191773221072.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1134725347,
    "title": "Tum Se Hi",
    "trackName": "Tum Se Hi",
    "artistName": "Pritam & Mohit Chauhan",
    "albumName": "Jab We Met (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/c7/43/3dc74387-e7f4-2342-397c-4cf2037c69a5/8902894623223_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1065246709,
    "title": "Kajra Re",
    "trackName": "Kajra Re (From \"Bunty Aur Babli\")",
    "artistName": "Alisha Chinai, Shankar Mahadevan, Javed Ali & Shankar Ehsaan Loy",
    "albumName": "Bollywood - Top Hits of Decade",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music49/v4/cc/86/c3/cc86c3b9-aef5-fcb4-a417-fbf5ea4d480f/Bollywood_-_Top_Hits_of_Decade.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 299583026,
    "title": "Zara Sa",
    "trackName": "Zara Sa",
    "artistName": "KK & Pritam",
    "albumName": "Jannat (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e9/a3/cf/e9a3cf5e-09c3-3d6b-3bf2-c609475b6543/888880551801.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 687689731,
    "title": "Khuda Jaane",
    "trackName": "Khuda Jaane (From \"Bachna Ae Haseeno\")",
    "artistName": "KK & Shilpa Rao",
    "albumName": "Khuda Jaane - Hits of KK",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/f7/b3/71/f7b37100-01f4-fc27-e1cc-7b98c8bf5375/KK-Cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1277954306,
    "title": "Chand Sifarish",
    "trackName": "Chand Sifarish (From \"Fanaa\")",
    "artistName": "Kailash Kher & Shaan",
    "albumName": "Best of Shaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/45/8b/46/458b467f-dcb9-a3d7-dd17-a2295393e5b7/Best_Of_Shaan_3000.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1123241921,
    "title": "Kun Faya Kun",
    "trackName": "Kun Faya Kun",
    "artistName": "A.R. Rahman, Javed Ali & Mohit Chauhan",
    "albumName": "Rockstar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/ac/41/56ac41f7-99f3-3eae-3b07-443167292c4e/8902894697408_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1123241928,
    "title": "Nadaan Parinde",
    "trackName": "Nadaan Parinde",
    "artistName": "A.R. Rahman & Mohit Chauhan",
    "albumName": "Rockstar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/ac/41/56ac41f7-99f3-3eae-3b07-443167292c4e/8902894697408_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 316981890,
    "title": "Luka Chuppi",
    "trackName": "Luka Chuppi",
    "artistName": "A.R. Rahman & Lata Mangeshkar",
    "albumName": "Rang De Basanti (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/91/2c/6c/912c6c29-bbec-e560-0088-0cdd4201359a/888880944825.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 264849919,
    "title": "Tere Bina",
    "trackName": "Tere Bina",
    "artistName": "A.R. Rahman, Chinmayi Sripada, Murtuza Khan & Qadir Khan",
    "albumName": "Guru (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/8c/69/8d8c697e-f108-9e69-0cb1-475b45ab26a8/886970389020.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1116181297,
    "title": "Maahi Ve",
    "trackName": "Maahi Ve",
    "artistName": "A.R. Rahman",
    "albumName": "Highway (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/87/16/71/871671b0-fc44-9fad-7a74-05a5a0b3ed79/8902894355308_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1852500180,
    "title": "Deewaana Deewaana",
    "trackName": "Deewaana Deewaana",
    "artistName": "A.R. Rahman & Irshad Kamil",
    "albumName": "Tere Ishk Mein (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c5/e3/a8/c5e3a8e2-f166-23b8-2159-ee04b8511897/8902894362733_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1189134857,
    "title": "The Humma Song",
    "trackName": "The Humma Song",
    "artistName": "A.R. Rahman, Badshah, Tanishk Bagchi, Shashaa Tirupati & Jubin Nautiyal",
    "albumName": "OK Jaanu (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b0/f7/81/b0f78164-e057-e185-da9d-ea90f7251345/886446309835.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 656015921,
    "title": "Raanjhanaa",
    "trackName": "Raanjhanaa",
    "artistName": "A.R. Rahman, Jaswinder Singh & Shiraz Uppal",
    "albumName": "Raanjhanaa (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9e/72/a0/9e72a0e7-eb6f-e576-47b1-2ae26a007dac/886444018869.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 585714027,
    "title": "Nenjukkule",
    "trackName": "Nenjukkule",
    "artistName": "A.R. Rahman & Shakthisree Gopalan",
    "albumName": "Kadal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/40/94/2e/40942ea9-62d8-7c4b-7e1e-0d2c7f382fd3/886443785922.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1677929709,
    "title": "Nee Singam Dhan",
    "trackName": "Nee Singam Dhan",
    "artistName": "A.R. Rahman & Sid Sriram",
    "albumName": "Pathu Thala (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/93/e0/e6/93e0e603-2500-da00-520f-17c02cca2649/196589997289.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 492685712,
    "title": "Hosanna",
    "trackName": "Hosanna",
    "artistName": "Leon D'souza, Suzanne D'Mello & A.R. Rahman",
    "albumName": "Ekk Deewana Tha (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8c/90/8a/8c908a1f-5571-3d71-3585-af1aae8daa30/886443305472.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1536519640,
    "title": "Ishq Bina",
    "trackName": "Ishq Bina",
    "artistName": "Anuradha Sriram, Sujatha, A.R. Rahman & Sonu Nigam",
    "albumName": "Taal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e4/6d/a1/e46da195-d6c9-8a99-cb2d-1b20cbc6ce04/8901854004515.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 673686210,
    "title": "My Dil Goes Mmmm",
    "trackName": "My Dil Goes Mmmm",
    "artistName": "Vishal & Shekhar, Gayatri Iyer & Shaan",
    "albumName": "Salaam Namaste (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f5/11/1d/f5111d96-0ade-8d52-85da-82cabfe91ca3/849486008090_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1134725382,
    "title": "Aao Milo Chalo",
    "trackName": "Aao Milo Chalo",
    "artistName": "Pritam, Shaan & Ustad Sultan Khan",
    "albumName": "Jab We Met (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/c7/43/3dc74387-e7f4-2342-397c-4cf2037c69a5/8902894623223_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1138970388,
    "title": "Woh Ladki Hai Kahan",
    "trackName": "Woh Ladki Hai Kahan",
    "artistName": "Shaan & Kavita Subrahmanyam",
    "albumName": "Dil Chahta Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2b/df/62/2bdf6213-3d11-5f01-cc5e-ddfcc15923b4/8902894114844_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 294532490,
    "title": "Woh Pehli Baar",
    "trackName": "Woh Pehli Baar",
    "artistName": "Vishal Dadlani, Shiraz, Samrat & Shaan",
    "albumName": "Pyaar Mein Kabhi Kabhi (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e1/c4/c6/e1c4c657-3dc2-f92b-456f-0c750c3d2695/494056200000.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 673591115,
    "title": "Hey Shona",
    "trackName": "Hey Shona",
    "artistName": "Vishal & Shekhar, Shaan & Sunidhi Chauhan",
    "albumName": "Ta Ra Rum Pum (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/aa/6f/ff/aa6fff68-2afb-9b5e-fb15-0a9404978265/849486008106_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1138205144,
    "title": "Dus Bahane",
    "trackName": "Dus Bahane",
    "artistName": "Shaan & KK",
    "albumName": "Dus (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music18/v4/6c/9f/02/6c9f0295-4afc-e7c2-1969-e10f55282afb/8902894610759_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 673594553,
    "title": "O Humdum Suniyo Re",
    "trackName": "O Humdum Suniyo Re",
    "artistName": "KK, Kunal Ganjawala, Shaan & Pravin Mani",
    "albumName": "Saathiya (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/5e/71/f5/5e71f586-3e35-e7c8-f4c6-46006b4d3a88/Saathiya.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 673577392,
    "title": "Ladki Kyon",
    "trackName": "Ladki Kyon",
    "artistName": "Alka Yagnik & Shaan",
    "albumName": "Hum Tum (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/87/6f/c0/876fc0b0-3b55-5a9c-87b7-0f10956f42d0/849486005938_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 300388930,
    "title": "Kuch To Hua Hai",
    "trackName": "Kuch To Hua Hai",
    "artistName": "Shankar Ehsaan Loy, Alka Yagnik & Shaan",
    "albumName": "Kal Ho Naa Ho (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fb/82/da/fb82dab1-d0cd-714c-000c-6450774fd5d4/888880945587.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 307675170,
    "title": "Jab Se Tere Naina",
    "trackName": "Jab Se Tere Naina",
    "artistName": "Monty Sharma & Shaan",
    "albumName": "Saawariya (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c2/4b/df/c24bdfe4-17a5-a89e-69f7-bf91dcda66f4/888880945532.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 673583145,
    "title": "Main Yahaan Hoon",
    "trackName": "Main Yahaan Hoon",
    "artistName": "Udit Narayan",
    "albumName": "Veer-Zaara (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/54/bf/16/54bf16a4-e56b-64aa-4afa-f5a122d1e283/849486008182_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1545677151,
    "title": "Jo Bhi Kasmein",
    "trackName": "Jo Bhi Kasmein",
    "artistName": "Alka Yagnik & Udit Narayan",
    "albumName": "Raaz (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/12/23/4812232c-4293-01ec-dde7-b656f0c58d48/8901854010998.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1886407746,
    "title": "Hum Pyaar Karne Wale",
    "trackName": "Hum Pyaar Karne Wale (From \"Dhurandhar The Revenge\")",
    "artistName": "Shashwat Sachdev, Qveen Herby, Anuradha Paudwal, Udit Narayan, Anand-Milind & Sameer Anjaan",
    "albumName": "Hum Pyaar Karne Wale (From \"Dhurandhar The Revenge\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b4/a4/86/b4a486e8-b243-705d-c84d-f2ed4beedb7a/8903431190642_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1129829578,
    "title": "Dil Ne Yeh Kaha Hain Dil Se",
    "trackName": "Dil Ne Yeh Kaha Hain Dil Se",
    "artistName": "Udit Narayan & Alka Yagnik",
    "albumName": "Dhadkan (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/89/fb/29/89fb29c0-5dc7-f987-6693-9c1e69ed5cf0/cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1540747564,
    "title": "Ek Dilruba Hai",
    "trackName": "Ek Dilruba Hai",
    "artistName": "Udit Narayan",
    "albumName": "Bewafaa (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/1b/ff/e61bffad-a5e5-6514-512b-063a775927c0/8901854009244.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1366555239,
    "title": "Jaadu Teri Nazar",
    "trackName": "Jaadu Teri Nazar",
    "artistName": "Udit Narayan",
    "albumName": "Darr (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/79/5d/08/795d08c1-1b42-f28d-86e3-27f8467ef3ba/191773207960.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 673690047,
    "title": "Aankhein Khuli",
    "trackName": "Aankhein Khuli",
    "artistName": "Ishaan, Lata Mangeshkar, Manohar Shetty, Pritha Mazumdar, Shah Rukh Khan, Shweta Pandit, Sonali Bhatawdekar, Udbhav & Udit Narayan",
    "albumName": "Mohabbatein (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4f/24/ae/4f24ae5f-928e-5f34-4c98-a4b6abfa26e2/849486008014_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 6837254207,
    "title": "Tirkit",
    "trackName": "Tirkit (From \"Dhindora 2\")",
    "artistName": "Udit Narayan & Payal Dev",
    "albumName": "Dhindora 2 (Original Series Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/42/4b/48424bea-3f68-a41a-e14a-43f4bf81c028/196874997796.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1331773159,
    "title": "Achchi Lagti Ho",
    "trackName": "Achchi Lagti Ho",
    "artistName": "Udit Narayan & Kavita Krishnamurthy",
    "albumName": "Kuch Naa Kaho (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/87/65/af/8765afa5-736b-2029-9ac4-7e4c5f40e50d/191773199678.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1536509759,
    "title": "Aaye Ho Meri Zindagi Mein (Male Version)",
    "trackName": "Aaye Ho Meri Zindagi Mein (Male Version)",
    "artistName": "Udit Narayan",
    "albumName": "Raja Hindustani (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/66/eb/c5/66ebc542-d478-fe57-a29f-a399f8f674ab/8901854008629.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 316981894,
    "title": "Roobaroo",
    "trackName": "Roobaroo",
    "artistName": "A.R. Rahman & Naresh Iyer",
    "albumName": "Rang De Basanti (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/91/2c/6c/912c6c29-bbec-e560-0088-0cdd4201359a/888880944825.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 656016091,
    "title": "Tum Tak",
    "trackName": "Tum Tak",
    "artistName": "A.R. Rahman, Javed Ali, Kirti Sagathia & Pooja AV",
    "albumName": "Raanjhanaa (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9e/72/a0/9e72a0e7-eb6f-e576-47b1-2ae26a007dac/886444018869.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1576395278,
    "title": "Param Sundari",
    "trackName": "Param Sundari",
    "artistName": "A.R. Rahman & Shreya Ghoshal",
    "albumName": "Mimi (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/4a/71/0d4a71dd-b09d-50b4-b1e9-6c13ab4bdd1e/886449445875.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1537961312,
    "title": "Jashn-E-Bahaaraa",
    "trackName": "Jashn-E-Bahaaraa",
    "artistName": "A.R. Rahman & Javed Ali",
    "albumName": "Jodhaa Akbar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/25/ad/89/25ad8924-f933-e7fd-a0aa-17305e14eb2d/886448872016.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1130322222,
    "title": "Dil Se Re",
    "trackName": "Dil Se Re",
    "artistName": "A.R. Rahman, Anuradha & Anupama",
    "albumName": "Dil Se (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8e/f8/85/8ef88544-a6c7-018b-0a75-dc3b6b024fa0/cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 646630025,
    "title": "Innum Konjam Naeram",
    "trackName": "Innum Konjam Naeram",
    "artistName": "A.R. Rahman, Vijay Prakash & Shweta Mohan",
    "albumName": "Maryan (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d5/fc/32/d5fc32b1-82c6-39bb-4e20-6b93d8c21ec5/886443977525.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 599324848,
    "title": "New York Nagaram",
    "trackName": "New York Nagaram",
    "artistName": "A.R. Rahman",
    "albumName": "A. R. Rahman Vibration",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/22/45/18224513-8229-7496-7947-74b154f01686/Cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1215596662,
    "title": "Azhagiye",
    "trackName": "Azhagiye",
    "artistName": "A.R. Rahman, Arjun Chandy, Haricharan & Jonita Gandhi",
    "albumName": "Kaatru Veliyidai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/1c/15/c6/1c15c695-e382-8afb-e291-ef91f79da42e/886446427027.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1273602660,
    "title": "Aalaporaan Thamizhan",
    "trackName": "Aalaporaan Thamizhan",
    "artistName": "A.R. Rahman, Kailash Kher, Sathya Prakash, Deepak & Pooja AV",
    "albumName": "Mersal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c9/36/8f/c9368f60-7281-fdcf-f8fb-9cf7090189d7/886446711492.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 316981879,
    "title": "Ik Onkar",
    "trackName": "Ik Onkar",
    "artistName": "A.R. Rahman & Harshdeep Kaur",
    "albumName": "Rang De Basanti (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/91/2c/6c/912c6c29-bbec-e560-0088-0cdd4201359a/888880944825.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 316981880,
    "title": "Rang De Basanti",
    "trackName": "Rang De Basanti",
    "artistName": "A.R. Rahman, Daler Mehndi & K.S. Chithra",
    "albumName": "Rang De Basanti (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/91/2c/6c/912c6c29-bbec-e560-0088-0cdd4201359a/888880944825.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 349285477,
    "title": "Kannukkul Kannai",
    "trackName": "Kannukkul Kannai",
    "artistName": "A.R. Rahman & Naresh Iyer",
    "albumName": "Vinnaithaandi Varuvaayaa (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e7/a7/d3/e7a7d310-63cd-89ff-e536-6e80d9c695e7/884977467253.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 212250120,
    "title": "Yakkai Thiri",
    "trackName": "Yakkai Thiri",
    "artistName": "A.R. Rahman, Shalini Singh & Sunitha Sarathy",
    "albumName": "Aayitha Ezhutu (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/f0/83/d7/f083d7af-ba77-81b0-5635-d94f0bd735f5/5099751637929.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1851388336,
    "title": "Chikiri Chikiri [TELUGU]",
    "trackName": "Chikiri Chikiri (From \"Peddi\") [TELUGU]",
    "artistName": "A.R. Rahman, Mohit Chauhan & Balaji",
    "albumName": "Chikiri Chikiri (From \"Peddi\") [TELUGU] - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8e/b8/61/8eb86197-d301-56f8-5f64-554863036a35/8903431148735_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 274118154,
    "title": "Ae Kash Ke Hum",
    "trackName": "Ae Kash Ke Hum",
    "artistName": "Jatin-Lalit & Kumar Sanu",
    "albumName": "Kabhi Haan Kabhi Naa (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e6/d6/0a/e6d60a7a-e6ee-6824-7e04-8739f0aa9f4e/5099749530828.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1130320761,
    "title": "Ek Din Aap",
    "trackName": "Ek Din Aap",
    "artistName": "Kumar Sanu & Alka Yagnik",
    "albumName": "Yes Boss (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4c/e2/81/4ce281b0-73dd-0f9f-0b33-78d03baddb60/cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1550793973,
    "title": "Ek Dil Hai",
    "trackName": "Ek Dil Hai",
    "artistName": "Kumar Sanu & Alka Yagnik",
    "albumName": "Ek Rishtaa (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/55/d7/d8/55d7d890-1f3e-6885-95d8-878cd502a4af/8901854009718.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1447936149,
    "title": "Aankh Marey",
    "trackName": "Aankh Marey",
    "artistName": "Neha Kakkar, Mika Singh & Kumar Sanu",
    "albumName": "Simmba (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/99/4c/e2/994ce25e-0fe1-1287-972d-7ab5f09e55e1/8902894360616_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 965766878,
    "title": "Dard Karaara",
    "trackName": "Dard Karaara",
    "artistName": "Kumar Sanu & Sadhana Sargam",
    "albumName": "Dum Laga Ke Haisha (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/07/a4/47/07a447d8-aa89-cae1-14b0-8aa4bf8b6671/849486027190_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1550794918,
    "title": "Meri Mehbooba",
    "trackName": "Meri Mehbooba",
    "artistName": "Kumar Sanu & Alka Yagnik",
    "albumName": "Pardes (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f0/86/e0/f086e0b3-4b4c-f513-afd3-6e6ae9f6715e/8901854004386.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1124402574,
    "title": "Dil Kehta Hai",
    "trackName": "Dil Kehta Hai",
    "artistName": "Kumar Sanu & Alka Yagnik",
    "albumName": "Akele Hum Akele Tum (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/88/5b/ac/885baca2-62b6-7624-da86-4226fed6c2bf/cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1541082163,
    "title": "Jo Haal Dil Ka",
    "trackName": "Jo Haal Dil Ka",
    "artistName": "Kumar Sanu & Alka Yagnik",
    "albumName": "Sarfarosh (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/02/79/bf/0279bf29-5473-7874-cfc8-f5441dd6b79a/8901854011223.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1073377446,
    "title": "Nazar Ke Samne",
    "trackName": "Nazar Ke Samne",
    "artistName": "Anuradha Paudwal & Kumar Sanu",
    "albumName": "Aashiqui (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0a/3a/df/0a3adfc7-66f2-b2a8-df6e-850a09cd4a1e/8902894684088_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1128701523,
    "title": "Tera Mera Pyar",
    "trackName": "Tera Mera Pyar (From \"Tera Mera Pyar\")",
    "artistName": "Kumar Sanu",
    "albumName": "Best of Bollywood: Wedding Beats",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2e/a7/0d/2ea70d37-2cfa-64a8-db3c-e04bb975d678/886445982961.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1836921046,
    "title": "Bijuria",
    "trackName": "Bijuria (From \"Sunny Sanskari Ki Tulsi Kumari\")",
    "artistName": "Sonu Nigam, Tanishk Bagchi, Ravi Pawar & Asees Kaur",
    "albumName": "Bijuria (From \"Sunny Sanskari Ki Tulsi Kumari\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/8a/75/fe8a755b-a460-5f36-74fd-f45cba706b22/196873528793.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1275639470,
    "title": "Aaj Ki Raat",
    "trackName": "Aaj Ki Raat",
    "artistName": "Alisha Chinai, Mahalakshmi Iyer & Sonu Nigam",
    "albumName": "Don (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/08/12/40/081240bc-e812-5902-0608-380caceb6538/8902894601818_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 300388195,
    "title": "Bole Chudiyan",
    "trackName": "Bole Chudiyan",
    "artistName": "Amit Kumar, Jatin-Lalit, Sonu Nigam, Alka Yagnik, Udit Narayan & Kavita Krishnamurthy",
    "albumName": "Kabhi Khushi Kabhie Gham (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/86/d3/96/86d396fd-9230-aab9-115b-bada9149d8de/888880945778.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1550794922,
    "title": "Yeh Dil Deewana",
    "trackName": "Yeh Dil Deewana",
    "artistName": "Sonu Nigam, Hema Sardesai & Shankar Mahadevan",
    "albumName": "Pardes (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f0/86/e0/f086e0b3-4b4c-f513-afd3-6e6ae9f6715e/8901854004386.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 300388205,
    "title": "Suraj Hua Maddham",
    "trackName": "Suraj Hua Maddham",
    "artistName": "Sandesh Shandilya, Sonu Nigam & Alka Yagnik",
    "albumName": "Kabhi Khushi Kabhie Gham (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/86/d3/96/86d396fd-9230-aab9-115b-bada9149d8de/888880945778.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 299122166,
    "title": "Soniyo",
    "trackName": "Soniyo",
    "artistName": "Raju Singh, Sonu Nigam, Shreya Ghoshal & Neeraj Shridhar",
    "albumName": "RAAZ - The Mystery Continues (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/77/4d/9f/774d9f5c-830a-c140-f1ae-6e637dc9af14/888880931542.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 673583190,
    "title": "Do Pal",
    "trackName": "Do Pal",
    "artistName": "Lata Mangeshkar & Sonu Nigam",
    "albumName": "Veer-Zaara (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/54/bf/16/54bf16a4-e56b-64aa-4afa-f5a122d1e283/849486008182_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1133344521,
    "title": "Guzarish",
    "trackName": "Guzarish",
    "artistName": "Javed Ali & Sonu Nigam",
    "albumName": "Ghajini (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b1/2a/54/b12a5476-65db-75b9-be67-611bede2596e/8902894628464_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 673594503,
    "title": "Saathiya",
    "trackName": "Saathiya",
    "artistName": "Sonu Nigam",
    "albumName": "Saathiya (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/5e/71/f5/5e71f586-3e35-e7c8-f4c6-46006b4d3a88/Saathiya.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 300388376,
    "title": "Kuch Kuch Hota Hai",
    "trackName": "Kuch Kuch Hota Hai",
    "artistName": "Jatin-Lalit, Udit Narayan & Alka Yagnik",
    "albumName": "Kuch Kuch Hota Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/07/b7/a4/07b7a4a5-d21f-db81-1d51-1eb1846c7dcb/888880945907.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 6839230684,
    "title": "Tum Se Mili Thi College Mein",
    "trackName": "Tum Se Mili Thi College Mein",
    "artistName": "Alka Yagnik",
    "albumName": "Hi ! Ajnabi",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/66/08/cd/6608cd33-9f7a-9f32-2a4c-cade5d0e30b4/8903431545589_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1115786629,
    "title": "Tere Naam",
    "trackName": "Tere Naam",
    "artistName": "Udit Narayan & Alka Yagnik",
    "albumName": "Tere Naam (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/cb/8f/47/cb8f4723-8f20-1e1c-dcef-c8eb8ddf0663/8902894116473_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1536519896,
    "title": "Ramta Jogi",
    "trackName": "Ramta Jogi",
    "artistName": "Sukhwinder Singh & Alka Yagnik",
    "albumName": "Taal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e4/6d/a1/e46da195-d6c9-8a99-cb2d-1b20cbc6ce04/8901854004515.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1115786568,
    "title": "Tumse Milna",
    "trackName": "Tumse Milna",
    "artistName": "Udit Narayan & Alka Yagnik",
    "albumName": "Tere Naam (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/cb/8f/47/cb8f4723-8f20-1e1c-dcef-c8eb8ddf0663/8902894116473_cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1536519898,
    "title": "Taal Se Taal",
    "trackName": "Taal Se Taal",
    "artistName": "Alka Yagnik & Udit Narayan",
    "albumName": "Taal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e4/6d/a1/e46da195-d6c9-8a99-cb2d-1b20cbc6ce04/8901854004515.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1536511642,
    "title": "Jai Maa Kali",
    "trackName": "Jai Maa Kali",
    "artistName": "Kumar Sanu & Alka Yagnik",
    "albumName": "Karan Arjun (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d7/42/43/d742438e-219a-3fc0-7eb3-fca322b91270/8901854004232.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1129810150,
    "title": "Aisi Deewangi",
    "trackName": "Aisi Deewangi",
    "artistName": "Alka Yagnik & Vinod Rathod",
    "albumName": "Deewana (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c8/0a/fd/c80afd7e-c03a-21be-a733-d5e3f3de746f/cover.jpg/300x300bb.jpg",
    "category": "bollywood-classics"
  },
  {
    "id": 1073359419,
    "title": "Tum Hi Ho",
    "trackName": "Tum Hi Ho",
    "artistName": "Mithoon & Arijit Singh",
    "albumName": "Aashiqui 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1071074558,
    "title": "Agar Tum Saath Ho",
    "trackName": "Agar Tum Saath Ho",
    "artistName": "Alka Yagnik & Arijit Singh",
    "albumName": "Tamasha (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cb/ac/67/cbac673a-9213-7118-bb4e-2440273afb03/8902894357470_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1529544915,
    "title": "Kalank",
    "trackName": "Kalank (Bonus Track)",
    "artistName": "Pritam, Arijit Singh & Shilpa Rao",
    "albumName": "Kalank (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4e/39/49/4e3949f3-d59d-4295-4bb2-036269f9a88f/8718857678083.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1653219849,
    "title": "Apna Bana Le",
    "trackName": "Apna Bana Le (From \"Bhediya\")",
    "artistName": "Arijit Singh, Sachin-Jigar & Amitabh Bhattacharya",
    "albumName": "Apna Bana Le (From \"Bhediya\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2e/0b/c0/2e0bc070-112f-a827-6ad8-6bc64f7caaff/840214460180.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1580955743,
    "title": "Raataan Lambiyan",
    "trackName": "Raataan Lambiyan",
    "artistName": "Tanishk Bagchi, Jubin Nautiyal & Asees Kaur",
    "albumName": "Shershaah (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/61/65/ae/6165aee9-8bb9-0bd4-02b0-5d0f1e6257a3/886449510238.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1468448742,
    "title": "Tujhe Kitna Chahne Lage",
    "trackName": "Tujhe Kitna Chahne Lage",
    "artistName": "Arijit Singh",
    "albumName": "Kabir Singh (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1478998926,
    "title": "Ghungroo",
    "trackName": "Ghungroo (From \"War\")",
    "artistName": "Arijit Singh, Shilpa Rao & Vishal & Shekhar",
    "albumName": "Ghungroo (From \"War\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f4/0b/88/f40b88d5-75cb-27b8-6b00-bba98f0f2fd0/849486006911_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1070912815,
    "title": "Ilahi",
    "trackName": "Ilahi",
    "artistName": "Pritam & Arijit Singh",
    "albumName": "Yeh Jawaani Hai Deewani (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/d6/74/62d67432-0670-631f-db6a-d4bac3adae4b/8902894353328_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1174924381,
    "title": "Ae Dil Hai Mushkil",
    "trackName": "Ae Dil Hai Mushkil (Title Track)",
    "artistName": "Pritam & Arijit Singh",
    "albumName": "Ae Dil Hai Mushkil (Deluxe Edition) [Original Motion Picture Soundtrack]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/43/3c/7a/433c7a84-116b-4001-115e-c8e34d57ebd0/886446235608.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1070912828,
    "title": "Subhanallah",
    "trackName": "Subhanallah",
    "artistName": "Pritam, Sreeram & Shilpa Rao",
    "albumName": "Yeh Jawaani Hai Deewani (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/d6/74/62d67432-0670-631f-db6a-d4bac3adae4b/8902894353328_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 716539898,
    "title": "Zinda",
    "trackName": "Zinda",
    "artistName": "Shankar Ehsaan Loy & Siddharth Mahadevan",
    "albumName": "The Spirit of Bhaag Milkha Bhaag",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6e/7b/b0/6e7bb0ec-7a63-b26e-bae7-55a63620f9e3/886444251723.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1071192712,
    "title": "Gallan Goodiyaan",
    "trackName": "Gallan Goodiyaan",
    "artistName": "Yashita Sharma, Manish Kumar Tipu, Farhan Akhtar, Shankar Mahadevan & Sukhwinder Singh",
    "albumName": "Dil Dhadakne Do (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1c/f1/49/1cf149ad-2e46-cb6d-642c-4f7103b77dc8/8902894357036_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1702461667,
    "title": "Chaleya",
    "trackName": "Chaleya (From \"Jawan\")",
    "artistName": "Anirudh Ravichander, Arijit Singh, Shilpa Rao & Kumaar",
    "albumName": "Chaleya (From \"Jawan\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1e/ff/32/1eff3216-190d-6fd9-8f68-acbba846e6ee/8903431956026_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1858961217,
    "title": "Gehra Hua",
    "trackName": "Gehra Hua",
    "artistName": "Shashwat Sachdev, Arijit Singh, Irshad Kamil & Armaan Khan",
    "albumName": "Dhurandhar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/10/4d/4e/104d4e1d-49f1-b96d-2bb1-c7c9f94845fa/ticket.tgbrrfvz.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 6829145293,
    "title": "Tu Mil Jaaye",
    "trackName": "Tu Mil Jaaye (From \"KING\")",
    "artistName": "Sachin-Jigar, Arijit Singh, Ed Sheeran, Madhubanti Bagchi & Kumaar",
    "albumName": "Tu Mil Jaaye (From \"KING\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cc/bf/37/ccbf3767-04e6-4a7f-ba93-f7377df30506/8903431225320_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1752427648,
    "title": "Tainu Khabar Nahi",
    "trackName": "Tainu Khabar Nahi",
    "artistName": "Sachin-Jigar, Arijit Singh & Amitabh Bhattacharya",
    "albumName": "Munjya (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cf/07/36/cf0736c5-4154-3944-bb1a-dee18a27bcc4/8909024032009.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1858961581,
    "title": "Naal Nachna",
    "trackName": "Naal Nachna",
    "artistName": "Shashwat Sachdev, Afsana Khan, Irshad Kamil & Reble",
    "albumName": "Dhurandhar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/10/4d/4e/104d4e1d-49f1-b96d-2bb1-c7c9f94845fa/ticket.tgbrrfvz.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1167416565,
    "title": "Darkhaast",
    "trackName": "Darkhaast (feat. Arijit Singh, Sunidhi Chauhan)",
    "artistName": "Mithoon",
    "albumName": "Shivaay (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b5/20/55/b520556d-a1b7-ed6a-db24-5de2f1762998/8902894358422_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1885907881,
    "title": "Jaiye Sajana",
    "trackName": "Jaiye Sajana",
    "artistName": "Shashwat Sachdev, Jasmine Sandlas & Satinder Sartaaj",
    "albumName": "Dhurandhar The Revenge (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/74/08/897408d1-39d9-5d32-06a8-256ea77e4158/8902894362900_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1267390213,
    "title": "Hawayein",
    "trackName": "Hawayein",
    "artistName": "Pritam & Arijit Singh",
    "albumName": "Jab Harry Met Sejal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/41/aa/e3/41aae321-0a81-2762-e0eb-c60844109fe7/886446683584.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1842069636,
    "title": "Dooriyan",
    "trackName": "Dooriyan",
    "artistName": "Pritam & Mohit Chauhan",
    "albumName": "Love Aaj Kal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6c/c9/98/6cc9988b-b6ce-51e5-9396-fd11d65ad8a7/196871083010.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1070912818,
    "title": "Kabira",
    "trackName": "Kabira",
    "artistName": "Pritam, Tochi Raina & Rekha Bhardwaj",
    "albumName": "Yeh Jawaani Hai Deewani (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/d6/74/62d67432-0670-631f-db6a-d4bac3adae4b/8902894353328_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 6826737455,
    "title": "Mangal Rang",
    "trackName": "Mangal Rang (From \"Ramayana\")",
    "artistName": "A.R. Rahman, Arijit Singh, Shreya Ghoshal & Kumar Vishwas",
    "albumName": "Mangal Rang (From \"Ramayana\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/27/3e/e0/273ee021-253b-16ef-471b-1acb0e5e9b14/8903431224316_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1348996917,
    "title": "Tera Yaar Hoon Main",
    "trackName": "Tera Yaar Hoon Main",
    "artistName": "Arijit Singh",
    "albumName": "Sonu Ke Titu Ki Sweety (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/81/a5/b0/81a5b084-89f7-7ed8-372e-aefd67504922/8902894360074_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1885907879,
    "title": "Jaan Se Guzarte Hain",
    "trackName": "Jaan Se Guzarte Hain",
    "artistName": "Shashwat Sachdev & Khan Saab",
    "albumName": "Dhurandhar The Revenge (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/74/08/897408d1-39d9-5d32-06a8-256ea77e4158/8902894362900_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1858961566,
    "title": "Lutt Le Gaya",
    "trackName": "Lutt Le Gaya",
    "artistName": "Shashwat Sachdev & Simran Choudhary",
    "albumName": "Dhurandhar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/10/4d/4e/104d4e1d-49f1-b96d-2bb1-c7c9f94845fa/ticket.tgbrrfvz.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1824400209,
    "title": "Barbaad",
    "trackName": "Barbaad",
    "artistName": "The Rish & Jubin Nautiyal",
    "albumName": "Saiyaara (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c6/6a/a3/c66aa366-4522-14b8-c629-7cfee5422fc0/Saiyaara_Album_Cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1468448741,
    "title": "Kaise Hua",
    "trackName": "Kaise Hua",
    "artistName": "Vishal Mishra",
    "albumName": "Kabir Singh (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1169015785,
    "title": "Channa Mereya",
    "trackName": "Channa Mereya",
    "artistName": "Pritam & Arijit Singh",
    "albumName": "Ae Dil Hai Mushkil (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bc/6e/4d/bc6e4d0c-adec-b431-7b60-16f5689f9664/886446201597.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1123241858,
    "title": "Phir Se Ud Chala",
    "trackName": "Phir Se Ud Chala",
    "artistName": "Mohit Chauhan",
    "albumName": "Rockstar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/ac/41/56ac41f7-99f3-3eae-3b07-443167292c4e/8902894697408_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1537031094,
    "title": "Pehli Nazar Mein",
    "trackName": "Pehli Nazar Mein",
    "artistName": "Atif Aslam & Pritam",
    "albumName": "Race (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/38/44/21/384421ca-69a0-83f2-0a34-88653d45db97/8901854001385.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1540255874,
    "title": "Aabaad Barbaad",
    "trackName": "Aabaad Barbaad",
    "artistName": "Pritam & Arijit Singh",
    "albumName": "Ludo (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/61/95/27/619527bb-c24c-a1d5-1aae-d449f95826ef/8902894361170_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1824400210,
    "title": "Tum Ho Toh",
    "trackName": "Tum Ho Toh",
    "artistName": "Vishal Mishra, Hansika Pareek & Raj Shekhar",
    "albumName": "Saiyaara (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c6/6a/a3/c66aa366-4522-14b8-c629-7cfee5422fc0/Saiyaara_Album_Cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1174924385,
    "title": "Bulleya",
    "trackName": "Bulleya",
    "artistName": "Pritam, Amit Mishra & Shilpa Rao",
    "albumName": "Ae Dil Hai Mushkil (Deluxe Edition) [Original Motion Picture Soundtrack]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/43/3c/7a/433c7a84-116b-4001-115e-c8e34d57ebd0/886446235608.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1858961209,
    "title": "Dhurandhar - Title Track",
    "trackName": "Dhurandhar - Title Track",
    "artistName": "Shashwat Sachdev, Hanumankind, Jasmine Sandlas, Sudhir Yaduvanshi, Charanjit Ahuja, Muhammad Sadiq, Ranjit Kaur & Babu Singh Maan",
    "albumName": "Dhurandhar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/10/4d/4e/104d4e1d-49f1-b96d-2bb1-c7c9f94845fa/ticket.tgbrrfvz.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1858223161,
    "title": "Sitaare",
    "trackName": "Sitaare (From \"Ikkis\")",
    "artistName": "Arijit Singh, White Noise Collectives & Amitabh Bhattacharya",
    "albumName": "Sitaare (From \"Ikkis\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5d/65/89/5d6589ac-c640-3515-0327-efa185104d83/196873834856.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1824400213,
    "title": "Dhun",
    "trackName": "Dhun",
    "artistName": "Mithoon & Arijit Singh",
    "albumName": "Saiyaara (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c6/6a/a3/c66aa366-4522-14b8-c629-7cfee5422fc0/Saiyaara_Album_Cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1529552886,
    "title": "Yeh Fitoor Mera",
    "trackName": "Yeh Fitoor Mera",
    "artistName": "Arijit Singh",
    "albumName": "Fitoor (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/8f/99/c68f99d7-c2d2-8339-f406-0bde5dbece0f/8718857670360.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1073359663,
    "title": "Chahun Main Ya Naa",
    "trackName": "Chahun Main Ya Naa",
    "artistName": "Palak Muchhal & Arijit Singh",
    "albumName": "Aashiqui 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1111829464,
    "title": "Sooraj Dooba Hain",
    "trackName": "Sooraj Dooba Hain",
    "artistName": "Arijit Singh & Aditi Singh Sharma",
    "albumName": "Roy (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e7/fb/65/e7fb6545-17e3-bb5f-ae1a-02895f26a0c5/8902894356688_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1189133564,
    "title": "Enna Sona",
    "trackName": "Enna Sona",
    "artistName": "A.R. Rahman & Arijit Singh",
    "albumName": "OK Jaanu (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b0/f7/81/b0f78164-e057-e185-da9d-ea90f7251345/886446309835.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1235011070,
    "title": "Haareya",
    "trackName": "Haareya",
    "artistName": "Arijit Singh",
    "albumName": "Meri Pyaari Bindu (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ad/e9/99/ade999c7-ba3e-433a-baf2-9c4cf60ee9d8/849486085824_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1730725583,
    "title": "Sajni",
    "trackName": "Sajni",
    "artistName": "Arijit Singh, Ram Sampath & Prashant Pandey",
    "albumName": "Laapataa Ladies (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/48/d8/bf/48d8bf8f-df58-e05f-62e2-bc494d748ea4/8902894362252_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1110859716,
    "title": "Dil Cheez Tujhe Dedi",
    "trackName": "Dil Cheez Tujhe Dedi",
    "artistName": "Ankit Tiwari & Arijit Singh",
    "albumName": "Airlift (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e5/c2/73/e5c27399-7cda-db04-b038-5b95b1cf4fc4/8902894357623_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1529543285,
    "title": "Qaafirana",
    "trackName": "Qaafirana",
    "artistName": "Arijit Singh & Nikhita Gandhi",
    "albumName": "Kedarnath (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/60/5e/89/605e897e-5caa-b9ec-ac42-6a8c293dcc83/8718857673460.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1181809040,
    "title": "Nashe Si Chadh Gayi",
    "trackName": "Nashe Si Chadh Gayi",
    "artistName": "Vishal & Shekhar, Arijit Singh & Caralisa Monteiro",
    "albumName": "Befikre (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/61/24/d9/6124d942-9d43-7863-f402-c37d9fb8e491/849486075603_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 887456975,
    "title": "Samjhawan",
    "trackName": "Samjhawan",
    "artistName": "Jawad Ahmed, Sharib Toshi, Arijit Singh & Shreya Ghoshal",
    "albumName": "Humpty Sharma Ki Dulhania (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/a5/a4/24a5a4bf-5854-abf3-a834-845c0fef65c6/886444676540.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1110859713,
    "title": "Soch Na Sake",
    "trackName": "Soch Na Sake",
    "artistName": "Amaal Mallik, Arijit Singh & Tulsi Kumar",
    "albumName": "Airlift (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e5/c2/73/e5c27399-7cda-db04-b038-5b95b1cf4fc4/8902894357623_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1659644978,
    "title": "Jhoome Jo Pathaan",
    "trackName": "Jhoome Jo Pathaan",
    "artistName": "Vishal & Shekhar, Arijit Singh, Sukriti Kakar, Vishal Dadlani & Shekhar Ravjiani",
    "albumName": "Pathaan (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8d/6a/19/8d6a197e-2aaa-5504-cd43-533351597487/Pathaan-Album-Audio-Cover-Final.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1852500177,
    "title": "Tere Ishk Mein",
    "trackName": "Tere Ishk Mein",
    "artistName": "A.R. Rahman, Arijit Singh & Irshad Kamil",
    "albumName": "Tere Ishk Mein (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c5/e3/a8/c5e3a8e2-f166-23b8-2159-ee04b8511897/8902894362733_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1772023291,
    "title": "Tenu Sang Rakhna",
    "trackName": "Tenu Sang Rakhna (From \"Jigra\")",
    "artistName": "Achint, Arijit Singh, Anumita Nadesan & Varun Grover",
    "albumName": "Tenu Sang Rakhna (From \"Jigra\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/64/a8/ec/64a8ec39-1628-2f14-0ec7-ddf7b466cac4/198846455389.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1888495036,
    "title": "Woh Lamhe Woh Baatein",
    "trackName": "Woh Lamhe Woh Baatein",
    "artistName": "Roop Kumar Rathod, Sayeed Quadri, Mithoon, Naresh Sharma & Atif Aslam",
    "albumName": "Zeher (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9d/4e/5a/9d4e5a11-1eb8-ae96-eb4b-cf01c89f583c/0602465590869.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1888494912,
    "title": "Aadat",
    "trackName": "Aadat",
    "artistName": "Jal, Mithoon & Atif Aslam",
    "albumName": "Kalyug (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/27/41/48/27414810-2929-aa34-e145-000948a5c8b7/0602465586596.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1537030272,
    "title": "Tu Jaane Na",
    "trackName": "Tu Jaane Na",
    "artistName": "Atif Aslam & Pritam",
    "albumName": "Ajab Prem Ki Ghazab Kahani (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/43/fb/d8/43fbd870-9a3b-ccd9-8866-2a2c6dc48287/8901854003792.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1537030225,
    "title": "Tera Hone Laga Hoon",
    "trackName": "Tera Hone Laga Hoon",
    "artistName": "Atif Aslam, Alisha Chinai & Pritam",
    "albumName": "Ajab Prem Ki Ghazab Kahani (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/43/fb/d8/43fbd870-9a3b-ccd9-8866-2a2c6dc48287/8901854003792.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1547267814,
    "title": "Hona Tha Pyar",
    "trackName": "Hona Tha Pyar",
    "artistName": "Atif Aslam & Hadiqa Kiani",
    "albumName": "Bol (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d6/8e/1c/d68e1c6e-439d-ace4-5d4f-2016707c3143/8901854004126.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1536812178,
    "title": "Be Intehaan",
    "trackName": "Be Intehaan",
    "artistName": "Atif Aslam, Sunidhi Chauhan & Pritam",
    "albumName": "Race 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/07/79/f6/0779f68f-462f-e8d5-7de1-84ca6be69888/8901854022311.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1537451077,
    "title": "Tere Bin",
    "trackName": "Tere Bin",
    "artistName": "Atif Aslam",
    "albumName": "Bas Ek Pal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/32/c3/a7/32c3a7c9-c4b2-5448-0f4d-2915971ed76f/8901854000029.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1536517341,
    "title": "Main Rang Sharbaton Ka",
    "trackName": "Main Rang Sharbaton Ka",
    "artistName": "Atif Aslam, Chinmayi Sripada & Pritam",
    "albumName": "Phata Poster Nikhla Hero (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/02/98/a6/0298a63c-c22f-52d9-a62c-1e7c19980a3a/8901854030330.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1193001330,
    "title": "Pehli Dafa",
    "trackName": "Pehli Dafa",
    "artistName": "Atif Aslam & Shiraz Uppal",
    "albumName": "Pehli Dafa - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7e/06/f5/7e06f500-2d05-879b-18a1-e901d1a43d65/8903431633866_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1537027347,
    "title": "Bakhuda Tumhi Ho",
    "trackName": "Bakhuda Tumhi Ho",
    "artistName": "Atif Aslam, Alka Yagnik & Pritam",
    "albumName": "Kismat Konnection (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/03/c8/e4/03c8e4d9-d521-09b2-610f-1ea075e5cae2/8901854001989.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 598259080,
    "title": "Teri Jhuki Nazar",
    "trackName": "Teri Jhuki Nazar",
    "artistName": "Shafqat Amanat Ali & Pritam",
    "albumName": "Murder 3 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e5/11/75/e5117540-dc69-56c9-b227-c50639770f59/886443824157.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1115953122,
    "title": "Ye Tune Kya Kiya",
    "trackName": "Ye Tune Kya Kiya",
    "artistName": "Pritam & Javed Bashir",
    "albumName": "Once Upon Ay Time In Mumbai Dobaara! (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/44/b8/f6/44b8f6f0-8d71-eef7-3176-691f761dacc8/8902894353991_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 514419708,
    "title": "Tujhe Sochta Hoon",
    "trackName": "Tujhe Sochta Hoon",
    "artistName": "KK & Pritam",
    "albumName": "Jannat 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d7/5c/d0/d75cd0e6-93c6-9219-cfcd-9436c6b85ba7/886443444584.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1134701727,
    "title": "Labon Ko",
    "trackName": "Labon Ko",
    "artistName": "Pritam & KK",
    "albumName": "Bhool Bhulaiyaa (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/eb/1b/38/eb1b3835-41fd-de2e-2550-4e9780fa6443/8902894623056_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 6838337044,
    "title": "Tujh Mein Basi Meri Jaan",
    "trackName": "Tujh Mein Basi Meri Jaan",
    "artistName": "Pritam, Sonu Nigam, Shreya Ghoshal & Amitabh Bhattacharya",
    "albumName": "Prahaar: The Untold Story Of Ujjwal Nikam (Original Motion Picture Soundtrack) - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/85/c0/94/85c09432-2ebb-0f4b-7585-cc596910615e/8902894363051_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1123340746,
    "title": "Pee Loon",
    "trackName": "Pee Loon",
    "artistName": "Pritam & Mohit Chauhan",
    "albumName": "Once Upon a Time In Mumbaai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f3/d9/23/f3d92398-118c-10c9-2ef8-5f28cff344c2/8902894688512_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1136363098,
    "title": "Kya Mujhe Pyaar Hai",
    "trackName": "Kya Mujhe Pyaar Hai",
    "artistName": "Pritam & KK",
    "albumName": "Woh Lamhe (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/23/f2/02/23f2021c-ae86-a637-ee5a-6e9e9b1bcc26/8902894601832_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 299583030,
    "title": "Haan Tu Hain",
    "trackName": "Haan Tu Hain",
    "artistName": "KK & Pritam",
    "albumName": "Jannat (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e9/a3/cf/e9a3cf5e-09c3-3d6b-3bf2-c609475b6543/888880551801.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1244430611,
    "title": "Ik Vaari Aa",
    "trackName": "Ik Vaari Aa",
    "artistName": "Pritam & Arijit Singh",
    "albumName": "Raabta (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/83/b4/9b83b42b-0716-95cf-60f3-701ec9464ada/8902894359023_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1122178120,
    "title": "Jiyein Kyun",
    "trackName": "Jiyein Kyun",
    "artistName": "Pritam & Papon",
    "albumName": "Dum Maaro Dum (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/91/9c/18/919c1814-d24a-1dcf-edda-d9ffdcd83e7c/8902894694599_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1842077297,
    "title": "Tum Hi Ho Bandhu",
    "trackName": "Tum Hi Ho Bandhu",
    "artistName": "Pritam, Neeraj Shridhar, Kavita Seth & Irshad Kamil",
    "albumName": "Cocktail (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/dd/ec/3dddec12-be24-6746-f20b-24dd599e1b52/196871082891.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1718278230,
    "title": "Hua Main",
    "trackName": "Hua Main",
    "artistName": "Pritam, Raghav Chaitanya & Manoj Muntashir",
    "albumName": "ANIMAL (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/db/ad/5e/dbad5e8b-0bee-d962-92d4-021c90e375ac/8902894362092_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1386751699,
    "title": "Humnava Mere",
    "trackName": "Humnava Mere",
    "artistName": "Jubin Nautiyal & Rocky-Shiv",
    "albumName": "Humnava Mere - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9d/2b/48/9d2b48bb-fcba-913f-9e6b-f23e31a2c44a/8903431677259_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1553760593,
    "title": "Lut Gaye",
    "trackName": "Lut Gaye (feat. Emraan Hashmi)",
    "artistName": "Jubin Nautiyal",
    "albumName": "Lut Gaye (feat. Emraan Hashmi) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ce/43/71/ce437176-4d13-f380-e991-2492a2e63dc8/8903431805706_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1482235392,
    "title": "Tum Hi Aana",
    "trackName": "Tum Hi Aana (From \"Marjaavaan\")",
    "artistName": "Payal Dev & Jubin Nautiyal",
    "albumName": "Tum Hi Aana (From \"Marjaavaan\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/17/68/79/17687955-0d5d-6c90-ef1a-4a956919fde1/8903431751287_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1886408428,
    "title": "Aakhri Ishq",
    "trackName": "Aakhri Ishq (From \"Dhurandhar The Revenge\")",
    "artistName": "Shashwat Sachdev, Jubin Nautiyal & Irshad Kamil",
    "albumName": "Aakhri Ishq (From \"Dhurandhar The Revenge\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b1/4d/34/b14d3476-d18a-944d-381d-ab769cbc1dbb/8903431190635_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1071855811,
    "title": "Zindagi Kuch Toh Bata (Reprise)",
    "trackName": "Zindagi Kuch Toh Bata (Reprise)",
    "artistName": "Pritam & Jubin Nautiyal",
    "albumName": "Bajrangi Bhaijaan (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/93/06/e6/9306e63e-5dc3-1b60-3488-1332bbfacfd7/8902894357128_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1824400208,
    "title": "Saiyaara",
    "trackName": "Saiyaara",
    "artistName": "Tanishk Bagchi, Faheem Abdullah, Arslan Nizami & Irshad Kamil",
    "albumName": "Saiyaara (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c6/6a/a3/c66aa366-4522-14b8-c629-7cfee5422fc0/Saiyaara_Album_Cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1824400214,
    "title": "Saiyaara Reprise - Female",
    "trackName": "Saiyaara Reprise - Female",
    "artistName": "Tanishk Bagchi, Faheem Abdullah, Arslan Nizami, Shreya Ghoshal & Irshad Kamil",
    "albumName": "Saiyaara (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c6/6a/a3/c66aa366-4522-14b8-c629-7cfee5422fc0/Saiyaara_Album_Cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1838877949,
    "title": "Vaani Batra",
    "trackName": "Vaani Batra",
    "artistName": "Tanishk Bagchi, Faheem Abdullah, Arslan Nizami, John Stewart Eduri & Shreya Ghoshal",
    "albumName": "Saiyaara (Extended Album) [Original Motion Picture Soundtrack]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/51/76/c8/5176c863-1b58-7835-5779-d8bbe64d3020/Saiyaara_Extended_Album.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1838877951,
    "title": "Tu Paas Hai",
    "trackName": "Tu Paas Hai",
    "artistName": "Tanishk Bagchi, Faheem Abdullah, Arslan Nizami & John Stewart Eduri",
    "albumName": "Saiyaara (Extended Album) [Original Motion Picture Soundtrack]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/51/76/c8/5176c863-1b58-7835-5779-d8bbe64d3020/Saiyaara_Extended_Album.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1838877988,
    "title": "Pata Chal Gaya Na!",
    "trackName": "Pata Chal Gaya Na!",
    "artistName": "Tanishk Bagchi, Faheem Abdullah, Arslan Nizami & John Stewart Eduri",
    "albumName": "Saiyaara (Extended Album) [Original Motion Picture Soundtrack]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/51/76/c8/5176c863-1b58-7835-5779-d8bbe64d3020/Saiyaara_Extended_Album.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1858253849,
    "title": "Shararat",
    "trackName": "Shararat (From \"Dhurandhar\")",
    "artistName": "Shashwat Sachdev, Madhubanti Bagchi & Jasmine Sandlas",
    "albumName": "Shararat (From \"Dhurandhar\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/62/f5/45/62f545be-d157-2ae8-a1ea-341b85a7d4c2/199806650219.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1857954638,
    "title": "Ez-Ez",
    "trackName": "Ez-Ez (From \"Dhurandhar\")",
    "artistName": "Shashwat Sachdev, Diljit Dosanjh, Hanumankind & Raj Ranjodh",
    "albumName": "Ez-Ez (From \"Dhurandhar\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/66/29/f3/6629f375-c167-d693-969b-a6d7f4ab952c/199806611791.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1886407423,
    "title": "Phir Se",
    "trackName": "Phir Se (From \"Dhurandhar The Revenge\")",
    "artistName": "Shashwat Sachdev, Arijit Singh & Irshad Kamil",
    "albumName": "Phir Se (From \"Dhurandhar The Revenge\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/4d/eb/244deb4a-74a6-e8ec-183b-220c3c21dc06/8903431190659_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1860853285,
    "title": "Ramba Ho",
    "trackName": "Ramba Ho (From \"Dhurandhar\")",
    "artistName": "Shashwat Sachdev, Madhubanti Bagchi, Bappi Lahiri & Indiwar",
    "albumName": "Ramba Ho (From \"Dhurandhar\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/71/66/0b/71660bf5-af84-d8fc-49d6-73c16d7eb0be/199806748299.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1860473886,
    "title": "DHURANDHAR",
    "trackName": "DHURANDHAR",
    "artistName": "Hasan Vibes",
    "albumName": "DHURANDHAR - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/a5/b6/18a5b67b-d824-ffc1-0245-6bed5791b64d/artwork.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1537027776,
    "title": "Piya O Re Piya",
    "trackName": "Piya O Re Piya",
    "artistName": "Atif Aslam, Shreya Ghoshal & Sachin-Jigar",
    "albumName": "Tere Naal Love Ho Gaya (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2a/b9/df/2ab9dfce-fafb-1237-cc7e-7e34fb9e7a9f/8901854017904.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1435917781,
    "title": "Pal",
    "trackName": "Pal (From \"Jalebi\")",
    "artistName": "Javed Mohsin, Arijit Singh & Shreya Ghoshal",
    "albumName": "Pal (From \"Jalebi\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/91/79/fc/9179fc5e-e60b-221a-9b61-62fa5a77f165/886447322208.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 372906483,
    "title": "Bahara",
    "trackName": "Bahara",
    "artistName": "Shreya Ghoshal, Vishal & Shekhar & Sona Mohapatra",
    "albumName": "I Hate Luv Storys (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a7/92/20/a7922048-2338-074c-17f4-5318e9097577/884977629200.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 6788811936,
    "title": "KALYANI",
    "trackName": "KALYANI (with Shreya Ghoshal)",
    "artistName": "ARJN, KDS, FIFTY4 & Shreya Ghoshal",
    "albumName": "",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/bc/f7/5f/bcf75faa-5d89-c842-5a05-5bb004cc0776/26UMGIM90901.crop.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1258601659,
    "title": "Teri Ore",
    "trackName": "Teri Ore",
    "artistName": "Rahat Fateh Ali Khan, Shreya Ghoshal & Pritam",
    "albumName": "Singh Is Kinng (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/41/f5/72/41f572a8-c21d-fbfa-8765-1d89d3ce48aa/191773507848.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 554641154,
    "title": "Aashiyan",
    "trackName": "Aashiyan",
    "artistName": "Shreya Ghoshal, Nikhil Paul George & Pritam",
    "albumName": "Barfi! (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5b/65/4a/5b654a60-886f-8bbf-2f39-5ea0dacb8022/886443625099.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1529529186,
    "title": "Piyu Bole",
    "trackName": "Piyu Bole",
    "artistName": "Sonu Nigam & Shreya Ghoshal",
    "albumName": "Parineeta (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/a0/28/6a/a0286ab1-7676-0026-c8e9-92dab5147117/8718857671091.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1529550662,
    "title": "Thodi Der",
    "trackName": "Thodi Der",
    "artistName": "Farhan Saeed & Shreya Ghoshal",
    "albumName": "Half Girlfriend (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f9/2a/7d/f92a7d17-b0f1-ecb1-3aec-2f1ca4ef7bf3/840780180666.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 660158693,
    "title": "O Rangrez",
    "trackName": "O Rangrez",
    "artistName": "Shankar Ehsaan Loy, Shreya Ghoshal & Javed Bashir",
    "albumName": "Bhaag Milkha Bhaag (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fe/9e/54/fe9e54da-11a4-0c61-4adc-f2ac9d8d4416/886444045575.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1468448745,
    "title": "Yeh Aaina",
    "trackName": "Yeh Aaina",
    "artistName": "Amaal Mallik & Shreya Ghoshal",
    "albumName": "Kabir Singh (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1728798022,
    "title": "Tum Se",
    "trackName": "Tum Se (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
    "artistName": "Sachin-Jigar, Raghav Chaitanya, Varun Jain & Indraneel",
    "albumName": "Tum Se (From \"Teri Baaton Mein Aisa Uljha Jiya\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/eb/25/68/eb256897-d444-504e-b64f-977206d3bf40/8903431982186_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1229021048,
    "title": "Hoor",
    "trackName": "Hoor",
    "artistName": "Sachin-Jigar & Atif Aslam",
    "albumName": "Hindi Medium (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bd/25/9a/bd259a04-aee2-9b60-0631-a7de4e3cfa4a/8902894358989_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1748501087,
    "title": "Taras",
    "trackName": "Taras (From \"Munjya\")",
    "artistName": "Sachin-Jigar, Jasmine Sandlas & Amitabh Bhattacharya",
    "albumName": "Taras (From \"Munjya\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7d/91/c8/7d91c851-00b0-6d25-9af8-865c32a75393/8909024032016.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 6823174664,
    "title": "Chann",
    "trackName": "Chann (From \"Udta Teer\")",
    "artistName": "Sachin-Jigar, Arijit Singh & Amitabh Bhattacharya",
    "albumName": "Udta Teer (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/83/58/9b/83589b60-dad7-a545-592a-2c2f9f8ccebf/196874851845.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1842076713,
    "title": "Judaai",
    "trackName": "Judaai",
    "artistName": "Sachin-Jigar, Rekha Bhardwaj, Arijit Singh & Priya Saraiya",
    "albumName": "Badlapur (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/35/85/12/358512ee-128b-977f-40bc-669beb1bcc8d/196871079747.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1760581362,
    "title": "Aayi Nai",
    "trackName": "Aayi Nai (From \"Stree 2\")",
    "artistName": "Amitabh Bhattacharya, Sachin-Jigar, Pawan Singh & Simran Choudhary",
    "albumName": "Aayi Nai (From \"Stree 2\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7d/87/ee/7d87eeb9-1642-0aa0-44a7-b18955821d13/198588933909.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1829701947,
    "title": "Pardesiya",
    "trackName": "Pardesiya (From \"Param Sundari\")",
    "artistName": "Sachin-Jigar, Sonu Nigam & Krishnakali Saha",
    "albumName": "Pardesiya (From \"Param Sundari\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b9/8e/d8/b98ed837-918d-3fd5-2453-1dc5b99f6250/25UM1IM02563.rgb.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1772246064,
    "title": "Raanjhan",
    "trackName": "Raanjhan (From \"Do Patti\")",
    "artistName": "Sachet-Parampara, Parampara Tandon & Kausar Munir",
    "albumName": "Raanjhan (From \"Do Patti\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/99/a9/ca/99a9caf7-5d9f-5890-3fdf-e3ff8c860e79/8903431018915_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1599228320,
    "title": "Maiyya Mainu",
    "trackName": "Maiyya Mainu (From \"Jersey\")",
    "artistName": "Sachet-Parampara & Sachet Tandon",
    "albumName": "Maiyya Mainu (From \"Jersey\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/dd/4b/d4/dd4bd48f-d433-abb5-7acb-48b2e01f75e8/840214424120.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1775907141,
    "title": "Jaadu",
    "trackName": "Jaadu",
    "artistName": "Sachet-Parampara, Sachet Tandon & Kausar Munir",
    "albumName": "Do Patti (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c0/c6/ce/c0c6ce2b-e6d1-ef56-568b-0b1ea10ea4ae/8902894362436_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1775907143,
    "title": "Maiyya",
    "trackName": "Maiyya",
    "artistName": "Sachet-Parampara, Sachet Tandon, Parampara Tandon & Kausar Munir",
    "albumName": "Do Patti (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c0/c6/ce/c0c6ce2b-e6d1-ef56-568b-0b1ea10ea4ae/8902894362436_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1451290299,
    "title": "Jhansa",
    "trackName": "Jhansa",
    "artistName": "Sachet-Parampara",
    "albumName": "Jhansa - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/73/5c/99/735c9900-860f-8b93-8b35-4b7384924210/cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1598277741,
    "title": "Mehram",
    "trackName": "Mehram (From \"Jersey\")",
    "artistName": "Sachet Tandon & Sachet-Parampara",
    "albumName": "Mehram (From \"Jersey\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8c/84/b3/8c84b34a-043a-8891-022e-efa429f971ce/840214424359.png/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1489443470,
    "title": "Dilbara",
    "trackName": "Dilbara (From \"Pati Patni Aur Woh\")",
    "artistName": "Sachet Tandon, Parampara Tandon & Sachet-Parampara",
    "albumName": "Dilbara (From \"Pati Patni Aur Woh\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/39/8c/83/398c83e1-eed5-9335-7e55-59619d40c8d4/8903431759399_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1699805374,
    "title": "Chandni",
    "trackName": "Chandni",
    "artistName": "Sachet Tandon, Parampara Tandon & Sachet-Parampara",
    "albumName": "Chandni - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/da/cf/a1/dacfa1c8-45c9-6ad8-5abe-2d92e7320d67/8903431954596_cover.jpg/300x300bb.jpg",
    "category": "modern-bollywood"
  },
  {
    "id": 1588418743,
    "title": "Excuses",
    "trackName": "Excuses",
    "artistName": "AP Dhillon, Gurinder Gill & Intense",
    "albumName": "Excuses - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/47/47/ac/4747ac85-1658-64ae-bc82-220a4d6213d5/859747478890_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1531596345,
    "title": "Brown Munde",
    "trackName": "Brown Munde",
    "artistName": "AP Dhillon, Gminxr, Gurinder Gill & Shinda Kahlon",
    "albumName": "Brown Munde - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/a3/ac/26a3ac64-69e4-95ec-80ab-1f5a477537d2/859742042973_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1562346959,
    "title": "Insane",
    "trackName": "Insane",
    "artistName": "AP Dhillon, Shinda Kahlon, Gurinder Gill & Gminxr",
    "albumName": "Insane - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/16/d6/94/16d6949f-6072-0b42-f88b-a61ffb129952/859747110851_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1700880858,
    "title": "With You",
    "trackName": "With You",
    "artistName": "AP Dhillon",
    "albumName": "With You - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5a/ac/00/5aac005f-9403-70e4-bce0-cf452017476e/197189606472.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1649039974,
    "title": "Maan Meri Jaan",
    "trackName": "Maan Meri Jaan",
    "artistName": "King",
    "albumName": "Champagne Talk",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/90/9d/aa/909daa9a-3a47-9314-2855-39f5a157f1e3/5054197407734.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1692685146,
    "title": "Tu Aake Dekhle",
    "trackName": "Tu Aake Dekhle",
    "artistName": "King",
    "albumName": "The Carnival",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f1/3b/99/f13b99e6-84f7-a5d8-1be7-e82ebcc6354f/3616408758275.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1717140552,
    "title": "Husn",
    "trackName": "Husn",
    "artistName": "Anuv Jain",
    "albumName": "Husn - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1708026325,
    "title": "Baarishein",
    "trackName": "Baarishein",
    "artistName": "Anuv Jain",
    "albumName": "Baarishein - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/81/d1/2e/81d12e71-c993-272a-d559-5a1411f8d8ed/23UM1IM11036.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1710154601,
    "title": "Alag Aasmaan",
    "trackName": "Alag Aasmaan",
    "artistName": "Anuv Jain",
    "albumName": "Alag Aasmaan - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fe/3e/8b/fe3e8be2-dc7d-92e0-827c-dda09361f21d/23UM1IM18353.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1690466656,
    "title": "Heeriye",
    "trackName": "Heeriye",
    "artistName": "Jasleen Royal & Arijit Singh",
    "albumName": "Heeriye - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f0/8c/2a/f08c2aeb-3903-8738-d0a5-8c2e4547eed7/5054197711039.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1579338277,
    "title": "Ranjha",
    "trackName": "Ranjha (From \"Shershaah\")",
    "artistName": "Jasleen Royal & B. Praak",
    "albumName": "Ranjha (From \"Shershaah\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b3/45/cf/b345cf67-3f39-31e7-5e15-279db1f7e58a/886449487264.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1734233958,
    "title": "Naina",
    "trackName": "Naina (From \"Crew\")",
    "artistName": "Diljit Dosanjh, Badshah & Raj Ranjodh",
    "albumName": "Naina (From \"Crew\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bd/7b/bf/bd7bbfbd-8711-b6da-473a-7dd35b2d753b/8901854099214.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1710378962,
    "title": "Hass Hass",
    "trackName": "Hass Hass",
    "artistName": "Diljit Dosanjh, Sia & Kurstin Greg",
    "albumName": "Hass Hass - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/11/f9/af11f978-7b08-8025-eb57-25682c8d9acb/5054197842245.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1754562159,
    "title": "Tauba Tauba",
    "trackName": "Tauba Tauba (From \"Bad Newz\")",
    "artistName": "Karan Aujla",
    "albumName": "Tauba Tauba (From \"Bad Newz\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/d2/01/79d201d2-e54d-5604-81fb-313f30db7219/198588533581.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1726548488,
    "title": "Akhiyaan Gulaab",
    "trackName": "Akhiyaan Gulaab (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
    "artistName": "Mitraz",
    "albumName": "Akhiyaan Gulaab (From \"Teri Baaton Mein Aisa Uljha Jiya\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ff/3c/2f/ff3c2ff1-a7fd-42fa-1a9c-83e524d37545/8903431980878_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1723467795,
    "title": "O Maahi",
    "trackName": "O Maahi (From \"Dunki\")",
    "artistName": "Arijit Singh",
    "albumName": "Rewind 2023 - R For Romance",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/17/eb/71/17eb713e-c812-361e-26d7-b3ef9330a9c1/8903431976703_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 6819312875,
    "title": "Dilruba Dilnasheen",
    "trackName": "Dilruba Dilnasheen",
    "artistName": "Rito Riba & Siddhant Kaushal",
    "albumName": "Dilfek - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a5/61/9c/a5619ce1-804e-f099-26d0-43df477ff378/823375513346_Cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1831237608,
    "title": "Arz Kiya Hai  Coke Studio Bharat",
    "trackName": "Arz Kiya Hai  Coke Studio Bharat",
    "artistName": "Anuv Jain",
    "albumName": "Arz Kiya Hai - Coke Studio Bharat - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/02/e7/77/02e77709-a5f6-5470-9e5b-70a0d6ff45ed/25UM1IM13936.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 6785497626,
    "title": "Barsaat",
    "trackName": "Barsaat",
    "artistName": "Banjaare & Roni",
    "albumName": "Barsaat - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b1/2f/fe/b12ffe7a-1bc8-cf4c-ea05-69f4bb3b3f66/196874562376.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 6819802968,
    "title": "Flower In A Hurricane",
    "trackName": "Flower In A Hurricane [From GTAVI: Original Score]",
    "artistName": "Justice, Tame Impala, SZA & King Gizzard & The Lizard Wizard",
    "albumName": "Flower In A Hurricane [From GTAVI: Original Score] - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/af/23/54/af235448-23b3-a3bf-0738-87f6c44a4bbc/5056556187486_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1854466376,
    "title": "Khat",
    "trackName": "Khat",
    "artistName": "Navjot Ahuja",
    "albumName": "Khat - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ea/01/29/ea012994-51e8-6883-e1e1-c71fdd51754f/5026854264479.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1839416338,
    "title": "Deewane",
    "trackName": "Deewane (feat. BIR)",
    "artistName": "Navaan Sandhu",
    "albumName": "House Navior",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4e/0c/d2/4e0cd29d-f2c3-0d41-c33e-9ab5c9acf396/25UM1IM43859.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 6815217781,
    "title": "Rathinamo (Female Version)",
    "trackName": "Rathinamo (Female Version)",
    "artistName": "Saurav Srisan & Tanisha Gnanavel",
    "albumName": "Rathinamo (Female Version) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/75/57/ae/7557ae9a-a44e-6efc-7e3c-7f280c933bff/882197580165.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1648624479,
    "title": "Wo Noor",
    "trackName": "Wo Noor",
    "artistName": "AP Dhillon",
    "albumName": "Two Hearts Never Break the Same - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/67/37/31/67373108-1018-da3f-7220-4515137e5e5e/859766525070_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1879493592,
    "title": "Bairan",
    "trackName": "Bairan",
    "artistName": "Banjaare",
    "albumName": "Bairan - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3c/bd/01/3cbd01ad-1bbd-14b5-fb72-1d61c101d49d/821530642238.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 6794313992,
    "title": "Pesamale",
    "trackName": "Pesamale",
    "artistName": "Siri Xander & Arra Aria Khayal",
    "albumName": "Pesamale - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9c/9f/b9/9c9fb91e-c95e-1c36-6540-70dca74ba15b/196874634868.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1826879563,
    "title": "Manjha",
    "trackName": "Manjha",
    "artistName": "Vishal Mishra",
    "albumName": "Manjha - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b1/7a/6c/b17a6c7e-ac70-c919-a120-6ebce39b383d/3616404272584_Cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1758669726,
    "title": "Jo Tum Mere Ho",
    "trackName": "Jo Tum Mere Ho",
    "artistName": "Anuv Jain",
    "albumName": "Jo Tum Mere Ho - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/37/cddf37f9-9794-175e-d68f-272c8a3853b2/24UMGIM79558.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1792366467,
    "title": "Afsos",
    "trackName": "Afsos",
    "artistName": "Anuv Jain & AP Dhillon",
    "albumName": "Afsos - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/a8/87/90a88741-3e5c-4dd9-3d90-01cd3e602418/25UMGIM06397.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 6834293449,
    "title": "Tu Keh De Toh",
    "trackName": "Tu Keh De Toh (From \"Call Me Bae - Season 2\")",
    "artistName": "Anuv Jain",
    "albumName": "Tu Keh De Toh (From \"Call Me Bae - Season 2\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/60/1b/32/601b3237-4f0d-8c9c-74a7-1f51692a9d12/196874991688.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1708026408,
    "title": "Gul",
    "trackName": "Gul",
    "artistName": "Anuv Jain",
    "albumName": "Gul - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7a/4a/f7/7a4af7ac-fc6c-7c8c-83fd-ff3d6fbd08a5/23UM1IM11084.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1858017679,
    "title": "Inaam",
    "trackName": "Inaam",
    "artistName": "Anuv Jain",
    "albumName": "Inaam - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/10/62/00/106200d4-df06-2538-92f4-29b076763610/25UM2IM00589.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1710156740,
    "title": "Riha",
    "trackName": "Riha",
    "artistName": "Anuv Jain",
    "albumName": "Riha - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/04/28/460428f4-f983-3292-b5c9-49e04039db57/23UM1IM18507.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1718278234,
    "title": "Pehle Bhi Main",
    "trackName": "Pehle Bhi Main",
    "artistName": "Vishal Mishra & Raj Shekhar",
    "albumName": "ANIMAL (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/db/ad/5e/dbad5e8b-0bee-d962-92d4-021c90e375ac/8902894362092_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1505476843,
    "title": "Aaj Bhi",
    "trackName": "Aaj Bhi",
    "artistName": "Vishal Mishra",
    "albumName": "Aaj Bhi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/85/84/7b/85847b73-12ea-929e-eef8-e3cc279e0d0a/20UMGIM20306.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1834926003,
    "title": "Deewaniyat",
    "trackName": "Deewaniyat (From \"Ek Deewane Ki Deewaniyat\") [Original Soundtrack]",
    "artistName": "Vishal Mishra, Kaushik-Guddu & Kunaal Vermaa",
    "albumName": "Deewaniyat (From \"Ek Deewane Ki Deewaniyat\") [Original Soundtrack] - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/44/39/07/44390794-4d83-526f-c7a4-3a9d6db91205/198704687532_Cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1529866493,
    "title": "Jaan Ban Gaye",
    "trackName": "Jaan Ban Gaye",
    "artistName": "Mithoon, Vishal Mishra & Asees Kaur",
    "albumName": "Khuda Haafiz (Original Motion Picture Soundtrack) - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/23/65/df/2365df8c-6dda-8cd1-af39-9a48b5439bbb/840780183179.png/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1677934771,
    "title": "Janiye [feat. Rashmeet Kaur]",
    "trackName": "Janiye (From the Netflix Film \"Chor Nikal Ke Bhaga\") [feat. Rashmeet Kaur]",
    "artistName": "Vishal Mishra",
    "albumName": "Janiye (feat. Rashmeet Kaur) [From the Netflix Film \"Chor Nikal Ke Bhaga\"]  - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b3/79/f8/b379f848-d340-a52e-8222-ab9d27044d12/810123161041.png/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1468448746,
    "title": "Pehla Pyaar",
    "trackName": "Pehla Pyaar",
    "artistName": "Vishal Mishra & Armaan Malik",
    "albumName": "Kabir Singh (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1455613249,
    "title": "Nai Lagda",
    "trackName": "Nai Lagda",
    "artistName": "Vishal Mishra & Asees Kaur",
    "albumName": "Notebook (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0f/86/b7/0f86b710-f648-e8c2-69e1-3bb6c9b99acd/8902894360715_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1868935776,
    "title": "Ghar Kab Aaoge",
    "trackName": "Ghar Kab Aaoge",
    "artistName": "Anu Malik, Mithoon, Sonu Nigam, Arijit Singh, Roop Kumar Rathod, Vishal Mishra, Diljit Dosanjh, Javed Akhtar & Manoj Muntashir",
    "albumName": "BORDER 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/95/7d/43/957d4338-b639-392b-c899-22d38b5917ef/8902894362795_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1570754917,
    "title": "Teri Hogaiyaan",
    "trackName": "Teri Hogaiyaan",
    "artistName": "Vishal Mishra",
    "albumName": "Broken but Beautiful Season 2 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/b2/b5/05b2b5a8-b7ba-4e9e-3121-e1ed208f7990/840214407581.png/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1463007377,
    "title": "Sajna Ve",
    "trackName": "Sajna Ve",
    "artistName": "Vishal Mishra & Lisa Mishra",
    "albumName": "Sajna Ve - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/cb/a1/db/cba1dbce-d6e2-28bb-ecc2-d03dccb3de97/19UMGIM42521.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1843041058,
    "title": "Pyar Ho",
    "trackName": "Pyar Ho",
    "artistName": "Vishal Mishra & Sunidhi Chauhan",
    "albumName": "Munna Michael (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/69/d5/4669d521-be36-9110-e0f3-349182097f87/196871087162.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1868935778,
    "title": "Jaate Hue Lamhon",
    "trackName": "Jaate Hue Lamhon",
    "artistName": "Anu Malik, Mithoon, Vishal Mishra, Roop Kumar Rathod & Javed Akhtar",
    "albumName": "BORDER 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/95/7d/43/957d4338-b639-392b-c899-22d38b5917ef/8902894362795_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1862497513,
    "title": "Oru Pere Varalaaru",
    "trackName": "Oru Pere Varalaaru (From \"Jana Nayagan\")",
    "artistName": "Anirudh Ravichander, Vishal Mishra & Vivek",
    "albumName": "Oru Pere Varalaaru (From \"Jana Nayagan\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d5/e8/2f/d5e82f3e-f7d0-9294-9082-c23a6be3795e/8903431167262_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1688136670,
    "title": "Zihaal e Miskin",
    "trackName": "Zihaal e Miskin",
    "artistName": "Javed-Mohsin, Vishal Mishra & Shreya Ghoshal",
    "albumName": "Zihaal e Miskin - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e1/d9/b0/e1d9b019-8742-a1c0-e76b-6d3acea0f128/23UMGIM48395.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 6774104086,
    "title": "Massa Massa",
    "trackName": "Massa Massa",
    "artistName": "A.R. Rahman, Vishal Mishra & Anantha Sriram",
    "albumName": "Peddi (Original Motion Picture Soundtrack) - TELUGU",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/55/36/4f/55364f82-ce0b-eff7-83ee-e8542ca4c119/8903431148698_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1846522113,
    "title": "Qubool",
    "trackName": "Qubool (From \"Haq\")",
    "artistName": "Armaan Khan, Vishal Mishra & Kaushal Kishore",
    "albumName": "Qubool (From \"Haq\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/20/4b/56/204b569a-0463-aacc-e239-952a830e5935/8902633376465.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1689874977,
    "title": "Naseeb Se",
    "trackName": "Naseeb Se (From \"Satyaprem Ki Katha\")",
    "artistName": "Payal Dev, Vishal Mishra & A.M.Turaz",
    "albumName": "Naseeb Se (From \"Satyaprem Ki Katha\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/d6/2b/36d62b8c-3a08-edef-3d0e-4e6b3be0f8a9/8903431941824_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1110838005,
    "title": "Wajah Tum Ho",
    "trackName": "Wajah Tum Ho",
    "artistName": "Armaan Malik",
    "albumName": "Hate Story 3 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music18/v4/80/c5/98/80c598f3-a4ef-4bd9-85b2-f6ba0381e276/8902894357517_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1157913729,
    "title": "Bol Do Na Zara",
    "trackName": "Bol Do Na Zara",
    "artistName": "Armaan Malik",
    "albumName": "Azhar (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/2f/1e/332f1e03-4cc1-85b7-c23d-1de5802b9b94/8902894358057_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1590811216,
    "title": "Jugnu",
    "trackName": "Jugnu (feat. Nikhita Gandhi)",
    "artistName": "Badshah",
    "albumName": "Jugnu (feat. Nikhita Gandhi) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/26/45/c0/2645c0f9-5e3f-99c3-70f4-a77d026d09df/21UM1IM28612.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1428384017,
    "title": "She Move It Like",
    "trackName": "She Move It Like",
    "artistName": "Badshah",
    "albumName": "ONE (Original Never Ends)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/22/d2/a0/22d2a059-7a78-baaf-9f8b-5c515aebe086/886447271155.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1220804814,
    "title": "Mercy",
    "trackName": "Mercy",
    "artistName": "Badshah",
    "albumName": "Mercy - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/30/1c/f4/301cf45f-2f7a-c97e-d024-72969b225c28/886446441559.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1778683223,
    "title": "Morni",
    "trackName": "Morni",
    "artistName": "Badshah & Sharvi Yadav",
    "albumName": "Morni - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2f/bd/0e/2fbd0e97-fd41-0355-6da7-00f587e7cee8/198846896427.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1088788681,
    "title": "Kar Gayi Chull",
    "trackName": "Kar Gayi Chull",
    "artistName": "Badshah, Amaal Mallik, Fazilpuria, Sukriti Kakar & Neha Kakkar",
    "albumName": "Kapoor & Sons (Since 1921) [Original Motion Picture Soundtrack]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b9/ec/4e/b9ec4e53-c55a-3f64-f6c2-92e72dcaec50/886445771978.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1474369297,
    "title": "Koka",
    "trackName": "Koka",
    "artistName": "Jasbir Jassi, Badshah & Dhvani Bhanushali",
    "albumName": "Khandaani Shafakhana (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/e3/6b/99e36bb3-862a-33dc-8e1b-0138e8444003/8902894360876_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1736449719,
    "title": "God Damn",
    "trackName": "God Damn",
    "artistName": "Badshah, Karan Aujla & Hiten",
    "albumName": "Ek Tha Raja",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a9/c7/32/a9c732cc-d880-1ee4-ff22-d01593ac6341/24UMGIM22464.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1529455007,
    "title": "Tareefan",
    "trackName": "Tareefan",
    "artistName": "QARAN & Badshah",
    "albumName": "Veere Di Wedding (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8a/3d/fd/8a3dfd29-1226-10a9-31bf-bf8cdf64c894/840780181311.png/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1669799585,
    "title": "Sanak",
    "trackName": "Sanak",
    "artistName": "Badshah",
    "albumName": "3:00 AM Sessions",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/38/46/04/3846040d-a14c-6079-b224-3b0ff6faa32e/23UMGIM09452.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1474369298,
    "title": "Sheher Ki Ladki",
    "trackName": "Sheher Ki Ladki",
    "artistName": "Badshah, Tulsi Kumar, Abhijeet & Chandra Dixit",
    "albumName": "Khandaani Shafakhana (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/e3/6b/99e36bb3-862a-33dc-8e1b-0138e8444003/8902894360876_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1828163415,
    "title": "AZUL",
    "trackName": "AZUL",
    "artistName": "Guru Randhawa, Gurjit Gill & Lavish Dhiman",
    "albumName": "AZUL - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c6/64/ef/c664efc4-50b7-2a11-e93a-0a031c2ae361/5021732887825.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1802869031,
    "title": "Sirra",
    "trackName": "Sirra",
    "artistName": "Guru Randhawa, Kiran Bajwa & Rony Ajnali",
    "albumName": "WITHOUT PREJUDICE",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/ac/3b/26ac3b10-0237-e46c-14af-b28abf60f0e1/5021732749444.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1802869035,
    "title": "Qatal",
    "trackName": "Qatal",
    "artistName": "Guru Randhawa, Sanjoy & Gill Machhrai",
    "albumName": "WITHOUT PREJUDICE",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/ac/3b/26ac3b10-0237-e46c-14af-b28abf60f0e1/5021732749444.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1870844580,
    "title": "DOPAMINE",
    "trackName": "DOPAMINE",
    "artistName": "Guru Randhawa",
    "albumName": "DOPAMINE - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ac/cd/28/accd2853-4e8d-f5fc-fe99-411af37c82be/5026854586397.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1851456236,
    "title": "SHKINI",
    "trackName": "SHKINI",
    "artistName": "Guru Randhawa, Kiran Bajwa, Gill Machhrai & Rony Ajnali",
    "albumName": "SHKINI - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f1/b6/ef/f1b6ef37-8626-54bb-1c24-939974ea5824/5026854217727.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1417043675,
    "title": "Ishare Tere",
    "trackName": "Ishare Tere",
    "artistName": "Guru Randhawa & Dhvani Bhanushali",
    "albumName": "Ishare Tere - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6a/73/c2/6a73c257-113d-4b2b-6f80-a45d8d1b70f8/8903431682161_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1229021047,
    "title": "Suit Suit",
    "trackName": "Suit Suit (feat. Arjun)",
    "artistName": "Guru Randhawa, Rajat Nagpal & Intense",
    "albumName": "Hindi Medium (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bd/25/9a/bd259a04-aee2-9b60-0631-a7de4e3cfa4a/8902894358989_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 6790828738,
    "title": "FINE SHYT",
    "trackName": "FINE SHYT",
    "artistName": "Guru Randhawa",
    "albumName": "FINE SHYT - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b4/e3/24/b4e32440-f738-62bd-dacc-5f758d8e90f5/1200214479725.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1838923448,
    "title": "PERFECT",
    "trackName": "PERFECT (From \"Sunny Sanskari Ki Tulsi Kumari\")",
    "artistName": "Guru Randhawa, Gill Machhrai, Rony Ajnali & Dilmaan",
    "albumName": "PERFECT (From \"Sunny Sanskari Ki Tulsi Kumari\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3d/45/06/3d45063e-bf2c-8ca2-852c-2af27cb6d689/196873590486.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1348996915,
    "title": "Kaun Nachdi",
    "trackName": "Kaun Nachdi",
    "artistName": "Guru Randhawa & Neeti Mohan",
    "albumName": "Sonu Ke Titu Ki Sweety (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/81/a5/b0/81a5b084-89f7-7ed8-372e-aefd67504922/8902894360074_cover.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1712956348,
    "title": "Tu Jaana Na Piya",
    "trackName": "Tu Jaana Na Piya",
    "artistName": "King",
    "albumName": "NEW LIFE",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d6/89/65/d689655a-f8dc-c975-a6a2-31f401f0afbe/5054197889585.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1710154752,
    "title": "Maula",
    "trackName": "Maula",
    "artistName": "Anuv Jain",
    "albumName": "Maula - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b1/9d/f6/b19df6ab-1529-a30b-ed03-86204838d1dc/23UM1IM18501.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1710155755,
    "title": "Mishri",
    "trackName": "Mishri",
    "artistName": "Anuv Jain",
    "albumName": "Mishri - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/22/ff/64/22ff64d0-9ef6-1d89-b4df-88531b761675/23UM1IM18504.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1710704013,
    "title": "Alag Aasmaan (Acoustic)",
    "trackName": "Alag Aasmaan (Acoustic)",
    "artistName": "Anuv Jain",
    "albumName": "Alag Aasmaan (Acoustic) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/67/fc/c7/67fcc7e0-2307-c4a0-b751-0ecc01e64323/23UM1IM18509.rgb.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1747916344,
    "title": "Soni Soni",
    "trackName": "Soni Soni (From \"Ishq Vishk Rebound\")",
    "artistName": "Darshan Raval, Jonita Gandhi & Rochak Kohli",
    "albumName": "Soni Soni (From \"Ishq Vishk Rebound\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/84/48/fe84483c-c0bd-4f40-c461-9de1d53ce52b/8901854101306.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1790624920,
    "title": "Sajna",
    "trackName": "Sajna",
    "artistName": "Darshan Raval, Aditya Gadhvi & Hansika Pareek",
    "albumName": "Sajna - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/28/19/aa/2819aaaf-fb1c-ce0c-d3d1-2e609a03af1a/5021732618177.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1844059327,
    "title": "Nafrat",
    "trackName": "Nafrat",
    "artistName": "Darshan Raval",
    "albumName": "I Loved You - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/40/e7/93/40e7933c-bc9e-2e14-6daa-5c876e62360f/5026854088631.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1435452368,
    "title": "Do Din",
    "trackName": "Do Din",
    "artistName": "Darshan Raval",
    "albumName": "Do Din - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/b6/9d/f4/b69df464-cf83-6e41-055b-41bbb4f326f7/886447239049.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1700391162,
    "title": "Mannat",
    "trackName": "Mannat",
    "artistName": "Darshan Raval & Prakriti Kakar",
    "albumName": "Dard",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/99/e5/8f/99e58f0f-c2f9-f8f7-66d3-e4730b953a37/5054197772504.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1611868439,
    "title": "Goriye",
    "trackName": "Goriye",
    "artistName": "Darshan Raval",
    "albumName": "Goriye - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/92/ed/0b/92ed0b10-6061-3082-f989-ba0af47ed511/190296202070.jpg/300x300bb.jpg",
    "category": "desi-pop"
  },
  {
    "id": 1581006912,
    "title": "Lover",
    "trackName": "Lover",
    "artistName": "Diljit Dosanjh",
    "albumName": "MoonChild Era",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8a/89/e4/8a89e445-d2c6-f8ac-a828-27818b0c1afe/859749638209_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1687649562,
    "title": "Cheques",
    "trackName": "Cheques",
    "artistName": "Shubh",
    "albumName": "Still Rollin",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dc/46/a9/dc46a9c9-794e-2d7a-1afb-97eb4ae0fff6/197188915704.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1635085707,
    "title": "No Love",
    "trackName": "No Love",
    "artistName": "Shubh",
    "albumName": "No Love - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a7/b3/80/a7b380b9-9e29-1642-566e-d1ca4b920886/196776912972.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1639343742,
    "title": "So High",
    "trackName": "So High",
    "artistName": "Sidhu Moose Wala",
    "albumName": "So High - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1b/6e/74/1b6e74cd-b93a-5dd9-e7a2-c7623df73d10/cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1723166181,
    "title": "Lahore",
    "trackName": "Lahore (From \"Lahore\")",
    "artistName": "Guru Randhawa",
    "albumName": "All Time Hits Guru Randhawa Birthday Special",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/10/5e/07105e5c-533b-d6c6-6374-15dfd05b564e/8903431895608_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1697533821,
    "title": "Bachke Bachke",
    "trackName": "Bachke Bachke (feat. Yarah)",
    "artistName": "Karan Aujla & Ikky",
    "albumName": "Making Memories",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6814002647,
    "title": "Ashke",
    "trackName": "Ashke",
    "artistName": "Karan Aujla & MXRCI",
    "albumName": "AUJLA SZN 1 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f7/6d/78/f76d78c5-cc9c-f2d6-8603-ba690eaa5c7d/5064089826918_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6814002652,
    "title": "Straight Up",
    "trackName": "Straight Up",
    "artistName": "Karan Aujla & MXRCI",
    "albumName": "AUJLA SZN 1 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f7/6d/78/f76d78c5-cc9c-f2d6-8603-ba690eaa5c7d/5064089826918_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1753101077,
    "title": "Antidote",
    "trackName": "Antidote",
    "artistName": "Karan Aujla",
    "albumName": "Four Me (Apple Music Edition) - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c2/ce/a0/c2cea088-dbde-43db-346f-e536058fdcfb/5063483978438_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1697533818,
    "title": "Softly",
    "trackName": "Softly",
    "artistName": "Karan Aujla & Ikky",
    "albumName": "Making Memories",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6827995906,
    "title": "Never Left",
    "trackName": "Never Left",
    "artistName": "Shubh",
    "albumName": "Never Left - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/93/60/a3/9360a387-f21a-cd34-83d9-3868dbd71074/711641173113.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1829591983,
    "title": "For A Reason",
    "trackName": "For A Reason",
    "artistName": "Karan Aujla & Ikky",
    "albumName": "P-POP CULTURE",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/06/bd/e1/06bde161-335b-87fa-650a-f0d04bd9f55d/5021732889621.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6782573111,
    "title": "Low Fade",
    "trackName": "Low Fade",
    "artistName": "Karan Aujla & MXRCI",
    "albumName": "Low Fade - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/c5/90/57c590ec-7991-aab9-f3a9-59ae74e8ed96/5064020420892_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1658012467,
    "title": "On Top",
    "trackName": "On Top",
    "artistName": "Karan Aujla",
    "albumName": "On Top - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ca/87/d4/ca87d416-2021-0eb1-f36a-fe01998c738d/5059950896060_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1829591922,
    "title": "I Really Do...",
    "trackName": "I Really Do...",
    "artistName": "Karan Aujla & Ikky",
    "albumName": "P-POP CULTURE",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/06/bd/e1/06bde161-335b-87fa-650a-f0d04bd9f55d/5021732889621.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1745062759,
    "title": "Winning Speech",
    "trackName": "Winning Speech",
    "artistName": "Karan Aujla & MXRCI",
    "albumName": "Winning Speech - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/48/7c/36/487c3668-f7a4-4b1a-e09e-c74dae124dd9/5063483578089_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6826504729,
    "title": "POKITO",
    "trackName": "POKITO",
    "artistName": "Daddy Yankee & Diljit Dosanjh",
    "albumName": "LA POSTAL",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/2a/a4/242aa4a9-808f-419f-289c-e7e6a1517c08/4593106.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1720291332,
    "title": "Indeed",
    "trackName": "Indeed",
    "artistName": "Cheema Y & Gur Sidhu",
    "albumName": "Dripster - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/14/65/97/14659756-cd2c-ac5c-af3e-d3752eee018c/cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1714131823,
    "title": "Lalkara",
    "trackName": "Lalkara (feat. Sultaan)",
    "artistName": "Diljit Dosanjh",
    "albumName": "Ghost",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/94/80/be/9480bec1-6ca2-5bae-a7da-d0e7c45633ce/859779847831_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1523521149,
    "title": "G.O.A.T.",
    "trackName": "G.O.A.T.",
    "artistName": "Diljit Dosanjh",
    "albumName": "G.O.A.T.",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d2/89/ac/d289ac98-749e-3822-6b6e-b06aa4815715/859740651597_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6836980332,
    "title": "Kufar",
    "trackName": "Kufar",
    "artistName": "Diljit Dosanjh, Mixsingh & Raj Ranjodh",
    "albumName": "AURA",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/78/e2/47/78e247f6-1785-4f67-aa12-e661e2842807/859751407695_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1523521607,
    "title": "Born to Shine",
    "trackName": "Born to Shine",
    "artistName": "Diljit Dosanjh",
    "albumName": "G.O.A.T.",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d2/89/ac/d289ac98-749e-3822-6b6e-b06aa4815715/859740651597_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1883428308,
    "title": "Dealer",
    "trackName": "Dealer",
    "artistName": "Diljit Dosanjh",
    "albumName": "Dealer - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/34/2e/84/342e8467-23ad-5338-95a6-13cfb3db50d7/859733419234_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6836980337,
    "title": "Charmer",
    "trackName": "Charmer",
    "artistName": "Diljit Dosanjh, Avvy Sra & Raj Ranjodh",
    "albumName": "AURA",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/78/e2/47/78e247f6-1785-4f67-aa12-e661e2842807/859751407695_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6836980312,
    "title": "Senorita",
    "trackName": "Senorita",
    "artistName": "Diljit Dosanjh, Mixsingh & Raj Ranjodh",
    "albumName": "AURA",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/78/e2/47/78e247f6-1785-4f67-aa12-e661e2842807/859751407695_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1714131801,
    "title": "Kinni Kinni",
    "trackName": "Kinni Kinni",
    "artistName": "Diljit Dosanjh",
    "albumName": "Ghost",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/94/80/be/9480bec1-6ca2-5bae-a7da-d0e7c45633ce/859779847831_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1437792066,
    "title": "Proper Patola",
    "trackName": "Proper Patola",
    "artistName": "Badshah, Diljit Dosanjh & Aastha Gill",
    "albumName": "Namaste England (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a9/f7/b4/a9f7b4e7-6ec1-5c95-1d56-ec08e038ca5a/886447356036.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1406340645,
    "title": "Ishq Di Baajiyaan",
    "trackName": "Ishq Di Baajiyaan",
    "artistName": "Shankar Ehsaan Loy & Diljit Dosanjh",
    "albumName": "Soorma (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c2/67/75/c26775f4-5e68-e63f-fd40-108a460e2c48/886447198193.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1826786269,
    "title": "Never Fold",
    "trackName": "Never Fold",
    "artistName": "Sidhu Moose Wala",
    "albumName": "No Name - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f1/57/9d/f1579d5f-4e4f-1235-e97c-fa725602c839/810105711448_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6823509781,
    "title": "Kaali Hoodie",
    "trackName": "Kaali Hoodie",
    "artistName": "Sidhu Moose Wala, Bohemia & The Kidd",
    "albumName": "Kaali Hoodie - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2b/38/dd/2b38dd97-85e7-8bc3-fdf9-d004d18b2eee/5064090949392_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1827207515,
    "title": "Levels",
    "trackName": "Levels",
    "artistName": "Sidhu Moose Wala & Sunny Malton",
    "albumName": "Levels - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/46/cf/b4/46cfb402-6d5c-1e4a-9efd-5759553ec8b8/810105713220_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1456507591,
    "title": "East Side Flow",
    "trackName": "East Side Flow",
    "artistName": "Sidhu Moose Wala",
    "albumName": "East Side Flow - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/68/0e/8b/680e8bf5-29cd-55b0-7620-936b381814c1/cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1856884833,
    "title": "Barota",
    "trackName": "Barota",
    "artistName": "Sidhu Moose Wala & The Kidd",
    "albumName": "Barota - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d0/91/7f/d0917fb7-3816-d8dc-2456-442983a53cb0/5063858512625_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6814478957,
    "title": "Ghostface Killah",
    "trackName": "Ghostface Killah",
    "artistName": "Sidhu Moose Wala & MXRCI",
    "albumName": "Ghostface Killah - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/37/ca/50/37ca5028-a2dc-975b-6366-6427c2b81761/5064089945930_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1477018499,
    "title": "Same Beef",
    "trackName": "Same Beef",
    "artistName": "Bohemia & Sidhu Moose Wala",
    "albumName": "Same Beef - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fe/c6/13/fec61345-4a34-8056-aff4-77d7ee71fabf/SameBeef_Inlay-_Itunes.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 6764141456,
    "title": "Eyes on Me",
    "trackName": "Eyes on Me",
    "artistName": "Sidhu Moose Wala & The Kidd",
    "albumName": "Eyes on Me - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4a/aa/11/4aaa112c-0264-4e79-361b-1aec3b9bea3f/5063960816505_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1826785702,
    "title": "The Last Ride",
    "trackName": "The Last Ride",
    "artistName": "Sidhu Moose Wala",
    "albumName": "The Last Ride - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/db/2c/84/db2c84f2-f42f-af93-2709-6158995f9f72/810105712582_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1439435011,
    "title": "Jatt Da Muqabala",
    "trackName": "Jatt Da Muqabala",
    "artistName": "Sidhu Moose Wala",
    "albumName": "Pbx 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0c/a2/53/0ca25374-100d-1362-9a8c-d3f253423982/8903431696588_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1806787026,
    "title": "Pal Pal",
    "trackName": "Pal Pal (with Talwiinder)",
    "artistName": "AFUSIC, Talwiinder & AliSoomroMusic",
    "albumName": "Pal Pal (with Talwiinder) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4d/62/fd/4d62fd50-5bb8-4449-7a07-27a749dbde66/25UMGIM53708.rgb.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1675062042,
    "title": "Khayaal",
    "trackName": "Khayaal",
    "artistName": "Talwiinder & NDS",
    "albumName": "Khayaal - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/da/22/b8/da22b844-b237-c414-2111-79276423c340/196589947482.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1796740779,
    "title": "Haseen",
    "trackName": "Haseen",
    "artistName": "Talwiinder, NDS & Rippy Grewal",
    "albumName": "Haseen - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c4/14/ee/c414ee9a-75a6-9593-4fd4-0c73c67b42cb/199282279065_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1693695389,
    "title": "Gallan 4",
    "trackName": "Gallan 4",
    "artistName": "Talwiinder",
    "albumName": "Gallan 4 - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/72/13/64/72136446-5b31-3f15-29e0-a15844e5ae58/197630188816_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1711915301,
    "title": "Dhundhala",
    "trackName": "Dhundhala",
    "artistName": "Yashraj, Dropped Out & Talwiinder",
    "albumName": "Dhundhala - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/30/63/c3/3063c36c-8537-ce66-4451-e9de6c2a13dc/23UM1IM04836.rgb.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1755529616,
    "title": "Tu",
    "trackName": "Tu",
    "artistName": "Talwiinder & Sanjoy",
    "albumName": "Tu - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d3/bb/9d/d3bb9dc4-fb49-52a2-b5e6-ae91ee1cedad/8903431005502_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1693802908,
    "title": "Nasha",
    "trackName": "Nasha",
    "artistName": "Talwiinder & Vision",
    "albumName": "Nasha - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/00/88/7d/00887d06-08cb-917c-756b-369dd48b52e8/196777644223_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1694090710,
    "title": "Unforgettable",
    "trackName": "Unforgettable",
    "artistName": "Talwiinder",
    "albumName": "Unforgettable - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1d/22/fd/1d22fdf7-c6a6-30d1-eae3-c0296d60d712/840090816019.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1819981707,
    "title": "At Peace",
    "trackName": "At Peace",
    "artistName": "Karan Aujla & Ikky",
    "albumName": "At Peace - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4f/d6/06/4fd60662-385f-cfc4-e73c-2832ebd58d2d/5021732829061.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1779786209,
    "title": "Wavy",
    "trackName": "Wavy",
    "artistName": "Karan Aujla & Jay Trak",
    "albumName": "Wavy - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/df/5a/cddf5a8c-464e-3958-cf4a-7fac9e490aa5/5063616597178_cover.jpg/300x300bb.jpg",
    "category": "punjabi"
  },
  {
    "id": 1550962479,
    "title": "cold/mess",
    "trackName": "cold/mess (on piano)",
    "artistName": "Prateek Kuhad",
    "albumName": "cold/mess (on piano) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/18/3b/41/183b41be-ead1-c24c-62eb-1ac0cc1d69c1/075679791252.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6803473169,
    "title": "Joy of Little Things",
    "trackName": "Joy of Little Things",
    "artistName": "When Chai Met Toast",
    "albumName": "Joy of Little Things - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7c/98/ae/7c98aed0-1301-12df-0579-e5a708dd3102/197189936135.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 985088875,
    "title": "Mere Gully Mein",
    "trackName": "Mere Gully Mein (feat. Naezy)",
    "artistName": "DIVINE",
    "albumName": "Mere Gully Mein (feat. Naezy) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/21/ee/70/21ee70f8-39d9-5c2d-6a84-bcedc34f5358/886445206005.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1725168071,
    "title": "100 Million",
    "trackName": "100 Million",
    "artistName": "DIVINE & Karan Aujla",
    "albumName": "100 Million - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bf/e1/19/bfe1195d-18c3-4f40-0a18-19beef6de0ca/197190848762.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1404247657,
    "title": "Kaam 25 (Sacred Games)",
    "trackName": "Kaam 25 (Sacred Games)",
    "artistName": "DIVINE",
    "albumName": "Kaam 25 (Sacred Games) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/54/34/4c/54344c00-417f-484a-0006-fc792abf3e21/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1481978284,
    "title": "Chal Bombay",
    "trackName": "Chal Bombay",
    "artistName": "DIVINE",
    "albumName": "Kohinoor",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b4/1e/0e/b41e0e6b-4808-171c-52fd-62282e366a5b/19UMGIM88313.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1481978102,
    "title": "Kohinoor",
    "trackName": "Kohinoor",
    "artistName": "DIVINE",
    "albumName": "Kohinoor",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b4/1e/0e/b41e0e6b-4808-171c-52fd-62282e366a5b/19UMGIM88313.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1535314471,
    "title": "Mirchi",
    "trackName": "Mirchi (feat. MC Altaf, Stylo G & Phenom)",
    "artistName": "DIVINE",
    "albumName": "Mirchi (feat. MC Altaf, Stylo G & Phenom) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ae/a1/1b/aea11bad-10ae-96d4-5212-e3b0db53bedd/20UMGIM89461.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1448676833,
    "title": "Teesri Manzil",
    "trackName": "Teesri Manzil",
    "artistName": "DIVINE",
    "albumName": "Teesri Manzil - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7e/d4/fc/7ed4fc0b-0f52-928e-f092-619c43c1797c/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6838170472,
    "title": "Sher Aaya Sher",
    "trackName": "Sher Aaya Sher",
    "artistName": "DIVINE & Major C",
    "albumName": "Main Character Energy",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/da/41/5cda412e-bbd0-07e0-d211-11aa76ab2a6e/8909024126951.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6838170481,
    "title": "Apna Time Aayega",
    "trackName": "Apna Time Aayega",
    "artistName": "Ranveer Singh, Dub Sharma & DIVINE",
    "albumName": "Main Character Energy",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/da/41/5cda412e-bbd0-07e0-d211-11aa76ab2a6e/8909024126951.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1826848605,
    "title": "Moosedrilla",
    "trackName": "Moosedrilla (feat. DIVINE)",
    "artistName": "Sidhu Moose Wala & Divine",
    "albumName": "Moosetape",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1730005006,
    "title": "Top Class / Overseas",
    "trackName": "Top Class / Overseas",
    "artistName": "DIVINE & Karan Aujla",
    "albumName": "Street Dreams",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/53/fc/12/53fc12dd-e441-88b0-b539-b5e4728bb5c9/198391098505.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1696262100,
    "title": "Chorni",
    "trackName": "Chorni",
    "artistName": "DIVINE & Sidhu Moose Wala",
    "albumName": "Chorni - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d8/b9/a4/d8b9a47c-fc66-7d56-81cd-1e529b35f068/197189351020.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1529556360,
    "title": "Azadi",
    "trackName": "Azadi",
    "artistName": "Dub Sharma & DIVINE",
    "albumName": "Gully Boy (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3a/5e/60/3a5e6034-8755-f0bf-d4f0-c7f96d3b45bb/8718857674948.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1736449912,
    "title": "O’Sajna",
    "trackName": "O’Sajna",
    "artistName": "Badshah, DIVINE & Nikhita Gandhi",
    "albumName": "Ek Tha Raja",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a9/c7/32/a9c732cc-d880-1ee4-ff22-d01593ac6341/24UMGIM22464.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1550578437,
    "title": "Udd Gaye",
    "trackName": "Udd Gaye",
    "artistName": "Ritviz",
    "albumName": "Ved - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/e5/6f/e2e56f3d-0491-338e-c8d2-0f147b07d092/859745100557_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1550578623,
    "title": "Sage",
    "trackName": "Sage",
    "artistName": "Ritviz",
    "albumName": "Ved - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/e5/6f/e2e56f3d-0491-338e-c8d2-0f147b07d092/859745100557_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1588806679,
    "title": "Baaraat",
    "trackName": "Baaraat",
    "artistName": "Ritviz & Nucleya",
    "albumName": "Baaraat - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b2/86/a6/b286a68d-3b65-499f-03f0-6f32d96f7eb7/859750782298_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1642496008,
    "title": "Liggi",
    "trackName": "Liggi",
    "artistName": "Ritviz",
    "albumName": "Dev - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bd/eb/35/bdeb3504-9d07-c9d3-ef2f-2d384c333586/859765386078_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1642495805,
    "title": "Chalo Chalein",
    "trackName": "Chalo Chalein (feat. Seedhe Maut)",
    "artistName": "Ritviz",
    "albumName": "Dev - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bd/eb/35/bdeb3504-9d07-c9d3-ef2f-2d384c333586/859765386078_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1550578440,
    "title": "Jeet",
    "trackName": "Jeet",
    "artistName": "Ritviz",
    "albumName": "Ved - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/e5/6f/e2e56f3d-0491-338e-c8d2-0f147b07d092/859745100557_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1642496368,
    "title": "Pran",
    "trackName": "Pran",
    "artistName": "Ritviz",
    "albumName": "Dev - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bd/eb/35/bdeb3504-9d07-c9d3-ef2f-2d384c333586/859765386078_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1643119337,
    "title": "Aaj Na",
    "trackName": "Aaj Na",
    "artistName": "Ritviz",
    "albumName": "Mimmi",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0e/41/c6/0e41c6ca-50a2-a8f5-7a6f-d3ddfe1b4dce/859765489564_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1588806674,
    "title": "Roz",
    "trackName": "Roz",
    "artistName": "Ritviz & Nucleya",
    "albumName": "Baaraat - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b2/86/a6/b286a68d-3b65-499f-03f0-6f32d96f7eb7/859750782298_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1550578606,
    "title": "Barso",
    "trackName": "Barso",
    "artistName": "Ritviz",
    "albumName": "Ved - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/e5/6f/e2e56f3d-0491-338e-c8d2-0f147b07d092/859745100557_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1519457069,
    "title": "Kasoor",
    "trackName": "Kasoor",
    "artistName": "Prateek Kuhad",
    "albumName": "Kasoor - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/60/d3/e9/60d3e9b3-4991-16bd-1468-ce522245c9e2/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1614528378,
    "title": "Co2",
    "trackName": "Co2",
    "artistName": "Prateek Kuhad",
    "albumName": "The Way That Lovers Do",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/13/b2/5e/13b25e33-746d-9567-0c36-b11af5b55ab0/075679754943.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1529568804,
    "title": "Kho Gaye Hum Kahan",
    "trackName": "Kho Gaye Hum Kahan",
    "artistName": "Jasleen Royal & Prateek Kuhad",
    "albumName": "Baar Baar Dekho (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/14/b8/58/14b85883-40a4-0a2e-de65-130f55726ee6/840780180390.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1230345867,
    "title": "Tum Jab Paas",
    "trackName": "Tum Jab Paas",
    "artistName": "Prateek Kuhad",
    "albumName": "Tum Jab Paas - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/97/ca/db/97cadb6a-980b-d7c4-1b49-81a8f951f348/191773074944.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1082164696,
    "title": "Tune Kaha",
    "trackName": "Tune Kaha",
    "artistName": "Prateek Kuhad",
    "albumName": "Tune Kaha - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c2/5b/cb/c25bcb1f-c237-7999-382c-676c48173e9b/190394248451.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6767305283,
    "title": "Blush",
    "trackName": "Blush",
    "artistName": "Prateek Kuhad",
    "albumName": "Full Moon Chamber",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ac/52/17/ac521772-c951-8b9e-6500-01bb8ae5119c/075679577184.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1571158973,
    "title": "Tere Hi Hum",
    "trackName": "Tere Hi Hum",
    "artistName": "Prateek Kuhad",
    "albumName": "Shehron Ke Raaz - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0a/cc/de/0accdea7-da1c-a195-cd19-a03efee4eab4/075679781130.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1205508494,
    "title": "Dil Beparvah [The Dewarists, Season 5]",
    "trackName": "Dil Beparvah (feat. Dhruv Bhola & Nikhil Vasudevan) [The Dewarists, Season 5]",
    "artistName": "Ankur Tewari & Prateek Kuhad",
    "albumName": "Dil Beparvah (feat. Dhruv Bhola & Nikhil Vasudevan) [The Dewarists, Season 5] - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/94/92/dc/9492dccf-c941-776e-38ae-1881177b7ac1/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1710464678,
    "title": "Choo Lo",
    "trackName": "Choo Lo",
    "artistName": "The Local Train",
    "albumName": "Aalas Ka Pedh",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b4/ab/c3/b4abc3c3-bd25-b8cb-0011-4311e3f9497e/197189936111.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1710464348,
    "title": "Aaoge Tum Kabhi",
    "trackName": "Aaoge Tum Kabhi",
    "artistName": "The Local Train",
    "albumName": "Aalas Ka Pedh",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b4/ab/c3/b4abc3c3-bd25-b8cb-0011-4311e3f9497e/197189936111.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1710464681,
    "title": "Dil Mere",
    "trackName": "Dil Mere",
    "artistName": "The Local Train",
    "albumName": "Aalas Ka Pedh",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b4/ab/c3/b4abc3c3-bd25-b8cb-0011-4311e3f9497e/197189936111.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1710520242,
    "title": "Aaftaab",
    "trackName": "Aaftaab",
    "artistName": "The Local Train",
    "albumName": "Vaaqif",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6e/4c/59/6e4c59e9-342c-3da7-fc09-61959c95dcb5/197189936456.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1710520235,
    "title": "Khudi",
    "trackName": "Khudi",
    "artistName": "The Local Train",
    "albumName": "Vaaqif",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6e/4c/59/6e4c59e9-342c-3da7-fc09-61959c95dcb5/197189936456.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1103771762,
    "title": "O Sanam",
    "trackName": "O Sanam",
    "artistName": "Lucky Ali",
    "albumName": "Sunoh",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/12/81/f2/1281f22f-db57-8519-a2b4-405df48217aa/886445838497.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1364843589,
    "title": "Ek Pal Ka Jeena",
    "trackName": "Ek Pal Ka Jeena",
    "artistName": "Lucky Ali",
    "albumName": "Kaho Naa Pyaar Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/57/a5/e0/57a5e064-f087-e318-582f-27ab8eb71496/192562328149.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1123355617,
    "title": "Hairat",
    "trackName": "Hairat",
    "artistName": "Lucky Ali & Vishal & Shekhar",
    "albumName": "Anjaana Anjaani (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music18/v4/8b/d8/a1/8bd8a190-8b8c-35f8-8573-614428dd6e42/8902894689113_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 316875917,
    "title": "Mausam",
    "trackName": "Mausam",
    "artistName": "Lucky Ali",
    "albumName": "Sifar",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/52/9d/c6/529dc65d-efd9-a4b6-cdeb-07180d3575dd/mzi.sxybrmib.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1130402422,
    "title": "Bekarar",
    "trackName": "Bekarar",
    "artistName": "Lucky Ali",
    "albumName": "Paathshaala (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music60/v4/05/75/9d/05759d51-facb-2e55-4a86-84adcf9c34b7/8902894686877_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1614564917,
    "title": "Intezaar",
    "trackName": "Intezaar",
    "artistName": "Lucky Ali",
    "albumName": "Intezaar - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9d/f2/a9/9df2a9bb-da7e-f91c-0a69-f7ae456b97dd/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 443134288,
    "title": "Saiyyan",
    "trackName": "Saiyyan",
    "artistName": "Kailash Kher",
    "albumName": "Kailasa Jhoomo Re",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/74/f3/9e/74f39e2d-783a-64d1-05bf-081b97336557/886443082052.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 307267107,
    "title": "Teri Deewani",
    "trackName": "Teri Deewani",
    "artistName": "Kailash Kher, Naresh Kamath & Paresh Kamath",
    "albumName": "Kailasa",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/b7/ed/e0/b7ede001-64fa-ce23-a9c6-c36f0a8c5684/888880944832.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1529441498,
    "title": "Allah Ke Bande",
    "trackName": "Allah Ke Bande",
    "artistName": "Kailash Kher",
    "albumName": "Waisa Bhi Hota Hai Part 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3b/07/55/3b075507-02f8-4c28-03eb-e49baac1d488/840780181328.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 431692750,
    "title": "Mumma",
    "trackName": "Mumma",
    "artistName": "Kailash Kher",
    "albumName": "Dasvidaniya (The Best Goodbye Ever) [Original Motion Picture Soundtrack]",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music/8e/b0/51/mzi.gpzhjlfo.tif/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1131692110,
    "title": "Arziyan",
    "trackName": "Arziyan",
    "artistName": "Javed Ali & Kailash Kher",
    "albumName": "Delhi-6 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/fe/21/e2fe21b6-50e6-7b4b-285a-d40394baba4e/8902894628990_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1185100495,
    "title": "Dillagi",
    "trackName": "Dillagi",
    "artistName": "Rahat Fateh Ali Khan, Ustad Nusrat Fateh Ali Khan & Salim-Sulaiman",
    "albumName": "Dillagi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/6c/b3/15/6cb3158e-e106-fb98-b318-a20075efc813/8903431618771_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1182306460,
    "title": "Halka Halka",
    "trackName": "Halka Halka",
    "artistName": "Rahat Fateh Ali Khan, Abhijit Vaghani, Nusrat Fateh Ali Khan & Mujahid Mubarak Ali Khan",
    "albumName": "Halka Halka - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/7d/25/3a/7d253ae7-1bcd-75df-5808-524f9c722a4f/contsched.bqqpgmrf.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6782017875,
    "title": "Dil Pe Zakham",
    "trackName": "Dil Pe Zakham",
    "artistName": "Madhur Sharma, Moin & Nusrat Fateh Ali Khan",
    "albumName": "Dil Pe Zakham - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/56/10/fd/5610fd08-d693-2975-0ec4-fbb51326674c/26UMGIM79023.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1809304735,
    "title": "Tumhe Dillagi",
    "trackName": "Tumhe Dillagi (From \"Raid 2\")",
    "artistName": "Rochak Kohli, Jubin Nautiyal, Nusrat Fateh Ali Khan, Manoj Muntashir & Purnam Allahabadi",
    "albumName": "Tumhe Dillagi (From \"Raid 2\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/30/55/be/3055be78-59a4-0c43-bfd1-055acc8028ff/8903431061966_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6806832707,
    "title": "Sanson Ki Mala",
    "trackName": "Sanson Ki Mala (From “Mirzapur The Movie”)",
    "artistName": "Madhur Sharma, Vaibhav Pani & Nusrat Fateh Ali Khan",
    "albumName": "Mirzapur The Movie (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/18/09/59/18095965-918b-7b56-b033-5d65e294ee23/26UM1IM11924.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1576316290,
    "title": "Maeri",
    "trackName": "Maeri",
    "artistName": "Vickky Agarwal",
    "albumName": "Maeri - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/db/71/73/db717392-cd45-5b6f-5f4f-31b5cba5cebb/859748878989_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1722493842,
    "title": "Nanchaku",
    "trackName": "Nanchaku (feat. MC STAN)",
    "artistName": "Seedhe Maut",
    "albumName": "",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/6e/0b/c5/6e0bc506-e937-ac49-0d06-d61ddde1dec6/dj.qvkijqzy.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804729836,
    "title": "Pnp",
    "trackName": "Pnp",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Bayaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6e/a2/1b/6ea21b60-3155-9aac-fdd8-0579af266a1c/199066651063.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804730030,
    "title": "Kyu",
    "trackName": "Kyu",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Bayaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6e/a2/1b/6ea21b60-3155-9aac-fdd8-0579af266a1c/199066651063.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1698583889,
    "title": "Tofa",
    "trackName": "Tofa",
    "artistName": "Seedhe Maut",
    "albumName": "Tofa - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ca/79/b3/ca79b31d-bdf7-7de2-d2b9-6166403b3981/8445162945097.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1635239737,
    "title": "Sanki",
    "trackName": "Sanki",
    "artistName": "Ikka, Seedhe Maut, Raga & Aghor",
    "albumName": "Nishu",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/09/7c/b1/097cb1b5-7965-4cda-ffcf-77413340a1aa/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804729838,
    "title": "Pankh",
    "trackName": "Pankh (feat. Bawari Basanti)",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Bayaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6e/a2/1b/6ea21b60-3155-9aac-fdd8-0579af266a1c/199066651063.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1531329664,
    "title": "Roshni",
    "trackName": "Roshni",
    "artistName": "Ritviz, Seedhe Maut & Sickflip",
    "albumName": "Roshni - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9b/02/9d/9b029d9e-cbb3-afcb-6c88-a3edced9d298/166.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1513200332,
    "title": "Bag",
    "trackName": "Bag (feat. KR$NA)",
    "artistName": "DIVINE",
    "albumName": "Bag (feat. KR$NA) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/7c/6c/08/7c6c0848-95e4-27bb-e6b0-a483f2a80288/20UMGIM37175.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1529533855,
    "title": "Damn",
    "trackName": "Damn",
    "artistName": "Raftaar & KR$NA",
    "albumName": "Mr. Nair",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d5/a3/d6/d5a3d681-6e77-6960-3177-1d0f23b5d78a/840780170094.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1618910483,
    "title": "High",
    "trackName": "High",
    "artistName": "Deep Kalsi & KR$NA",
    "albumName": "WINNERSCIRCLE - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ca/b0/0b/cab00b14-67c0-317d-1563-612314fcc1b5/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1859131800,
    "title": "Ykwim",
    "trackName": "Ykwim",
    "artistName": "Karan Aujla & KR$NA",
    "albumName": "Ykwim - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/03/9a/e4/039ae414-339c-aadf-0ea9-027687193317/859753069389_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776936956,
    "title": "I Guess",
    "trackName": "I Guess",
    "artistName": "KR$NA",
    "albumName": "I Guess - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d2/5e/7e/d25e7e4c-f25d-3770-54ae-d89821b7b26c/3617052451949.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1549668815,
    "title": "Makasam",
    "trackName": "Makasam",
    "artistName": "KR$NA",
    "albumName": "Makasam - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/24/f3/61/24f3617c-7ecd-95bb-2387-14cbbf332e9f/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6825203336,
    "title": "BUZZ",
    "trackName": "BUZZ",
    "artistName": "Seedhe Maut & KR$NA",
    "albumName": "BUZZ - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ca/46/c9/ca46c9f1-32c6-d520-5378-5240ee20e8f5/711641076612.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6832975466,
    "title": "Mujhe Nahi Chahiye",
    "trackName": "Mujhe Nahi Chahiye",
    "artistName": "Seedhe Maut & KR$NA",
    "albumName": "Don't Try This At Home - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/7a/25/267a2572-0db1-bd70-e522-5a99eb937d6c/711641210054.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6832975478,
    "title": "Please",
    "trackName": "Please",
    "artistName": "KR$NA & Seedhe Maut",
    "albumName": "Don't Try This At Home - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/7a/25/267a2572-0db1-bd70-e522-5a99eb937d6c/711641210054.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6832975482,
    "title": "Wait For A While",
    "trackName": "Wait For A While",
    "artistName": "Seedhe Maut & KR$NA",
    "albumName": "Don't Try This At Home - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/7a/25/267a2572-0db1-bd70-e522-5a99eb937d6c/711641210054.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6832975485,
    "title": "Fillet Mignion",
    "trackName": "Fillet Mignion",
    "artistName": "KR$NA, Seedhe Maut & Raftaar",
    "albumName": "Don't Try This At Home - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/26/7a/25/267a2572-0db1-bd70-e522-5a99eb937d6c/711641210054.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703240868,
    "title": "Luka Chippi",
    "trackName": "Luka Chippi",
    "artistName": "Seedhe Maut & Bandzo3rd",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703241345,
    "title": "Khatta Flow",
    "trackName": "Khatta Flow",
    "artistName": "Seedhe Maut & KR$NA",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776950845,
    "title": "Hola Amigo",
    "trackName": "Hola Amigo",
    "artistName": "KR$NA, Seedhe Maut & Umair",
    "albumName": "FAR FROM OVER - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/f2/96/c6f29642-396f-7bdf-f16d-5fd17d3b13bd/3617226757273.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1671891401,
    "title": "TRAP PRAA",
    "trackName": "TRAP PRAA",
    "artistName": "Raftaar & Prabh Deep",
    "albumName": "PRAA - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/17/2c/01/172c013c-5dc4-19a1-9348-5c94bbf692f9/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804709383,
    "title": "Namastute",
    "trackName": "Namastute",
    "artistName": "Seedhe Maut",
    "albumName": "Namastute - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8c/3c/10/8c3c1016-be7e-666c-225d-00b671fb38e0/199066150108.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1592662506,
    "title": "No Cap",
    "trackName": "No Cap",
    "artistName": "KR$NA",
    "albumName": "No Cap - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/37/cd/83/37cd83d5-92ca-4bb6-1d6e-f6a8c9cfe0bc/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776950763,
    "title": "Prarthana",
    "trackName": "Prarthana",
    "artistName": "KR$NA",
    "albumName": "FAR FROM OVER - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/f2/96/c6f29642-396f-7bdf-f16d-5fd17d3b13bd/3617226757273.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703238430,
    "title": "11K",
    "trackName": "11K",
    "artistName": "Seedhe Maut",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1684708143,
    "title": "Hona Hi Tha",
    "trackName": "Hona Hi Tha (feat. Encore ABJ & dilliboy)",
    "artistName": "Yungsta, Sez on the Beat & Raga",
    "albumName": "MEEN",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c2/c3/8a/c2c38a2f-cf43-1d61-4306-989520d0afe2/197188776039.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6807406167,
    "title": "Galat Karam",
    "trackName": "Galat Karam",
    "artistName": "Panther & Raga",
    "albumName": "Flying Towards The City",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/41/1d/f1/411df198-1c2f-6755-7b9b-9eb99c812f9f/197999868138.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703240477,
    "title": "Swah!",
    "trackName": "Swah!",
    "artistName": "Seedhe Maut & Badshah",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1716611387,
    "title": "Woh Raat",
    "trackName": "Woh Raat",
    "artistName": "Raftaar & KR$NA",
    "albumName": "Woh Raat - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e1/78/24/e17824eb-92c2-84fb-133d-bf147c5e1709/197190456752.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6777991908,
    "title": "Kaha Tak",
    "trackName": "Kaha Tak",
    "artistName": "KR$NA, Jokhay & Umair",
    "albumName": "Time Will Tell - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d9/6c/88/d96c887f-e51d-339d-f1a5-5afb773a34c9/3617057085538.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1633775092,
    "title": "Machayenge 4",
    "trackName": "Machayenge 4",
    "artistName": "KR$NA",
    "albumName": "Machayenge 4 - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/fd/58/bb/fd58bbed-cff6-0a22-73fa-bd110622dd25/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703241338,
    "title": "Joint in the Booth",
    "trackName": "Joint in the Booth",
    "artistName": "Seedhe Maut",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776950519,
    "title": "Still Standing",
    "trackName": "Still Standing",
    "artistName": "KR$NA",
    "albumName": "FAR FROM OVER - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/f2/96/c6f29642-396f-7bdf-f16d-5fd17d3b13bd/3617226757273.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1523718706,
    "title": "101",
    "trackName": "101",
    "artistName": "Seedhe Maut",
    "albumName": "The Indian Hip-Hop Compilation Vol. 2",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6e/3f/c4/6e3fc43e-303d-9f01-ea5b-e3ad421a3381/193436225243_01_img001.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1719944595,
    "title": "No Mercy (Bonus Track)",
    "trackName": "No Mercy (Bonus Track)",
    "artistName": "Deep Kalsi, Raftaar, KR$NA & Karma",
    "albumName": "Tunnel Vision",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f3/63/e7/f363e73b-a1b4-b22a-0641-3d04de6dff3b/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1542201785,
    "title": "3:59 AM",
    "trackName": "3:59 AM",
    "artistName": "DIVINE",
    "albumName": "Punya Paap",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/14/8d/39/148d39c0-62bc-a764-d674-5527600885c2/20UM1IM09596.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804726937,
    "title": "Batti",
    "trackName": "Batti (feat. Ab 17)",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Nayaab",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/41/71/b84171ff-de77-3505-af3d-41a5b8d37fc4/199066166178.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6777991913,
    "title": "Been a While",
    "trackName": "Been a While",
    "artistName": "KR$NA, Talha Anjum & Umair",
    "albumName": "Time Will Tell - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d9/6c/88/d96c887f-e51d-339d-f1a5-5afb773a34c9/3617057085538.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1549669967,
    "title": "Untitled",
    "trackName": "Untitled",
    "artistName": "KR$NA",
    "albumName": "Untitled - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/de/aa/40/deaa40b0-085f-6018-e2ed-ff478b656fc6/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6777991910,
    "title": "NGL",
    "trackName": "NGL",
    "artistName": "KR$NA, Talhah Yunus, Umair & Rovalio",
    "albumName": "Time Will Tell - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d9/6c/88/d96c887f-e51d-339d-f1a5-5afb773a34c9/3617057085538.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1653648061,
    "title": "Baazigar",
    "trackName": "Baazigar",
    "artistName": "DIVINE & Armani White",
    "albumName": "Gunehgar",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/ce/8b/dbce8ba7-aa54-219e-3983-e56ed7852d71/197187441679.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776947317,
    "title": "Fall Off (Interlude)",
    "trackName": "Fall Off (Interlude)",
    "artistName": "KR$NA",
    "albumName": "Still Here",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f0/71/db/f071db1e-833f-b162-2700-44185b7b3c07/3616553919019.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804727479,
    "title": "MMM",
    "trackName": "MMM",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "MMM - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ff/42/f1/ff42f1a1-f5fd-3e4e-8d5e-7b979ec7d316/199066650783.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776936896,
    "title": "Blowing Up",
    "trackName": "Blowing Up",
    "artistName": "KR$NA",
    "albumName": "Blowing Up - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3f/36/ff/3f36ffd2-edba-4abf-3e9c-09c12e62c290/3616845033232.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1549668513,
    "title": "Seedha Makeover",
    "trackName": "Seedha Makeover",
    "artistName": "KR$NA",
    "albumName": "Seedha Makeover - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ea/b5/14/eab514ab-c212-3732-627c-9a38c7c8ba41/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1548518649,
    "title": "Baap Se",
    "trackName": "Baap Se",
    "artistName": "Fotty Seven & KR$NA",
    "albumName": "Asli Independent - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/4e/1e/3f/4e1e3f55-d3e3-19a3-9f23-ef96b11dc920/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1554748412,
    "title": "Maharani",
    "trackName": "Maharani",
    "artistName": "KR$NA",
    "albumName": "Maharani - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c6/f3/24/c6f324b3-8d38-744c-6715-3b0f133f4aba/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703238914,
    "title": "Dikkat",
    "trackName": "Dikkat",
    "artistName": "Seedhe Maut & Hurricane",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1726564847,
    "title": "OK Report",
    "trackName": "OK Report",
    "artistName": "Fotty Seven",
    "albumName": "OK Report - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/bc/23/97/bc23970f-0842-0463-cdcc-0a59fef2caf3/24UMGIM04781.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776950847,
    "title": "Some Of Us",
    "trackName": "Some Of Us",
    "artistName": "KR$NA & AR Paisley",
    "albumName": "FAR FROM OVER - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/f2/96/c6f29642-396f-7bdf-f16d-5fd17d3b13bd/3617226757273.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1654767389,
    "title": "JASHAN-E-HIP-HOP",
    "trackName": "JASHAN-E-HIP-HOP",
    "artistName": "Raftaar",
    "albumName": "HARD DRIVE Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/9f/07/cf9f07b0-9bab-97f4-af62-9d05c622bedd/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703239169,
    "title": "Fanne Khan",
    "trackName": "Fanne Khan",
    "artistName": "Seedhe Maut & Yungsta",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6807406603,
    "title": "Parinda",
    "trackName": "Parinda",
    "artistName": "Panther, Priyanka Meher & Nikhil - Swapnil",
    "albumName": "Flying Towards The City",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/41/1d/f1/411df198-1c2f-6755-7b9b-9eb99c812f9f/197999868138.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703239162,
    "title": "Kya Challa",
    "trackName": "Kya Challa",
    "artistName": "Seedhe Maut",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804711448,
    "title": "नalla Freestyle",
    "trackName": "नalla Freestyle",
    "artistName": "Seedhe Maut & DJ SA",
    "albumName": "नalla Freestyle - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/93/98/c3/9398c3aa-23ff-8b44-0307-39d0f99affa4/199066158227.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1712272660,
    "title": "Mere Bina",
    "trackName": "Mere Bina",
    "artistName": "KSHMR, The PropheC & Talha Anjum",
    "albumName": "KARAM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ec/d4/eaecd402-2611-49b6-a508-c112600fdd35/197190192025.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1542201879,
    "title": "Satya",
    "trackName": "Satya",
    "artistName": "DIVINE",
    "albumName": "Punya Paap",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/14/8d/39/148d39c0-62bc-a764-d674-5527600885c2/20UM1IM09596.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1685804265,
    "title": "Haath Varthi",
    "trackName": "Haath Varthi",
    "artistName": "MC Stan, KSHMR & Phenom",
    "albumName": "Haath Varthi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a6/6e/f0/a66ef0b7-54a4-937e-3636-31a5a96bd97c/197188790547.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703238658,
    "title": "Brand New",
    "trackName": "Brand New",
    "artistName": "Seedhe Maut",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703239547,
    "title": "Champions",
    "trackName": "Champions",
    "artistName": "Seedhe Maut & Rawal",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1734627715,
    "title": "Numb",
    "trackName": "Numb",
    "artistName": "MC Stan",
    "albumName": "Numb - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/38/80/4e/38804ec7-48be-c6c9-21be-b69951aa40d4/24UMGIM25857.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1654767385,
    "title": "RAASHAH",
    "trackName": "RAASHAH",
    "artistName": "Raftaar",
    "albumName": "HARD DRIVE Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/9f/07/cf9f07b0-9bab-97f4-af62-9d05c622bedd/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1549668913,
    "title": "Freeverse Feast",
    "trackName": "Freeverse Feast",
    "artistName": "KR$NA",
    "albumName": "Freeverse Feast - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4c/ef/c2/4cefc23c-ccb1-6b03-83fc-1fd482d923eb/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1723503575,
    "title": "W",
    "trackName": "W",
    "artistName": "Emiway Bantai",
    "albumName": "W - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/8c/11/9b8c11cc-cc74-590c-ae1f-f6d06ba311eb/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703240998,
    "title": "I Don't Miss That Life",
    "trackName": "I Don't Miss That Life",
    "artistName": "Seedhe Maut",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776937010,
    "title": "Lil Bunty",
    "trackName": "Lil Bunty",
    "artistName": "KR$NA",
    "albumName": "Lil Bunty - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a9/88/fb/a988fb71-187e-4fcd-fa86-437df56ed8ef/3616847350719.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804733890,
    "title": "Nawazuddin",
    "trackName": "Nawazuddin",
    "artistName": "Seedhe Maut",
    "albumName": "न",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/01/86/13/018613ab-76b9-4442-b32d-53d9da2bc117/199066660614.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1643480857,
    "title": "Gunehgar",
    "trackName": "Gunehgar",
    "artistName": "DIVINE",
    "albumName": "Gunehgar - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ca/e8/fd/cae8fdb6-342e-3b7c-550c-7600310925a8/196925726276.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1548245886,
    "title": "Tadipaar",
    "trackName": "Tadipaar",
    "artistName": "MC Stan",
    "albumName": "Tadipaar",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ae/17/54/ae1754a7-f8ec-02d3-9540-e3e8b2fcf8eb/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703240287,
    "title": "Asal G",
    "trackName": "Asal G",
    "artistName": "Seedhe Maut, Talal Qureshi & Faris Shafi",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1558426262,
    "title": "Snake",
    "trackName": "Snake",
    "artistName": "MC Stan",
    "albumName": "Snake - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/17/41/cd/1741cdfb-9143-05fa-6f25-641f7c52fb33/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1629032365,
    "title": "Shana Bann",
    "trackName": "Shana Bann",
    "artistName": "MC Stan",
    "albumName": "Shana Bann - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/03/78/11/0378113e-e7af-aeb6-440c-d87cc786c155/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1610310012,
    "title": "Basti Ka Hasti",
    "trackName": "Basti Ka Hasti",
    "artistName": "MC Stan",
    "albumName": "Insaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d0/d0/dc/d0d0dcad-ecb2-f927-9d86-3ddd941c8783/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1548245821,
    "title": "Amin",
    "trackName": "Amin",
    "artistName": "MC Stan",
    "albumName": "Tadipaar",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ae/17/54/ae1754a7-f8ec-02d3-9540-e3e8b2fcf8eb/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1712272222,
    "title": "Zero After Zero",
    "trackName": "Zero After Zero",
    "artistName": "KSHMR, KR$NA & Talay Riley",
    "albumName": "KARAM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ec/d4/eaecd402-2611-49b6-a508-c112600fdd35/197190192025.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1610323563,
    "title": "Banjo",
    "trackName": "Banjo",
    "artistName": "Fotty Seven",
    "albumName": "Banjo - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8f/d9/42/8fd9426f-8780-fc04-c47a-0336b0792013/22UMGIM16785.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776947321,
    "title": "Saza-E-Maut",
    "trackName": "Saza-E-Maut",
    "artistName": "KR$NA & Raftaar",
    "albumName": "Still Here",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f0/71/db/f071db1e-833f-b162-2700-44185b7b3c07/3616553919019.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703241008,
    "title": "Akatsuki",
    "trackName": "Akatsuki",
    "artistName": "Seedhe Maut & Raga",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1612784044,
    "title": "Nishu",
    "trackName": "Nishu",
    "artistName": "Ikka",
    "albumName": "Nishu - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/85/2a/a7/852aa77a-6e69-247e-e036-046b04dcfe07/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1712272947,
    "title": "Khoya Sab",
    "trackName": "Khoya Sab",
    "artistName": "KSHMR, Yungsta & Lisa Mishra",
    "albumName": "KARAM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ec/d4/eaecd402-2611-49b6-a508-c112600fdd35/197190192025.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1605719014,
    "title": "Sab Jaanta Hai",
    "trackName": "Sab Jaanta Hai",
    "artistName": "Ikka",
    "albumName": "Sab Jaanta Hai - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ab/da/8d/abda8d13-d73b-d3c7-4545-fa0e24fb3416/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1548245796,
    "title": "Hosh Mai Aa",
    "trackName": "Hosh Mai Aa",
    "artistName": "MC Stan",
    "albumName": "Tadipaar",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ae/17/54/ae1754a7-f8ec-02d3-9540-e3e8b2fcf8eb/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1654767115,
    "title": "F16",
    "trackName": "F16",
    "artistName": "Raftaar",
    "albumName": "HARD DRIVE Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/9f/07/cf9f07b0-9bab-97f4-af62-9d05c622bedd/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1827890567,
    "title": "Khana Badosh",
    "trackName": "Khana Badosh (feat. JJ47, Nabeel Akbar & Talha Anjum)",
    "artistName": "Jokhay",
    "albumName": "Khana Badosh (feat. JJ47, Nabeel Akbar & Talha Anjum) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0c/19/64/0c1964fc-343d-b108-592f-b52397ba9fd8/199538345711.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776947308,
    "title": "Villain",
    "trackName": "Villain",
    "artistName": "KR$NA, Karma & Ikka",
    "albumName": "Still Here",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f0/71/db/f071db1e-833f-b162-2700-44185b7b3c07/3616553919019.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1827890768,
    "title": "Bandish",
    "trackName": "Bandish (feat. Shareh, Talha Anjum & Talhah Yunus)",
    "artistName": "Jokhay",
    "albumName": "Khana Badosh",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cf/63/51/cf6351a8-2ca7-eeb0-f30d-7382318aeb43/199538295542.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1712272240,
    "title": "Upar Hi Upar",
    "trackName": "Upar Hi Upar",
    "artistName": "KSHMR, Yashraj & Rawal",
    "albumName": "KARAM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ec/d4/eaecd402-2611-49b6-a508-c112600fdd35/197190192025.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1712271818,
    "title": "Dream",
    "trackName": "Dream",
    "artistName": "KSHMR, Ikka & Karra",
    "albumName": "KARAM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ec/d4/eaecd402-2611-49b6-a508-c112600fdd35/197190192025.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1829402664,
    "title": "Manzar Kashi",
    "trackName": "Manzar Kashi (feat. Talhah Yunus & JJ47)",
    "artistName": "Jokhay",
    "albumName": "Manzar Kashi (feat. Talhah Yunus & JJ47) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ea/b1/28/eab12833-d38b-ac47-a65c-0eeb7011b5d9/199538338706.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1549639276,
    "title": "Dum Hai",
    "trackName": "Dum Hai",
    "artistName": "KR$NA",
    "albumName": "Dum Hai - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9f/10/86/9f10865e-f3af-89b5-72b7-9a5086b8068f/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1610309817,
    "title": "Bitch",
    "trackName": "Bitch",
    "artistName": "MC Stan",
    "albumName": "Insaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d0/d0/dc/d0d0dcad-ecb2-f927-9d86-3ddd941c8783/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1610310030,
    "title": "One Day Uh Gonna Pay",
    "trackName": "One Day Uh Gonna Pay",
    "artistName": "MC Stan",
    "albumName": "Insaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d0/d0/dc/d0d0dcad-ecb2-f927-9d86-3ddd941c8783/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776934111,
    "title": "The Key - Freestyle",
    "trackName": "The Key - Freestyle",
    "artistName": "KR$NA",
    "albumName": "The Key - Freestyle - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/17/38/f9/1738f9fe-35a6-23e9-f61a-b5f340f87a90/3616550229951.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703241331,
    "title": "W",
    "trackName": "W",
    "artistName": "Seedhe Maut",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1747977999,
    "title": "GOAT SHIT",
    "trackName": "GOAT SHIT",
    "artistName": "King & Karma",
    "albumName": "GOAT SHIT - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/36/75/5c/36755cf6-c100-dce7-47e7-d5ce20235044/5021732392183.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1762198511,
    "title": "Raat Ki Rani",
    "trackName": "Raat Ki Rani",
    "artistName": "Seedhe Maut",
    "albumName": "SHAKTI - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c5/54/3b/c5543b7a-68df-43c7-af19-de5bb20480ce/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1760151713,
    "title": "F*CK WHAT THEY SAY",
    "trackName": "F*CK WHAT THEY SAY",
    "artistName": "King & MC Stan",
    "albumName": "MONOPOLY MOVES",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ea/ad/f5/eaadf55a-e673-632a-942f-0e21258556d4/5021732457165.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777837223,
    "title": "SHUTDOWN",
    "trackName": "SHUTDOWN",
    "artistName": "Seedhe Maut",
    "albumName": "SHUTDOWN - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1b/22/fe/1b22fe77-3a1a-22b8-3e6d-69db6a8e7139/8447053238790.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1781602488,
    "title": "Dafli Wale - The Hustle Flip",
    "trackName": "Dafli Wale - The Hustle Flip",
    "artistName": "Naam Sujal, Lata Mangeshkar & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 11",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/01/28/ff/0128ffa6-3a77-41d3-4781-fdc49dabb0f4/199066037584.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1784665631,
    "title": "ICE",
    "trackName": "ICE",
    "artistName": "Seedhe Maut",
    "albumName": "Kshama",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e7/b7/56/e7b75644-d761-43f0-d688-34d8e6ab4b41/8447053264881.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1784665638,
    "title": "Round 3",
    "trackName": "Round 3",
    "artistName": "Seedhe Maut",
    "albumName": "Kshama",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e7/b7/56/e7b75644-d761-43f0-d688-34d8e6ab4b41/8447053264881.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1784665629,
    "title": "RED",
    "trackName": "RED",
    "artistName": "Seedhe Maut & Hisab",
    "albumName": "Kshama",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e7/b7/56/e7b75644-d761-43f0-d688-34d8e6ab4b41/8447053264881.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1760151720,
    "title": "WARCRY",
    "trackName": "WARCRY",
    "artistName": "King & Raftaar",
    "albumName": "MONOPOLY MOVES",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ea/ad/f5/eaadf55a-e673-632a-942f-0e21258556d4/5021732457165.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804733898,
    "title": "Natkhat",
    "trackName": "Natkhat",
    "artistName": "Seedhe Maut",
    "albumName": "न",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/01/86/13/018613ab-76b9-4442-b32d-53d9da2bc117/199066660614.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776937455,
    "title": "Shut Up",
    "trackName": "Shut Up",
    "artistName": "KR$NA & Subspace",
    "albumName": "For The Day One$ - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7f/e5/79/7fe5796b-92ff-df97-3d57-684a9957d671/3617389971172.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1762198517,
    "title": "Naksha",
    "trackName": "Naksha",
    "artistName": "Seedhe Maut",
    "albumName": "SHAKTI - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c5/54/3b/c5543b7a-68df-43c7-af19-de5bb20480ce/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1784666007,
    "title": "Shakti Aur Kshama",
    "trackName": "Shakti Aur Kshama",
    "artistName": "Seedhe Maut",
    "albumName": "Kshama",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e7/b7/56/e7b75644-d761-43f0-d688-34d8e6ab4b41/8447053264881.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1782837934,
    "title": "PYAAR?",
    "trackName": "PYAAR?",
    "artistName": "Naam Sujal & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 14 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/a4/66/86a466d4-a51e-6f30-ce92-a9d7757b71fa/199066149874.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1769893531,
    "title": "Karta Kya Hai",
    "trackName": "Karta Kya Hai",
    "artistName": "Karma & Raftaar",
    "albumName": "How Much a Rhyme Costs? - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/3a/f2/a43af214-21aa-799e-63b6-980f4cbf0bb1/5021732499844.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1757169914,
    "title": "BAWE MAIN CHECK",
    "trackName": "BAWE MAIN CHECK",
    "artistName": "King & Raga",
    "albumName": "PYAAR HUMARA",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4c/6c/ae/4c6caec7-ba9d-9d1c-35c1-6d85f5d1e778/5021732440662.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1779041730,
    "title": "Vishay Khatam",
    "trackName": "Vishay Khatam",
    "artistName": "Naam Sujal & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 7",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9e/12/c6/9e12c6c4-d334-a2bf-a416-2f591c17dcb8/198846925868.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1755026625,
    "title": "KODAK",
    "trackName": "KODAK",
    "artistName": "King & Seedhe Maut",
    "albumName": "KODAK - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ca/c0/0d/cac00ded-7b8f-e051-5f63-9564ee6e15c9/5021732430649.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777087520,
    "title": "TT",
    "trackName": "TT",
    "artistName": "Seedhe Maut",
    "albumName": "TT - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/47/86/26/478626bb-1047-c8da-e9eb-6cda58dff9b8/8447053238783.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1779553397,
    "title": "BAAWE",
    "trackName": "BAAWE",
    "artistName": "Raftaar & Badshah",
    "albumName": "Hard Drive, Vol. 2",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/d8/45/5cd845c2-18b1-d289-54d8-e245d6b9ebd0/198846953236.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1579545010,
    "title": "I'm Done",
    "trackName": "I'm Done",
    "artistName": "MC Stan",
    "albumName": "I'm Done - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e9/3f/f0/e93ff040-33b6-b08a-237a-6872180176de/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1785588749,
    "title": "Blueprint",
    "trackName": "Blueprint",
    "artistName": "Naam Sujal & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 17",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e0/ec/b2/e0ecb2bc-c1f1-464c-4bfa-848a18041b10/199066311424.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776950779,
    "title": "Wanna Know",
    "trackName": "Wanna Know",
    "artistName": "KR$NA",
    "albumName": "FAR FROM OVER - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/f2/96/c6f29642-396f-7bdf-f16d-5fd17d3b13bd/3617226757273.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1798292741,
    "title": "Run It Up",
    "trackName": "Run It Up",
    "artistName": "Hanumankind",
    "albumName": "Run It Up - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/93/e2/63/93e2634c-d70d-3075-2362-1c14cea3e34b/25UMGIM10615.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1754946760,
    "title": "Big Dawgs",
    "trackName": "Big Dawgs",
    "artistName": "Hanumankind & Kalmi",
    "albumName": "Big Dawgs - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ef/93/a4/ef93a4f8-625d-1146-de1b-1f287cc48e68/24UMGIM70977.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1779552948,
    "title": "DEHSHAT HO",
    "trackName": "DEHSHAT HO",
    "artistName": "Raftaar & Yashraj",
    "albumName": "Hard Drive, Vol. 2",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/d8/45/5cd845c2-18b1-d289-54d8-e245d6b9ebd0/198846953236.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1712907521,
    "title": "STILL NUMBER 1",
    "trackName": "STILL NUMBER 1",
    "artistName": "Emiway Bantai",
    "albumName": "STILL NUMBER 1 - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/36/9f/d9/369fd947-3de9-7045-eaa5-d454f279f812/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814144675,
    "title": "Never Enough",
    "trackName": "Never Enough",
    "artistName": "KR$NA & Phenom",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812505750,
    "title": "Pickup",
    "trackName": "Pickup (feat. OG Lucifer)",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814144430,
    "title": "Knock Knock",
    "trackName": "Knock Knock",
    "artistName": "KR$NA & Phenom",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1770242089,
    "title": "Tujhya Aaichi Gaand",
    "trackName": "Tujhya Aaichi Gaand",
    "artistName": "MC Stan",
    "albumName": "Tujhya Aaichi Gaand - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0e/38/eb/0e38eba7-7ba5-a967-e57e-3cdd8038d62e/24UM1IM04622.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814144664,
    "title": "Sensitive",
    "trackName": "Sensitive",
    "artistName": "KR$NA, Seedhe Maut & Hurricane",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1822324693,
    "title": "3 DRAGS",
    "trackName": "3 DRAGS",
    "artistName": "vichaar",
    "albumName": "VVVV - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/88/b1/fe/88b1feb4-c981-2814-a6c3-409ffb20425f/199350991783.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814145053,
    "title": "KKBN",
    "trackName": "KKBN",
    "artistName": "KR$NA & Lambo Drive",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777751197,
    "title": "Shit Dawg",
    "trackName": "Shit Dawg",
    "artistName": "Naam Sujal & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 6",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4d/a9/c2/4da9c21b-c03e-4782-62b4-57567b056bcb/198846831589.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814145258,
    "title": "Talk My Shit/Guarantee",
    "trackName": "Talk My Shit/Guarantee",
    "artistName": "KR$NA, Yashraj & NEVERSOBER",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777772377,
    "title": "Protocol",
    "trackName": "Protocol",
    "artistName": "Naam Sujal & Aditya Pushkarna",
    "albumName": "MTV Hustle 4",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/90/05/3e900509-9996-e31f-873d-6bf2e53c15b0/198846746302.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777772145,
    "title": "Chowk Pe",
    "trackName": "Chowk Pe",
    "artistName": "99side & Aditya Pushkarna",
    "albumName": "MTV Hustle 4",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/90/05/3e900509-9996-e31f-873d-6bf2e53c15b0/198846746302.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1541314613,
    "title": "Numberkari",
    "trackName": "Numberkari",
    "artistName": "MC Stan",
    "albumName": "Numberkari - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/56/64/0f/56640f30-a8e6-f248-fc17-230776b5e4b5/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1779041734,
    "title": "Curry Verse",
    "trackName": "Curry Verse",
    "artistName": "Lashcurry & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 7",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9e/12/c6/9e12c6c4-d334-a2bf-a416-2f591c17dcb8/198846925868.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777751459,
    "title": "Ulte Karam",
    "trackName": "Ulte Karam",
    "artistName": "Lashcurry & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 5",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/32/4d/a3324d2d-2e50-fd72-048b-8e4d7e80471a/198846835044.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776937459,
    "title": "Stay Away",
    "trackName": "Stay Away",
    "artistName": "KR$NA",
    "albumName": "For The Day One$ - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7f/e5/79/7fe5796b-92ff-df97-3d57-684a9957d671/3617389971172.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1597377051,
    "title": "Goat Dekho",
    "trackName": "Goat Dekho",
    "artistName": "Raftaar",
    "albumName": "Goat Dekho - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ef/ab/fa/efabfafa-3d5d-0df3-1b50-b0df3e6b7d40/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1292155382,
    "title": "City Slums",
    "trackName": "City Slums (feat. DIVINE)",
    "artistName": "Raja Kumari",
    "albumName": "City Slums (feat. DIVINE) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/22/d2/f9/22d2f960-e1f4-1a06-d66c-b192079e97c2/886446783673.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1542201894,
    "title": "Punya Paap",
    "trackName": "Punya Paap",
    "artistName": "DIVINE",
    "albumName": "Punya Paap",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/14/8d/39/148d39c0-62bc-a764-d674-5527600885c2/20UM1IM09596.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1530291419,
    "title": "Lowkey",
    "trackName": "Lowkey",
    "artistName": "MC Stan",
    "albumName": "Lowkey - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/39/1c/ee/391cee1e-669f-ac7c-09de-c32d4eb0629f/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1690845274,
    "title": "King Of Indian Hip Hop",
    "trackName": "King Of Indian Hip Hop",
    "artistName": "Emiway Bantai",
    "albumName": "King Of The Streets",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/75/ec/21/75ec21c6-afbb-2adf-c340-0fe410a527b7/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1748752925,
    "title": "911 Porsche",
    "trackName": "911 Porsche",
    "artistName": "MC Stan",
    "albumName": "911 Porsche - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/24/ca/0f24ca63-773b-f852-4464-39fd5f7f0238/24UMGIM59610.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1530289537,
    "title": "Astaghfirullah",
    "trackName": "Astaghfirullah",
    "artistName": "MC Stan",
    "albumName": "Astaghfirullah - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ab/56/99/ab5699bc-832a-fe0c-1d2f-26050c2a18c9/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1205945425,
    "title": "Farak",
    "trackName": "Farak",
    "artistName": "DIVINE",
    "albumName": "Farak - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f8/81/da/f881dad1-ba69-9d86-df85-1acf6aa84f81/886446380506.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1781901220,
    "title": "Gojira",
    "trackName": "Gojira",
    "artistName": "Ikka",
    "albumName": "Blood Is Better Than Tears - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9f/30/4c/9f304c61-1a4e-d5d1-32c9-7146c70a8103/8903431031624_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1862404041,
    "title": "rocket",
    "trackName": "rocket",
    "artistName": "Panther",
    "albumName": "shehro ki safed sadko pe sehro ke sangeen safar - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3f/dd/73/3fdd73bb-3245-a568-6b81-02bb9a4407b6/199806764589.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1704617453,
    "title": "Nusta Paisa",
    "trackName": "Nusta Paisa",
    "artistName": "MC Stan",
    "albumName": "Nusta Paisa - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0c/1f/cc/0c1fccec-9ca4-1263-e8fd-bff1000a234e/23UM1IM00346.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1852201149,
    "title": "Mera Naam Hai",
    "trackName": "Mera Naam Hai",
    "artistName": "Emiway Bantai",
    "albumName": "FTSTTS",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/bd/68/0dbd6837-466c-55d2-e4a7-811ecbf05465/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1608865544,
    "title": "Google Pay",
    "trackName": "Google Pay",
    "artistName": "Karma & Deep Kalsi",
    "albumName": "Google Pay - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/43/73/99/4373992e-381a-66c6-fff4-03d3de1d95e8/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776950585,
    "title": "10 Pe 10",
    "trackName": "10 Pe 10 (feat. French The Kid)",
    "artistName": "KR$NA",
    "albumName": "10 Pe 10 (feat. French The Kid) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/31/da/bd/31dabde6-81e4-bc38-32d7-eae733a3e1f7/3617053535235.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1879430266,
    "title": "NMC Ka Dagga",
    "trackName": "NMC Ka Dagga",
    "artistName": "Naam Sujal & Prathamesh",
    "albumName": "MAMAFICATION",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/66/6a/a5/666aa512-cd19-32c8-d29e-7269dc99f3f2/26UMGIM21470.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776937463,
    "title": "Role Model",
    "trackName": "Role Model",
    "artistName": "KR$NA, Faris Shafi & Karma",
    "albumName": "For The Day One$ - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7f/e5/79/7fe5796b-92ff-df97-3d57-684a9957d671/3617389971172.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1862404035,
    "title": "kattey",
    "trackName": "kattey",
    "artistName": "Panther",
    "albumName": "shehro ki safed sadko pe sehro ke sangeen safar - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3f/dd/73/3fdd73bb-3245-a568-6b81-02bb9a4407b6/199806764589.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1774046286,
    "title": "NAMUNA",
    "trackName": "NAMUNA",
    "artistName": "Seedhe Maut",
    "albumName": "NAMUNA - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ed/58/b9/ed58b984-9466-3e51-18c2-399987ee1791/8447053228302.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1774080750,
    "title": "SRK",
    "trackName": "SRK",
    "artistName": "Seedhe Maut",
    "albumName": "SRK - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b7/3a/8b/b73a8bab-d4e2-f663-f1a2-d02cd29d9cb7/8447053228319.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1569008547,
    "title": "Rehmani Keeda",
    "trackName": "Rehmani Keeda",
    "artistName": "MC Stan",
    "albumName": "Rehmani Keeda - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fd/11/8d/fd118d75-f120-8d2e-5ea5-f4a28e6db392/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1857701655,
    "title": "Glass Half Full",
    "trackName": "Glass Half Full",
    "artistName": "Talha Anjum, Umair, JJ47 & Talhah Yunus",
    "albumName": "Open Letter",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e9/e4/61/e9e4619a-96ce-b214-7a82-71428f409dbf/198846672137_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1610310035,
    "title": "Insaaniyat",
    "trackName": "Insaaniyat",
    "artistName": "MC Stan",
    "albumName": "Insaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d0/d0/dc/d0d0dcad-ecb2-f927-9d86-3ddd941c8783/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776937457,
    "title": "What's Up",
    "trackName": "What's Up",
    "artistName": "KR$NA, Lisa Mishra & Rizzy Rico",
    "albumName": "For The Day One$ - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7f/e5/79/7fe5796b-92ff-df97-3d57-684a9957d671/3617389971172.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776936955,
    "title": "Living Legend",
    "trackName": "Living Legend (feat. Rashmeet Kaur)",
    "artistName": "KR$NA",
    "albumName": "Living Legend (feat. Rashmeet Kaur) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/75/c7/c0/75c7c0e5-fbd5-d5fd-edbb-512dbb71f278/3616551234398.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804729826,
    "title": "Dehshat",
    "trackName": "Dehshat",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Bayaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6e/a2/1b/6ea21b60-3155-9aac-fdd8-0579af266a1c/199066651063.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1879430399,
    "title": "It's About Time",
    "trackName": "It's About Time",
    "artistName": "Naam Sujal, Siyaahi & Dhanji",
    "albumName": "MAMAFICATION",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/66/6a/a5/666aa512-cd19-32c8-d29e-7269dc99f3f2/26UMGIM21470.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814144421,
    "title": "Nothing to Prove",
    "trackName": "Nothing to Prove",
    "artistName": "KR$NA & Phenom",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1548512223,
    "title": "Say My Name",
    "trackName": "Say My Name",
    "artistName": "KR$NA",
    "albumName": "Say My Name - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/70/30/27/70302736-4d6f-3472-7115-550d51150857/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1894160447,
    "title": "MAIN LAGTA KAUN?",
    "trackName": "MAIN LAGTA KAUN?",
    "artistName": "Prathamesh & Teja",
    "albumName": "MAIN LAGTA KAUN? - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/43/6a/1c/436a1c5a-588d-45ca-4b3a-4e68f7672726/26UMGIM46350.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1666776436,
    "title": "Company",
    "trackName": "Company",
    "artistName": "Emiway Bantai",
    "albumName": "Company - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/1b/a0/4f/1ba04fa8-01ba-fff3-4ac2-0c4fda33f345/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1792174623,
    "title": "Badshah",
    "trackName": "Badshah",
    "artistName": "Emiway Bantai & Abhijeet",
    "albumName": "Badshah - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9a/e9/08/9ae90813-dd6e-0bff-90ae-69aec1d93f78/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1692925121,
    "title": "Bhussi",
    "trackName": "Bhussi",
    "artistName": "KSHMR, Seedhe Maut & Karan Kanchan",
    "albumName": "Bhussi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1d/e1/f0/1de1f0aa-8781-6714-2964-7a57d494e64c/197189044496.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6789021666,
    "title": "Legacy Anthem",
    "trackName": "Legacy Anthem",
    "artistName": "KR$NA, Raftaar & DRJ Sohail",
    "albumName": "Legacy Anthem - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/13/6e/b6/136eb671-3d02-9387-0081-72c927d7b697/820233997508.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1848856377,
    "title": "CHANDELIERS",
    "trackName": "CHANDELIERS",
    "artistName": "Siyaahi & UZIII",
    "albumName": "SULTANATE",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1f/be/2c/1fbe2cbe-8a02-6801-0ac6-bc242fbad93d/199806118412.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6763153453,
    "title": "Boom Shaka",
    "trackName": "Boom Shaka",
    "artistName": "KR$NA & Dhanda Nyoliwala",
    "albumName": "Boom Shaka - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e5/11/de/e511de2e-f27b-a0f1-3f7f-441ef4709a25/820233167307.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1844602615,
    "title": "CUT THAT BITCH OFF",
    "trackName": "CUT THAT BITCH OFF",
    "artistName": "Naam Sujal & ARTEMIS",
    "albumName": "CUT THAT BITCH OFF - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/54/3b/a6/543ba67e-9681-b9b9-eb86-129757a6644f/25UM1IM55246.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6810966811,
    "title": "Pay Off",
    "trackName": "Pay Off",
    "artistName": "ANSHIOUS, Prathamesh & Kanch",
    "albumName": "Legacy Chapter 3, Vol. 8 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ef/6e/51/ef6e51d6-212e-2a5b-144b-30efc1c5ca11/885288560916.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6803082326,
    "title": "Utha Patak",
    "trackName": "Utha Patak",
    "artistName": "Prathamesh & Kod.E",
    "albumName": "Utha Patak - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fa/c6/f2/fac6f2d9-bc9b-abe8-459a-93adb5acdc2e/885288347524.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6805762920,
    "title": "Slang Badsha",
    "trackName": "Slang Badsha",
    "artistName": "Prathamesh & Kod.E",
    "albumName": "Legacy Chapter 3, Vol. 4 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/06/eb/a6/06eba68a-20e0-9df0-218f-4b00a6aeba2d/885288462029.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6796583636,
    "title": "Jua Zindagi",
    "trackName": "Jua Zindagi",
    "artistName": "Prathamesh & Kod.E",
    "albumName": "Legacy Chapter 2, Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2a/87/48/2a8748d7-67e3-4c2d-f7b4-79d4750b7eb5/885288172119.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6801120178,
    "title": "Sicario",
    "trackName": "Sicario",
    "artistName": "Chief & Refix",
    "albumName": "Legacy Chapter 2, Vol. 4 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e6/de/b9/e6deb9fb-2645-1ad1-ad17-d8a3ae659164/885288285321.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6806323565,
    "title": "BAJESH VISHAY (Red Bull 64 Bars)",
    "trackName": "BAJESH VISHAY (Red Bull 64 Bars)",
    "artistName": "Naam Sujal & Hisab",
    "albumName": "BAJESH VISHAY (Red Bull 64 Bars) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/98/8f/69988f73-3b9d-534e-83a2-19fa5225bfcc/26UM1IM11684.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6808516548,
    "title": "mijaz",
    "trackName": "mijaz",
    "artistName": "Panther",
    "albumName": "charag - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6a/4b/78/6a4b781d-d2ba-9d04-da4d-6647ff7af46a/196874722268.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6837402682,
    "title": "Dola Re",
    "trackName": "Dola Re",
    "artistName": "Parimal Shais, Naam Sujal, Dhp & Ismail Darbar",
    "albumName": "CURRY CHATTI BEATS (SEASON 2) - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/84/9a/3b849adc-cddf-bdcd-ce28-1b92846a3a6a/26UM1IM50408.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6813144121,
    "title": "Known Guy",
    "trackName": "Known Guy",
    "artistName": "Prathamesh & Refix",
    "albumName": "Legacy Chapter 3, Vol. 9",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a5/72/a3/a572a36d-c6bf-d647-b3a2-d3ff60ac9011/885288614060.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6819835871,
    "title": "101",
    "trackName": "101",
    "artistName": "Karma & Naam Sujal",
    "albumName": "MAD DAWG 101",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/50/c3/89/50c38956-3945-250b-2161-55721122e2f3/885288687163.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6819835878,
    "title": "PR SHXT",
    "trackName": "PR SHXT",
    "artistName": "Karma",
    "albumName": "MAD DAWG 101",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/50/c3/89/50c38956-3945-250b-2161-55721122e2f3/885288687163.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6819836220,
    "title": "HARDXST",
    "trackName": "HARDXST",
    "artistName": "Karma",
    "albumName": "MAD DAWG 101",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/50/c3/89/50c38956-3945-250b-2161-55721122e2f3/885288687163.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6819835987,
    "title": "AM SO DOON",
    "trackName": "AM SO DOON",
    "artistName": "Karma, vichaar & GHILDIYAL",
    "albumName": "MAD DAWG 101",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/50/c3/89/50c38956-3945-250b-2161-55721122e2f3/885288687163.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703240266,
    "title": "Lunch Break",
    "trackName": "Lunch Break",
    "artistName": "Seedhe Maut",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812505042,
    "title": "MP3",
    "trackName": "MP3",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777087364,
    "title": "Kaanch Ke Ghar",
    "trackName": "Kaanch Ke Ghar",
    "artistName": "Seedhe Maut",
    "albumName": "Kaanch Ke Ghar - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e6/fc/f5/e6fcf59b-9f16-c889-951d-236dfa61c1c2/8447053238813.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814145440,
    "title": "Vibrate",
    "trackName": "Vibrate",
    "artistName": "KR$NA, Badshah & Phenom",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812507876,
    "title": "Cha Chi",
    "trackName": "Cha Chi (feat. Calm, Ab 17, Bhaskar & OG Lucifer)",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1809085396,
    "title": "Podcast",
    "trackName": "Podcast",
    "artistName": "Bali & ENZO",
    "albumName": "Kala Khatta - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/c4/91/fec491f0-f87d-209c-a15b-282bce85bcbe/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1798410763,
    "title": "Shameless",
    "trackName": "Shameless",
    "artistName": "Bali & Enzo",
    "albumName": "Shameless - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/20/4a/0c/204a0c4a-85db-75d4-d7e3-72315af88b42/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812504902,
    "title": "Capital Rap",
    "trackName": "Capital Rap (feat. Lil Bhavi)",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1809085620,
    "title": "Sad Gaana",
    "trackName": "Sad Gaana",
    "artistName": "Bali & AN1K8T",
    "albumName": "Kala Khatta - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/c4/91/fec491f0-f87d-209c-a15b-282bce85bcbe/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1827975875,
    "title": "Dubai Company",
    "trackName": "Dubai Company",
    "artistName": "Emiway Bantai",
    "albumName": "Dubai Company - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/04/04/f3/0404f314-aaa4-23e9-351f-b3afb65845a6/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804726601,
    "title": "Maina",
    "trackName": "Maina",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Nayaab",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/41/71/b84171ff-de77-3505-af3d-41a5b8d37fc4/199066166178.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812505632,
    "title": "Madira",
    "trackName": "Madira",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1808602672,
    "title": "Farebi",
    "trackName": "Farebi",
    "artistName": "Chaar Diwaari & Raftaar",
    "albumName": "Farebi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/5f/46/595f463b-6a56-c00e-8479-849da888e656/25UMGIM57295.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812506683,
    "title": "Guldasta",
    "trackName": "Guldasta",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1785227270,
    "title": "SANATAN",
    "trackName": "SANATAN",
    "artistName": "Yashraj & NEVERSOBER",
    "albumName": "SANATAN - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b5/12/ff/b512ffbf-019b-ac1d-cc2b-08679d25904c/24UM1IM40964.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1778044106,
    "title": "Bure Din",
    "trackName": "Bure Din (feat. Mick Jenkins)",
    "artistName": "Seedhe Maut",
    "albumName": "Bure Din (feat. Mick Jenkins) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/07/81/0c/07810ccd-24b4-44d3-86a4-70b66512c867/8447053241349.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812505730,
    "title": "El Matador",
    "trackName": "El Matador (feat. Ghaatak)",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812506985,
    "title": "Video Games",
    "trackName": "Video Games",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1842317422,
    "title": "MUDDA",
    "trackName": "MUDDA",
    "artistName": "YUNG SAMMY, Seedhe Maut & Wamp",
    "albumName": "MUDDA - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a7/bc/d2/a7bcd285-3324-b27c-4461-3e68c9a1dc3f/198704756849_Cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1834854038,
    "title": "TOP FLOOR SHiii",
    "trackName": "TOP FLOOR SHiii",
    "artistName": "Yashraj & Calm",
    "albumName": "TOP FLOOR SHiii - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a7/05/c3/a705c30a-8214-2eba-89a7-8ebc7e5920cf/25UM1IM23029.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812506146,
    "title": "DL91 FM",
    "trackName": "DL91 FM (feat. OG Lucifer & Ghaatak)",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804727448,
    "title": "Kranti",
    "trackName": "Kranti",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Kranti - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/f9/11/69f911c9-c0dc-2e03-6e81-8a7179b597a8/199066647325.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1727150868,
    "title": "Shaayar",
    "trackName": "Shaayar",
    "artistName": "Bharat Chauhan & Seedhe Maut",
    "albumName": "Shaayar - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/02/47/31/024731b0-c7ff-571d-481e-f326e9f24b7b/197190997569.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812501209,
    "title": "Pancake",
    "trackName": "Pancake",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "Pancake - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d4/e4/dc/d4e4dce1-6cb6-7199-e10c-3046fc98d938/199350545917.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1734089062,
    "title": "Moohfatt",
    "trackName": "Moohfatt",
    "artistName": "Rawal",
    "albumName": "Moohfatt - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/fc/c4/5e/fcc45ef4-6d95-fea2-6b95-fca97f3fe873/859784992892_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812505060,
    "title": "Maar Kaat",
    "trackName": "Maar Kaat (feat. Lil Bhavi)",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804733887,
    "title": "Nazarbhattu Freestyle",
    "trackName": "Nazarbhattu Freestyle",
    "artistName": "Seedhe Maut",
    "albumName": "न",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/01/86/13/018613ab-76b9-4442-b32d-53d9da2bc117/199066660614.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1853803900,
    "title": "You & I",
    "trackName": "You & I",
    "artistName": "DIVINE",
    "albumName": "You & I - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/88/62/78/8862787b-546a-392f-338b-79db3d2d1c15/25UM1IM88639.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1862107933,
    "title": "Boom",
    "trackName": "Boom",
    "artistName": "DIVINE",
    "albumName": "Walking on Water",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/87/21/7e872100-3c31-cab0-cd03-7fa4e00bec4c/25UM2IM03238.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1862107929,
    "title": "Dr. DIVINE",
    "trackName": "Dr. DIVINE",
    "artistName": "DIVINE",
    "albumName": "Walking on Water",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/87/21/7e872100-3c31-cab0-cd03-7fa4e00bec4c/25UM2IM03238.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804727455,
    "title": "Teen Dost",
    "trackName": "Teen Dost",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Nayaab",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/41/71/b84171ff-de77-3505-af3d-41a5b8d37fc4/199066166178.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814145676,
    "title": "Yours Truly",
    "trackName": "Yours Truly",
    "artistName": "KR$NA",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804726919,
    "title": "Kohra",
    "trackName": "Kohra",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Nayaab",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/41/71/b84171ff-de77-3505-af3d-41a5b8d37fc4/199066166178.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703239572,
    "title": "Naam Kaam Sheher",
    "trackName": "Naam Kaam Sheher",
    "artistName": "Seedhe Maut, Qaab & Rebel 7",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804729822,
    "title": "Meri Baggi",
    "trackName": "Meri Baggi",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Bayaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6e/a2/1b/6ea21b60-3155-9aac-fdd8-0579af266a1c/199066651063.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812453201,
    "title": "Bhundfaad",
    "trackName": "Bhundfaad",
    "artistName": "Rawal & Seedhe Maut",
    "albumName": "Sherdil",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/41/10/fd/4110fd27-8e5b-b303-2d89-c060459208b7/859705595898_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1664767854,
    "title": "Go To Sleep",
    "trackName": "Go To Sleep",
    "artistName": "Hanumankind & Parimal Shais",
    "albumName": "Go To Sleep - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/39/b6/bd/39b6bdf1-f090-35a2-c1cb-d08d593d5c3c/23UMGIM02112.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1581189360,
    "title": "Damnson",
    "trackName": "Damnson",
    "artistName": "Hanumankind",
    "albumName": "Damnson - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ee/f9/e7/eef9e783-441f-9f3c-dfec-4fdbadaf5f06/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1705764592,
    "title": "Ayyayyo",
    "trackName": "Ayyayyo",
    "artistName": "Parimal Shais, MC Couper, ThirumaLi & Hanumankind",
    "albumName": "Ayyayyo - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/23/9d/93/239d933c-e774-f405-d218-0ebeaa4be00e/23UM1IM04274.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1874306467,
    "title": "Flush",
    "trackName": "Flush",
    "artistName": "jaiyash, OG Lucifer, Hurricane & RiJ",
    "albumName": "Flush - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cf/a6/f3/cfa6f3b3-37a7-8baa-1db3-9829ce9d0cc1/977042.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1875344287,
    "title": "BUN MASKA",
    "trackName": "BUN MASKA",
    "artistName": "Calm, DL91 Era & Seedhe Maut",
    "albumName": "PentHouse Tapes, Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/42/ec/11/42ec11fc-ad29-e186-ad9d-c93180f6f2e9/820200195487.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1875344507,
    "title": "PISHA",
    "trackName": "PISHA",
    "artistName": "Calm, DL91 Era, Seedhe Maut, Ab 17 & OG Lucifer",
    "albumName": "PentHouse Tapes, Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/42/ec/11/42ec11fc-ad29-e186-ad9d-c93180f6f2e9/820200195487.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1875344499,
    "title": "ROOTS",
    "trackName": "ROOTS",
    "artistName": "Calm, DL91 Era, Lil Bhavi, Hurricane & Seedhe Maut",
    "albumName": "PentHouse Tapes, Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/42/ec/11/42ec11fc-ad29-e186-ad9d-c93180f6f2e9/820200195487.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6804706221,
    "title": "IG Model",
    "trackName": "IG Model",
    "artistName": "Husxain & Refix",
    "albumName": "IG Model - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/24/d4/e2/24d4e287-01d9-6fbc-edf6-9928bdf2e5f8/885288362985.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6813072839,
    "title": "Bombay",
    "trackName": "Bombay",
    "artistName": "Husxain, 48Volt & Refix",
    "albumName": "Bombay - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e5/40/58/e5405828-948d-205a-632c-7797d93a4f08/885288609998.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6802645160,
    "title": "Dass Kaun",
    "trackName": "Dass Kaun",
    "artistName": "Manisten & Refix",
    "albumName": "Legacy Chapter 3, Vol. 1 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/82/02/e9/8202e945-f31a-66eb-a31e-d5e7683b4f69/885288318715.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6801133232,
    "title": "All Over The Place",
    "trackName": "All Over The Place",
    "artistName": "Vanither & Refix",
    "albumName": "All Over The Place - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/45/a1/42/45a14248-cc7e-d74d-ad81-f0b217a863b5/885288321449.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6801120175,
    "title": "Pataka",
    "trackName": "Pataka",
    "artistName": "Rap ID & Refix",
    "albumName": "Legacy Chapter 2, Vol. 4 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e6/de/b9/e6deb9fb-2645-1ad1-ad17-d8a3ae659164/885288285321.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6797770272,
    "title": "Role Model",
    "trackName": "Role Model",
    "artistName": "Vanither & Refix",
    "albumName": "Legacy Chapter 2, Vol. 2",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/30/88/bf3088fb-5016-5500-0a4f-31deefdbbdad/885288185270.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6797770455,
    "title": "Tori",
    "trackName": "Tori",
    "artistName": "VISHI & Refix",
    "albumName": "Legacy Chapter 2, Vol. 2",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/30/88/bf3088fb-5016-5500-0a4f-31deefdbbdad/885288185270.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6789022807,
    "title": "Skin In the Game",
    "trackName": "Skin In the Game",
    "artistName": "Prathamesh & Kod.E",
    "albumName": "Legacy Chapter 1, Vol. 1 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9d/3b/34/9d3b3420-fcf5-7fb1-74cf-dcb0a640cc0c/885288004519.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6793376954,
    "title": "Amdavadi Pakhandi",
    "trackName": "Amdavadi Pakhandi",
    "artistName": "VISHI & Refix",
    "albumName": "Amdavadi Pakhandi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/50/42/fa/5042fadd-ce75-fe99-92cf-fb9547ed9e03/885288071184.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6789025140,
    "title": "Thaat",
    "trackName": "Thaat",
    "artistName": "Babbar & Refix",
    "albumName": "Legacy Chapter 1, Vol. 2",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e7/c9/98/e7c998d6-3c1f-ca46-1a1e-ec546a6e45cf/820233998291.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6793377076,
    "title": "Bael Buddhi",
    "trackName": "Bael Buddhi",
    "artistName": "KHUDRAAZ & Refix",
    "albumName": "Bael Buddhi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/93/4a/4a/934a4abc-5f85-d714-3ddc-5061a3520f00/885288062779.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6800195720,
    "title": "Prathamesh vs Vanither",
    "trackName": "Prathamesh vs Vanither",
    "artistName": "Prathamesh, Vanither & Kod.E",
    "albumName": "Legacy Chapter 2, Vol. 3 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e0/f1/86/e0f18686-4b36-eecb-c054-2166f5214d23/885288244281.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6809698075,
    "title": "Mora Saajan",
    "trackName": "Mora Saajan",
    "artistName": "Arya & Refix",
    "albumName": "Legacy Chapter 3, Vol. 7 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/10/4d/e0/104de09d-1788-c955-2df4-12e3cf8a0093/885288567182.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6809698069,
    "title": "Hell Tight",
    "trackName": "Hell Tight",
    "artistName": "Kirdaar, Arya & Refix",
    "albumName": "Legacy Chapter 3, Vol. 7 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/10/4d/e0/104de09d-1788-c955-2df4-12e3cf8a0093/885288567182.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6808526161,
    "title": "Permit",
    "trackName": "Permit",
    "artistName": "Prathamesh & Kod.E",
    "albumName": "Legacy Chapter 3, Vol. 6 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/15/d1/70/15d17051-20ad-ea0f-2c39-90145a6bffcd/885288494594.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1709082673,
    "title": "Rolla",
    "trackName": "Rolla",
    "artistName": "Dakait, Sez on the Beat & Raga",
    "albumName": "Dev Nagri Aur Main",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/94/47/57/944757a9-36c9-7a7c-00e2-a73fadaf4116/197190063394.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1620030128,
    "title": "KAUN HAI ?",
    "trackName": "KAUN HAI ?",
    "artistName": "GAUSH & Flowbo",
    "albumName": "KAUN HAI ? - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/6e/38/de/6e38def2-05a8-e0bc-18e8-afa758a9878d/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1859689460,
    "title": "Toxic",
    "trackName": "Toxic",
    "artistName": "Shareh, Hasan Raheem & Umair",
    "albumName": "The Dream",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5a/d0/25/5ad0258b-cb1d-c6c9-c16f-30364339e1fb/199806132692_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6810969274,
    "title": "Do Sawaal",
    "trackName": "Do Sawaal",
    "artistName": "Prathamesh & Kanch",
    "albumName": "Do Sawaal - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ee/12/d5/ee12d50f-8f6b-d319-9bbd-5df08456de4f/885288569230.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6810969535,
    "title": "6:10",
    "trackName": "6:10",
    "artistName": "Kirdaar & Refix",
    "albumName": "6:10 - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/19/29/14/1929144c-082a-e941-8b0c-a36e3a45ef5e/885288569384.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1576304683,
    "title": "Fate",
    "trackName": "Fate",
    "artistName": "Karma",
    "albumName": "Fate - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/16/15/8c/16158cfe-16de-5954-8913-542a52e29329/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6813144418,
    "title": "Keher Dahti",
    "trackName": "Keher Dahti",
    "artistName": "Kirdaar, Refix & 48Volt",
    "albumName": "Legacy Chapter 3, Vol. 9",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a5/72/a3/a572a36d-c6bf-d647-b3a2-d3ff60ac9011/885288614060.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6813143311,
    "title": "Thaat (Finale Mix)",
    "trackName": "Thaat (Finale Mix)",
    "artistName": "Chief, Babbar & Refix",
    "albumName": "Thaat (Finale Mix) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e3/d7/b3/e3d7b37a-fb38-f0d9-9417-89d09b36478a/885288614503.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1786852192,
    "title": "drop The Beat",
    "trackName": "drop The Beat",
    "artistName": "99side, Dharmik, pho, vichaar, K!LLSWITCH, Ghaint Jxtt, Siyaahi, Little Bhatia, Naam Sujal, Ajitesh, Danish, Devil The Rhymer, Sense, Rajjo, Mad Trip & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 20 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b4/54/ca/b454ca87-02bc-915a-c276-2c84d22e86d6/199066367162.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1659402796,
    "title": "Jhoot",
    "trackName": "Jhoot",
    "artistName": "Void, Muhfaad & Exult Yowl",
    "albumName": "Jhoot - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/2b/0a/a2/2b0aa25c-827f-e2eb-f038-db97c077ede7/4958.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1734370062,
    "title": "Piya",
    "trackName": "Piya",
    "artistName": "Archit Tak & Deep Kalsi",
    "albumName": "Boon & Bane - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b1/7d/b6/b17db6f5-6a44-22e2-dd74-3cace58eedcc/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1854209129,
    "title": "Let Go",
    "trackName": "Let Go",
    "artistName": "Talha Anjum & Umair",
    "albumName": "My Terrible Mind",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/f7/d5/02f7d5f4-4c57-6776-b903-39b6780f1616/656465403278_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1738091374,
    "title": "Don't",
    "trackName": "Don't",
    "artistName": "DIVINE",
    "albumName": "Don't - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5b/c2/98/5bc298e4-66a3-7f7a-8810-46a77ff8df61/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1535754468,
    "title": "Level Up",
    "trackName": "Level Up (feat. Divine & Kaater)",
    "artistName": "Ikka",
    "albumName": "Level Up (feat. Divine & Kaater) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c7/72/d7/c772d7da-e73d-f39a-aae6-bf6a93708e1d/20UMGIM90946.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1610309580,
    "title": "Insaan",
    "trackName": "Insaan",
    "artistName": "MC Stan",
    "albumName": "Insaan",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d0/d0/dc/d0d0dcad-ecb2-f927-9d86-3ddd941c8783/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1567144783,
    "title": "Zaalim",
    "trackName": "Zaalim (feat. N3!L)",
    "artistName": "Siyaahi & ACHARYA",
    "albumName": "Zaalim (feat. N3!L) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/1c/31/c31c315b-f22e-cb66-34e7-fd2331117fd7/672985900899.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1880668353,
    "title": "TAMASHA",
    "trackName": "TAMASHA",
    "artistName": "vichaar",
    "albumName": "VVVV VOL. 2",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6d/05/b3/6d05b3ff-8ad4-e1a6-0963-6ba7752b0dc3/820200518088.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6830205524,
    "title": "Shak",
    "trackName": "Shak",
    "artistName": "Talhah Yunus, Jokhay & Umair",
    "albumName": "Jadugar",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/b0/71/bfb071c0-255a-b6e1-f5f9-538f7f7ec224/artwork.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1336646071,
    "title": "Dhoom",
    "trackName": "Dhoom",
    "artistName": "KSHMR",
    "albumName": "The Lion Across The Field EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/37/b3/9a/37b39aec-1cd1-c4aa-bce0-3e3b54660d53/8712944513431.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812453573,
    "title": "Zeher",
    "trackName": "Zeher",
    "artistName": "Rawal & Ab 17",
    "albumName": "Sherdil",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/41/10/fd/4110fd27-8e5b-b303-2d89-c060459208b7/859705595898_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1784414916,
    "title": "Dhak Dhak",
    "trackName": "Dhak Dhak",
    "artistName": "Aanchal Tyagi, Raga, Rusha & Blizza & Abhijeet Srivastava",
    "albumName": "Dhak Dhak - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3e/2b/f1/3e2bf1ec-838d-0b9e-b3e4-9f74941e1722/24UM1IM36717.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6811646643,
    "title": "Alag",
    "trackName": "Alag (feat. MoiezParkar)",
    "artistName": "Feidhe",
    "albumName": "Alag (feat. MoiezParkar) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f3/4a/e6/f34ae6ae-f241-031f-47f7-faa40921f16c/artwork.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1601187663,
    "title": "Raja",
    "trackName": "Raja",
    "artistName": "Hellac & Emiway Bantai",
    "albumName": "Raja - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/65/7e/df/657edfe9-b827-ff14-a8de-eceb472c79cb/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1161353168,
    "title": "Khat",
    "trackName": "Khat (feat. Ikka)",
    "artistName": "Guru Randhawa & Intense",
    "albumName": "Khat (feat. Ikka) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/7f/8b/7d/7f8b7d32-7660-6826-13f4-5dcae3065cec/8903431608420_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1708552466,
    "title": "SCENE",
    "trackName": "SCENE",
    "artistName": "jaxk & Refix",
    "albumName": "Pulingo",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3a/c1/da/3ac1dadc-5f67-c0ac-7023-b1c50d5e2977/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1806623287,
    "title": "Sapne",
    "trackName": "Sapne",
    "artistName": "Lashcurry & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 19 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0a/25/6c/0a256c21-b3df-f465-ab73-0ea5dcdd6d3b/199350238307.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1779042107,
    "title": "Kalakaari Vishwasniya",
    "trackName": "Kalakaari Vishwasniya",
    "artistName": "vichaar & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 8",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/53/81/01/538101d7-b4ac-0d4c-286e-ad5f8d5b8d22/198846907840.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1786852097,
    "title": "Mehnat",
    "trackName": "Mehnat",
    "artistName": "vichaar & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 20 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b4/54/ca/b454ca87-02bc-915a-c276-2c84d22e86d6/199066367162.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1782880592,
    "title": "Bataa De Tu",
    "trackName": "Bataa De Tu",
    "artistName": "99side & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 13 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/52/89/50/528950c0-a4b9-1b5a-26be-b2aa988b3c25/199066143933.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1782837946,
    "title": "Dillagi",
    "trackName": "Dillagi",
    "artistName": "Siyaahi & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 14 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/86/a4/66/86a466d4-a51e-6f30-ce92-a9d7757b71fa/199066149874.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777772143,
    "title": "Khalbatta",
    "trackName": "Khalbatta",
    "artistName": "Dharmik & Aditya Pushkarna",
    "albumName": "MTV Hustle 4",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/90/05/3e900509-9996-e31f-873d-6bf2e53c15b0/198846746302.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777751201,
    "title": "Kothi Bangle Wali",
    "trackName": "Kothi Bangle Wali",
    "artistName": "Mad Trip & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 6",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4d/a9/c2/4da9c21b-c03e-4782-62b4-57567b056bcb/198846831589.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1784179595,
    "title": "Dana Dana",
    "trackName": "Dana Dana",
    "artistName": "Dharmik, Sense & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 15 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6a/34/f0/6a34f002-fd07-afd4-4871-ede6fcc85aee/199066199237.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777772385,
    "title": "Jaadu",
    "trackName": "Jaadu",
    "artistName": "pho & Aditya Pushkarna",
    "albumName": "MTV Hustle 4",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/90/05/3e900509-9996-e31f-873d-6bf2e53c15b0/198846746302.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1777751207,
    "title": "Main Kalam Tu Kitab",
    "trackName": "Main Kalam Tu Kitab",
    "artistName": "Dharmik & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 6",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4d/a9/c2/4da9c21b-c03e-4782-62b4-57567b056bcb/198846831589.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1782880581,
    "title": "Angad",
    "trackName": "Angad",
    "artistName": "Little Bhatia & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 13 - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/52/89/50/528950c0-a4b9-1b5a-26be-b2aa988b3c25/199066143933.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1785588514,
    "title": "No Pockets",
    "trackName": "No Pockets",
    "artistName": "vichaar & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 17",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e0/ec/b2/e0ecb2bc-c1f1-464c-4bfa-848a18041b10/199066311424.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1785588516,
    "title": "Aarzoo",
    "trackName": "Aarzoo",
    "artistName": "pho & Aditya Pushkarna",
    "albumName": "MTV Hustle 4, Episode. 17",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e0/ec/b2/e0ecb2bc-c1f1-464c-4bfa-848a18041b10/199066311424.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1680453668,
    "title": "Jaadugar",
    "trackName": "Jaadugar",
    "artistName": "Paradox",
    "albumName": "Mtv Hustle 2.0",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/04/b2/79/04b279ee-8fd8-0dd8-a50e-0e4cc54b187d/8903246794578_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1680453744,
    "title": "Rihaayi",
    "trackName": "Rihaayi",
    "artistName": "Paradox",
    "albumName": "Mtv Hustle 2.0",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/04/b2/79/04b279ee-8fd8-0dd8-a50e-0e4cc54b187d/8903246794578_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1555508834,
    "title": "Game",
    "trackName": "Game (feat. Karma)",
    "artistName": "Deep Kalsi",
    "albumName": "No Days Off - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f9/87/b0/f987b08d-1722-335a-acc4-d666c042d0e4/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6830205522,
    "title": "Phool",
    "trackName": "Phool",
    "artistName": "Talhah Yunus & Jokhay",
    "albumName": "Jadugar",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/b0/71/bfb071c0-255a-b6e1-f5f9-538f7f7ec224/artwork.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1880542127,
    "title": "Bhaag",
    "trackName": "Bhaag",
    "artistName": "SPRYK & Bharg",
    "albumName": "Bhaag - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/17/cd/f2/17cdf24a-3790-66c2-b04a-a134870fbdd9/8721215504818.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1684585059,
    "title": "Tod Fod",
    "trackName": "Tod Fod",
    "artistName": "Bandzo3rd & Panther",
    "albumName": "Tod Fod - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ee/71/4d/ee714d4d-0820-b412-41fa-75cbb843af3a/artwork.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6819009728,
    "title": "Aprampaar",
    "trackName": "Aprampaar",
    "artistName": "Siyaahi & Aditya Pushkarna",
    "albumName": "Hustle 5 - Episode 18",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fa/c9/a8/fac9a8ab-0af9-e9c0-fb38-c0fbadaa144d/8902358472206_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1762198508,
    "title": "Soyi Nahi",
    "trackName": "Soyi Nahi",
    "artistName": "Seedhe Maut",
    "albumName": "SHAKTI - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c5/54/3b/c5543b7a-68df-43c7-af19-de5bb20480ce/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1736450031,
    "title": "Bajenge",
    "trackName": "Bajenge",
    "artistName": "Badshah & Seedhe Maut",
    "albumName": "Ek Tha Raja",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a9/c7/32/a9c732cc-d880-1ee4-ff22-d01593ac6341/24UMGIM22464.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1680937490,
    "title": "Taakat",
    "trackName": "Taakat (feat. Lil Bhavi)",
    "artistName": "Seedhe Maut & DJ SA",
    "albumName": "Taakat (feat. Lil Bhavi) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4c/64/77/4c647768-7c77-67a2-a49d-621ce952e335/8445162876230.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804733466,
    "title": "Do Guna",
    "trackName": "Do Guna",
    "artistName": "Seedhe Maut",
    "albumName": "Sound of resistance, Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bd/ff/8b/bdff8b3f-6e48-ec54-5c8e-35afecb12bae/199066601273.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804733875,
    "title": "Naamcheen",
    "trackName": "Naamcheen",
    "artistName": "Seedhe Maut",
    "albumName": "न",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/01/86/13/018613ab-76b9-4442-b32d-53d9da2bc117/199066660614.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804725978,
    "title": "Hoshiyaar",
    "trackName": "Hoshiyaar",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Nayaab",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/41/71/b84171ff-de77-3505-af3d-41a5b8d37fc4/199066166178.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804725969,
    "title": "Nayaab",
    "trackName": "Nayaab",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "Nayaab",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b8/41/71/b84171ff-de77-3505-af3d-41a5b8d37fc4/199066166178.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1703238903,
    "title": "Pushpak Vimaan",
    "trackName": "Pushpak Vimaan",
    "artistName": "Seedhe Maut & Sonnyjim",
    "albumName": "Lunch Break",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/00/d4/9700d4a5-393c-2441-60af-ba2d923a38e3/8445162961745.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804728650,
    "title": "Class-Sikh Maut, Vol. II",
    "trackName": "Class-Sikh Maut, Vol. II",
    "artistName": "Prabh Deep, Seedhe Maut & Sez on the Beat",
    "albumName": "Class-Sikh Maut, Vol. II - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ff/ee/68/ffee6825-0606-c005-244c-0b14fb93fe8f/199066647196.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1448549039,
    "title": "Shaktimaan",
    "trackName": "Shaktimaan",
    "artistName": "Seedhe Maut & Sez on the Beat",
    "albumName": "The Indian Hip-Hop Compilation Volume 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/bc/70/2abc7067-f2fe-cd1f-6fb4-7d8939b60d11/193436075336_01_img001.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1804728557,
    "title": "Ball",
    "trackName": "Ball",
    "artistName": "Seedhe Maut",
    "albumName": "Ball - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d9/af/87/d9af87c8-07c1-c7eb-b619-bed374f98ed0/199066647592.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1672584156,
    "title": "Holi Re Rasiya",
    "trackName": "Holi Re Rasiya (feat. Ravi Kishan)",
    "artistName": "Mahan, Maithili Thakur & Seedhe Maut",
    "albumName": "Holi Re Rasiya (feat. Ravi Kishan) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/37/2d/8e/372d8e0c-28d9-7209-fa72-4365287c6627/23UMGIM17517.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557452715,
    "title": "Sadak",
    "trackName": "Sadak",
    "artistName": "Emiway Bantai",
    "albumName": "Sadak - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/35/e8/be/35e8be64-2bab-b366-3216-8b74bd46ce82/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6763770220,
    "title": "JAANE JAA",
    "trackName": "JAANE JAA",
    "artistName": "Emiway Bantai",
    "albumName": "JAANE JAA - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ea/71/9d/ea719dca-b7b0-22e4-4a48-88fa185c7f58/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1886991072,
    "title": "Seedha Mai Kal Jackson",
    "trackName": "Seedha Mai Kal Jackson",
    "artistName": "Emiway Bantai",
    "albumName": "Seedha Mai Kal Jackson - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/66/0b/36/660b3678-ff86-fe82-bad4-031453d7f3d1/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1873924638,
    "title": "LAZANUS",
    "trackName": "LAZANUS",
    "artistName": "Emiway Bantai",
    "albumName": "LAZANUS - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6f/bc/ee/6fbcee6b-4468-1a8a-b9fc-93f772807ea3/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1871528292,
    "title": "Follow Karo",
    "trackName": "Follow Karo",
    "artistName": "Emiway Bantai",
    "albumName": "Follow Karo - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/79/0d/d9/790dd9c7-2ca5-b68d-582a-8ac032f829fe/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1867832767,
    "title": "-10/20",
    "trackName": "-10/20",
    "artistName": "Emiway Bantai",
    "albumName": "-10/20 - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1c/fd/8c/1cfd8cd9-bc4f-cbed-a497-df1710da2ca9/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1864827230,
    "title": "Big Stepper",
    "trackName": "Big Stepper",
    "artistName": "Emiway Bantai",
    "albumName": "Big Stepper - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/63/57/b3/6357b3a0-69e3-b171-aeb2-e932170a7d7d/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1862199493,
    "title": "Bhule Nahi",
    "trackName": "Bhule Nahi",
    "artistName": "Emiway Bantai",
    "albumName": "Bhule Nahi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/6d/ca/8d6dca67-416d-b87d-7ed4-95ff49cac5dd/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1851166903,
    "title": "Hawa",
    "trackName": "Hawa",
    "artistName": "Emiway Bantai",
    "albumName": "Hawa - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/34/10/ab/3410ab8c-2250-87cc-f6e0-158398640566/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1852201141,
    "title": "Mat Kar Lala",
    "trackName": "Mat Kar Lala",
    "artistName": "Emiway Bantai",
    "albumName": "FTSTTS",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/bd/68/0dbd6837-466c-55d2-e4a7-811ecbf05465/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1844706759,
    "title": "Sorat",
    "trackName": "Sorat",
    "artistName": "Emiway Bantai",
    "albumName": "Sorat - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2f/77/b0/2f77b08c-b37a-6c95-2c26-4882470e9bf0/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1852201486,
    "title": "Woh Banaya",
    "trackName": "Woh Banaya",
    "artistName": "Emiway Bantai",
    "albumName": "FTSTTS",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/bd/68/0dbd6837-466c-55d2-e4a7-811ecbf05465/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1841721984,
    "title": "Log Kya Kahenge",
    "trackName": "Log Kya Kahenge",
    "artistName": "Emiway Bantai",
    "albumName": "Log Kya Kahenge - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/38/89/0e/38890e01-725f-5617-4926-4e24f9ef81b2/199538957266.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1840476083,
    "title": "Those Dayz",
    "trackName": "Those Dayz",
    "artistName": "Emiway Bantai",
    "albumName": "Those Dayz - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5e/9c/c4/5e9cc4c1-e140-fb65-860a-e8f209d9edfb/199538908718.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1820896455,
    "title": "Paisa Paisa",
    "trackName": "Paisa Paisa",
    "artistName": "Emiway Bantai",
    "albumName": "Paisa Paisa - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/68/6d/7e686db3-4636-eb0f-7b93-1b6274b63957/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1816527075,
    "title": "Tribute To Sidhu Moosewala",
    "trackName": "Tribute To Sidhu Moosewala",
    "artistName": "Emiway Bantai & Sidhu Moose Wala",
    "albumName": "Tribute To Sidhu Moosewala - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a9/cc/3c/a9cc3c59-74b2-debc-ff58-56d46dbba03d/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1826827013,
    "title": "Josh Mei",
    "trackName": "Josh Mei",
    "artistName": "Emiway Bantai & Young Galib",
    "albumName": "Bajis - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e6/6d/46/e66d46c6-17d2-f927-27ad-f5c363919ca3/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1784073452,
    "title": "Safar",
    "trackName": "Safar",
    "artistName": "Emiway Bantai",
    "albumName": "Northern Nights (EP)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/29/c7/49/29c749a1-d63f-4d4b-5aa9-67a81015d0bf/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1784073439,
    "title": "Misunderstood",
    "trackName": "Misunderstood",
    "artistName": "Emiway Bantai",
    "albumName": "Northern Nights (EP)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/29/c7/49/29c749a1-d63f-4d4b-5aa9-67a81015d0bf/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1782777293,
    "title": "Mera Na Hua",
    "trackName": "Mera Na Hua",
    "artistName": "Emiway Bantai",
    "albumName": "Mera Na Hua - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/dd/2d/97/dd2d9789-02f4-b8aa-f1e9-daf257e555b5/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1778413945,
    "title": "Zindagi Mast Hai",
    "trackName": "Zindagi Mast Hai",
    "artistName": "Emiway Bantai",
    "albumName": "Zindagi Mast Hai - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/df/b6/a3/dfb6a306-4947-f1f7-202d-6c1a868c4d55/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1731146680,
    "title": "Main Hawa Mein Hu",
    "trackName": "Main Hawa Mein Hu",
    "artistName": "Maninder Buttar & Emiway Bantai",
    "albumName": "Main Hawa Mein Hu - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/6d/c2/4c/6dc24c81-cad0-862f-b77a-197c4b7a8aa9/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1764888324,
    "title": "ROKO 2MG",
    "trackName": "ROKO 2MG",
    "artistName": "Emiway Bantai",
    "albumName": "ROKO 2MG - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8a/ee/64/8aee6423-fd21-59d6-d05e-3ecfe3c5ec58/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1756884063,
    "title": "GANI BHAI",
    "trackName": "GANI BHAI",
    "artistName": "Emiway Bantai",
    "albumName": "sPEAK - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fa/98/b0/fa98b01a-0ef4-0c90-daf2-60f35f577d53/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1754370344,
    "title": "Show Me",
    "trackName": "Show Me",
    "artistName": "Prznt, Emiway Bantai & Adrian Chafer",
    "albumName": "Show Me - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/03/34/b9/0334b908-2fc4-1ed1-b83c-1da00beb2d5a/0.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1746682619,
    "title": "Independent",
    "trackName": "Independent",
    "artistName": "Emiway Bantai",
    "albumName": "Independent - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9a/f6/b8/9af6b893-4a9e-9efc-125e-82de75075ee7/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1739540406,
    "title": "One Hai Re Bhai",
    "trackName": "One Hai Re Bhai",
    "artistName": "Emiway Bantai",
    "albumName": "One Hai Re Bhai - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/96/a2/82/96a28218-6df6-09fa-fbd8-8b683b13cfc9/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1735908673,
    "title": "Hasbi Rabbi",
    "trackName": "Hasbi Rabbi",
    "artistName": "Emiway Bantai & Young Galib",
    "albumName": "Hasbi Rabbi - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/7a/62/f6/7a62f6e2-b8d1-fe99-bf90-d4092bbc40c1/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1727687633,
    "title": "Aksar",
    "trackName": "Aksar (From \"Wholeheartedly\")",
    "artistName": "Emiway Bantai & The Rish",
    "albumName": "Aksar (From \"Wholeheartedly\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/b7/58/0db75872-32cb-67f5-e811-e6ba35acf7ba/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1843058828,
    "title": "Theekh Hu Mei",
    "trackName": "Theekh Hu Mei",
    "artistName": "Emiway Bantai & Hellac",
    "albumName": "Wholeheartedly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/13/03/33/13033347-3c60-da70-c359-cf5cf3d1c739/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1843058615,
    "title": "Boht Kuch",
    "trackName": "Boht Kuch",
    "artistName": "Emiway Bantai, Flowbo & Young Galib",
    "albumName": "Wholeheartedly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/13/03/33/13033347-3c60-da70-c359-cf5cf3d1c739/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1728930543,
    "title": "Fake Ones",
    "trackName": "Fake Ones (From \"Wholeheartedly\")",
    "artistName": "Emiway Bantai, Shez & Flowbo",
    "albumName": "Fake Ones (From \"Wholeheartedly\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8d/02/d4/8d02d40e-a2c9-2788-b064-20eaf7b232b9/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1725278249,
    "title": "Bolna Tu Bantai",
    "trackName": "Bolna Tu Bantai (From \"Whole Heartedly\")",
    "artistName": "Emiway Bantai",
    "albumName": "Bolna Tu Bantai (From \"Whole Heartedly\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ab/11/29/ab11291f-d5b9-2c68-087f-99d13b0ca6b7/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1720421381,
    "title": "Rehem",
    "trackName": "Rehem",
    "artistName": "Emiway Bantai",
    "albumName": "Rehem - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c4/f5/d0/c4f5d0c9-5804-2acf-3fbd-3b6e189a7fb6/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1716151881,
    "title": "Good Boy",
    "trackName": "Good Boy",
    "artistName": "Emiway Bantai & Yo Yo Honey Singh",
    "albumName": "Good Boy - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9e/b8/46/9eb8466e-5817-2183-a81d-b6a9ad805bd2/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1705448397,
    "title": "Indian Hip Hop Cypher",
    "trackName": "Indian Hip Hop Cypher",
    "artistName": "Emiway Bantai, MEMAX, Refix & Shez",
    "albumName": "Indian Hip Hop Cypher - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b5/8e/69/b58e69cb-1143-6725-e75a-1545f12bd1f9/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1699016406,
    "title": "Kudi",
    "trackName": "Kudi (feat. Swaalina)",
    "artistName": "Emiway Bantai",
    "albumName": "Kudi (feat. Swaalina) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7d/8a/9d/7d8a9d9b-ecd4-7fe2-9144-b43b0ae87ef6/196922568947_Cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1690844271,
    "title": "Beta Karta Rap",
    "trackName": "Beta Karta Rap",
    "artistName": "Emiway Bantai",
    "albumName": "King Of The Streets",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/75/ec/21/75ec21c6-afbb-2adf-c340-0fe410a527b7/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1686102777,
    "title": "Kya Bolti Public",
    "trackName": "Kya Bolti Public",
    "artistName": "Emiway Bantai & Young Galib",
    "albumName": "Kya Bolti Public - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3b/5c/5a/3b5c5a8b-1dc1-cc4d-c69e-dc0fb446cdc0/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1682880603,
    "title": "Chhod Dala",
    "trackName": "Chhod Dala",
    "artistName": "Emiway Bantai",
    "albumName": "Chhod Dala - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ae/2c/08/ae2c0800-5bad-b242-480b-a547241b21a4/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1675454664,
    "title": "Scene Change",
    "trackName": "Scene Change",
    "artistName": "Emiway Bantai",
    "albumName": "Scene Change - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8b/2d/c5/8b2dc530-c823-2351-25c8-07f8a0e12587/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1659032574,
    "title": "Pyaar Hai",
    "trackName": "Pyaar Hai",
    "artistName": "Emiway Bantai",
    "albumName": "Pyaar Hai - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3f/12/26/3f1226a5-e36d-447b-5af4-681869e3be31/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1652205159,
    "title": "GUESS",
    "trackName": "GUESS",
    "artistName": "Emiway Bantai",
    "albumName": "GUESS - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/d9/12/5f/d9125f4f-9139-6489-bea9-516b404c99df/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1647624303,
    "title": "Baby",
    "trackName": "Baby (feat. Young Galib)",
    "artistName": "Emiway Bantai",
    "albumName": "Baby (feat. Young Galib) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/37/31/39/373139d0-7a04-b942-5b65-c9657199e9f2/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1643201903,
    "title": "Changed",
    "trackName": "Changed",
    "artistName": "Emiway Bantai",
    "albumName": "Monsoon (EP) - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/56/73/07/56730784-c330-13b3-6860-f7e634fe8253/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1643201912,
    "title": "Yakeen",
    "trackName": "Yakeen",
    "artistName": "Emiway Bantai",
    "albumName": "Monsoon (EP) - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/56/73/07/56730784-c330-13b3-6860-f7e634fe8253/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1643201238,
    "title": "BUSY",
    "trackName": "BUSY",
    "artistName": "Emiway Bantai & Young Galib",
    "albumName": "Monsoon (EP) - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/56/73/07/56730784-c330-13b3-6860-f7e634fe8253/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1643201524,
    "title": "Bhool Jaa (Marandhiru) [feat. Young Galib, MEMAX & BEN Z]",
    "trackName": "Bhool Jaa (Marandhiru) [feat. Young Galib, MEMAX & BEN Z]",
    "artistName": "Emiway Bantai",
    "albumName": "Monsoon (EP) - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/56/73/07/56730784-c330-13b3-6860-f7e634fe8253/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1629387583,
    "title": "Jhootha",
    "trackName": "Jhootha",
    "artistName": "Celina Sharma & Emiway Bantai",
    "albumName": "Jhootha - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/d7/01/42/d701421c-4352-53ad-a584-84713e615bf2/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1629515252,
    "title": "KR L$DA SIGN",
    "trackName": "KR L$DA SIGN",
    "artistName": "Emiway Bantai",
    "albumName": "KR L$DA SIGN - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/5b/b1/3b/5bb13b89-e1cf-bd01-fde1-1a79a2dfcb98/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1622828263,
    "title": "Choco",
    "trackName": "Choco",
    "artistName": "Emiway Bantai",
    "albumName": "8 Saal",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/7d/93/51/7d935174-4562-6921-2534-942d4afd6439/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1615345469,
    "title": "Mera",
    "trackName": "Mera",
    "artistName": "Emiway Bantai",
    "albumName": "Mera - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f8/f4/5f/f8f45fc8-7b13-79ea-7852-ca241f44eec0/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1622827964,
    "title": "8 Saal",
    "trackName": "8 Saal",
    "artistName": "Emiway Bantai",
    "albumName": "8 Saal",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/7d/93/51/7d935174-4562-6921-2534-942d4afd6439/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1622828260,
    "title": "Life is good",
    "trackName": "Life is good",
    "artistName": "Emiway Bantai",
    "albumName": "8 Saal",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/7d/93/51/7d935174-4562-6921-2534-942d4afd6439/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1622827982,
    "title": "Pain",
    "trackName": "Pain",
    "artistName": "Emiway Bantai",
    "albumName": "8 Saal",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/7d/93/51/7d935174-4562-6921-2534-942d4afd6439/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1622827984,
    "title": "Focus",
    "trackName": "Focus",
    "artistName": "Emiway Bantai",
    "albumName": "8 Saal",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/7d/93/51/7d935174-4562-6921-2534-942d4afd6439/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1617425974,
    "title": "CHUSAMBA",
    "trackName": "CHUSAMBA",
    "artistName": "Emiway Bantai",
    "albumName": "CHUSAMBA - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/4e/33/ac/4e33acd7-9ced-40c7-dd72-be1309349e01/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1601030873,
    "title": "Street Talk",
    "trackName": "Street Talk",
    "artistName": "Emiway Bantai",
    "albumName": "Street Talk - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d4/63/16/d4631603-7b26-84c2-e112-417e23a38a04/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1599292480,
    "title": "Shukriya",
    "trackName": "Shukriya",
    "artistName": "Emiway Bantai",
    "albumName": "Shukriya - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/ba/0b/55ba0b3c-ff3c-5654-aef0-b9f87def0be0/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1598337221,
    "title": "That's How I Feel",
    "trackName": "That's How I Feel",
    "artistName": "Emiway Bantai",
    "albumName": "That's How I Feel - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/67/d9/52/67d952e4-3cb4-ee86-fe8c-45ae05e9eefb/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1584307087,
    "title": "Kyu Jane De",
    "trackName": "Kyu Jane De",
    "artistName": "Emiway Bantai",
    "albumName": "Malum Hai Na",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/6a/38/ea6a384b-a2f2-03f0-d3b3-9eb0d77cc9be/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1584306890,
    "title": "Always on Top",
    "trackName": "Always on Top",
    "artistName": "Emiway Bantai",
    "albumName": "Malum Hai Na",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/6a/38/ea6a384b-a2f2-03f0-d3b3-9eb0d77cc9be/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1584306595,
    "title": "Chalte Firte",
    "trackName": "Chalte Firte",
    "artistName": "Emiway Bantai",
    "albumName": "Malum Hai Na",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/6a/38/ea6a384b-a2f2-03f0-d3b3-9eb0d77cc9be/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1584307306,
    "title": "Believe",
    "trackName": "Believe",
    "artistName": "Emiway Bantai",
    "albumName": "Malum Hai Na",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/6a/38/ea6a384b-a2f2-03f0-d3b3-9eb0d77cc9be/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1584307303,
    "title": "Aisa Kuch Shot Nahi Hai (Remix)",
    "trackName": "Aisa Kuch Shot Nahi Hai (Remix)",
    "artistName": "Emiway Bantai",
    "albumName": "Malum Hai Na",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/6a/38/ea6a384b-a2f2-03f0-d3b3-9eb0d77cc9be/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1584306591,
    "title": "Momma",
    "trackName": "Momma",
    "artistName": "Emiway Bantai",
    "albumName": "Malum Hai Na",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/6a/38/ea6a384b-a2f2-03f0-d3b3-9eb0d77cc9be/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1760573086,
    "title": "Bad Munda",
    "trackName": "Bad Munda",
    "artistName": "Jass Manak & Emiway Bantai",
    "albumName": "Bad Munda - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/2d/c4/0d2dc427-1bf3-3285-0076-7b232bc756d1/3616558841056.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1584307103,
    "title": "Jawab De",
    "trackName": "Jawab De",
    "artistName": "Emiway Bantai",
    "albumName": "Malum Hai Na",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/6a/38/ea6a384b-a2f2-03f0-d3b3-9eb0d77cc9be/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1570808691,
    "title": "Sath Mai",
    "trackName": "Sath Mai (feat. Meme Machine & Swaalina)",
    "artistName": "Emiway Bantai",
    "albumName": "Sath Mai (feat. Meme Machine & Swaalina) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4c/d1/44/4cd144ac-dc2f-19a5-c6ad-ebf0cb88c0e0/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1569951603,
    "title": "Bantai Ki Public",
    "trackName": "Bantai Ki Public",
    "artistName": "Emiway Bantai",
    "albumName": "Bantai Ki Public - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cf/c1/36/cfc13601-e6cb-d36f-5c78-bab905dd6266/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1672404361,
    "title": "Machayenge",
    "trackName": "Machayenge",
    "artistName": "Emiway Bantai",
    "albumName": "Machayenge - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5b/db/e9/5bdbe939-92c8-df00-f942-2534813d0d06/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1562277946,
    "title": "Jamaica to India",
    "trackName": "Jamaica to India",
    "artistName": "Emiway Bantai & Chris Gayle UniverseBoss",
    "albumName": "Jamaica to India - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c2/a4/48/c2a448f2-e8f2-2800-b324-16f97e7e7aef/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1555728377,
    "title": "NO LOVE",
    "trackName": "NO LOVE",
    "artistName": "Emiway Bantai & Loka",
    "albumName": "NO LOVE - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7c/9e/1d/7c9e1dc8-b4cb-5e1f-dfa1-179ba12789bd/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1550885308,
    "title": "What Can I Do",
    "trackName": "What Can I Do",
    "artistName": "Emiway Bantai",
    "albumName": "What Can I Do - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/22/c0/8e/22c08ecb-55a3-d820-188f-78184a849186/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1542234796,
    "title": "Ring Ring",
    "trackName": "Ring Ring (feat. Meme Machine)",
    "artistName": "Emiway Bantai",
    "albumName": "Ring Ring (feat. Meme Machine) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/a0/60/62/a0606250-6740-17c7-086c-25bb1cfe8d78/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1539328204,
    "title": "Khatam Hue Waande",
    "trackName": "Khatam Hue Waande",
    "artistName": "Emiway Bantai",
    "albumName": "Khatam Hue Waande - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/02/4b/91/024b91c9-45d8-4698-ef12-1c69d8db3896/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1531536819,
    "title": "Ladka Alag Sa",
    "trackName": "Ladka Alag Sa",
    "artistName": "Emiway Bantai",
    "albumName": "Ladka Alag Sa - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b4/da/f2/b4daf238-f081-a3f2-4600-4dd94b34b9cb/5059435864867.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1525544385,
    "title": "Lonely",
    "trackName": "Lonely (feat. Prznt)",
    "artistName": "Emiway Bantai",
    "albumName": "Lonely (feat. Prznt) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/18/d6/fb/18d6fb83-e4c0-300f-db55-e178bb08a304/195497022823.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1524261982,
    "title": "Kaun Hai Ye",
    "trackName": "Kaun Hai Ye",
    "artistName": "Emiway Bantai",
    "albumName": "Kaun Hai Ye - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3c/a7/4a/3ca74a34-e0e5-d191-06f5-9813bb6b33a9/889845955399.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1520017414,
    "title": "Round One",
    "trackName": "Round One",
    "artistName": "Emiway Bantai",
    "albumName": "Round One - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/61/5c/e5/615ce586-81e2-ec90-7373-77382754260f/3502356666871.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1513460118,
    "title": "Firse Machayenge (Remix)",
    "trackName": "Firse Machayenge (Remix)",
    "artistName": "Emiway Bantai & Macklemore",
    "albumName": "Firse Machayenge (Remix) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/c7/7a/fe/c77afe00-beb3-620e-5320-48cc3f971204/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1622527441,
    "title": "GRIND",
    "trackName": "GRIND",
    "artistName": "Emiway Bantai",
    "albumName": "Dhund Ke Dikha - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5a/5e/3b/5a5e3bd0-a38c-f549-589f-f34895885850/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1622162355,
    "title": "Gully Ka Kutta",
    "trackName": "Gully Ka Kutta",
    "artistName": "Emiway Bantai",
    "albumName": "Gully Ka Kutta - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/22/94/1b/22941b9e-2a38-0f9e-be79-640fcc1ec03c/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1672405288,
    "title": "Khatam Karona",
    "trackName": "Khatam Karona",
    "artistName": "Emiway Bantai",
    "albumName": "Khatam Karona - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/96/d2/43/96d243c1-2bed-7c38-6fe6-aff32c71bd0c/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557478875,
    "title": "Asli Nakli",
    "trackName": "Asli Nakli",
    "artistName": "Emiway Bantai",
    "albumName": "Asli Nakli - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/da/da/74/dada7428-2b59-48ee-3052-1d255fef3bac/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1672404124,
    "title": "Dhua Dhua",
    "trackName": "Dhua Dhua",
    "artistName": "Emiway Bantai",
    "albumName": "Dhua Dhua - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/e4/3b/0de43b61-c1fe-85ef-2a33-072c3df3562a/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1480409723,
    "title": "Lean On",
    "trackName": "Lean On",
    "artistName": "Celina Sharma, Emiway Bantai",
    "albumName": "Lean On - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/8c/fe/07/8cfe0784-37c9-4cf9-bd74-05a8ebb6a7eb/19UMGIM85358.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1672405524,
    "title": "Jallad",
    "trackName": "Jallad",
    "artistName": "Emiway Bantai",
    "albumName": "Jallad - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4e/30/08/4e30082c-d36a-17fe-3cc7-1a1c396c4b2b/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557457168,
    "title": "Boht Hard",
    "trackName": "Boht Hard",
    "artistName": "Emiway Bantai & Thoratt",
    "albumName": "Boht Hard - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/bf/4c/4c/bf4c4c41-45f4-bbe0-6f40-074172cf626d/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557478799,
    "title": "Giraftaar",
    "trackName": "Giraftaar",
    "artistName": "Emiway Bantai",
    "albumName": "Giraftaar - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/31/79/84/31798487-7490-9c18-0abe-25f1c7fe2b18/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1622527313,
    "title": "Samajh mein aaya kya?",
    "trackName": "Samajh mein aaya kya?",
    "artistName": "Emiway Bantai",
    "albumName": "Samajh mein aaya kya? - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ad/8a/8d/ad8a8d2d-8ba0-3056-2351-2a40436bec62/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557455723,
    "title": "Mazak Hai Kya",
    "trackName": "Mazak Hai Kya",
    "artistName": "Emiway Bantai",
    "albumName": "Mazak Hai Kya - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/74/cc/f6/74ccf692-5e88-0925-3c2b-5949c2bfec62/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557457293,
    "title": "Abe Chodna",
    "trackName": "Abe Chodna",
    "artistName": "Emiway Bantai & Muhfaad",
    "albumName": "Abe Chodna - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0d/d1/9c/0dd19cfc-a6f4-1c58-9862-3cfe554193dc/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557479001,
    "title": "Ebu Hatela",
    "trackName": "Ebu Hatela (feat. Meme Machine)",
    "artistName": "Emiway Bantai",
    "albumName": "Ebu Hatela (feat. Meme Machine) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/51/31/97/5131971f-41fb-1317-4084-393d3325d395/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557452495,
    "title": "Mera Bhai Mera Bhai",
    "trackName": "Mera Bhai Mera Bhai",
    "artistName": "Emiway Bantai",
    "albumName": "Mera Bhai Mera Bhai - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e0/88/b0/e088b099-bf9c-102b-5c5b-cbbec3f45a7b/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557478903,
    "title": "Abbu",
    "trackName": "Abbu",
    "artistName": "Emiway Bantai",
    "albumName": "Abbu - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6c/a9/59/6ca95909-6a97-c0a7-d639-d1894ddc5784/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557457161,
    "title": "Mein",
    "trackName": "Mein",
    "artistName": "Emiway Bantai",
    "albumName": "Mein - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/64/f2/19/64f21957-644f-0db5-1ce0-aaf47878e7d2/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557452724,
    "title": "Kala Dhan",
    "trackName": "Kala Dhan",
    "artistName": "Emiway Bantai",
    "albumName": "Kala Dhan - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a5/5a/f0/a55af066-1593-7ada-8b22-562c10906d7e/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557452641,
    "title": "Naughty Boy",
    "trackName": "Naughty Boy",
    "artistName": "Emiway Bantai",
    "albumName": "Naughty Boy - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/4c/cf/10/4ccf109b-9366-ef9e-0490-9a183c31515c/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557455305,
    "title": "Fun Dekho",
    "trackName": "Fun Dekho",
    "artistName": "Emiway Bantai",
    "albumName": "Fun Dekho - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a7/e7/b7/a7e7b7b9-a399-13f9-f427-36e2264e8bc0/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557452979,
    "title": "Tadak Padak",
    "trackName": "Tadak Padak",
    "artistName": "Emiway Bantai",
    "albumName": "Tadak Padak - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/65/76/8a/65768a3b-18c3-3527-5bb8-3af2bcfc0942/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557457037,
    "title": "Keema",
    "trackName": "Keema",
    "artistName": "Emiway Bantai",
    "albumName": "Keema - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b5/7b/e8/b57be8f1-c519-81ca-0067-ab74222766a2/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557452582,
    "title": "Soch",
    "trackName": "Soch",
    "artistName": "Emiway Bantai",
    "albumName": "Soch - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/35/7b/fc/357bfc6e-5c1c-18ce-c481-9a26484c444f/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557459208,
    "title": "Mera Naam Bantai",
    "trackName": "Mera Naam Bantai (feat. Gagan)",
    "artistName": "Emiway Bantai",
    "albumName": "Mera Naam Bantai (feat. Gagan) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e7/c2/47/e7c247c8-c0e7-eaba-00a6-9debafc241d2/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557455700,
    "title": "Maal Wali Aunty",
    "trackName": "Maal Wali Aunty",
    "artistName": "Emiway Bantai",
    "albumName": "Maal Wali Aunty - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/47/51/9b/47519bd5-99c9-069b-11ed-af25c080f7b5/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557478922,
    "title": "Na Maine Jana",
    "trackName": "Na Maine Jana",
    "artistName": "Emiway Bantai",
    "albumName": "Na Maine Jana - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/5b/14/6a/5b146a2b-5bdf-121c-9486-885d953dbd40/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557478798,
    "title": "Aur Bantai",
    "trackName": "Aur Bantai",
    "artistName": "Emiway Bantai",
    "albumName": "Aur Bantai - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/74/2e/98/742e9819-25c2-f9e4-b573-7238e2a05fa9/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557465760,
    "title": "Soonn",
    "trackName": "Soonn",
    "artistName": "Emiway Bantai & freZZ",
    "albumName": "Soonn - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f2/a2/6c/f2a26cc7-42a9-ffd3-baac-627ab1a2d6ba/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1557478531,
    "title": "Bewafa Ho Dafa",
    "trackName": "Bewafa Ho Dafa",
    "artistName": "Emiway Bantai",
    "albumName": "Bewafa Ho Dafa - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e8/ba/17/e8ba177b-72bd-7a91-90ad-69d4674feda5/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1588692066,
    "title": "OG",
    "trackName": "OG",
    "artistName": "KR$NA",
    "albumName": "OG - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/72/d3/de/72d3deb5-8eae-256b-8638-d1446bd5b71d/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1548512859,
    "title": "No Losses",
    "trackName": "No Losses",
    "artistName": "KR$NA",
    "albumName": "No Losses - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/50/fb/31/50fb31cc-0769-027a-0087-e466d1c03c6e/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1702607189,
    "title": "Playground",
    "trackName": "Playground (feat. Only For The Fans)",
    "artistName": "Hi-Rez, KXNG Crooked & KR$NA",
    "albumName": "Playground (feat. Only For The Fans) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/69/a9/2c/69a92c11-1392-5aa7-c78b-e6904347d7e3/85607.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1619602330,
    "title": "ON",
    "trackName": "ON",
    "artistName": "Raja Kumari & KR$NA",
    "albumName": "HBIC - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/79/fa/21/79fa21ee-7d6a-18ff-ebb2-34b9c79ce052/196626831767.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1321591603,
    "title": "Meri Baari",
    "trackName": "Meri Baari (feat. KR$NA)",
    "artistName": "Kidshot",
    "albumName": "Meri Baari (feat. KR$NA) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/8a/58/ae/8a58ae65-e500-2b93-50e4-0f1e8c4e7978/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776947300,
    "title": "Still Here (Intro)",
    "trackName": "Still Here (Intro)",
    "artistName": "KR$NA",
    "albumName": "Still Here",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f0/71/db/f071db1e-833f-b162-2700-44185b7b3c07/3616553919019.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1549639460,
    "title": "Aadat",
    "trackName": "Aadat",
    "artistName": "KR$NA",
    "albumName": "Aadat - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/cd/44/e1/cd44e1b6-da68-b691-1bd7-26d6ee901a3d/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776947311,
    "title": "Dream",
    "trackName": "Dream",
    "artistName": "KR$NA",
    "albumName": "Still Here",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f0/71/db/f071db1e-833f-b162-2700-44185b7b3c07/3616553919019.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1529547696,
    "title": "Jaanta Kyun",
    "trackName": "Jaanta Kyun",
    "artistName": "KR$NA & Deep Kalsi",
    "albumName": "Jaanta Kyun - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ad/7d/2c/ad7d2c1f-d3f6-f14f-9ac7-613feecad2e3/8718857679394.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1814144682,
    "title": "Buss Down",
    "trackName": "Buss Down",
    "artistName": "KR$NA, Raftaar & Phenom",
    "albumName": "Yours Truly",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/bf/21/24bf21b2-7b32-4256-c9dd-67d5a70fee75/199350613517.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1529533988,
    "title": "Down",
    "trackName": "Down",
    "artistName": "Raftaar & KR$NA",
    "albumName": "Mr. Nair",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d5/a3/d6/d5a3d681-6e77-6960-3177-1d0f23b5d78a/840780170094.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6776934158,
    "title": "Saath Ya Khilaaf",
    "trackName": "Saath Ya Khilaaf",
    "artistName": "KR$NA & Raftaar",
    "albumName": "Saath Ya Khilaaf - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/99/7e/34/997e346b-11ca-6a4d-043c-b2c0316a72f3/3616551473001.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6806155170,
    "title": "No Mercy",
    "trackName": "No Mercy",
    "artistName": "Deep Kalsi, Raftaar, KR$NA & Karma",
    "albumName": "TUNNEL VISION",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d6/3c/da/d63cda6b-81e7-b00f-9cad-e87b2e6e4565/3617381108781.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 6803355410,
    "title": "NO CHINA",
    "trackName": "NO CHINA",
    "artistName": "Raftaar & KR$NA",
    "albumName": "HARD DRIVE, VOL. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ee/7e/ab/ee7eab5b-aa9a-d2c7-5008-fce40bc3fc8e/3617053331370.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1823190173,
    "title": "Buss Down (Mixed)",
    "trackName": "Buss Down (Mixed)",
    "artistName": "Raftaar, Phenom & KR$NA",
    "albumName": "SOUNDS LIKE SHEZ, Vol. 3 (DJ Mix)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/a6/c7/3ea6c777-99b6-d67e-5bd8-cfc39eaaae29/61f38b22-f071-48a5-9c85-9c2748e8331e.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1188255408,
    "title": "Haseeno Ka Deewana",
    "trackName": "Haseeno Ka Deewana",
    "artistName": "Raftaar & Payal Dev",
    "albumName": "Kaabil (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/dc/1f/ce/dc1fcec6-f100-103e-bc6f-125ce64d5a16/8903431632548_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 951006393,
    "title": "Swag Mera Desi",
    "trackName": "Swag Mera Desi",
    "artistName": "Raftaar & Manj Musik",
    "albumName": "Spoken Word - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/2f/cf/90/2fcf9081-f431-4fa4-7711-4e6d98b9123e/dj.lyppxrfg.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1194912515,
    "title": "Go Pagal",
    "trackName": "Go Pagal",
    "artistName": "Raftaar & Nindy Kaur",
    "albumName": "Jolly LLB 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/e3/73/05/e3730555-ca93-b050-cfbf-6d6722212c18/8902894358736_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1158846623,
    "title": "Toh Dishoom",
    "trackName": "Toh Dishoom",
    "artistName": "Pritam, Raftaar, Shahid Mallya & Mayur Puri",
    "albumName": "Dishoom (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f4/37/b0/f437b090-8672-79a0-44e5-dcdb72babea2/8902894358231_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1159600837,
    "title": "All Black",
    "trackName": "All Black",
    "artistName": "Raftaar & Sukh-E Muzical Doctorz",
    "albumName": "All Black - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/f6/73/ae/f673ae3f-cac0-0acd-05e3-8bab693f5a36/8903431609014_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1324456546,
    "title": "Zinda Hai",
    "trackName": "Zinda Hai",
    "artistName": "Vishal & Shekhar, Julius Packiam, Sukhwinder Singh & Raftaar",
    "albumName": "Tiger Zinda Hai (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/55/16/15/5516155a-733c-800c-1081-e5e982e8a603/849486091696_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1173481973,
    "title": "Ki Kariye Nachna Aaonda Nahin",
    "trackName": "Ki Kariye Nachna Aaonda Nahin (From \"Tum Bin 2\")",
    "artistName": "Harrdy Sandhu, Neha Kakkar, Raftaar & Gourov-Roshin",
    "albumName": "Ki Kariye Nachna Aaonda Nahin (From \"Tum Bin 2\") - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/69/6c/6a/696c6aa3-fdaf-4c5c-f2f5-6165690220a8/8903431629869_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1205489437,
    "title": "Hare Krishna Hare Ram",
    "trackName": "Hare Krishna Hare Ram",
    "artistName": "Armaan Malik, Ritika & Raftaar",
    "albumName": "Commando 2 (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/e6/dd/46/e6dd46c8-943c-06dd-110d-4d98fda31b3d/8902894358781_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1592956489,
    "title": "Ghana Kasoota",
    "trackName": "Ghana Kasoota (feat. Surbhi Jyoti)",
    "artistName": "Raftaar & Rashmeet Kaur",
    "albumName": "Ghana Kasoota (feat. Surbhi Jyoti) - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e5/2d/5e/e52d5e9e-a1c5-fdaf-8102-58ad44d2f735/886449712588.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 985958524,
    "title": "Stand Up - Spoken Word",
    "trackName": "Stand Up - Spoken Word",
    "artistName": "B.I.G Dhillon, Raftaar & Manj Musik",
    "albumName": "Stand Up - Spoken Word - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/c5/21/2f/c5212fc1-3d10-8ee6-8d4a-42d4a83b4281/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1531116189,
    "title": "Dhaakad",
    "trackName": "Dhaakad",
    "artistName": "Pritam & Raftaar",
    "albumName": "Dangal (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bd/3d/02/bd3d02ff-4ac6-7ca0-23a4-2a9afbcb2f14/840780161771.png/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1711019967,
    "title": "Chora Baba Ka",
    "trackName": "Chora Baba Ka",
    "artistName": "Raftaar & Dhanda Nyoliwala",
    "albumName": "Chora Baba Ka - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/51/09/8e5109f6-4ef3-ffa9-fc6f-83cdb7d0de44/23UM1IM20635.rgb.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1706792330,
    "title": "Legacy",
    "trackName": "Legacy",
    "artistName": "KSHMR & Raftaar",
    "albumName": "Legacy - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/cf/ed/6ccfed06-8cb5-05ab-3b51-8484f6f4e8bd/197189871245.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1225527683,
    "title": "Mera Highway Star",
    "trackName": "Mera Highway Star",
    "artistName": "Tulsi Kumar, Raftaar & Sanjay Rajee",
    "albumName": "Mera Highway Star - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/21/47/5a/21475aec-140e-acf1-8359-9a337dccd4d4/8903431640444_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1116073662,
    "title": "Tamanche Pe Disco",
    "trackName": "Tamanche Pe Disco",
    "artistName": "Nindy Kaur & Raftaar",
    "albumName": "Bullett Raja (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music30/v4/ab/e1/69/abe16972-2f82-39f1-5e67-1d240b4838df/8902894354820_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1244430613,
    "title": "Sadda Move",
    "trackName": "Sadda Move",
    "artistName": "Pritam, Diljit Dosanjh, Pardeep Singh Sran & Raftaar",
    "albumName": "Raabta (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/83/b4/9b83b42b-0716-95cf-60f3-701ec9464ada/8902894359023_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1730491931,
    "title": "Yaar Mere",
    "trackName": "Yaar Mere",
    "artistName": "Parmish Verma & Raftaar",
    "albumName": "Y Hate ? - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ef/fc/cb/effccbd4-3a81-e1af-9ae4-2be5feb9c5b1/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1273187024,
    "title": "Teen Kabootar",
    "trackName": "Teen Kabootar",
    "artistName": "Mohit Chauhan, Divya Kumar, Raftaar & Arjunna Harjaie",
    "albumName": "Lucknow Central (Original Motion Picture Soundtrack)",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9d/43/66/9d436674-7b0d-f88d-e2c2-c5340b9a7e5d/8902894359733_cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1671958258,
    "title": "Pinnak",
    "trackName": "Pinnak",
    "artistName": "SAMBATA",
    "albumName": "Pinnak - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a1/98/47/a1984730-3abd-e6ef-2c9e-a5d06eae9cbf/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1812505988,
    "title": "Wajah",
    "trackName": "Wajah (feat. Calm, OG Lucifer & Lil Bhavi)",
    "artistName": "Seedhe Maut, Hurricane & DL91 Era",
    "albumName": "DL91 FM",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/14/c3/fe14c33d-0a5d-fe17-6a20-c4ff16df98fa/199350493379.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1745276759,
    "title": "Gangster Shit 1st",
    "trackName": "Gangster Shit 1st",
    "artistName": "SAMBATA",
    "albumName": "Gangster Shit 1st - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/08/75/9f/08759fd5-f381-ec5e-71ab-a7ae1045ff76/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1764970534,
    "title": "Vartmaan",
    "trackName": "Vartmaan",
    "artistName": "UNIYAL & Soumya rawat",
    "albumName": "Nanda Devi Express - EP",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/62/41/6d/62416d7d-10a3-65ac-c435-abe795f69f6e/artwork.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1768482071,
    "title": "Hood Life",
    "trackName": "Hood Life",
    "artistName": "SAMBATA, Riar Saab & Karan Kanchan",
    "albumName": "Hood Life - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/81/c6/76/81c676c9-d5ff-7d81-0e4f-3811c5d60a3f/cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1843376122,
    "title": "Dalli",
    "trackName": "Dalli",
    "artistName": "Bhaskar, DL91 Era, Encore ABJ & RiJ",
    "albumName": "DALLI",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/b3/2b/cdb32b64-1dbc-3f93-e9b0-9b22d5454fda/199538881028.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1792021189,
    "title": "Terey papa",
    "trackName": "Terey papa",
    "artistName": "OG Lucifer & Calm",
    "albumName": "Naala Paar",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b9/c7/0d/b9c70d4a-24ff-1769-a786-54ac08363c3c/8447053287019.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1815760000,
    "title": "Backup Plan",
    "trackName": "Backup Plan",
    "artistName": "Hardbone boy, Yungsta & Teja",
    "albumName": "Backup Plan - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/03/69/cd036984-a23f-40fb-253a-dc72fe95180e/5034644705378.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1754094143,
    "title": "Blackball",
    "trackName": "Blackball",
    "artistName": "SOS & 30KEY!",
    "albumName": "Blackball - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4e/56/e3/4e56e3bf-bda4-9d0d-b803-51e7396ace42/artwork.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1830398684,
    "title": "SILENCE",
    "trackName": "SILENCE",
    "artistName": "YUNG SAMMY & Wamp",
    "albumName": "SILENCE - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/07/3f/6e/073f6e71-269a-e70d-f429-1115b8c71d1b/198704646669_Cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1528933374,
    "title": "Skate",
    "trackName": "Skate (feat. Calm)",
    "artistName": "Frappe Ash",
    "albumName": "Bet You Know",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/46/b6/f8/46b6f891-3782-0394-dce7-18bc75927963/193436173889.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1674993526,
    "title": "WuShang Clan",
    "trackName": "WuShang Clan",
    "artistName": "Dank Rishu, Foosie Gang & Adil",
    "albumName": "WuShang Clan - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/72/95/2b729551-d9f0-dd6c-2ca4-bea844cf2ddc/artwork.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1795955175,
    "title": "MR. RAMBO",
    "trackName": "MR. RAMBO",
    "artistName": "YUNG SAMMY & DESI TRILL",
    "albumName": "MR. RAMBO - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a8/b1/36/a8b136d6-decc-3c04-304b-35d8cff739a7/198704362057_Cover.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1762291735,
    "title": "CHATAK",
    "trackName": "CHATAK",
    "artistName": "SOS & 30KEY!",
    "albumName": "CHATAK - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5e/8c/aa/5e8caab8-5112-bce2-6273-4dfbd9b1c516/artwork.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1843375734,
    "title": "Baat Banjayegi",
    "trackName": "Baat Banjayegi",
    "artistName": "Bhaskar, DL91 Era, Encore ABJ & RiJ",
    "albumName": "DALLI",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/b3/2b/cdb32b64-1dbc-3f93-e9b0-9b22d5454fda/199538881028.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1843318666,
    "title": "BMK",
    "trackName": "BMK",
    "artistName": "SOS & 30KEY!",
    "albumName": "BMK - Single",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/64/4f/8c/644f8ce9-789c-ff89-ae73-a9f6658026b7/199538947250.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1528933381,
    "title": "Wish You Were Here",
    "trackName": "Wish You Were Here (feat. Rae & Encore ABJ)",
    "artistName": "Frappe Ash",
    "albumName": "Bet You Know",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/46/b6/f8/46b6f891-3782-0394-dce7-18bc75927963/193436173889.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1875343983,
    "title": "KHO KHO",
    "trackName": "KHO KHO",
    "artistName": "Calm, DL91 Era & OG Lucifer",
    "albumName": "PentHouse Tapes, Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/42/ec/11/42ec11fc-ad29-e186-ad9d-c93180f6f2e9/820200195487.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  },
  {
    "id": 1875344292,
    "title": "RINGTONE",
    "trackName": "RINGTONE",
    "artistName": "Calm, DL91 Era & Bhaskar",
    "albumName": "PentHouse Tapes, Vol. 1",
    "artworkUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/42/ec/11/42ec11fc-ad29-e186-ad9d-c93180f6f2e9/820200195487.jpg/300x300bb.jpg",
    "category": "dhh-indie"
  }
];

export const EXTRA_AUTOCOMPLETE_SONGS: SearchSuggestion[] = [
  {
    "id": -1,
    "title": "Kesariya",
    "trackName": "Kesariya (From \"Brahmastra\")",
    "artistName": "Pritam, Arijit Singh & Amitabh Bhattacharya",
    "albumName": "Brahmastra",
    "artworkUrl": ""
  },
  {
    "id": -3,
    "title": "Badtameez Dil",
    "trackName": "Badtameez Dil",
    "artistName": "Pritam & Benny Dayal",
    "albumName": "Yeh Jawaani Hai Deewani",
    "artworkUrl": ""
  },
  {
    "id": -4,
    "title": "Balam Pichkari",
    "trackName": "Balam Pichkari",
    "artistName": "Pritam, Vishal Dadlani & Shalmali Kholgade",
    "albumName": "Yeh Jawaani Hai Deewani",
    "artworkUrl": ""
  },
  {
    "id": -6,
    "title": "Kala Chashma",
    "trackName": "Kala Chashma",
    "artistName": "Amar Arshi, Badshah & Neha Kakkar",
    "albumName": "Baar Baar Dekho",
    "artworkUrl": ""
  },
  {
    "id": -8,
    "title": "Pasoori",
    "trackName": "Pasoori",
    "artistName": "Ali Sethi & Shae Gill",
    "albumName": "Coke Studio Season 14",
    "artworkUrl": ""
  },
  {
    "id": -9,
    "title": "Kahani Suno 2.0",
    "trackName": "Kahani Suno 2.0",
    "artistName": "Kaifi Khalil",
    "albumName": "Kahani Suno 2.0",
    "artworkUrl": ""
  },
  {
    "id": -10,
    "title": "Chaiyya Chaiyya",
    "trackName": "Chaiyya Chaiyya",
    "artistName": "A.R. Rahman, Sukhwinder Singh & Sapna Awasthi",
    "albumName": "Dil Se",
    "artworkUrl": ""
  },
  {
    "id": -11,
    "title": "Mitwa",
    "trackName": "Mitwa",
    "artistName": "Shankar-Ehsaan-Loy, Shafqat Amanat Ali & Caralisa Monteiro",
    "albumName": "Kabhi Alvida Naa Kehna",
    "artworkUrl": ""
  },
  {
    "id": -15,
    "title": "Aankhon Mein Teri",
    "trackName": "Aankhon Mein Teri Ajab Si",
    "artistName": "Vishal-Shekhar & KK",
    "albumName": "Om Shanti Om",
    "artworkUrl": ""
  },
  {
    "id": -16,
    "title": "Tadap Tadap",
    "trackName": "Tadap Tadap",
    "artistName": "Ismail Darbar & KK",
    "albumName": "Hum Dil De Chuke Sanam",
    "artworkUrl": ""
  },
  {
    "id": -17,
    "title": "Behti Hawa Sa Tha Woh",
    "trackName": "Behti Hawa Sa Tha Woh",
    "artistName": "Shantanu Moitra & Shaan",
    "albumName": "3 Idiots",
    "artworkUrl": ""
  },
  {
    "id": -18,
    "title": "Dil Chahta Hai",
    "trackName": "Dil Chahta Hai",
    "artistName": "Shankar-Ehsaan-Loy & Shankar Mahadevan",
    "albumName": "Dil Chahta Hai",
    "artworkUrl": ""
  },
  {
    "id": -19,
    "title": "Masakali",
    "trackName": "Masakali",
    "artistName": "A.R. Rahman & Mohit Chauhan",
    "albumName": "Delhi-6",
    "artworkUrl": ""
  },
  {
    "id": -20,
    "title": "O Mere Dil Ke Chain",
    "trackName": "O Mere Dil Ke Chain",
    "artistName": "Kishore Kumar & R.D. Burman",
    "albumName": "Mere Jeevan Saathi",
    "artworkUrl": ""
  },
  {
    "id": -21,
    "title": "Yeh Sham Mastani",
    "trackName": "Yeh Sham Mastani",
    "artistName": "Kishore Kumar & R.D. Burman",
    "albumName": "Kati Patang",
    "artworkUrl": ""
  },
  {
    "id": -22,
    "title": "Pal Pal Dil Ke Paas",
    "trackName": "Pal Pal Dil Ke Paas",
    "artistName": "Kishore Kumar",
    "albumName": "Blackmail",
    "artworkUrl": ""
  },
  {
    "id": -23,
    "title": "Lag Jaa Gale",
    "trackName": "Lag Jaa Gale Se Phir",
    "artistName": "Lata Mangeshkar & Madan Mohan",
    "albumName": "Woh Kaun Thi?",
    "artworkUrl": ""
  },
  {
    "id": -25,
    "title": "Gulabi Aankhen",
    "trackName": "Gulabi Aankhen",
    "artistName": "Mohammed Rafi & R.D. Burman",
    "albumName": "The Train",
    "artworkUrl": ""
  },
  {
    "id": -26,
    "title": "Mere Sapnon Ki Rani",
    "trackName": "Mere Sapnon Ki Rani",
    "artistName": "Kishore Kumar & R.D. Burman",
    "albumName": "Aradhana",
    "artworkUrl": ""
  },
  {
    "id": -29,
    "title": "Do You Know",
    "trackName": "Do You Know",
    "artistName": "Diljit Dosanjh",
    "albumName": "Do You Know",
    "artworkUrl": ""
  },
  {
    "id": -30,
    "title": "Elevated",
    "trackName": "Elevated",
    "artistName": "Shubh",
    "albumName": "Elevated",
    "artworkUrl": ""
  },
  {
    "id": -31,
    "title": "295",
    "trackName": "295",
    "artistName": "Sidhu Moose Wala",
    "albumName": "Moosetape",
    "artworkUrl": ""
  },
  {
    "id": -38,
    "title": "Khatta Flow",
    "trackName": "Khatta Flow",
    "artistName": "Seedhe Maut & KR$NA",
    "albumName": "Lunch Break",
    "artworkUrl": ""
  },
  {
    "id": -39,
    "title": "No Cap",
    "trackName": "No Cap",
    "artistName": "KR$NA",
    "albumName": "No Cap",
    "artworkUrl": ""
  }
];
