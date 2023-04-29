import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOUt =() => {
        setLoading(true);
        return signOut(auth)
    }
    // Observer user auth state 
    useEffect ( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return ()=> {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user , 
        loading,
        createUser,
        logIn,
        logOUt, 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;