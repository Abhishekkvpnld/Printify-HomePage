import Bottom from "../../components/bottom/bottom";
import Create from "../../components/create/Create";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import "./home.css";



const Home = () => {
    return (
        <div className="home_div">
            <Navbar />
            <Create/>
            <Bottom />
            <Footer />

        </div>
    )
}

export default Home;