import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import app from "../Firebase/firebase.config";




const auth = getAuth(app);


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password, img) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, img);
    }


    const signInUser = (email, password) => { 
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const signWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const signWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log("current user", currentUser);
          setLoading(false);
        });
        return () => {
          return unsubscribe();
        };
      }, []);


    
    


    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signWithGoogle,
        signWithGithub,
        logOut,
    };


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;