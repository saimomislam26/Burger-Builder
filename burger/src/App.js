import './App.css';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Component/Redux/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>




    </div>
  );
}

export default App;
