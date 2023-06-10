import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from "./routes";
import './App.css';


function App() {
  return (
    <div className="container-fluid m-5">
      <BrowserRouter>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} exact path={route.path} Component={route.Component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
