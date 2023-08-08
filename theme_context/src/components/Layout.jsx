import { useTheme } from "./ThemeContext"
import Navbar from "./Navbar";
import styles from "./styles";
import Form from "./Form";
import Buttons from "./Button";
import Footer from "./Footer";
import '../styles/Layout.css'


const Layout = ({children}) =>{

    const {theme} = useTheme();

    return (
        <div style={styles[theme]}>
            <Navbar/>
            <div className="content">
                <Form/>
                <Buttons/>
                {children}
            </div>
            <Footer/>
        </div>
    );

};

export default Layout