import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="flex h-[500px] flex-col items-center justify-center">
      home
      <Link to="/count" className="hover:bg-red-100">
        카운트 라우터로 이동
      </Link>
      <Link to="/test" className="hover:bg-red-100">
        테스트 라우터로 이동
      </Link>
      <Link to="/travel" className="hover:bg-red-100">
        여행 라우터로 이동
      </Link>
      <Link to="/quest1" className="hover:bg-red-100">
        문제 1 라우터로 이동
      </Link>
      <Link to="/quest2" className="hover:bg-red-100">
        문제 2 라우터로 이동
      </Link>
      <Link to="/quest3" className="hover:bg-red-100">
        문제 3 라우터로 이동
      </Link>
      <Link to="/quest4" className="hover:bg-red-100">
        문제 4 라우터로 이동
      </Link>
      <Link to="/quest5" className="hover:bg-red-100">
        문제 5 라우터로 이동
      </Link>
      <Link to="/useMemo" className="hover:bg-red-100">
        useMemo 라우트 이동
      </Link>
      <Link to="customHookWithCount">커스텀 훅을 사용한 카운트 라우트 이동</Link>
      <Link to="fetchApi">api를 불러와서 데이터를 보여주는 라우트로 이동</Link>
    </div>
  );
};

export default Home;
