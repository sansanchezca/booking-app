import './Login.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


const Login = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text'
                placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password'
                placeholder='Password' required />
                <RiLockPasswordFill className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember this device</label>
              <a href='#'> Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>New user? <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login