import Card from '../UI/Card';
import classes from './TeaList.module.css';
import TeaItem from './TeaItems/TeaItem';
const DUMMY_TEAS = [
  {
    id: 'a1',
    name: 'Black Coffee',
    description: 'As black as Coffee, enjoy black coffee',
    price: 100,
  },
  {
    id: 'a2',
    name: 'Black Tea',
    description: 'As black as Tea, enjoy black Tea',
    price: 140,
  },
  {
    id: 'a3',
    name: 'Green Tea',
    description: 'Enjoy Green Tea with fresh morning and stay healty',
    price: 200,
  },
  {
    id: 'a4',
    name: 'Herbal Tea',
    description: 'Herbal tea is good for health, enjoy it every day',
    price: 230,
  },
  {
    id: 'a5',
    name: 'Lemmon Tea',
    description: 'Lemmon tea is good for health, enjoy it every day',
    price: 270,
  },
  {
    id: 'a6',
    name: 'Plain Coffee',
    description: 'Normal Coffee is good for health, enjoy it every day',
    price: 190,
  },
  {
    id: 'a7',
    name: 'Plain Tea',
    description: 'Normal Tea is good for health, enjoy it every day',
    price: 40,
  },
  {
    id: 'a8',
    name: 'White Tea',
    description: 'White Tea is good for health, enjoy it every day',
    price: 80,
  },
];
const TeaList = () => {
  const teaList = DUMMY_TEAS.map((tea) => (
    <TeaItem
      key={tea.id}
      id={tea.id}
      name={tea.name}
      description={tea.description}
      price={tea.price}
    />
  ));

  return (
    <section className={classes.teas}>
      <Card>
        <ul>{teaList}</ul>
      </Card>
    </section>
  );
};

export default TeaList;
    
