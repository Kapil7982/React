import { useTheme } from "./ThemeContext";
import '../styles/Layout.css'

const Navbar = () =>{

    const {toggleTheme} = useTheme();

    return (

        <nav>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    );
};

export default Navbar