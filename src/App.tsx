import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Main from './components/common/Main';
import Footer from './components/common/Footer';
import MyPage from './pages/MyPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          {/* <ProductDetailPage /> */}
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
