import React from 'react';


import Header from "./components/Header"
import {Layout} from "./components/Layout"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Layout></Layout>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
