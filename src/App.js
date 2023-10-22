import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountCreationForm from './components/AccountCreationForm';
import Login from "./components/Login";
 
function App() {
  return (
    <div >
<BrowserRouter>
      <Routes>
        <Route path="/" element={<AccountCreationForm />}/>       
          <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
