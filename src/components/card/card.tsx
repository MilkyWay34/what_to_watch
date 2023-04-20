import type {Film} from '../../types/film';
import {AppRoute} from '../../const';

type CardProps = Film & {
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
};

const Card = ({
  id,
  title,
  previewImage,
  onMouseMove = () => void 0,
  onMouseLeave = () => void 0,
}: CardProps): JSX.Element => {
  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={title} width={280} height={175}/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={'${AppRoute.Movie}/${id}'}>{title}</a>
      </h3>
    </article>
  );
};

export {Card};

