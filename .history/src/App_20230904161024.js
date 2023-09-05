import Login from "./components/Login";
import { BrowserRouter , Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="">
        {/* <h1>Welcome to Test Login page with Auth</h1> */}
        <Login />
      </header>



    </div>
  );
}

export default App;
