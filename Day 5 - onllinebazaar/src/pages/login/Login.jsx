import React, { useState } from 'react'
import { loginApi } from '../../apis/Api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/userSlice'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()

    try {

      loginApi({
        email: email,
        password: password
      }).then((res) => {
        console.log(res.data)

        //dispatch to store
        dispatch(addUser(res.data.user))

        navigate("/")
        toast.success("Login success")

      }).catch((err) => {
        console.log(err)
        toast.error("Login failed")
      })
      
    } catch (error) {
      toast.error("Login failed")
    }

  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   try {

  //     loginApi({
  //       email: email,
  //       password: password
  //     }).then((res) => {
  //       console.log(res.data)

  //       // setting token and user in local storage
  //       localStorage.setItem("token", res.data.token)
  //       localStorage.setItem("user", JSON.stringify(res.data.user))

  //       navigate("/")

  //       toast.success("Login success")

  //     }).catch((err) => {
  //       console.log(err)
  //       toast.error("Login failed")
  //     })
      
  //   } catch (error) {
  //     toast.error("Login failed")
  //   }

  // }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <h1>Login</h1>
            <form action="">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input

                  onChange={(e) => setEmail(e.target.value)}

                  type="email" name="email" id="" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}

                  type="password" name="password" id="" className="form-control" />
              </div>
              <button
                onClick={handleSubmit}
                className="btn btn-primary mt-2 w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login