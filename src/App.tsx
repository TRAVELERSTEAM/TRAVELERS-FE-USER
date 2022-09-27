import { Routes, Route, useNavigate } from 'react-router-dom';
import Notice from './pages/notice';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate('/notice');
        }}
      >
        공지사항
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        메인
      </button>

      <Routes>
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </>
  );
}

export default App;
