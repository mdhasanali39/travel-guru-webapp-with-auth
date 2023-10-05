import { Link } from "react-router-dom";
import facebookbIcon from "../../assets/icons/fb.png";
import GoogleIcon from "../../assets/icons/google.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[65vh]">
      <div className="border rounded-md w-1/3 p-5">
        <h2 className="text-2xl font-semibold text-center mt-0 mb-5">Please Login</h2>
        <form className="flex gap-6 flex-col">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border-b border-b-[#C5C5C5] outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border-b border-b-[#C5C5C5] outline-none"
          />
          <div className="flex justify-between">
            <label htmlFor="checkbox">
              <input className="mr-2" type="checkbox" id="checkbox" />
              Remember me
            </label>
            {/* forget password  */}
            <p 
            className="text-[#F9A51A] underline cursor-pointer"
            >Forgot Password</p>
          </div>
          <label
            className="font-medium py-3 bg-[#F9A51A] rounded-md text-center text-white"
            htmlFor="login"
          >
            Login
            <button type="Submit" id="login"></button>
          </label>
        </form>
        {/* Don’t have an account  */}
        <p className="text-center my-4">
          Don’t have an account?
          <Link className="text-blue-500 font-semibold ml-2" to={"/register"}>
            Register
          </Link>
        </p>
        {/* horizontal with or  */}
        <div className="flex gap-2 items-center mb-4">
          <span className="border w-1/2 h-[1px]"></span>
          <span className="font-semibold">Or</span>
          <span className="border w-1/2 h-[1px]"></span>
        </div>
        {/* social login  */}
        <div className="space-y-3">
          {/* facebook */}
          <div className="flex items-center w-full cursor-pointer text-center border pl-2 py-2 rounded-[55px]">
            <img className="w-9 h-9 " src={facebookbIcon} alt="facebook icon" />
            <p className="font-medium flex-1">Continue with Facebook</p>
          </div>
          {/* Google */}
          <div className="flex items-center w-full cursor-pointer text-center border pl-2 py-2 rounded-[55px]">
            <img className="w-9 h-9 " src={GoogleIcon} alt="facebook icon" />
            <p className="font-medium flex-1">Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
