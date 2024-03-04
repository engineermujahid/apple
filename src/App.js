import './App.css';
import Routes from "./pages/Routes"
import Header from "./components/Header/Topnav"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <Routes />
      </main>
      <Footer />
    </>
  );
}

export default App;
