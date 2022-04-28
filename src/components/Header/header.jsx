import "./Header.css";

const Header = () =>{

    return(
        <span className="header">
            <button>Gmail</button>
            <button>Images</button>
            <img className="image" src="/dott.png" alt="" />
        </span>

    )
}
export default Header;