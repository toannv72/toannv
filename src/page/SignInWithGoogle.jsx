import React, { useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { Button } from "@material-tailwind/react";
import GoogleButton from "react-google-button";
import { auth, storage } from '../configs/firebase';

const SignInWithGoogle = ({ setLoading,
    loading, }) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        setLoading(!loading);

    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
              setLoading(!loading);
            //   setData(currentUser);
            localStorage.setItem("login", JSON.stringify(currentUser));

        });
        return () => {
            unsubscribe();
        };
        // eslint-disable-next-line
    }, []);
    return (
        <div className='flex flex-col justify-center items-center'>
            Vui lòng đăng nhập để tiếp tục
            <GoogleButton onClick={googleSignIn} color="blue">
                Sign In with Google
            </GoogleButton>
        </div>

    );
};

export default SignInWithGoogle;
