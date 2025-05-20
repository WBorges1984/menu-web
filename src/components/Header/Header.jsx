import { FaShareAltSquare } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./header.style.css";

export const Header = () => {
  return (
    <div className="containerHeader">
      <div className="bannerTop">
        {/* <img
          className="banner"
          src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/stores/background/1729033197670ef3ed3ae20.png"
          alt="Banner"
        /> */}
        <img
          className="avatar"
          src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/stores/logo/170593820365ae8d1bd11dc_medium.png"
          alt="Banner"
        />
        <FaShareAltSquare size={50} color="green" />
      </div>
      <div className="hora">
        <div className="btnAberto">
          <button className="btn btn-primary" disabled type="button">
            Aberto
          </button>
          <h3>09:00 - 23-00</h3>
          <FaInfoCircle color="green" />
        </div>
        <div className="btnLogin">
          <button className="btn btn-dark" type="button">
            Login
          </button>
        </div>
      </div>
      <div className="btnWhatsApp">
        <button type="button">
          <FaWhatsapp size={30} color="green" /> <h4>WhatsApp</h4>
        </button>
      </div>
    </div>
  );
};
