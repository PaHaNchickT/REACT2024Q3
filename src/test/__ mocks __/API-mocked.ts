import { FilmInfo, FilmResp } from '../../components/types'

export const mockAPIstart = {
  items: [
    {
      kinopoiskId: 463634,
      imdbId: 'tt1270797',
      nameRu: 'Веном',
      nameEn: null,
      nameOriginal: 'Venom',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Китай',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'фантастика',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'ужасы',
        },
      ],
      ratingKinopoisk: 6.9,
      ratingImdb: 6.6,
      year: 2018,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/463634.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/463634.jpg',
    },
    {
      kinopoiskId: 839954,
      imdbId: 'tt3569230',
      nameRu: 'Легенда',
      nameEn: null,
      nameOriginal: 'Legend',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Франция',
        },
        {
          country: 'Великобритания',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'драма',
        },
        {
          genre: 'криминал',
        },
      ],
      ratingKinopoisk: 7.2,
      ratingImdb: 6.9,
      year: 2015,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/839954.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/839954.jpg',
    },
    {
      kinopoiskId: 843649,
      imdbId: 'tt4154756',
      nameRu: 'Мстители: Война бесконечности',
      nameEn: null,
      nameOriginal: 'Avengers: Infinity War',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'фантастика',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
      ],
      ratingKinopoisk: 8.1,
      ratingImdb: 8.4,
      year: 2018,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/843649.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/843649.jpg',
    },
    {
      kinopoiskId: 927898,
      imdbId: null,
      nameRu: 'Переводчик',
      nameEn: null,
      nameOriginal: 'The Covenant',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Великобритания',
        },
        {
          country: 'Испания',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'драма',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'военный',
        },
        {
          genre: 'история',
        },
      ],
      ratingKinopoisk: 7.9,
      ratingImdb: 7.5,
      year: 2022,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/927898.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/927898.jpg',
    },
    {
      kinopoiskId: 4647040,
      imdbId: 'tt15939084',
      nameRu: 'Король и Шут',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'фэнтези',
        },
      ],
      ratingKinopoisk: 8.2,
      ratingImdb: 7,
      year: 2023,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4647040.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/4647040.jpg',
    },
    {
      kinopoiskId: 820638,
      imdbId: 'tt4426042',
      nameRu: 'Мажор',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'криминал',
        },
      ],
      ratingKinopoisk: 8.2,
      ratingImdb: 7.6,
      year: 2014,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/820638.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/820638.jpg',
    },
    {
      kinopoiskId: 430,
      imdbId: 'tt0126029',
      nameRu: 'Шрэк',
      nameEn: null,
      nameOriginal: 'Shrek',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'мелодрама',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'фэнтези',
        },
        {
          genre: 'комедия',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'семейный',
        },
      ],
      ratingKinopoisk: 8.2,
      ratingImdb: 7.9,
      year: 2001,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/430.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/430.jpg',
    },
    {
      kinopoiskId: 5304403,
      imdbId: 'tt28429213',
      nameRu: 'Слово пацана. Кровь на асфальте',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'криминал',
        },
      ],
      ratingKinopoisk: 8.3,
      ratingImdb: 7.6,
      year: 2023,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5304403.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5304403.jpg',
    },
    {
      kinopoiskId: 5079093,
      imdbId: 'tt22808620',
      nameRu: 'Монастырь',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
      ],
      ratingKinopoisk: 7.4,
      ratingImdb: null,
      year: 2022,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5079093.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5079093.jpg',
    },
    {
      kinopoiskId: 462606,
      imdbId: 'tt1219289',
      nameRu: 'Области тьмы',
      nameEn: null,
      nameOriginal: 'Limitless',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'драма',
        },
        {
          genre: 'фантастика',
        },
      ],
      ratingKinopoisk: 8,
      ratingImdb: 7.4,
      year: 2011,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/462606.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/462606.jpg',
    },
    {
      kinopoiskId: 843650,
      imdbId: 'tt4154796',
      nameRu: 'Мстители: Финал',
      nameEn: null,
      nameOriginal: 'Avengers: Endgame',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'фантастика',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
      ],
      ratingKinopoisk: 7.9,
      ratingImdb: 8.4,
      year: 2019,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/843650.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/843650.jpg',
    },
    {
      kinopoiskId: 1355059,
      imdbId: 'tt12112298',
      nameRu: 'Беспринципные',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 7.7,
      ratingImdb: 6.3,
      year: 2020,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1355059.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1355059.jpg',
    },
    {
      kinopoiskId: 89514,
      imdbId: 'tt0382932',
      nameRu: 'Рататуй',
      nameEn: null,
      nameOriginal: 'Ratatouille',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'фэнтези',
        },
        {
          genre: 'комедия',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'семейный',
        },
      ],
      ratingKinopoisk: 8,
      ratingImdb: 8.1,
      year: 2007,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/89514.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/89514.jpg',
    },
    {
      kinopoiskId: 409424,
      imdbId: 'tt1160419',
      nameRu: 'Дюна',
      nameEn: null,
      nameOriginal: 'Dune: Part One',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Канада',
        },
        {
          country: 'Венгрия',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'фантастика',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
      ],
      ratingKinopoisk: 7.7,
      ratingImdb: 8,
      year: 2021,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/409424.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/409424.jpg',
    },
    {
      kinopoiskId: 324,
      imdbId: 'tt0264464',
      nameRu: 'Поймай меня, если сможешь',
      nameEn: null,
      nameOriginal: 'Catch Me If You Can',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Канада',
        },
      ],
      genres: [
        {
          genre: 'криминал',
        },
        {
          genre: 'биография',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 8.5,
      ratingImdb: 8.1,
      year: 2002,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/324.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/324.jpg',
    },
    {
      kinopoiskId: 689066,
      imdbId: 'tt2015381',
      nameRu: 'Стражи Галактики',
      nameEn: null,
      nameOriginal: 'Guardians of the Galaxy',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'фантастика',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 7.9,
      ratingImdb: 8,
      year: 2014,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/689066.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/689066.jpg',
    },
    {
      kinopoiskId: 409600,
      imdbId: 'tt1211837',
      nameRu: 'Доктор Стрэндж',
      nameEn: null,
      nameOriginal: 'Doctor Strange',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'фантастика',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'фэнтези',
        },
      ],
      ratingKinopoisk: 7.5,
      ratingImdb: 7.5,
      year: 2016,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/409600.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/409600.jpg',
    },
    {
      kinopoiskId: 111543,
      imdbId: 'tt0468569',
      nameRu: 'Темный рыцарь',
      nameEn: null,
      nameOriginal: 'The Dark Knight',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Великобритания',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'драма',
        },
        {
          genre: 'криминал',
        },
        {
          genre: 'фантастика',
        },
        {
          genre: 'боевик',
        },
      ],
      ratingKinopoisk: 8.5,
      ratingImdb: 9,
      year: 2008,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/111543.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/111543.jpg',
    },
    {
      kinopoiskId: 1392743,
      imdbId: null,
      nameRu: 'Постучись в мою дверь',
      nameEn: null,
      nameOriginal: 'Sen Çal Kapımı',
      countries: [
        {
          country: 'Турция',
        },
      ],
      genres: [
        {
          genre: 'мелодрама',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 8.1,
      ratingImdb: 7.4,
      year: 2020,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1392743.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1392743.jpg',
    },
    {
      kinopoiskId: 679486,
      imdbId: 'tt2380307',
      nameRu: 'Тайна Коко',
      nameEn: null,
      nameOriginal: 'Coco',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Мексика',
        },
      ],
      genres: [
        {
          genre: 'приключения',
        },
        {
          genre: 'фэнтези',
        },
        {
          genre: 'комедия',
        },
        {
          genre: 'музыка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'семейный',
        },
      ],
      ratingKinopoisk: 8.7,
      ratingImdb: 8.4,
      year: 2017,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/679486.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/679486.jpg',
    },
    {
      kinopoiskId: 1405508,
      imdbId: null,
      nameRu: 'Операция «Фортуна»: Искусство побеждать',
      nameEn: null,
      nameOriginal: 'Operation Fortune: Ruse de Guerre',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Великобритания',
        },
      ],
      genres: [
        {
          genre: 'боевик',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 7.1,
      ratingImdb: 6.3,
      year: 2022,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1405508.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1405508.jpg',
    },
    {
      kinopoiskId: 4542208,
      imdbId: 'tt15325794',
      nameRu: 'Вышка',
      nameEn: null,
      nameOriginal: 'Fall',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Великобритания',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
      ],
      ratingKinopoisk: 6.7,
      ratingImdb: 6.4,
      year: 2022,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4542208.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/4542208.jpg',
    },
    {
      kinopoiskId: 586397,
      imdbId: 'tt1853728',
      nameRu: 'Джанго освобожденный',
      nameEn: null,
      nameOriginal: 'Django Unchained',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'вестерн',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 8.2,
      ratingImdb: 8.5,
      year: 2012,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/586397.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/586397.jpg',
    },
    {
      kinopoiskId: 478491,
      imdbId: null,
      nameRu: 'Маша и Медведь',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'детский',
        },
      ],
      ratingKinopoisk: 7.3,
      ratingImdb: 7.4,
      year: 2009,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/478491.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/478491.jpg',
    },
    {
      kinopoiskId: 1224067,
      imdbId: 'tt10922010',
      nameRu: 'Вампиры средней полосы',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'детектив',
        },
        {
          genre: 'фэнтези',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 8.3,
      ratingImdb: 7.6,
      year: 2021,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1224067.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1224067.jpg',
    },
    {
      kinopoiskId: 263531,
      imdbId: 'tt0848228',
      nameRu: 'Мстители',
      nameEn: null,
      nameOriginal: 'The Avengers',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'фантастика',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'фэнтези',
        },
      ],
      ratingKinopoisk: 7.9,
      ratingImdb: 8,
      year: 2012,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/263531.jpg',
    },
    {
      kinopoiskId: 4531254,
      imdbId: 'tt15474794',
      nameRu: 'Два холма',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'фантастика',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 7.6,
      ratingImdb: null,
      year: 2022,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4531254.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/4531254.jpg',
    },
    {
      kinopoiskId: 406408,
      imdbId: 'tt1197624',
      nameRu: 'Законопослушный гражданин',
      nameEn: null,
      nameOriginal: 'Law Abiding Citizen',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'драма',
        },
        {
          genre: 'криминал',
        },
        {
          genre: 'боевик',
        },
      ],
      ratingKinopoisk: 8,
      ratingImdb: 7.4,
      year: 2009,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/406408.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/406408.jpg',
    },
    {
      kinopoiskId: 279102,
      imdbId: 'tt0910970',
      nameRu: 'ВАЛЛ·И',
      nameEn: null,
      nameOriginal: 'WALL·E',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'фантастика',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'семейный',
        },
      ],
      ratingKinopoisk: 8.4,
      ratingImdb: 8.4,
      year: 2008,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/279102.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/279102.jpg',
    },
    {
      kinopoiskId: 1405843,
      imdbId: 'tt13266012',
      nameRu: 'Пищеблок',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'детектив',
        },
        {
          genre: 'фэнтези',
        },
      ],
      ratingKinopoisk: 7.4,
      ratingImdb: 6,
      year: 2021,
      type: 'TV_SERIES',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1405843.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1405843.jpg',
    },
    {
      kinopoiskId: 474,
      imdbId: 'tt0172495',
      nameRu: 'Гладиатор',
      nameEn: null,
      nameOriginal: 'Gladiator',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Великобритания',
        },
        {
          country: 'Мальта',
        },
        {
          country: 'Марокко',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'история',
        },
      ],
      ratingKinopoisk: 8.6,
      ratingImdb: 8.5,
      year: 2000,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/474.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/474.jpg',
    },
    {
      kinopoiskId: 522892,
      imdbId: 'tt1670345',
      nameRu: 'Иллюзия обмана',
      nameEn: null,
      nameOriginal: 'Now You See Me',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Франция',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'криминал',
        },
        {
          genre: 'детектив',
        },
      ],
      ratingKinopoisk: 7.7,
      ratingImdb: 7.2,
      year: 2013,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/522892.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/522892.jpg',
    },
    {
      kinopoiskId: 835086,
      imdbId: 'tt1950186',
      nameRu: 'Ford против Ferrari',
      nameEn: null,
      nameOriginal: 'Ford v Ferrari',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'биография',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'спорт',
        },
      ],
      ratingKinopoisk: 8.2,
      ratingImdb: 8.1,
      year: 2019,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/835086.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/835086.jpg',
    },
    {
      kinopoiskId: 462360,
      imdbId: 'tt1431045',
      nameRu: 'Дэдпул',
      nameEn: null,
      nameOriginal: 'Deadpool',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'боевик',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 7.6,
      ratingImdb: 8,
      year: 2016,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/462360.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/462360.jpg',
    },
    {
      kinopoiskId: 322,
      imdbId: 'tt0304141',
      nameRu: 'Гарри Поттер и узник Азкабана',
      nameEn: null,
      nameOriginal: 'Harry Potter and the Prisoner of Azkaban',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Великобритания',
        },
      ],
      genres: [
        {
          genre: 'приключения',
        },
        {
          genre: 'фэнтези',
        },
        {
          genre: 'семейный',
        },
      ],
      ratingKinopoisk: 8.2,
      ratingImdb: 7.9,
      year: 2004,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/322.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/322.jpg',
    },
    {
      kinopoiskId: 63991,
      imdbId: 'tt0383574',
      nameRu: 'Пираты Карибского моря: Сундук мертвеца',
      nameEn: null,
      nameOriginal: "Pirates of the Caribbean: Dead Man's Chest",
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'фэнтези',
        },
      ],
      ratingKinopoisk: 8.1,
      ratingImdb: 7.4,
      year: 2006,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/63991.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/63991.jpg',
    },
    {
      kinopoiskId: 61237,
      imdbId: 'tt0371746',
      nameRu: 'Железный человек',
      nameEn: null,
      nameOriginal: 'Iron Man',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Канада',
        },
      ],
      genres: [
        {
          genre: 'фантастика',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
      ],
      ratingKinopoisk: 8,
      ratingImdb: 7.9,
      year: 2008,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/61237.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/61237.jpg',
    },
    {
      kinopoiskId: 1326397,
      imdbId: null,
      nameRu: 'Батя',
      nameEn: null,
      nameOriginal: null,
      countries: [
        {
          country: 'Россия',
        },
      ],
      genres: [
        {
          genre: 'мелодрама',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 7.7,
      ratingImdb: 6.7,
      year: 2020,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1326397.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1326397.jpg',
    },
    {
      kinopoiskId: 328,
      imdbId: 'tt0120737',
      nameRu: 'Властелин колец: Братство Кольца',
      nameEn: null,
      nameOriginal: 'The Lord of the Rings: The Fellowship of the Ring',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Новая Зеландия',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'фэнтези',
        },
      ],
      ratingKinopoisk: 8.6,
      ratingImdb: 8.9,
      year: 2001,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/328.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/328.jpg',
    },
    {
      kinopoiskId: 420923,
      imdbId: 'tt0988045',
      nameRu: 'Шерлок Холмс',
      nameEn: null,
      nameOriginal: 'Sherlock Holmes',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Великобритания',
        },
        {
          country: 'Германия',
        },
        {
          country: 'Австралия',
        },
      ],
      genres: [
        {
          genre: 'триллер',
        },
        {
          genre: 'драма',
        },
        {
          genre: 'криминал',
        },
        {
          genre: 'детектив',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'боевик',
        },
        {
          genre: 'комедия',
        },
      ],
      ratingKinopoisk: 8.1,
      ratingImdb: 7.6,
      year: 2009,
      type: 'FILM',
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/420923.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/420923.jpg',
    },
  ],
  total: 40,
  totalPages: 2,
} as unknown as FilmResp

