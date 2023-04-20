import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Film} from '../../types/film';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import MyList from '../../pages/mylist/mylist';
import Movie from '../../pages/movie/Movie';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import AddReview from '../../pages/add-review/add-review';
import PrivateRoute from '../private-route/private-route';

import {AppRoute, AuthorizationStatus} from '../../const';


type AppProps = {
  films: Film[];
}


const App = ({films}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main films={films}/>}/>
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route path={AppRoute.MyList} element={<MyList/>}/>
      <Route path={`${AppRoute.Movie}/:id`} element={<Movie/>}/>
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
