import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/input";
import Previewer from "./components/Previewer/previewer";
import QuestionBtn from "./components/QuestionBtn/questionBtn";

function App() {
  return (
    <div className="app">
      <div>
        <QuestionBtn />
        <Header />
        <div className="app-content">
          <Input />
          <Previewer />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
