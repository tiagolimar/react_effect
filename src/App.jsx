import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [show, setShow] = useState([]);
  let cards = [];

  const increment = () => {
    setCount(count + 10);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        data = data.splice(0, 10);
        setShow(
          data.map((card, banana) => {
            const { title, thumbnailUrl, id } = card;
            return (
              <Card key={banana} title={id} url={thumbnailUrl} text={title} />
            );
          })
        );
      });
  }, []);

  return (
    <>
      <h1>{`Contador: ${count}`}</h1>
      <button onClick={increment}>+10</button>
      
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">{show}</div>
      </div>
      {console.log(show)}
    </>
  );
}

export default App;
