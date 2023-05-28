import './App.css';

//component

import Home from './components/Home';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import { BrowserRouter,Routes,Route }from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route  path='/' element={< Home />}></Route>
        <Route  path='/add' element={< AddUser />}></Route>
        <Route  path='/all' element={< AllUser />} > </Route>
        <Route  path='/edit/:id' element={< EditUser />} > </Route>
        
           
     </Routes>
     </BrowserRouter>
   
   
       </div>
  );
}

export default App;
