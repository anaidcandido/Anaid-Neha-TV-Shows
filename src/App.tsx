import EpisodesList from "./components/EpisodesList";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import SearchBar from "./components/SearchBar";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <SearchBar />
      <EpisodesList />
      <AppFooter />
    </>
  );
}

export default App;
