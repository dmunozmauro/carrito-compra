import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from "./routes";
import { createBrowserHistory } from "history";
import './App.css';
import { HomeComponent } from "./components/HomeComponent";

const historial = createBrowserHistory();

function App() {

  /* const RouteWithSubRoutes = (routes) => (
    <Route
      path={routes.path}
      exact={routes.exact}
      key={`route${routes.path}`}
      render={(props) => {
        return (<route.Component {...props} routes={routes.routes} />)
      }}
    />
  ); */



  return (


    <Router>
      <Routes>
        {
          routes.map((r) => {
            console.log(r.Component.name);
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
