import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.defaults.withCredentials = true;

    try {
      const endpoint = state === "Sign Up" ? "register" : "login";
      const payload = state === "Sign Up" ? { name, email, password } : { email, password };

      const { data } = await axios.post(`${backendUrl}/api/auth/${endpoint}`, payload);

      if (data?.success) {
        toast.success(state === "Sign Up" ? "Account Created Successfully!" : "Login Successful!");
        setIsLoggedin(true);
        await getUserData(); // Make sure to await if it's async
        navigate("/");
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Add input validation
  const isFormValid = () => {
    if (state === "Sign Up" && !name.trim()) return false;
    if (!email.trim() || !password) return false;
    return true;
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-violet-950 bg-gradient-to-r from-purple-900 via-black to-blue-950 px-6 py-12 lg:px-8">
   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="user_logo.png"
          className="mx-auto h-11 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-200">
          {state === "Sign Up" ? "Create Account" : "Login your account"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmitHandler} className="space-y-6">
          {state === "Sign Up" && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
      
      <div>
        <button
          type="submit"
          disabled={!isFormValid() || isLoading}
          className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline-indigo-600 ${
            (!isFormValid() || isLoading) 
              ? "bg-indigo-400 cursor-not-allowed" 
              : "bg-indigo-600 hover:bg-indigo-500"
          }`}
        >
          {isLoading ? "Processing..." : state === "Sign Up" ? "Sign Up" : "Login"}
        </button>
      </div>

        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}









