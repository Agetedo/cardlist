interface TopEpisode {
  id: number | string | bigint;
  name: string;
  air_date: string;
  director: string;
  writer: string;
  img_url:string;
  linkTo: string;
  topPlace: number | string;
}
  
export const topEpisode: TopEpisode[] = [
  {
    id: "tE1",
    name: "Chapter 1",
    air_date: "02/15/2018",
    director: "Mike Roberts",
    writer: "Olan Rogers",
    img_url: "http://finalspaceapi.com/api/episode/image/chapter1.jpg",
    linkTo: "/episode01-page",
    topPlace: 1,
  },
  {
    id: "tE2",
    name: "Chapter 2",
    air_date: "02/15/2018",
    director: "Mike Roberts",
    writer: "Olan Rogers",
    img_url: "http://finalspaceapi.com/api/episode/image/chapter2.jpg",
    linkTo: "/episode02-page",
    topPlace: 2,
  },
  {
    id: "tE3",
    name: "Chapter 3",
    air_date: "02/26/2018",
    director: "Mike Roberts",
    writer: "Olan Rogers",
    img_url: "http://finalspaceapi.com/api/episode/image/chapter3.jpg",
    linkTo: "/episode03-page",
    topPlace: 3,
  }
];