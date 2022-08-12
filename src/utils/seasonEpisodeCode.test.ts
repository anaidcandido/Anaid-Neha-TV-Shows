import seasonEpisodeCode from "./seasonEpisodeCode";
test("seasonEpisodeCode returns a string, concatenating the props passed with padding", () => {
  expect(seasonEpisodeCode({ season: 1, number: 1 })).toBe("S01E01");
  expect(seasonEpisodeCode({ season: 10, number: 15 })).toBe("S10E15");
});

/*
import { greet } from "./greet";
test("greet returns a string, greeting the passed name", () => {
  expect(greet("World")).toBe("Hello, World!");
  expect(greet("Richard")).toBe("Hello, Richard!");
  expect(greet("Academy Scholars")).toBe("Hello, Academy Scholars!");
});
*/
