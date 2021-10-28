
import logo from "./logo.jpg";
import './App.css';
import Dictionary from "./Dictionary";
import axios from "axios";

 function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
    </header>
    <main> 
      <Dictionary />
      </main> 
    <footer className="text-center">
       <small> Coded by Urszula Krzemińska and is {" "}
          <a href ="https://github.com/ula345/dictionary-project.git" rel="noreferrer" target="_blank"> open-sourrce on GitHub </a>
    and is run by <a href ="https://condescending-euler-9266ff.netlify.app" rel="noreferrer" target="_blank">Netlify</a>
    </small>
    </footer>
    </div>
    </div>
  );
}

export default App;
