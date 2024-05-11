import { useContext } from "react"
import { CurrentUser } from "./contexts/CurrentUser"

export default function LoggedOutPage(){

    const { setCurrentUser } = useContext(CurrentUser)

    setCurrentUser(null)
    localStorage.removeItem('token')


    return (
        <main>
            <h1>Logged Out Successfully</h1>
            <a href="/">Return to Home</a>
        </main>
    );
}