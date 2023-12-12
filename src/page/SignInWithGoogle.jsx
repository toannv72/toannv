import React, { useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import GoogleButton from "react-google-button";
import { auth } from '../configs/firebase';
import { TypeAnimation } from 'react-type-animation';

const SignInWithGoogle = ({ setLoading,
    loading, }) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
            .then((result) => {
                // Handle successful authentication
                const user = result.user;
                localStorage.setItem("loginG", JSON.stringify(user));
                setLoading(!loading);

            })
            .catch((error) => {
                // Handle authentication error
                console.error('Error signing in with Google:', error);
            })
            .finally(() => {
                setLoading(!loading);
            });


    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            localStorage.setItem("loginG", JSON.stringify(currentUser));
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
            <TypeAnimation
                className=''
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    `Đăng nhập không mất tài khoản đâu mà lo 😢😢😢....`,
                    1000,

                ]}
                speed={50}
                style={{ fontSize: '3em', whiteSpace: 'pre-line', display: 'block' }}
            // repeat={Infinity}
            />
        </div>

    );
};

export default SignInWithGoogle;
