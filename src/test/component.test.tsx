import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import WelcomeUser from "../components/WelcomeUser"
import Navbar from "../components/Navbar_new"

describe("WelcomeUser component", () => {
    test("should return the same name with 'Welcome name !'", () => {
        render(<WelcomeUser name="Sir" age={46} />)
        expect(screen.getByText("Welcome Sir !")).toBeDefined()
    })

    test("should return the age in 2 years", () => {
        render(<WelcomeUser name="Sir" age={46} />)
        expect(screen.getByText(`Apparemment vous aurez ${46 + 2} ans dans 2 ans`)).toBeDefined()
    })
})

describe("Navbar component", () => {
    test("should find the correct pages", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        expect(screen.getByText("Home")).toBeDefined()
        expect(screen.getByText("Todo")).toBeDefined()
        expect(screen.getByText("Freelance")).toBeDefined()
        expect(screen.getByText("Mon profil")).toBeDefined()
    })

    test("should find the url of 'Mon profile'", () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)

        const profileLink = screen.getByText("Mon profil")
        expect(profileLink).toBeDefined()

        const linkHref = profileLink.getAttribute("href")
        expect(linkHref).toEqual("/profil/@Emmanuel")
    })
})