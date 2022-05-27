import './App.css';
import BurgerContainer from './components/burger/BurgerContainer';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <BurgerContainer></BurgerContainer>
      </MainLayout>
    </div>
  );
}

export default App;
