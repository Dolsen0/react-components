import Menubar from './components/Menubar';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/footer';
import './App.css';



function App() {
  return (
    <>
      <Menubar />
      <header>
      <Hero/>
      </header>
      <Main/>
      <Footer />
    </>
  );
}

export default App;
