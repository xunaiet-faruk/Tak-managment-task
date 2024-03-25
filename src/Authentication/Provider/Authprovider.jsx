import { useEffect, useState } from "react";
import { createContext } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";

export const Authcontext = createContext(null);

const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logout = () =>{
    setLoading(true)
    return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("current user here", currentUser);
        });

        return () => {
            unSubscribe(); 
        };
    }, []);

    const Authinfo = {
        loading,
        user,
        createUser,
        logout
    };

    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
