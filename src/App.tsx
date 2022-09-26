import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Main from '~/components/common/Main';
import Footer from '~/components/common/Footer';
import MyPage from '~/pages/MyPage';
import NotfoundPage from '~/pages/NotfoundPage';
import ProductDetailPage from '~/pages/ProductDetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Main />} />
          {/* <ProductDetailPage /> */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
