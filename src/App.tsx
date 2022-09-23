import Header from './components/common/Header';
// import Main from './components/common/Main';
import Footer from './components/common/Footer';
// import MyPage from './pages/MyPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <>
      <Header />
      {/* 제품상세페이지 작업으로 메인 임시 주석 */}
      {/* <Main /> */}
      <ProductDetailPage></ProductDetailPage>
      <Footer />
    </>
  );
}

export default App;