export const mockAPIempty = {
  items: [],
  total: 0,
  totalPages: 0,
}

export const mockAPIerror = {
  message: '',
} as unknown as FilmResp

export const mockAPIfilmData = {
  data: {
    filmId: 430,
    nameRu: 'Шрэк',
    nameEn: null,
    webUrl: 'https://www.kinopoisk.ru/film/430/',
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/430.jpg',
    posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/430.jpg',
    year: null,
    filmLength: null,
    slogan: 'Its Big!',
    description: null,
    type: 'FILM',
    ratingMpaa: 'pg',
    ratingAgeLimits: 18,
    premiereRu: '2001-10-31',
    distributors: '',
    premiereWorld: '2001-04-22',
    premiereDigital: null,
    premiereWorldCountry: 'США',
    premiereDvd: '2002-10-08',
    premiereBluRay: '2010-12-21',
    distributorRelease: 'Premier Digital, Юниверсал Пикчерс Рус, ВС трейд, Новый Диск',
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'комедия',
      },
      {
        genre: 'мелодрама',
      },
      {
        genre: 'мультфильм',
      },
      {
        genre: 'приключения',
      },
      {
        genre: 'семейный',
      },
      {
        genre: 'фэнтези',
      },
    ],
    facts: [
      'Изначально <a href="/name/64326/" class="all">Крис Фарли</a> должен был озвучить Шрека. После смерти актера роль отошла <a href="/name/22613/" class="all">Майку Майерсу</a>.',
      'Во&#160;время записи звука для сцены, где Шрек признается в&#160;любви к&#160;Фионе, <a href="/name/22613/" class="all">Майк Майерс</a> читал роль перед своей женой, <a href="/name/116294/" class="all">Робин Рузан</a>.',
      'В данном мультфильме присутствует около 36 различных локаций, что было рекордным показателем на момент выхода картины.',
      'Работа над мультфильмом началась 31 октября 1996 года и закончилась спустя более чем четыре с половиной года.',
      'Актеры, озвучившие персонажей, никогда не встречались в процессе производства мультфильма. Свои роли они читали отдельно друг от друга.',
      'В&#160;начале мультфильма Шрек чистит зубы и&#160;смотрит на&#160;свое отражение в&#160;зеркале, которое затем трескается. Точно такая&#160;же сцена содержится в&#160;фильме <a href="/film/3571/" class="all">"Остин Пауэрс: Шпион, который меня соблазнил&#187;</a>, где главную роль также исполнил <a href="/name/22613/" class="all">Майк Майерс</a>.',
      'В&#160;сцене-драке между Фионой и&#160;людьми Робина Гуда действие останавливается, камера облетает вокруг персонажей. Это&#160;— конечно&#160;же, отсылка на&#160;&#171;<a href="/film/301/" class="all">Матрицу</a>&#187; (1999).',
      'На еврейском «шрек» означает «монстр», на немецком — «ужас» или «страх».',
      'Персонаж крестной матери Дамы Фортуны был создан еще для первой части «Шрека», однако создатели мультфильма решили от нее отказаться. Она стала одним из ключевых персонажей во второй картине.',
      'По&#160;словам создателей, боевая хореография принцессы Фионы создавалась на&#160;основе фильмов с&#160;<a href="/name/29855/" class="all">Джеки Чаном</a>, а&#160;также картины &#171;Крадущийся тигр, затаившийся дракон&#187; (2000).',
      '&#171;Шрек&#187; стал первым лауреатом &#171;Оскара&#187; в&#160;категории &#171;Лучший анимационный фильм&#187;.',
      'В&#160;одной из&#160;сцен снаружи дома Шрека можно заметить Папу Медведя с&#160;сыном. Позднее, в&#160;замке Фаркуада, когда он&#160;смотрит на&#160;изображение Фионы в&#160;зеркале, мы&#160;можем увидеть Маму Медведя в&#160;качестве коврика, лежащего на&#160;полу. Однако не&#160;стоит волноваться, создатели мультфильма не&#160;стали разрушать семью: Мама Медведь появляется во&#160;время сцены-караоке на&#160;DVD, танцуя с&#160;Папой и&#160;Сыном.',
      'Сцена, в&#160;которой Телониус (палач в&#160;маске) поет,&#160;— отсылка к Stacker 2, рекламному ролику, где рестлер Каин, также носящий маску, пел караоке.',
      'В&#160;сцене, где лорд Фаркуад лежит в&#160;своей постели и&#160;смотрит ролик принцессы Фионы в&#160;зеркале, можно заметить картину, висящую над ним. Данное полотно очень похоже на&#160;&#171;Рождение Венеры&#187; Боттичелли, но&#160;с&#160;Фаркуадом вместо Венеры.',
      'Хотя Ослик должен быть копытным животным, однако практически все его движения смоделированы с движений собаки, за исключением сцены погони в начале мультфильма, где движения Ослика смоделированы с движений кролика.',
      'По&#160;словам <a href="/name/22613/" class="all">Майка Майерса</a>, создавая акцент Шрека, он&#160;старался сымитировать акцент его матери, когда она читала ему сказки в&#160;детстве.',
      'Некоторые аниматоры по-настоящему приняли грязевой душ, для того чтобы лучше изучить движение вязкой массы.',
      'Аниматоры изучили немало видов средневекового холодного оружия и брони, перед тем как выбрали вооружение для сцен спасения принцессы и рыцарского турнира.',
      'В начале мультфильма на болото к Шреку прибегают около 1000 сказочных персонажей.',
      'Для картины было «создано» около 1250 видов реквизита, что было рекордом для компьютерного мультфильма.',
      '<a href="/name/9836/" class="all">Кэмерон Диаз</a> озвучивала сцену драки между Фионой и&#160;людьми Робина Гуда уже&#160;после своей физической подготовки для&#160;фильма &#171;<a href="/film/633/" class="all">Ангелы Чарли</a>&#187; (2000). Поэтому иногда она&#160;настолько вживалась в&#160;роль, что&#160;переходила на&#160;кантонское наречие.',
      'По&#160;словам <a href="/name/47247/" class="all">Эндрю Адамсона</a>, рост Шрека составляет примерно 7-8&#160;футов (примерно 213-244&#160;см). Реальный рост Шрека 7&#160;футов, но&#160;в&#160;глазах испуганных людей он&#160;подрастает еще на&#160;один фут.',
      'Создатели мультфильма не&#160;планировали использовать песню &#171;All Star&#187; группы SmashMouth на&#160;начальных титрах в&#160;готовом варианте картины. Однако на&#160;тест-просмотрах она настолько понравилась аудитории, что её&#160;решили оставить.',
      'Песня «Welcome to Duloc», которую поют деревянные куклы на входе в Дулок, — это не только пародия на диснеевскую композицию «It’s a Small World», но она также выдержана в той же тональности и том же ритме, что и диснеевская песня.',
      'Перед выходом картины в&#160;прокат её&#160;очень пристально изучили юристы студии DreamWorks, для того чтобы избежать возможных судебных исков со&#160;стороны &#171;Диснея&#187;.',
      'Изначально в&#160;мультфильме отсутствовала сцена, в&#160;которой принцесса Фиона рыгает. Данный эпизод решено было добавить в&#160;картину, после того как на&#160;записи звука рыгнула <a href="/name/9836/" class="all">Кэмерон Диаз</a>.',
      'Во&#160;время озвучивания <a href="/name/22613/" class="all">Майк Майерс</a> забыл произнести &#171;Вниманию всех сказочных существ!&#187;. Для того, чтобы исправить такой просчет продюсер <a href="/name/30489/" class="all">Джеффри Катценберг</a> прилетел в&#160;Нью-Йорк к&#160;Майклу, и&#160;последний сказал данную фразу на&#160;микрофон в&#160;лимузине Джеффри.',
      'Во&#160;время озвучивания мультфильма <a href="/name/47250/" class="all">Коуди Кэмерон</a> в&#160;шутку предложил <a href="/name/9836/" class="all">Кэмерон Диаз</a> выйти за&#160;него замуж, сказав: &#171;Ты&#160;сможешь стать Кэмерон Кэмерон&#187;.',
      'Единственные персонажи, называющие Шрека по имени, — Ослик и Фиона. Все остальные обращаются к нему как «Чудовище», «Людоед», «Оно», «Он», «Это».',
      'По словам создателей, песня «I’m a Believer» была выбрана исключительно из-за строчки «Я думал, что любовь бывает только в сказках» (I thought love was only true in fairy tales).',
      'По&#160;словам <a href="/name/8837/" class="all">Джона Литгоу</a>, несмотря на&#160;то,&#160;что ему очень понравилось работать на&#160;данном проекте, он&#160;был немного разочарован, т.к. во&#160;время производства ни&#160;разу не&#160;встретился с&#160;<a href="/name/22613/" class="all">Майком Майерсом</a>, <a href="/name/9836/" class="all">Кэмерон Диаз</a> и&#160;<a href="/name/25674/" class="all">Эдди Мёрфи</a>.',
      'По&#160;версии британского Channel 4 &#171;Шрек&#187; занял второе место в&#160;списке &#171;Лучших семейных фильмов&#187;.',
      'В оригинальной версии Робин Гуд говорит с французским акцентом, но не потому что он француз, а потому что он, как и его исторический прототип, является не англо-саксом, а норманном. И до столетней войны между Англией и Францией для норманнов, составивших после Вильгельма Завоевателя основу английского дворянства, родным языком являлся французский, а не английский.',
      'В одной из сцен Лорд Фаркуад хочет жениться и просит Зеркало показать ему принцесс. То предоставляет ему образы Золушки, Белоснежки и Фионы. Но, как общеизвестно, Золушка не была принцессой.',
    ],
    seasons: [],
  },
  externalId: {
    imdbId: 'tt0126029',
  },
} as unknown as FilmInfo

