import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const express = require('express');
const port = 5432;

const app = express()
// const db = require('./Backend/database');

app.use(express.json());

const Router = require('./Backend/Router')

app.use('/Router', Router)

function App() {
  return (
    <div className="App">
      <Header></Header>
  
    <main></main>

  <Footer></Footer>
    </div>
  );
}

export default App;
