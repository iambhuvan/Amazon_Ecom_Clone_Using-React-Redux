import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Navbar from './componets/Navbar';
import Carouseli from './componets/Carouseli'
import BOX from './componets/BOX';
import Footer from './componets/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carouseli/>
     <BOX/>
     <Footer/>
    </div>
      
  );
}
export default App;