import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import {Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const UserInfoModal = (props) => {
    const {toggle, setToggle} = props;
    const { user, logout } = useAuth()
    const history = useHistory();



    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
        <div className="absolute flex justify-end items-center mx-auto top-38 right-5 text-black">
            {
                toggle?

                <div className="w-60 p-3 rounded-md bg-white border border-black z-50">
                <div className="text-right">
                    <button className="bg-white w-8 h-8 rounded text-red-700" onClick={() => setToggle(false)}><HighlightOffIcon/></button>
                </div>
                <div className="flex justify-center text-center">
                    <div className="divide-y divide-gray-500 divide-solid w-full">
                        <div className="mb-3">
                        {
                                user.photoURL?
                                (<img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full border-2 border-gray-300" src={user?.photoURL} alt="" />)
                            :
                            (<img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full border-2 border-gray-300" src="https://www.cccd.edu/_assets/images/Departments/NoProfile.png" alt="" />)
                            }
                            <h5 className="font-semibold m-2">{user.displayName}</h5>
                        </div>
                        <div>
                            {/* Navigation */}
                            <div className="">
                                <div className="">
                                    <Link className="no-underline" to='/'><Button><HomeIcon/>Home</Button></Link><br />
                                    <div className=" mt-3">
                                        {/* <Link className="text-black no-underline text-lg font-semibold pl-10 w-full hover:bg-green-500" to="/allServices">All Services</Link><br /> */}
                                    <button onClick={logout} className="mt-2 rounded-lg hover:bg-green-500  transition duration-300 ease-in-out hover:text-white font-semibold border-2 border-green-500 px-3 py-2"><i className="fas fa-sign-out-alt"></i> Log Out</button>
                                    </div>
                                </div>
                            </div>
                            {!user.email && redirectToLogin()}
                        </div>
                    </div>
                </div>
            </div> 
            : 
            
            ''}

        </div>
    );
};

export default UserInfoModal;