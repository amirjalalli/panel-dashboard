import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Topbar from './components/Topbar/Topbar';
import SideBar from "./components/SideBar/SideBar"
function App() {
  let router = useRoutes(routes)
  return (
    <div className="App">
      <Topbar />
      <div className="container">
      <SideBar />
      {router}
      </div>
    </div>
  );
}

export default App;
