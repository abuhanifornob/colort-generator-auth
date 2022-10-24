import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../configs/firebase.config';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const AuthContext=createContext();

const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const user={displayName:"Abu hanif"};

    const googleWithSinIn=(provider)=>{
        return signInWithPopup(auth,provider);
    }

    const authInfo={user,googleWithSinIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;