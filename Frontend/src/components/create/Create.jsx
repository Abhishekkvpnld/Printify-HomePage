import "./create.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlinePlayCircle } from "react-icons/md";


const Create = () => {
    return (
        <div className="create_page">
            <div className="create_title_div">
                <div className="create_title">
                    <h1>Create and sell custom products</h1>
                    <ul>
                        <li> <IoMdCheckmark style={{ fontSize: "25px" }} color="#39b75d" /> 100% Free to use</li>
                        <li> <IoMdCheckmark style={{ fontSize: "25px" }} color="#39b75d" /> 900+ High-Quality Products</li>
                        <li><IoMdCheckmark style={{ fontSize: "25px" }} color="#39b75d" /> Largest global print network</li>
                    </ul>
                </div>

                <div className="create_btn">
                    <button>Start for free</button>
                    <button><MdOutlinePlayCircle /> How it works?</button>
                </div>
                <h4>Trusted by over 8M sellers around the world</h4>
            </div>

            <div className="create_img">

            </div>
        </div>
    )
}

export default Create;