import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../config"

function Signup() {

    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmpass] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                navigate("/home")
            }
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (pass !== confirmPass) {
            setError("Password do not match")
            return
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then((res) => console.log(res))
            .catch(() => console.log("Failed to add user"))

        console.log("User registered : ", { email, pass })
        navigate("/login")
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="p-10 bg-white rounded-lg shadow-lg" style={{ width: "70%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Sign In</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
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
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPass}
                        onChange={(e) => setConfirmpass(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <p className='text-blue-600 cursor-pointer my-2' onClick={() => navigate("/login")}> Already have an account? Login here</p>
                <button type="submit" className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200 ease-in-out">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Signup;
