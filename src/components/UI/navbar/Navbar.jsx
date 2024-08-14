import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  // const changeAuth = () => {
  //   setIsAuth(false)
  // }
  return (
    <div className="navbar">
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
        <div className="navbar__links">
          <Link to="/about"> 0 сайт </Link>
          <Link to="/posts"> Посты </Link>
        </div>
    </div>
  );
};

export default Navbar;
