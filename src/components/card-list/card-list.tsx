import { useState } from 'react';

import {Film} from '../../types/film';

import {Card} from '../card/card';

type CardListProps = {
  films: Film[];
};

const CardList = ({ films }: CardListProps): JSX.Element => {
  // Переменная activeOffer понадобится позже
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveFilm(id);
  };

  const handleCardMouseLeave = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Card
          key={film.id}
          {...film}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
};

export default CardList;
