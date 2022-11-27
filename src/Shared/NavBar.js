import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const NavBar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err));
    };

    const menuItems =
        <React.Fragment>
            <li><Link to='/' className='text-white text-lg font-semibold'>Home</Link></li>
            <li><Link to='/blog' className='text-white text-lg font-semibold'>Blog</Link></li>
            {user?.uid ?
                <>
                    <li><Link to='/dash' className='text-white text-lg font-semibold'>Dash</Link></li>
                    <li><button onClick={handleLogOut} className='text-white text-lg font-semibold'>Sign Out</button></li>
                </>
                :
                <li><Link to='/login' className='text-white text-lg font-semibold'>Log in</Link></li>}
        </React.Fragment>
    return (
        <div className="navbar bg-stone-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-500 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className='ml-12 text-white font-bold text-2xl'>Mobile Garage</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default NavBar;