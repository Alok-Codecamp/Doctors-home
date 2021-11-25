import { useEffect, useState } from "react";
import firebaseInitialized from "../pages/LoginPage/firebase/firebase.init"
import { updateProfile,getAuth,GoogleAuthProvider,signInWithPopup ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,getIdToken  } from "firebase/auth";


firebaseInitialized();
const useFirebase = () => {
  const [user,setUser]=useState({});
  const [isLoading,setIsLoading]=useState(true)
  const [isAdmin,setIsAdmin]=useState(false);
  const [token,setToken]=useState('')
  const auth=getAuth();
  const googleProvider=new GoogleAuthProvider();

  const signInWithGoogle=(history,location)=>{
    setIsLoading(true)
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      setUser(result.user)
      const user=result.user
      saveUser(user.email,user.displayName,'PUT')
      const destination=location.state?.from||'/home'
      history.replace(destination);
      
    })
    .catch(error=>{
      console.log(error.massage)
    })
    .finally(()=>setIsLoading(false))

  }
  const registerUser=(email,password,name,history)=>{
  //  console.log(email,password,name);
  createUserWithEmailAndPassword(auth,email,password)
  .then(result=>{
    const newUser={email,displayName:name};
    setUser(newUser)

    // save data to the database
    saveUser(email, name,'POST')

    // send data to firebase after creation 
    updateProfile(auth.currentUser, {
      displayName:name
    }).then(() => {
      
    }).catch((error) => {
    
    });
    alert('congratulation')
    history.replace('/home');
    // console.log(user)
  })
  .catch(error=>console.log(error.massage))
  .finally(()=>setIsLoading(false))
  }
  const signInUser=(email,password,history,location)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setUser(userCredential.user);
        const destination=location.state?.from||'/home'
        history.replace(destination);
        user&&alert('sign in success')
      // ...
    })
    .finally(()=>setIsLoading(false))
  }

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          setIsLoading(false)
          getIdToken(user)
          .then(idToken=>{
            setToken(idToken)
          })
          // ...
        } else {
          setUser({})
          setIsLoading(false)
        }
      });
      
      return ()=>unsubscribe;
  },[])

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setIsAdmin(data.admin))
    },[user.email])


  const SignOutUser=()=>{
    setIsLoading(true)
    signOut(auth)
    .then(() => {
        setUser({});
        !user?.email&&alert('logout success full');
      })
      .catch((error) => {
        console.log(error.massage)
      })
      .finally(()=>setIsLoading(false))
  }

  const saveUser=(email,displayName,method)=>{
    const user={email,displayName};
    fetch('http://localhost:5000/users',{
      method:method,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
  }
  return{
      user,
      isLoading,
      isAdmin,
      token,
      registerUser,
      signInUser,
      SignOutUser,
      setIsLoading,
      signInWithGoogle
  }

}

export default useFirebase