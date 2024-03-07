import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import routes from './routes';

function App() {
  return (
    <>
      <NavBar />
      <div className='container mt-4'>
        <Routes>
          {
            routes.map((route, index) => 
              <Route key={index} path={route.path} element={route.component}></Route>
            )
          }
        </Routes>
      </div>
    </>
  );
}

export default App;
