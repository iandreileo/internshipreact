import { useContext } from 'react';
import styles from './App.module.css';
import Card from '../Card/Card';
import { dataContext } from '../Provider/Provider';

const App = () => {
  const [cards, setCards] = useContext(dataContext);

  return (
    <div className={styles.principalDiv}>
      <div className={styles.box}>
        {
          cards && cards.map((item, index) => {
            return <Card key={index} data={item} isLast={index === cards.length - 1}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
