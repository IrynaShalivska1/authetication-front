import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import logo from '../../assets/images/logo.png';

export default function Apply () {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('carfinx');
    if (token) navigate("/dashboard");
    else navigate('/apply/app-type');
  }, []);

  return (
    <div className="apply">
      <header className="App-header p-3">
        <button className='logo-button h-16' onClick={()=> navigate("/")}>
          <img src={logo} alt="Logo" className="h-full" />
        </button>
        <div className='progress'>
          <div className='progress-bar'>
            <span className='progress-value'></span>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}