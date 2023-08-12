import * as genresAPI from "./fakeCategoryService";
import dayjs from "dayjs";

const news = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title:
      "Mbappé has become a problem for Paris Saint-Germain, and Paris Saint-Germain has become a problem for Mbappé",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sport" },
    views: 22,
    saved: true,
    date: {
      month: 5,
      day: 22,
      year: 2023,
    },
    time: 1691830908733,
    intro:
      "The poker game has resumed between the star football player and his club. So far, it's been a losing game, writes Jérôme Latta in his column.",
    body: `"He made the right choice for PSG, not for himself." This was the opinion given by Zlatan Ibrahimovic in November 2022 on Canal+, a few months after Kylian Mbappé decided to extend his contract in Paris by two years plus an optional third year.

We can already smile at the lesson given by Ibrahimovic when he called out a situation where a player "becomes more important than his club," given how much he stole the show during his own time with PSG (2012-2016). In the end, though, the prediction was wrong, as this contract extension did not end up being a good decision for the club either.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title:
      "Team USA doctor Nassar, convicted of sexually assaulting gymnasts, stabbed in prison",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sport" },
    views: 34,
    date: {
      month: 6,
      day: 4,
      year: 2023,
    },
    time: 1691830908734,
    intro:
      "The disgraced physician, who was found guilty of assaulting hundreds of athletes, was stabbed twice in the neck, six times in the chest and twice in the back, according to a prison official.",
    body: `Larry Nassar, the former USA Gymnastics team doctor convicted of sexually assaulting hundreds of athletes, was in stable condition on Monday, July 10, after being stabbed multiple times by another inmate, a prison union official said.

Nassar, 59, was attacked on Sunday afternoon at the federal USP Coleman II prison in Sumterville, Florida, where he is serving his sentence, Joe Rojas, the president of the local correctional officers union, told AFP.

The disgraced physician was stabbed twice in the neck, six times in the chest and twice in the back, Rojas said. "He's in stable condition last I heard," Rojas said.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title:
      "Superman: Legacy Finds Leads With David Corenswet and Rachel Brosnahan",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Movie" },
    views: 7,
    saved: true,
    date: {
      month: 6,
      day: 27,
      year: 2023,
    },
    time: 1691830908739,
    intro:
      "The duo will star as Clark Kent and Lois Lane in James Gunn's film.",
    body: `After a lengthy search, David Corenswet and Rachel Brosnahan will star in Superman: Legacy, the film that will launch DC's new universe under writer-director Gunn and his DC Studios co-boss, Peter Safran.

Corenswet and Brosnahan were among six actors who vied for the lead roles, with Gunn filming screen tests over the June 17 weekend with Nicholas Hoult and Tom Brittney also in contention to play Superman/Clark Kent and Emma Mackey and Phoebe Dynevor in the running for Daily Planet reporter Lois Lane.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title:
      "Tom Holland Recalls Being Enslaved to Alcohol Before Sobriety Journey",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Celebrity" },
    views: 50,
    date: {
      month: 11,
      day: 2,
      year: 2022,
    },
    time: 1691830908727,
    intro:
      "Tom Holland said he was definitely addicted to alcohol before he got sober, noting how he couldn't get through social events without having a",
    body: `he Spider-Man actor, who has been sober for over a year, recently looked back at the extent of his alcohol consumption, noting that it had a detrimental impact on his day-to-day life.

"I was definitely addicted to alcohol, not shying away from that at all," Tom said on the July 10 episode of On Purpose with Jay Shetty. "I think that anyone that has a beer everyday has probably got a little bit of a problem."

In his experience, the 27-year-old said he would "drink and drink and drink and drink," until he reached a breaking point.

"And then you would just reach that moment where you're like 'Wow, I shouldn't have had that last beer,'" the actor continued. "And you wake up the next day and you have a terrible headache."`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Djokovic celebrates 350th Grand Slam win at Wimbledon",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sport" },
    views: 29,
    date: {
      month: 5,
      day: 5,
      year: 2023,
    },
    time: 1691830908731,
    intro:
      "Roger Federer (369) and Serena Williams (365), both of whom retired last year, are the only players with more Grand Slam singles wins than Djokovic.",
    body: `You can share an article by clicking on the share icons at the top right of it. 
The total or partial reproduction of an article, without the prior written authorization of Le Monde, is strictly forbidden. 
For more information, see our Terms and Conditions. 
For all authorization requests, contact
Novak Djokovic became only the third player in history to win 350 Grand Slam singles matches after seeing off the challenge of Jordan Thompson at Wimbledon on Wednesday, July 5.

The defending champion beat his unseeded Australian opponent 6-3, 7-6 (7/4), 7-5 to reach the third round, where he will meet Tomas Martin Etcheverry or Stan Wawrinka.

Roger Federer (369) and Serena Williams (365), both of whom retired last year, are the only players with more Grand Slam singles wins than Djokovic.

A single break secured the first set for the Serbian second seed, and he edged the second-set tie-break to establish an iron grip on the match on Centre Court.

