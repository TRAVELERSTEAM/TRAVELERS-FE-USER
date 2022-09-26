import Header from './components/common/Header';
import Main from './components/common/Main';
import Footer from './components/common/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';

function App() {
  return (
    <>
      <Header />
      <Main />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
