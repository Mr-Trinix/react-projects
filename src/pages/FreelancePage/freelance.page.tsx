import { Helmet } from "react-helmet"
import FreelanceBox from "../../components/FreelanceBox";
import { useEffect, useState } from "react";
import UserInterface from "../../interfaces/user.interface";
import axios from "axios";

function FreelancePage() {
    const [users, setUsers] = useState<UserInterface[]>([])
    const [loading, setLoading] = useState(true)

    async function loadData() {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
        // Add time for loading
        await setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        loadData()
    }, [])

    if (loading) return <h1>Loading...</h1>
    return (
        <div>
            <Helmet>
                <title>Find the Freelance you need !</title>
            </Helmet>
            <h1>Freelance Page</h1>
            <div>
                {users.map((user, index) => {
                    return <FreelanceBox key={index} user={user} />
                })}
            </div>
        </div>
    )
}

export default FreelancePage