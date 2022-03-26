
import './App.css';
import Header from './Utilities/Header/Header';
import Shop from './Utilities/shop/Shop';

function App() {


  return (
    <div >
      <Header></Header>
      <Shop></Shop>
      <p>
      How react works?
      </p>
      <p>
      React is a JavaScript library. It creates user interface with more efficient way. React works in declarative code. We can create component as our wish and modify it the way we like. React use virtual tree to compare new data with the previous one, which makes it a performance based library. 
      </p>
      <p>
        Difference between props and state!
      </p>
      <p>
        Props is used to pass value in component when we pass value with props it stores it as object. We can acces those object from component. We can say props as property. 
      </p>
      <p>
        On the other hand state is used to take action with user interaction with website. whenever user iteract with the website state changed. It is also use to perform operation which are interaction based.
      </p>
    </div>
  );
}

export default App;
