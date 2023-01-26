import './App.css';
import Layout from './pages/Layout'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/dashboard'  element={<Dashboard  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
