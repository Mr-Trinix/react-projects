import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

function ProfilePage() {
    const { userTag } = useParams()
    return (
        <div>
            <Helmet>
                <title>{userTag} Page</title>
            </Helmet>
            <h1>{userTag} Page !</h1>
        </div>
    )
}

export default ProfilePage
