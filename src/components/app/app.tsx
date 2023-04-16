import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import MyList from '../../pages/mylist/mylist';
import Film from '../../pages/film/film';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import AddReview from '../../pages/add-review/add-review';
import PrivateRoute from '../private-route/private-route';

import {AppRoute, AuthorizationStatus} from '../../const';


type AppProps = {
  filmsCount: number;
  title: string;
  genre: string;
  releaseDate: Date;
}

const App = ({filmsCount, title, genre, releaseDate}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main filmsCount={filmsCount} title={title} genre={genre} releaseDate={releaseDate}/>}/>
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route path={AppRoute.MyList} element={<MyList/>}/>
      <Route path={`${AppRoute.Film}/:id`} element={<Film/>}/>
      <Route path={AppRoute.AddReview} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
          <AddReview/>
        </PrivateRoute>
      }
      />
      <Route/>
      <Route path={AppRoute.Player} element={<Player/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
