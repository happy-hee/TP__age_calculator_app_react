import "./App.scss";
import "./styles/style.scss";
import Attribution from "./component/Attribution";
import Content from "./component/Content";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Content />
        <Attribution />
      </div>
    </div>
  );
}

export default App;
