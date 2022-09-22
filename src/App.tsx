import Header from './components/common/Header';
// import Main from './components/common/Main';
import Footer from './components/common/Footer';
import MyPage from './pages/MyPage';

function App() {
  return (
    <>
      <Header />
      {/* 마이페이지 작업으로 메인 임시 주석 */}
      {/* <Main /> */}
      <MyPage></MyPage>
      <Footer />
    </>
  );
}

export default App;
