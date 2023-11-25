import React, { useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import GoogleButton from "react-google-button";
import { auth } from '../configs/firebase';

const SignInWithGoogle = ({ setLoading,
    loading, }) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Handle successful authentication
                const user = result.user;
                console.log('User signed in:', user);
                localStorage.setItem("login", JSON.stringify(user));
                setLoading(!loading);

            })
            .catch((error) => {
                // Handle authentication error
                console.error('Error signing in with Google:', error);
            })
            .finally(() => {
                setLoading(!loading);
            });
        setLoading(!loading);

    };
    useEffect(() => {
        setLoading(!loading);

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          localStorage.setItem("login", JSON.stringify(currentUser));
        });
        return () => {
          unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
