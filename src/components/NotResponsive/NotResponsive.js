import SorryEmoji from "../../assets/sorry-emoji.png";
import "./NotResponsive.css";

const NotResponsive = () => {
  return (
    <div className="not-responsive">
      <div className="nr-content">
        <img src={SorryEmoji} alt="sorry emoji" />
        <p>
          sorry. the website is not yet responsive on mobile. kindly view on
          desktop
        </p>
      </div>
    </div>
  );
};

export default NotResponsive;
