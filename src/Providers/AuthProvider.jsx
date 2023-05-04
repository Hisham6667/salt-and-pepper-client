import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('on auth state change =>', 'email:', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }

    }, [])

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const exitUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        user, loading, createUser, loginUser, googleLogin, exitUser, githubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;