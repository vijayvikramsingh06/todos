
import './App.css';
import Header from './my components/Header';
import { Todos } from './my components/Todos';
import { Footer } from './my components/Footer';

function App() {
  let todos=[
    {
      Sno:1,
      tittle:"i have to do my work",
      desc:"i have to make a website"
    },
    {
      Sno:1,
      tittle:"i have to do my work",
      desc:"i have to make a website"
    },
    {
      Sno:1,
      tittle:"i have to do my work",
      desc:"i have to make a website"
    },
  ]
  return (
  <>
  <Header title="my todos list" searchBar={true}/>
  <Todos todos={todos}/>
  <Footer/>
  </>
  );
};

export default App;
