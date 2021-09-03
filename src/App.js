import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import MusicCard from "./Components/MusicCard";
import AlbumInfo from "./Components/AlbumInfo";
import ArtistInfo from "./Components/ArtistInfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
          <SideBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <MusicCard search={"eminem"} />}
            />
            <Route
              path="/album/:id"
              exact
              render={(props) => <AlbumInfo {...props} />}
            />
            <Route
              path="/artist/:id"
              exact
              render={(props) => <ArtistInfo {...props} />}
            />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
