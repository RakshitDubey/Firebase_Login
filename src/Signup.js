import React, { useState } from 'react'
import { auth } from './firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    const createaccount=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,pass)
        .then((userCredentials)=>{
            console.log(userCredentials);
        })

    }
  return (
    <div>
        <form action="" onSubmit={createaccount}>
            <h1>Create a new Account</h1>
            <input type="email" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} value={email}/>
            <input type="password" placeholder='Enter Your Password' onChange={(e)=>setpass(e.target.value)} value={pass} />
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default Signup