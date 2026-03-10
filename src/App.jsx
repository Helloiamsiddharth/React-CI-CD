import './App.css'
import chef from "./images/chef.jpg"

let language = "JavaScript";

function Header ({ name, year }){
  return (
    <header>
      <h1>{name}'s Learning React</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Momos and Salsa"
]

const dishObjects = items.map((dish, i) => ({
  id: 1,
  title: dish
}));

function Main({dishes}) {
  return (
    <main>
      <img src={chef} height={200} alt='photo of smiling chef'/>
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: 'none'}}>{dish.title}</li>
      ))}
    </ul>
    </main>
    )
}

function App() {

  return (
    <div>
  <Header name="Sid" year={new Date().getFullYear()}/>
  <Main dishes={dishObjects}/>
  </div>
  );
}

export default App
