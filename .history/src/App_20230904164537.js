import  Auth  from "./auth";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="">
        {/* <h1>Welcome to Test Login page with Auth</h1> */}
        <Login />
        <Auth />
      </header>



    </div>
  );
}

export default App;
