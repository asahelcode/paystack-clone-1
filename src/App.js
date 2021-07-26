import Header from "./components/Navbar/Navbar";
import NotResponsive from "./components/NotResponsive/NotResponsive";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NotResponsive />
      <Header />
      <Home />
    </div>
  );
}

export default App;
