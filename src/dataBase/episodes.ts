interface Episode {
  id: number | string | bigint;
  name: string;
  topPlace: number;
  img_url: string;
  air_date: string;
  description: string;
}
    
export const episodes: Episode[] = [
  {
    id: "Ep1",
    name: "Chapter 1",
    topPlace: 1,
    img_url: "http://finalspaceapi.com/api/episode/image/chapter1.jpg",
    air_date: "Feb 26,2018",
    description: "Gary carries out the final days of his lonely, 5 year prison sentence aboard Galaxy One, when he meets Mooncake, a little green alien, who has the galaxy's most dangerous bounty hunters chasing after it. Gary swears to keep Mooncake safe.",
  }, 
  {
    id: "Ep2",
    name: "Chapter 2",
    topPlace: 2,
    img_url: "http://finalspaceapi.com/api/episode/image/chapter2.jpg",
    air_date: "Feb 26,2018",
    description: "Gary and Avocato must chase down the ruthless bounty hunter, Terk, before he can tell the Lord Commander that Mooncake is aboard the Galaxy One.",
  }, 
  {
    id: "Ep3",
    name: "Chapter 3",
    topPlace: 3,
    img_url: "http://finalspaceapi.com/api/episode/image/chapter3.jpg",
    air_date: "Mar 12,2018",
    description: "Gary tries to hide Mooncake safely away on the planet Yarno. But instead, Gary and Avocato are trapped in a terrifying mind-puzzle, while Mooncake is taken from them, and forced to fight in a combat arena called the Deathcropolis.",
  }
];