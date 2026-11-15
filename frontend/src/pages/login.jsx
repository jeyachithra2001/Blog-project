import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import auth from "../config"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

function Login() {

    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0)
        auth.onAuthStateChanged(function(user){
            if(user){
                navigate("/home")
            }
        })
    },[])

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,pass)
        .then(()=> navigate("/home"))
        .catch((err)=> setError(err))
    }

   return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-10 bg-white rounded-lg shadow-md" style={{ width: "75%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                {
                    error &&  <p className='text-red-600 text-sm my-2' onClick={() => navigate("/signup")}>{error.message}</p>  
                }
                <p className='text-blue-600 cursor-pointer my-2' onClick={() => navigate("/signup")}>New user? Register here</p>
                <button type="submit" className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200 ease-in-out">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
