import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../../assets/user.png'
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const {user, logOutUser} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOutUser()
        .then( () => {
            alert("You Logger Out successfully.")
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>
                {user && user.email}
            </div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={userImg} alt="" />
                {user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>Log Out</button> : <Link to={"/auth/login"} className='btn btn-primary px-10'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;