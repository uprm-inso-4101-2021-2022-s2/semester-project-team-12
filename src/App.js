import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/Home";
import EngineeringPage from "./pages/Engineering/Engineering";
import AdemPage from "./pages/ADEM/ADEM"
import ARCIPage from "./pages/ARCI/ARCI"

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/engineering" element={<EngineeringPage />} />
                    <Route path="/ADEM" element={<AdemPage />}/>
                    <Route path="/ARCI" element={<ARCIPage />}/>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
