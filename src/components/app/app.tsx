import { Main } from '../../pages/main/main';

type AppProps = {
  filmsCount: number,
  title: string,
  genre: string,
  releaseDate: Date
}

function App({ filmsCount, title, genre, releaseDate } : AppProps): JSX.Element {
  return <Main filmsCount={filmsCount} title={title} genre={genre} releaseDate={releaseDate} />;
}

export default App;
