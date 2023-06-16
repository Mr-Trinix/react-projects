import UserInterface from "../interfaces/user.interface"

function FreelanceBox({ user }: { user: UserInterface }) {
    const address = user.address.street + ", " + user.address.city + " " + user.address.zipcode
    return (
        <div className="freelance-box">
            <div className="job-title">
                <h2 className="title no-margin"><span className="clr-black">#{user.id} -</span> {user.company.bs}</h2>
                <h3 className="no-margin flex-between">{user.name} <span className="clr-grey">@{user.username}</span></h3>
            </div>
            <hr />
            <div className="info">
                <div>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>
                <div>Website: {user.website}</div>
                <div>Address: {address}</div>
            </div>
            <hr />
            <div className="company">
                <h4 className="no-margin">{user.company.name}</h4>
                <div>{user.company.catchPhrase}</div>
            </div>
        </div>
    )
}

export default FreelanceBox