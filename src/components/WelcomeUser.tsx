interface UserProps {
    name: string,
    age: number
}

function WelcomeUser({ name, age }: UserProps) {
    return (
        <div>
            <h1>Welcome {name} !</h1>
            <p>Apparemment vous aurez {age + 2} ans dans 2 ans</p>
        </div>
    )
}

export default WelcomeUser