import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import CreateBookPage from './pages/CreateBookPage/CreateBookPage';
import EditBookPage from './pages/EditBookPage/EditBookPage';
import { editId } from './context';
import { useState } from 'react';
import UserHomePage from './pages/UserHomePage/UserHomePage';

function App() {
  const [edit, setEdit] = useState()
  return (
    <editId.Provider value={{ edit, setEdit }}>
      <Router>
        <Routes>
          <Route exact path='/admin/login' element={<AdminLoginPage />} />
          <Route exact path='/admin/' element={<AdminHomePage />} />
          <Route exact path='/admin/create_book' element={<CreateBookPage />} />
          <Route exact path='/admin/edit_book' element={<EditBookPage />} />
          <Route exact path='' element={<UserHomePage />} />
        </Routes>
      </Router>
    </editId.Provider>
  );
}

export default App;
