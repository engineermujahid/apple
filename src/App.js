import './App.css';
import Routes from "./pages/Routes"
import Header from "./components/Header/Topnav"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
}

export default App;
