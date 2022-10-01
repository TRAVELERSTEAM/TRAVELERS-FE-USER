import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Main from '~/pages/MainPage';
import Footer from '~/components/common/Footer';
import MyPage from '~/pages/MyPage';
import NotfoundPage from '~/pages/NotfoundPage';
import ProductDetailPage from '~/pages/ProductDetailPage';
import DeleteAccount from './components/MyPage/DeleteAccount';
import WishList from './components/MyPage/WishList';
import Reservation from './components/MyPage/Reservation';
import Destination from './pages/Destination';
import Groups from './pages/groups/Groups';
import Themes from './pages/Themes';
import Login from './pages/LoginPage';
import Find from './pages/Find';
import MyInfo from './pages/MyInfo';
import EditInfo from './pages/EditInfo';
import SignUp from './pages/SignUpPage';
import SignUpSuccess from './pages/SignUpSuccess';
import Notice from './pages/Notice';
import Inquiry from './pages/Inquiry';
import Reference from './pages/Reference';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* 메인 */}
          <Route index element={<Main />} />
          {/* 그룹별여행 */}
          <Route path="groups" element={<Groups />} />
          {/* 지역별여행 */}
          <Route path="destination" element={<Destination />} />
          {/* 테마별여행  */}
          <Route path="themes" element={<Themes />} />
          {/* 상품상세페이지 */}
          <Route path="product_detail/:id" element={<ProductDetailPage />} />
          {/* 아이디/비밀번호 찾기 페이지 */}
          <Route path="find" element={<Find />} />
          {/* 마이페이지 */}
          <Route path="mypage" element={<MyPage />}>
            {/* -내정보 - 정보수정 - 회원탈퇴 - 찜목록 - 예약 및 취소 조회 - 1:1문의 */}
            <Route path="myinfo" element={<MyInfo />} />
            <Route path="editinfo" element={<EditInfo />} />
            <Route path="delete_account" element={<DeleteAccount />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="inquiry" element={<Inquiry />} />
          </Route>
          {/* 로그인 */}
          <Route path="login" element={<Login />} />
          {/* 공지사항 */}
          <Route path="notice" element={<Notice />} />
          {/* 회원가입 */}
          <Route path="signup" element={<SignUp />} />
          {/* 회원가입 완료 페이지 */}
          <Route path="signupsuccess" element={<SignUpSuccess />} />
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
