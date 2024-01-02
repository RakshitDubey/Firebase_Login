import React, { useEffect, useState } from 'react'
import { auth } from './firebase-config'
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function Login() {
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    const[user,setuser]=useState('')
    const loginaccount=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,pass)
        .then((userCredentials)=>{
            const logguser=userCredentials.user
            setuser(logguser)
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    const logout=()=>{
        signOut(auth)
        .then(()=>{
            setuser(null)
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((user)=>{
            if(user){
                setuser(user)
            }else{
                setuser(null)
            }
        })
        return ()=>unsubscribe()
    },[])
  return (
    <div>
        <form action="" onSubmit={loginaccount}>
            <h1>Signin With Email and password</h1>
            <input type="email" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} value={email}/>
            <input type="password" placeholder='Enter Your Password' onChange={(e)=>setpass(e.target.value)} value={pass} />
            <button type='submit'>Create</button>
        </form>
{
    user?
    <div>
    <p>Welcom,{user.email}</p>
    <button onClick={logout}>Logout</button>
    </div>
    :(
        <p>You are not logged in</p>
    )
}
    </div>
  )
}

export default Login