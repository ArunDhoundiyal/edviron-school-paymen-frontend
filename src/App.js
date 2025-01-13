import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import SchoolTransactions from './components/SchoolTransaction';
import CheckStatus from './components/CheckStatus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute element={<Home />}/>}/>
        <Route path='/school-transactions' element={<ProtectedRoute element={<SchoolTransactions/>}/>} />
        <Route path='/check-status' element={<ProtectedRoute element={<CheckStatus/>} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
