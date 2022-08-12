import isMatchingSearch from "./isMatchingSearch";

/*interface IShorterEpisode {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  image: {
    original: string;
    medium: string;
  };
  summary: string;
}*/

test("isMatchingSearch returns a boolean if the search term is in the episode name or the summary", () => {
  expect(
    isMatchingSearch(
      {
        id: 1221412,
        name: "The Spoils of War",
        season: 7,
        number: 4,
        airdate: "2017-08-06",
        airtime: "21:00",
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_landscape/123/307677.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/123/307677.jpg",
        },
        summary:
          "<p>Arya gets to the final destination. Daenerys takes it upon herself to strike back.</p>",
      },
      "war"
    )
  ).toBe(true);
  expect(
    isMatchingSearch(
      {
        id: 1221412,
        name: "The Spoils of War",
        season: 7,
        number: 4,
        airdate: "2017-08-06",
        airtime: "21:00",
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_landscape/123/307677.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/123/307677.jpg",
        },
        summary:
          "<p>Arya gets to the final destination. Daenerys takes it upon herself to strike back.</p>",
      },
      "wAR"
    )
  ).toBe(true);
  expect(
    isMatchingSearch(
      {
        id: 1221412,
        name: "The Spoils of War",
        season: 7,
        number: 4,
        airdate: "2017-08-06",
        airtime: "21:00",
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_landscape/123/307677.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/123/307677.jpg",
        },
        summary:
          "<p>Arya gets to the final destination. Daenerys takes it upon herself to strike back.</p>",
      },
      "FRIDAY"
    )
  ).toBe(false);
});