export const mockAPIsearch = {
  items: [
    {
      filmId: 430,
      nameRu: 'Шрэк',
      nameEn: 'Shrek',
      type: 'FILM',
      year: '2001',
      description:
        'Жил да был в сказочном государстве большой зеленый великан по имени Шрэк. Жил он в гордом одиночестве в лесу, на болоте, которое считал своим. Но однажды злобный коротышка — лорд Фаркуад, правитель волшебного королевства, безжалостно согнал на Шрэково болото всех сказочных обитателей.\nИ беспечной жизни зеленого великана пришел конец. Но лорд Фаркуад пообещал вернуть Шрэку болото, если великан добудет ему прекрасную принцессу Фиону, которая томится в неприступной башне, охраняемой огнедышащим драконом.',
      filmLength: '01:30',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мелодрама',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '8.2',
      ratingVoteCount: 833946,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/430.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/430.jpg',
    },
    {
      filmId: 5273,
      nameRu: 'Шрэк 2',
      nameEn: 'Shrek 2',
      type: 'FILM',
      year: '2004',
      description:
        'Шрэк и Фиона возвращаются после медового месяца и находят письмо от родителей Фионы с приглашением на ужин. Однако те не подозревают, что их дочь тоже стала огром! Вместе с Осликом счастливая пара отправляется в путешествие, полное неожиданностей, и попадает в круговорот событий, во время которых приобретает множество друзей…',
      filmLength: '01:33',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мелодрама',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '7.9',
      ratingVoteCount: 502514,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5273.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5273.jpg',
    },
    {
      filmId: 84020,
      nameRu: 'Шрэк Третий',
      nameEn: 'Shrek the Third',
      type: 'FILM',
      year: '2007',
      description:
        'Король Гарольд внезапно умер, и теперь великан Шрек вынужден стать королем Далекой-Далекой страны. Шрек уважает семейные традиции своей жены Фионы, но править страной очень не хочет, и поэтому и отправляется с Ослом и Котом в сапогах на поиски нового короля. Но пока Шрек ищет короля Артура - другого наследника, принц Чарминг замышляет новые пакости.',
      filmLength: '01:33',
      countries: [
        {
          country: 'Австралия',
        },
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мелодрама',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '6.7',
      ratingVoteCount: 215844,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/84020.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/84020.jpg',
    },
    {
      filmId: 271806,
      nameRu: 'Шрэк навсегда',
      nameEn: 'Shrek Forever After',
      type: 'FILM',
      year: '2010',
      description:
        'Чем бы еще заняться огру, который уже сразился со злым драконом, спас прекрасную принцессу и уберег от беды королевство родственников по линии жены? Что ж, если вы Шрэк, то, сами того не заметив, вы вдруг сядете дома и станете наслаждаться покоем в кругу семьи. Вместо того чтобы как раньше пугать деревенских жителей, теперь Шрэк, хоть и с неохотой, но соглашается оставлять автографы на их вилах. А куда же подевался знаменитый рык этого огра? \n\nПод грузом воспоминаний о днях, когда он чувствовал себя «настоящим огром», Шрэк поддается на уговоры сладкоголосого Румпельштильцхена и заключает с ним договор. Сразу после этого Шрэк оказывается в альтернативной реальности Тридевятого королевства, где все поставлено с ног на голову: на огров здесь охотятся, Румпельштильцхен восседает на троне, а Шрэк и Фиона даже не знакомы. И теперь только сам Шрэк может исправить все, что он натворил, чтобы спасти друзей, восстановить привычный ему порядок вещей и вернуть себе свою единственную Истинную Любовь.',
      filmLength: '01:30',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мелодрама',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '7.0',
      ratingVoteCount: 221271,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/271806.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/271806.jpg',
    },
    {
      filmId: 1040433,
      nameRu: 'Шрэк 5',
      nameEn: 'Untitled Shrek Reboot',
      type: 'FILM',
      year: 'null',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: 'null',
      ratingVoteCount: 0,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1040433.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1040433.jpg',
    },
    {
      filmId: 5275,
      nameRu: 'Шрэк 4-D',
      nameEn: 'Shrek 4-D',
      type: 'VIDEO',
      year: '2003',
      description:
        'Лорд Фаркуард был съеден драконом, но его дух все еще жив и все так же зол. Он похищает Фиону с помощью все еще живого помощника-подручного. Шрек и Осел отправляются в путешествие, чтобы спасти принцессу.',
      filmLength: '00:13',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '5.9',
      ratingVoteCount: 7746,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5275.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5275.jpg',
    },
    {
      filmId: 271800,
      nameRu: 'Шрэк мороз, зеленый нос',
      nameEn: 'Shrek the Halls',
      type: 'FILM',
      year: '2007',
      description:
        'На этот раз Шрек стремится устроить идеальный праздник, удивить Фиону и своих замечательных сорванцов. Только вот незадача: прямо в разгар мероприятия появляются незванные гости — Осел и Кот в Сапогах. Они рушат все планы Шрека и он, сам того не желая, превращается в настоящего скрягу, сказочную разновидность диккенсовского Скруджа.',
      filmLength: '00:21',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '6.7',
      ratingVoteCount: 24760,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/271800.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/271800.jpg',
    },
    {
      filmId: 1217884,
      nameEn: 'Shrek Retold',
      type: 'FILM',
      year: '2018',
      filmLength: '01:30',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '7.4',
      ratingVoteCount: 311,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1217884.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1217884.jpg',
    },
    {
      filmId: 570085,
      nameRu: 'Шрэк: Хэллоуин',
      nameEn: 'Scared Shrekless',
      type: 'FILM',
      year: '2010',
      description:
        'Шрек с друзьями решили устроить конкурс на самую страшную Хэллоуинскую историю. Но прежде чем выяснится кто же победил, им придется всю ночь пробыть в замке усопшего лорда Фаркуада.',
      filmLength: '00:26',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '6.8',
      ratingVoteCount: 14314,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/570085.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/570085.jpg',
    },
    {
      filmId: 793631,
      nameRu: 'Шрэк: Мюзикл',
      nameEn: 'Shrek the Musical',
      type: 'FILM',
      year: '2013',
      description:
        'Жил да был в сказочном государстве большой зеленый великан по имени Шрек. Жил он в гордом одиночестве в лесу, на болоте, которое считал своим. Но однажды злобный коротышка — лорд Фаркуад, правитель волшебного королевства, безжалостно согнал на Шреково болото всех сказочных обитателей.\n\nИ беспечной жизни зеленого великана пришел конец. Но лорд Фаркуад пообещал вернуть Шреку болото, если великан добудет ему прекрасную принцессу Фиону, которая томится в неприступной башне, охраняемой огнедышащим драконом...',
      filmLength: '02:10',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мюзикл',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '7.3',
      ratingVoteCount: 350,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/793631.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/793631.jpg',
    },
    {
      filmId: 327382,
      nameRu: 'Караоке-вечеринка Шрека на болоте',
      nameEn: 'Shrek in the Swamp Karaoke Dance Party',
      type: 'VIDEO',
      year: '2001',
      description:
        'Шрек собрал на болоте всех своих друзей и устроил грандиозное караоке. Никто не намерен стоять в сторонке, все дружно поют песни и от души веселятся.',
      filmLength: '00:03',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мелодрама',
        },
        {
          genre: 'музыка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'семейный',
        },
      ],
      rating: '6.6',
      ratingVoteCount: 4259,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/327382.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/327382.jpg',
    },
    {
      filmId: 4807663,
      nameEn: 'Shrek 2 Retold',
      type: 'FILM',
      year: '2021',
      filmLength: '01:32',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'мультфильм',
        },
      ],
      rating: 'null',
      ratingVoteCount: 9,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4807663.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/4807663.jpg',
    },
    {
      filmId: 760589,
      nameEn: 'Shrek 5: Donkeyface Killer',
      type: 'VIDEO',
      year: '2012',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'короткометражка',
        },
        {
          genre: 'ужасы',
        },
      ],
      rating: 'null',
      ratingVoteCount: 19,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/760589.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/760589.jpg',
    },
    {
      filmId: 624137,
      nameRu: 'Шрек: Триллер',
      nameEn: 'Thriller Night',
      type: 'FILM',
      year: '2011',
      description: 'Шреку наскучил обыденный Хэллоуин, ему захотелось чего-то по-настоящему страшного...',
      filmLength: '00:05',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'музыка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'триллер',
        },
        {
          genre: 'ужасы',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '5.9',
      ratingVoteCount: 2331,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/624137.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/624137.jpg',
    },
    {
      filmId: 1343904,
      nameRu: 'Шрэк — это Любовь, Шрэк — это Жизнь',
      nameEn: 'Shrek is Love, Shrek is Life',
      type: 'VIDEO',
      year: '2014',
      filmLength: '00:02',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
      ],
      rating: 'null',
      ratingVoteCount: 173,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1343904.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1343904.jpg',
    },
    {
      filmId: 1355366,
      nameEn: 'Shrek Eats 2,000 Chicken Nuggets',
      type: 'VIDEO',
      year: '2019',
      filmLength: '00:03',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
      ],
      rating: 'null',
      ratingVoteCount: 2,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1355366.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1355366.jpg',
    },
    {
      filmId: 735769,
      nameRu: 'Захватывающие рассказы Шрэка',
      nameEn: "Shrek's Thrilling Tales",
      type: 'VIDEO',
      year: '2012',
      description:
        'Вот-вот должен наступить долгожданный праздник - Хэллоуин. Шрэк задумал созвать всех своих самых причудливых и весёлых друзей и устроить ночь, полную страшных рассказов.',
      filmLength: '01:13',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'ужасы',
        },
        {
          genre: 'фантастика',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '5.9',
      ratingVoteCount: 1250,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/735769.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/735769.jpg',
    },
    {
      filmId: 1367600,
      nameEn: 'Shrek Unmasked',
      type: 'FILM',
      year: '2011',
      filmLength: '00:08',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'документальный',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мюзикл',
        },
      ],
      rating: 'null',
      ratingVoteCount: 4,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1367600.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1367600.jpg',
    },
    {
      filmId: 1228295,
      nameRu: 'Камин у Шрека',
      nameEn: "Shrek's Yule Log",
      type: 'FILM',
      year: '2010',
      description: 'Получасовая анимация, основное время которой занимает горящий в доме Шрека камин.',
      filmLength: '00:30',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '5.8',
      ratingVoteCount: 250,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1228295.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1228295.jpg',
    },
    {
      filmId: 5106667,
      nameEn: 'New Shrek!',
      type: 'MINI_SERIES',
      year: '2014',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'мультфильм',
        },
      ],
      rating: 'null',
      ratingVoteCount: 2,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5106667.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5106667.jpg',
    },
    {
      filmId: 1228295,
      nameRu: 'Камин у Шрека',
      nameEn: "Shrek's Yule Log",
      type: 'FILM',
      year: '2010',
      description: 'Получасовая анимация, основное время которой занимает горящий в доме Шрека камин.',
      filmLength: '00:30',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '5.8',
      ratingVoteCount: 250,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/1228295.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/1228295.jpg',
    },
    {
      filmId: 5106667,
      nameEn: 'New Shrek!',
      type: 'MINI_SERIES',
      year: '2014',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'мультфильм',
        },
      ],
      rating: 'null',
      ratingVoteCount: 2,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5106667.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5106667.jpg',
    },
    {
      filmId: 4866578,
      nameEn: 'Shrek - The musical jr',
      type: 'FILM',
      year: '2021',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'короткометражка',
        },
        {
          genre: 'приключения',
        },
      ],
      rating: 'null',
      ratingVoteCount: 3,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4866578.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/4866578.jpg',
    },
    {
      filmId: 840821,
      nameRu: 'Кот в сапогах 2: Последнее желание',
      nameEn: 'Puss in Boots: The Last Wish',
      type: 'FILM',
      year: '2022',
      description:
        'Промотав восемь жизней из девяти и до смерти испугавшись пришедшего за ним волка-охотника за головами, Кот в сапогах внимает совету врача и заселяется в дом местной кошатницы. Там он смиряется с установленными порядками, отращивает бороду и теряет тягу к подвигам и приключениям, но только до тех пор, пока не узнаёт о волшебной карте, которая указывает путь к где-то упавшей Звезде желаний. Кот в сапогах твёрдо решает отыскать Звезду, чтобы вернуть свои жизни, и в компании притворявшегося кошачьим пёсика отправляется красть карту у известного коллекционера волшебных предметов Джека Хорнера.',
      filmLength: '01:42',
      countries: [
        {
          country: 'США',
        },
        {
          country: 'Япония',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '8.1',
      ratingVoteCount: 105450,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/840821.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/840821.jpg',
    },
    {
      filmId: 5048801,
      nameEn: 'The Ultimate «Shrek» Recap Cartoon',
      type: 'FILM',
      year: '2021',
      filmLength: '00:04',
      countries: [
        {
          country: 'Нидерланды',
        },
      ],
      genres: [
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
      ],
      rating: 'null',
      ratingVoteCount: 4,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5048801.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5048801.jpg',
    },
    {
      filmId: 930849,
      nameEn: 'Swamp Sim: Slender Shrek',
      type: 'FILM',
      year: '2015',
      filmLength: '00:09',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'ужасы',
        },
      ],
      rating: 'null',
      ratingVoteCount: 8,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/930849.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/930849.jpg',
    },
    {
      filmId: 5164743,
      nameEn: "Snolly in Shrek's Creppy Swamp",
      type: 'FILM',
      year: '2020',
      filmLength: '00:01',
      countries: [
        {
          country: 'Великобритания',
        },
      ],
      genres: [
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
      ],
      rating: 'null',
      ratingVoteCount: 4,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5164743.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5164743.jpg',
    },
    {
      filmId: 569721,
      nameEn: 'The Tech of Shrek the Third',
      type: 'VIDEO',
      year: '2007',
      filmLength: '00:10',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'документальный',
        },
        {
          genre: 'короткометражка',
        },
      ],
      rating: 'null',
      ratingVoteCount: 12,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/569721.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/569721.jpg',
    },
    {
      filmId: 102146,
      nameRu: 'Кот в сапогах',
      nameEn: 'Puss in Boots',
      type: 'FILM',
      year: '2011',
      description:
        'Кот в сапогах объединяется с умным Шалтай-Болтаем и сообразительной Кисой, чтобы украсть знаменитую Гусыню, несущую золотые яйца.',
      filmLength: '01:30',
      countries: [
        {
          country: 'Индия',
        },
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'детектив',
        },
        {
          genre: 'комедия',
        },
        {
          genre: 'мелодрама',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '7.1',
      ratingVoteCount: 225758,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/102146.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/102146.jpg',
    },
    {
      filmId: 102146,
      nameRu: 'Кот в сапогах',
      nameEn: 'Puss in Boots',
      type: 'FILM',
      year: '2011',
      description:
        'Кот в сапогах объединяется с умным Шалтай-Болтаем и сообразительной Кисой, чтобы украсть знаменитую Гусыню, несущую золотые яйца.',
      filmLength: '01:30',
      countries: [
        {
          country: 'Индия',
        },
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'детектив',
        },
        {
          genre: 'комедия',
        },
        {
          genre: 'мелодрама',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '7.1',
      ratingVoteCount: 225758,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/102146.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/102146.jpg',
    },
    {
      filmId: 5073013,
      nameEn: 'How Has Shrek Aged?',
      type: 'FILM',
      year: '2021',
      filmLength: '00:19',
      countries: [
        {
          country: 'Великобритания',
        },
      ],
      genres: [
        {
          genre: 'документальный',
        },
        {
          genre: 'короткометражка',
        },
      ],
      rating: 'null',
      ratingVoteCount: 1,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5073013.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5073013.jpg',
    },
    {
      filmId: 298931,
      nameRu: 'Кумир Тридевятого Королевства',
      nameEn: 'Far Far Away Idol',
      type: 'VIDEO',
      year: '2004',
      description:
        'Пародия на популярное ТВ-шоу «Американский идол». В конкурсе на лучшего исполнителя Тридевятого королевства принимают участие Шрек, Фиона, Осел, Кот в сапогах, Капитан Крюк, Дорис и многие другие сказочные персонажи. Выбор победителя обещает быть непредсказуемым, ведь каждый из участников подготовил свой лучший музыкальный номер.',
      filmLength: '00:06',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'музыка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'семейный',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: '6.4',
      ratingVoteCount: 2703,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/298931.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/298931.jpg',
    },
    {
      filmId: 888051,
      nameRu: 'Годзилла: Возрождение',
      nameEn: 'Shin Gojira',
      type: 'FILM',
      year: '2016',
      description:
        'Загадочная авария в туннелях под мостом-шоссе Токио Бэй Аква-Лайн ставит на уши аварийные подразделения мегаполиса. Шеф МЧС Японии созывает всех, чтобы выявить причину аварии и найти возможные решения сложившейся проблемы. Чиновники ещё не знают, что это только начало. Гигантское существо, известное как Годзилла, встало на путь разрушения.',
      filmLength: '02:00',
      countries: [
        {
          country: 'Япония',
        },
      ],
      genres: [
        {
          genre: 'боевик',
        },
        {
          genre: 'драма',
        },
        {
          genre: 'фантастика',
        },
      ],
      rating: '6.0',
      ratingVoteCount: 5911,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/888051.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/888051.jpg',
    },
    {
      filmId: 5451289,
      nameRu: 'Боевой континент 2: Страна душ',
      nameEn: 'Douluo Dalu II: Jueshi Tangmen',
      type: 'TV_SERIES',
      year: '2023',
      description:
        'На этой земле нет магии и боевых искусств, но есть боевые духи. Секта Тан на континенте Доуло упала в упадок, но новое поколение избранных небесами появилось. Семь Монстров Шрека должны сплотить Секту Тан и вернуть ей славу. В этом им помогут духовный зверь, священный бог смерти и новая система духовных инструментов.',
      filmLength: '00:20',
      countries: [
        {
          country: 'Китай',
        },
      ],
      genres: [
        {
          genre: 'боевик',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'фэнтези',
        },
      ],
      rating: 'null',
      ratingVoteCount: 549,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/5451289.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/5451289.jpg',
    },
    {
      filmId: 4870,
      nameRu: 'Четвертак',
      nameEn: 'Two Bits',
      type: 'FILM',
      year: '1995',
      description:
        'Америка. 1933 год. Мальчик из бедной семьи итальянских эмигрантов, Дженнаро, очень хочет попасть в только что открывшийся кинотеатр «Ла Палома», но билет стоит 25 центов, которых у него нет. Проблема кажется мальчишке совершенно неразрешимой, но дед с утра твердит, что сегодня умрет и оставит внуку монету в 25 центов...',
      filmLength: '01:25',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'комедия',
        },
      ],
      rating: '7.1',
      ratingVoteCount: 1445,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4870.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/4870.jpg',
    },
    {
      filmId: 4499094,
      nameRu: 'Без ума от кино',
      nameEn: 'I Like Movies',
      type: 'FILM',
      year: '2022',
      description:
        'Лоуренс — киноман на всю голову. На пару с другом он постоянно снимает пародии и любительские фильмы, но, чтобы приблизиться к своей мечте, ему необходимо поступить в киношколу при Нью-Йоркском университете. Пытаясь скопить денег на обучение, он устраивается на работу в местный видеомагазин, пусть даже там «Шрэк» и ценится больше, чем шедевры киноискусства. Но с приближением выпускного Лоуренс все больше переживает о том, кого из себя представляет и куда движется дальше.',
      filmLength: '01:39',
      countries: [
        {
          country: 'Канада',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'комедия',
        },
      ],
      rating: '6.8',
      ratingVoteCount: 1959,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4499094.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/4499094.jpg',
    },
    {
      filmId: 4499094,
      nameRu: 'Без ума от кино',
      nameEn: 'I Like Movies',
      type: 'FILM',
      year: '2022',
      description:
        'Лоуренс — киноман на всю голову. На пару с другом он постоянно снимает пародии и любительские фильмы, но, чтобы приблизиться к своей мечте, ему необходимо поступить в киношколу при Нью-Йоркском университете. Пытаясь скопить денег на обучение, он устраивается на работу в местный видеомагазин, пусть даже там «Шрэк» и ценится больше, чем шедевры киноискусства. Но с приближением выпускного Лоуренс все больше переживает о том, кого из себя представляет и куда движется дальше.',
      filmLength: '01:39',
      countries: [
        {
          country: 'Канада',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'комедия',
        },
      ],
      rating: '6.8',
      ratingVoteCount: 1959,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/4499094.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/4499094.jpg',
    },
    {
      filmId: 661203,
      nameRu: 'Крепыш',
      nameEn: '10 timer til Paradis',
      type: 'FILM',
      year: '2011',
      description:
        'Деннис Питерсен – изрезанный глубокими морщинами и щедро покрытый татуировками человек-шкаф, человек-Шрек, похожий на зелёного огра не только гигантским телом и каменной башкой, но и детской наивностью. Профессиональный бодибилдер, подрабатывающий охранником, живёт с сухонькой и седенькой мамой, ведёт себя тише воды-ниже травы и безнадёжно мечтает о постоянной девушке. И вот однажды, последовав примеру друга семьи и закрыв глаза на пассивно-агрессивное поведение мамы, Деннис отправляется в Таиланд, где доступных девушек не счесть...',
      filmLength: '01:32',
      countries: [
        {
          country: 'Дания',
        },
      ],
      genres: [
        {
          genre: 'драма',
        },
        {
          genre: 'мелодрама',
        },
      ],
      rating: '6.8',
      ratingVoteCount: 3643,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/661203.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/661203.jpg',
    },
    {
      filmId: 295055,
      nameRu: 'Отец невесты',
      nameEn: 'Father of the Pride',
      type: 'TV_SERIES',
      year: '2004',
      description:
        'Жили-были Зигфрид и Рой, два полных придурка, говорящих с немецким акцентом и устраивающих магические шоу. Веселые и смешные львы, хитрые тигры, чокнутые зебры, бандиты - индюшки, бабник суслик, чокнутый слон, юморист улитка, ослик из Шрека, ягуар жигало, романтичная панда, и много веселых и потрясающих приключений...',
      filmLength: '00:22',
      countries: [
        {
          country: 'США',
        },
      ],
      genres: [
        {
          genre: 'комедия',
        },
        {
          genre: 'короткометражка',
        },
        {
          genre: 'мультфильм',
        },
        {
          genre: 'приключения',
        },
      ],
      rating: '6.0',
      ratingVoteCount: 481,
      posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/295055.jpg',
      posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/295055.jpg',
    },
  ],
  keyword: 'shrek',
  totalPages: 3,
  total: 39,
}
