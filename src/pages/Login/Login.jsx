import img from "../../assets/images/login/login.svg";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useContext} from 'react';
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Home/Home/Shared/SocialLogin";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        // const name = from.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user.email);
            navigate(from, { replace: true })
        })
        .catch(error => console.log(error))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="login"
                  className="btn bg-[#FF3811]"
                />
              </div>
            </form>
            <p className="text-center my-4">New to Car Doctors? <Link className="text-orange-600" to='/signup'>Sign Up</Link></p>
            <SocialLogin>q</SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
