import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider   } from "firebase/auth";
initializeAuthentication()
const useFirebase=()=>{
    const auth = getAuth();

    const [user, setUser]= useState({});
    const [error, setError]= useState('');
    const signinWithGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch((err)=>{
            setError(err.message)
        })
    }
    const logout=()=>{
        signOut(auth).then(()=>{
            setUser({})
            console.log("Lognout successfully")
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const signinUsingGithub=()=>{
        const googleProvider = new GithubAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            console.log(result)
            setUser(result.user)
        })

    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                console.log("inside state change", user)
                setUser(user)
            }
        })
    },[])
    return{
        user,
        error,
        signinWithGoogle,
        logout,
        signinUsingGithub,
    }
}
export default useFirebase;