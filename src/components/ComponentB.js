import { useContext } from "react"
import { AppContext } from "../pages/Home"

export default function ComponentB () {
    const {name} = useContext(AppContext)
    return (
        <h1>Hello, {name}</h1>
    )
}