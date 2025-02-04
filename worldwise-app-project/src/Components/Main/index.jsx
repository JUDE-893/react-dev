import {NavLink,Outlet} from 'react-router-dom';
import MAP from './Map';

export default function(props) {

  return (
    <div className="Main-App">

      <div className="aside-section">
        <NavLink to="/">
          <img className="app-logo" src="/imgs/logo.png" alt="Logo"/>
        </NavLink>

        <div className="cities-countries">
          <NavLink to='/app/cities' activeClassName='active'>CITIES</NavLink>
          <NavLink to='/app/countries' activeClassName='active'>COUNTRIES</NavLink>
        </div>

        <Outlet/>
        <p className="copyright">&copy; Copyright 2024 by <a href="https://github.com/JUDE-893" target='_blanc'>@JUDE-893</a> Inc.</p>
      </div>
      <MAP />
    </div>
  );
}
