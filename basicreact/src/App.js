import Footer from "./Footer";
import Header from "./Header";
import './App.css';
function App() {
  return (
    <div className="app">
      <Header/>
      <main className="content">
      <h2 style={{textAlign:"center", padding:"50px", }}>Walcome to My App</h2>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
