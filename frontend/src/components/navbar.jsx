import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import auth from "../config"
import { signOut, onAuthStateChanged } from "firebase/auth"

function Navbar() {

    const [log, setLog] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const loggedout = onAuthStateChanged(auth, function (user) {
            if (user) {
                setLog(true)
                console.log("Logged in")
            }
            else {
                setLog(false)
                console.log("logged out")
            }
        })
        return () => loggedout()
    }, [])

    const handleLogout = async () => {
        try {
            await signOut(auth)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-between p-3 px-5 items-center bg-white fixed top-0 right-0 left-0">
            <h3 className="text-2xl font-bold">DailyVerse</h3>
            <div className="flex gap-5 items-center">
                <Link to="/home">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                {
                    log ? <button onClick={handleLogout} className="py-2 px-4 rounded-md text-white font-bold" style={{ boxShadow: "rgba(199, 199, 199, 0.8) 0px 2px 8px 0px", backgroundColor: "gray" }}>Logout</button>
                        : <button onClick={() => navigate("/login")} className="py-2 px-4 rounded-md text-white font-bold" style={{ boxShadow: "rgba(199, 199, 199, 0.8) 0px 2px 8px 0px", background: "linear-gradient(to right,rgb(292, 112, 11),rgb(275, 109, 67)" }}>Login</button>
                }
            </div>
        </div>
    )
}
export default Navbar