import "./App.css";
import Routes from "./pages/Routes";
import Header from "./components/Header/Topnav";
import Footer from "./components/Footer/Footer";
import { BagProvider } from "./components/BagProvider";
import AuthContextProvider from "./context/AuthContext";
function App() {
    return (
        <>
            <AuthContextProvider>
                <BagProvider>
                    <Header />
                    <main className="min-h-screen">
                        <Routes />
                    </main>
                    <Footer />
                </BagProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;
