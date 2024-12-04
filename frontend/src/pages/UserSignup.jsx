import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    // if (response.status === 201) {
    //   const data = response.data
      setUser(data.user)
    //   localStorage.setItem('token', data.token)
    //   navigate('/home')
    // }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16  mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base "
              type="text"
              required
              placeholder="First name"
              value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base "
              type="text"
              required
              placeholder="Last name"
              value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border  w-full text-lg placeholder:text-base "
            type="email"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border  w-full text-lg placeholder:text-base "
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}

          />
          <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base ">
            Signup
          </button>
        </form>
        <p className="text-center">
          Already have an Account?{" "}
          <Link to={"/login"} className="text-blue-600 ">
            Login here
          </Link>
        </p>
      </div>
      <div>
      <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;