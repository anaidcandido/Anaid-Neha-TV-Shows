import EpisodesList from "./components/EpisodesList";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <EpisodesList />
      <AppFooter />
    </>
  );
}

export default App;