Thompson, ranked 70th in the world, remained steady on his serve in the third set but eventually cracked in the 12th game when trailing 6-5.

The 36-year-old Djokovic is targeting an eighth Wimbledon title, which would draw him level with Federer's men's record. He is also chasing a 24th career Grand Slam title, which would equal Margaret Court's all-time record.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "See Kylie Jenner React to Results of TikTok's Aging Filter",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Celebrity" },
    views: 90,
    date: {
      month: 11,
      day: 2,
      year: 2022,
    },
    time: 1691830908728,
    intro:
      "Kylie Jenner is keeping up with the TikTok filters and recently applied one to see what she could look like in the future.",
    body: `""It's really such a blessing that I've been able to live and experience so much life at such a young age," the mom to daughter Stormi Webster, 5, and son Aire Webster, 17 months, told HommeGirls earlier this year. "I have two kids, I'm 25. Honestly. I've never been happier. As I get older, I get more appreciative of my life, my family, my friends and having all these opportunities."`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title:
      "Barbie's Simu Liu Reveals What the Kens Did While the Barbies Had Their Epic Sleepover",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Celebrity" },
    views: 66,
    date: {
      month: 10,
      day: 28,
      year: 2022,
    },
    time: 1691830908726,
    intro: "Gym is life for the Ken dolls.",
    body: `"So, while the Barbies were having a nice, relaxing night," the actor continued, referencing the fun-filled sleepover the female cast members like Margot Robbie and America Ferrera got to enjoy, "the Kens were lifting things and flexing."

And no one took the task quite as seriously as Ryan. 

"I could not beat this man to the gym," Simu admitted. "No matter how early I went, he was always there. He always stayed later than me. So, I really saw the discipline and I really saw the Ken-ergy."`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title:
      "Wembanyama more aggressive in stronger second Summer League game with Spurs in Las Vegas",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sport" },
    views: 52,
    saved: true,
    date: {
      month: 1,
      day: 12,
      year: 2023,
    },
    time: 1691830908729,
    intro:
      "The No. 1 pick in this year's draft looked much more like himself in his second game of Summer League on Sunday. He finished with 27 points and 12 rebounds, but the Spurs lost 85-80 to the Portland Trail Blazers.",
    body: `Victor Wembanyama was yelling in celebration, punching the air and even got a Band-Aid on his right cheek because of some physicality. For his second act in Las Vegas, Wembanyama showed some fire.

The No. 1 pick in this year's draft looked much more like himself in his second game of Summer League on Sunday. He finished with 27 points and 12 rebounds, but the Spurs lost 85-80 to the Portland Trail Blazers. “I was just getting going,” Wembanyama said.

He was 9 of 14 from the floor, 7 of 12 from the line, blocked three shots and led a comeback where the Spurs cut a 19-point deficit down to one, but they never got the lead.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Hugh Jackman Dons Yellow Wolverine Costume in Deadpool 3 Photo",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Movie" },
    views: 12,
    saved: true,
    date: {
      month: 4,
      day: 10,
      year: 2023,
    },
    time: 1691830908730,
    intro: "The classic duds have long been joked about in the 'X-Men' films..",
    body: `More than two decades after first playing Wolverine, Hugh Jackman has finally put on the yellow spandex. Jackman and co-star Ryan Reynolds shared a first look at the duo from Deadpool 3 Monday, with the photo including Jackman wearing the classic costume from the comics for the first time.

The yellow costume (which was immortalized in the '90s animated series) has long been joked about in the X-Men features. In the original 2000 film, Wolverine complains about the black leather suits the team wears, to which Cyclops (James Marsden) quips, “What would you prefer, yellow spandex?” In 2013's The Wolverine, a deleted scene showed off Logan getting the yellow suit in a briefcase, though he doesn't put it on..`,
  },
];

export function getNews() {
  return news;
}

export function getNewsById(id) {
  return news.find((n) => n._id === id);
}

export function saveNews(news) {
  let newsInDb = news.find((n) => n._id === news._id) || {};
  if (newsInDb) {
    newsInDb.title = news.title;
    newsInDb.intro = news.intro;
    newsInDb.body = news.body;
    newsInDb.category = genresAPI.category.find((n) => n._id === news.genreId);
  } else {
    newsInDb.title = news.title;
    newsInDb.intro = news.intro;
    newsInDb.body = news.body;
    newsInDb.category = genresAPI.category.find((n) => n._id === news.genreId);
    newsInDb.views = 0;
    newsInDb.date.year = dayjs().year();
    newsInDb.date.month = dayjs().month() + 1;
    newsInDb.date.day = dayjs().date();
    newsInDb.time = Date.now();
  }
  if (!newsInDb._id) {
    newsInDb._id = Date.now();
    news.push(newsInDb);
  }

  return newsInDb;
}

export function deleteMovie(id) {
  let newsInDb = news.find((n) => n._id === id);
  news.splice(news.indexOf(newsInDb), 1);
  return newsInDb;
}
