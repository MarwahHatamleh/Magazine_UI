import About_clients from "../components/About_clients";
import Landing_intro_about_me from "../components/Landing_intro_about_me";
import Mystory from "../components/Mystory";
import "./style.css";

const intro_about_me = () =>{
return (
    <>
    <Landing_intro_about_me/>
    <Mystory/>
    <About_clients/>
    </>
)
}

export default intro_about_me