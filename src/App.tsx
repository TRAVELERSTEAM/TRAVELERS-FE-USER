import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Main from '~/pages/MainPage';
import Footer from '~/components/common/Footer';
import MyPage from '~/pages/MyPage';
import NotfoundPage from '~/pages/NotfoundPage';
import ProductDetailPage from '~/pages/ProductDetailPage';
import DeleteAccount from './pages/DeleteAccount';
import WishList from './components/MyPage/WishList';
import Reservation from './components/MyPage/Reservation';
import Destination from './pages/Destination';
import Groups from './pages/Groups';
import Themes from './pages/Themes';
import Login from './pages/LoginPage';
import Find from './pages/Find';
import MyInfo from './pages/MyInfo';
import EditInfo from './pages/EditInfo';
import SignUp from './pages/SignUpPage';
import SignUpSuccess from './pages/SignUpSuccess';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import Inquiry from './pages/Inquiry.jsx';
import Reference from './pages/Reference';
import FindEmailSuccess from './pages/FindEmailSuccess';

// 후기 임시보기
import Review from './components/Review.jsx';
import ProductsByFilter from './components/ProductsByFilter';
import { atom, useRecoilState } from 'recoil';

export const isLoginState = atom({
  key: 'isLogin',
  default: false,
});

function App() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const accessToken = localStorage.getItem('accessToken');
  const loginState = () => {
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    loginState();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header isLogin={isLogin} />
        <Routes>
          {/* 메인 */}
          <Route index element={<Main />} />
          {/* 그룹별여행 */}
          <Route path="groups" element={<Groups />}>
            <Route path="/groups/:id" element={<ProductsByFilter />} />
          </Route>
          {/* 지역별여행 */}
          <Route path="destination" element={<Destination />}>
            <Route path="/destination/:id" element={<ProductsByFilter />} />
          </Route>
          {/* 테마별여행  */}
          <Route path="themes" element={<Themes />}>
            <Route path="/themes/:id" element={<ProductsByFilter />} />
          </Route>
          {/* 상품상세페이지 */}
          <Route path="product_detail/:id" element={<ProductDetailPage />} />
          {/* 아이디/비밀번호 찾기 페이지 */}
          <Route path="find" element={<Find />} />
          <Route path="findemail-success" element={<FindEmailSuccess />} />
          {/* 마이페이지 */}
          <Route path="mypage" element={<MyPage />}>
            {/* -내정보 - 정보수정 - 회원탈퇴 - 찜목록 - 예약 및 취소 조회 - 1:1문의 */}
            <Route index element={<MyInfo />} />
            <Route path="editinfo" element={<EditInfo />} />
            <Route path="delete-account" element={<DeleteAccount />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="inquiry" element={<Inquiry />} />
          </Route>
          {/* 로그인 */}
          <Route path="login" element={<Login />} />
          {/* 공지사항 */}
          <Route path="notice" element={<Notice />} />
          <Route path="notice/:detailId" element={<NoticeDetail />} />
          {/* 회원가입 */}
          <Route path="signup" element={<SignUp />} />
          {/* 회원가입 완료 페이지 */}
          <Route path="signup-success" element={<SignUpSuccess />} />
          {/* 후기(임시보기) */}
          <Route path="review" element={<Review />} />
          {/* 자료실 */}
          <Route path="reference" element={<Reference />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
