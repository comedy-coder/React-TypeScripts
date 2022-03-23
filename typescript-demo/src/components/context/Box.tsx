import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"
const Box = () => {
    const theme = useContext(ThemeContext)
    console.log(theme)
  return (
    <div style={{ backgroundColor : theme.primary.main , color: theme.secondary.color }}>Box</div>
  )
}

export default Box