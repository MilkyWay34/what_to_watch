import type { Review } from '../types/reviews';

const reviews: Review[] = [
  {
    id: 1,
    author: 'Kate Muir',
    score: 8.9,
    text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    date:  new Date('24/12/2016')
  },
  {
    id: 2,
    author: 'Bill Goodykoontz',
    score: 8.0,
    text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    date: new Date('18/11/2015')
  },
  {
    id: 3,
    author: 'Amanda',
    score: 7,
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    date: new Date('20/09/2015')
  },
  {
    id: 4,
    author: 'Kate Muir',
    score: 8.0,
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    date: new Date('13/10/2017')
  },
];

export default reviews;
