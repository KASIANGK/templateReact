import './App.css';
import Navigation from './Navigation.js'
import Input from './Input.js';
import Card from './Card.js';

let cardsData = [
    {
        image: './images/ba2.jpg',
        title: 'AND IF U DONT KNOW',
        subtitle: 'NOW U KNOW',
        text: 'Blablabla',
        bouton: 'more info'
    },
    {
        image: './src/images/Sujet23.png',
        title: 'AND IF U DONT KNOW',
        subtitle: 'NOW U KNOW',
        text: 'Blablabla',
        bouton: 'more info'
    },
    {
        image: './images/Sujet23.png',
        title: 'AND IF U DONT KNOW',
        subtitle: 'NOW U KNOW',
        text: 'Blablabla',
        bouton: 'more info'
    },
    {
        image: './images/Sujet23.png',
        title: 'AND IF U DONT KNOW',
        subtitle: 'NOW U KNOW',
        text: 'Blablabla',
        bouton: 'more info'
    },
    {
        image: './images/Sujet23.png',
        title: 'AND IF U DONT KNOW',
        subtitle: 'NOW U KNOW',
        text: 'Blablabla',
        bouton: 'more info'
    },
    {
        image: './images/Sujet23.png',
        title: 'AND IF U DONT KNOW',
        subtitle: 'NOW U KNOW',
        text: 'Blablabla',
        bouton: 'more info'
    },
    
];


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Input></Input>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            text={card.text}
            bouton={card.bouton}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
