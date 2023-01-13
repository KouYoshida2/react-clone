import { Movie } from "../models/Movie";
import repository from "./client/apiClient";
const key = import.meta.env.VITE_API_KEY;
export const useMovieRepository = (): useMovieRepository => {
  /**
   * - 指定ジャンルの映画を取得する
   * @param genre
   * @returns
   */
  const getMovieByGenres = async (genre: number) => {
    console.log("データとりいった");
    // const { data } = await repository.get(
    //   `/discover/movie?with_genres=${genre}&api_key=${key}`
    // );
    const data = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
          genre_ids: [16, 28, 12, 35, 10751, 14],
          id: 315162,
          original_language: "en",
          original_title: "Puss in Boots: The Last Wish",
          overview:
            "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
          popularity: 10102.273,
          poster_path: "/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
          release_date: "2022-12-21",
          title: "Puss in Boots: The Last Wish",
          video: false,
          vote_average: 8.6,
          vote_count: 1215,
        },
        {
          adult: false,
          backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
          genre_ids: [878, 12, 28],
          id: 76600,
          original_language: "en",
          original_title: "Avatar: The Way of Water",
          overview:
            "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
          popularity: 3180.863,
          poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          release_date: "2022-12-16",
          title: "Avatar: The Way of Water",
          video: false,
          vote_average: 7.7,
          vote_count: 4034,
        },
        {
          adult: false,
          backdrop_path: "/zrnzWEQSJ0jtufPGR4SEnB6s1q1.jpg",
          genre_ids: [28, 35, 80, 53],
          id: 899112,
          original_language: "en",
          original_title: "Violent Night",
          overview:
            "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
          popularity: 2332.088,
          poster_path: "/1XSYOP0JjjyMz1irihvWywro82r.jpg",
          release_date: "2022-11-30",
          title: "Violent Night",
          video: false,
          vote_average: 7.7,
          vote_count: 883,
        },
        {
          adult: false,
          backdrop_path: "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
          genre_ids: [14, 28, 12],
          id: 736526,
          original_language: "no",
          original_title: "Troll",
          overview:
            "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
          popularity: 1935.884,
          poster_path: "/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
          release_date: "2022-12-01",
          title: "Troll",
          video: false,
          vote_average: 6.7,
          vote_count: 982,
        },
        {
          adult: false,
          backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          genre_ids: [14, 28, 878],
          id: 436270,
          original_language: "en",
          original_title: "Black Adam",
          overview:
            "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
          popularity: 1850.439,
          poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
          release_date: "2022-10-19",
          title: "Black Adam",
          video: false,
          vote_average: 7.2,
          vote_count: 3653,
        },
        {
          adult: false,
          backdrop_path: "/o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg",
          genre_ids: [28, 12, 14, 878],
          id: 19995,
          original_language: "en",
          original_title: "Avatar",
          overview:
            "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
          popularity: 1613.909,
          poster_path: "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
          release_date: "2009-12-15",
          title: "Avatar",
          video: false,
          vote_average: 7.6,
          vote_count: 27736,
        },
        {
          adult: false,
          backdrop_path: "/gkseI3CUfQtMKX41XD4AxDzhQb7.jpg",
          genre_ids: [28, 18, 36],
          id: 724495,
          original_language: "en",
          original_title: "The Woman King",
          overview:
            "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
          popularity: 1514.509,
          poster_path: "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
          release_date: "2022-09-15",
          title: "The Woman King",
          video: false,
          vote_average: 7.8,
          vote_count: 1016,
        },
        {
          adult: false,
          backdrop_path: "/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg",
          genre_ids: [28, 53, 80, 18],
          id: 740952,
          original_language: "en",
          original_title: "Savage Salvation",
          overview:
            "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
          popularity: 1271.242,
          poster_path: "/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
          release_date: "2022-12-02",
          title: "Savage Salvation",
          video: false,
          vote_average: 5.5,
          vote_count: 26,
        },
        {
          adult: false,
          backdrop_path: "/mYQSbZdGX0JJb49NLO04UA0iFEU.jpg",
          genre_ids: [28, 35, 80],
          id: 1015963,
          original_language: "en",
          original_title: "High Heat",
          overview:
            "When the local mafia shows up to burn down her restaurant, Ana, a chef with a meticulous past, defends her turf and proves her knife skills both in and out of the kitchen.",
          popularity: 1158.65,
          poster_path: "/mmD0NVdhiRiCu64YKem5GK5PSfy.jpg",
          release_date: "2022-12-16",
          title: "High Heat",
          video: false,
          vote_average: 4.9,
          vote_count: 21,
        },
        {
          adult: false,
          backdrop_path: "/edOt2jNyCbb8SQSvulD2sRRJhmA.jpg",
          genre_ids: [28, 80, 53],
          id: 873126,
          original_language: "it",
          original_title: "Il mio nome è vendetta",
          overview:
            "After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.",
          popularity: 1140.678,
          poster_path: "/7l3war94J4tRyWUiLAGokr3ViF2.jpg",
          release_date: "2022-11-30",
          title: "My Name Is Vendetta",
          video: false,
          vote_average: 6.7,
          vote_count: 292,
        },
        {
          adult: false,
          backdrop_path: "/ecaB1LUoQE1ylZJVF5KLRTkewt8.jpg",
          genre_ids: [28, 35, 80],
          id: 683328,
          original_language: "id",
          original_title: "The Big 4",
          overview:
            "A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
          popularity: 1133.306,
          poster_path: "/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg",
          release_date: "2022-12-19",
          title: "The Big 4",
          video: false,
          vote_average: 6.9,
          vote_count: 75,
        },
        {
          adult: false,
          backdrop_path: "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
          genre_ids: [28, 12, 878],
          id: 505642,
          original_language: "en",
          original_title: "Black Panther: Wakanda Forever",
          overview:
            "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
          popularity: 1200.915,
          poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
          release_date: "2022-11-11",
          title: "Black Panther: Wakanda Forever",
          video: false,
          vote_average: 7.5,
          vote_count: 1596,
        },
        {
          adult: false,
          backdrop_path: "/6YRQ8l93ZEs6x4rZojWoHIWdguK.jpg",
          genre_ids: [28, 80],
          id: 1024546,
          original_language: "en",
          original_title: "Detective Knight: Rogue",
          overview:
            "As Los Angeles prepares for Halloween, mask-wearing armed robbers critically wound detective James Knight’s partner in a shootout following a heist. With Knight in hot pursuit, the bandits flee L.A. for New York, where the detective’s dark past collides with his present case and threatens to tear his world apart…unless redemption can claim Knight first.",
          popularity: 866.729,
          poster_path: "/2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg",
          release_date: "2022-10-21",
          title: "Detective Knight: Rogue",
          video: false,
          vote_average: 6.1,
          vote_count: 37,
        },
        {
          adult: false,
          backdrop_path: "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
          genre_ids: [14, 28, 35, 80],
          id: 1013860,
          original_language: "en",
          original_title: "R.I.P.D. 2: Rise of the Damned",
          overview:
            "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
          popularity: 670.621,
          poster_path: "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
          release_date: "2022-11-15",
          title: "R.I.P.D. 2: Rise of the Damned",
          video: false,
          vote_average: 6.6,
          vote_count: 320,
        },
        {
          adult: false,
          backdrop_path: "/90ZZIoWQLLEXSVm0ik3eEQBinul.jpg",
          genre_ids: [28, 27, 53],
          id: 988233,
          original_language: "en",
          original_title: "Hex",
          overview:
            "Following a mysterious disappearance on a jump, a group of skydivers experiences paranormal occurrences that leave them fighting for their lives.",
          popularity: 634.078,
          poster_path: "/xFJHb43ZAnnuiDztxZYsmyopweb.jpg",
          release_date: "2022-11-01",
          title: "Hex",
          video: false,
          vote_average: 5.7,
          vote_count: 22,
        },
        {
          adult: false,
          backdrop_path: "/maxRhndtC4BJABvqRPvYNu69CHA.jpg",
          genre_ids: [36, 28, 18],
          id: 551271,
          original_language: "en",
          original_title: "Medieval",
          overview:
            "The story of 14th century Czech icon and warlord Jan Zizka who defeated armies of the Teutonic Order and the Holy Roman Empire.",
          popularity: 649.285,
          poster_path: "/eeUNWsdoiOijOZAMaWFDA5Pb1n8.jpg",
          release_date: "2022-09-08",
          title: "Medieval",
          video: false,
          vote_average: 7.2,
          vote_count: 279,
        },
        {
          adult: false,
          backdrop_path: "/yNib9QAiyaopUJbaayKQ2xK7mYf.jpg",
          genre_ids: [10752, 28, 18],
          id: 966220,
          original_language: "uk",
          original_title: "Снайпер. Білий ворон",
          overview:
            "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola’s naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground. Recovered, he makes a cardinal decision and gets enlisted in a sniper company. Having met his wife’s killers, he emotionally breaks down and arranges “sniper terror” for the enemy. He’s saved from a senseless death by his instructor who himself gets mortally wounded. The death of a friend leaves a “scar” and Mykola is ready to sacrifice his life.",
          popularity: 593.984,
          poster_path: "/lZOODJzwuQo0etJJyBBZJOSdZcW.jpg",
          release_date: "2022-05-03",
          title: "Sniper: The White Raven",
          video: false,
          vote_average: 7.6,
          vote_count: 208,
        },
        {
          adult: false,
          backdrop_path: "/eSdpZZQubPSZ47qppFfUPbKsWlw.jpg",
          genre_ids: [28, 16, 12, 35, 10751],
          id: 417859,
          original_language: "en",
          original_title: "Puss in Boots",
          overview:
            "Long before he even met Shrek, the notorious fighter, lover and outlaw Puss in Boots becomes a hero when he sets off on an adventure with the tough and street smart Kitty Softpaws and the mastermind Humpty Dumpty to save his town. This is the true story of The Cat, The Myth, The Legend... The Boots.",
          popularity: 539.113,
          poster_path: "/n4UkIqNYSTr4DPoHCVfLrL8mbre.jpg",
          release_date: "2011-10-27",
          title: "Puss in Boots",
          video: false,
          vote_average: 6.5,
          vote_count: 2921,
        },
        {
          adult: false,
          backdrop_path: "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
          genre_ids: [28, 18],
          id: 361743,
          original_language: "en",
          original_title: "Top Gun: Maverick",
          overview:
            "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
          popularity: 525.6,
          poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
          release_date: "2022-05-24",
          title: "Top Gun: Maverick",
          video: false,
          vote_average: 8.3,
          vote_count: 5581,
        },
        {
          adult: false,
          backdrop_path: "/vmDa8HijINCAFYKqsMz0YM3sVyE.jpg",
          genre_ids: [28, 80, 53],
          id: 747803,
          original_language: "en",
          original_title: "One Way",
          overview:
            "On the run with a bag full of cash after a robbing his former crime boss—and a potentially fatal wound—Freddy slips onto a bus headed into the unrelenting California desert. With his life slipping through his fingers, Freddy is left with very few choices to survive.",
          popularity: 492.552,
          poster_path: "/uQCxOziq79P3wDsRwQhhkhQyDsJ.jpg",
          release_date: "2022-09-02",
          title: "One Way",
          video: false,
          vote_average: 6.6,
          vote_count: 62,
        },
      ],
      total_pages: 1765,
      total_results: 35292,
    };

    const result = data.results.map((item: movieData) => {
      if (item.video) console.log(item.video);
      return new Movie(
        item.id,
        item.release_date,
        item.title,
        item.poster_path,
        item.overview,
        item.genre_ids
      );
    });

    return result;
  };

  return { getMovieByGenres };
};

interface useMovieRepository {
  getMovieByGenres: (genre: number) => Promise<any[]>;
}

// jsonデータの型
interface movieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
