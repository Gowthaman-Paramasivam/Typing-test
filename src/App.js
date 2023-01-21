import { Start } from "./components/Start";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Result from "./components/Result";

function App() {
  return (
    <div style={{ "height": "100%" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
