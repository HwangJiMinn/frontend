import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="flex h-[100px] items-center justify-center bg-green-100">
      <Link to="/">헤더영역이야</Link>
    </div>
  );
};

export default Header;
