import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './App.css';
import BurgerContainer from './components/burger/BurgerContainer';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <BurgerContainer></BurgerContainer>
      </MainLayout>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
