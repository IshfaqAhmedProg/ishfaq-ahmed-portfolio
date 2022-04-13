import React from "react";
import PrimaryButton from "../Buttons/primaryButton";
import '../ToolsCard/toolsCard.scss'
import Images from "../Images";


function ToolsCard(props) {
  const backgroundimage = {
      backgroundImage: 'url('+Images.bg7+')',
      backgroundSize:'cover'
  };
  return (
    <div className="toolcard-container">
      <div className="toolcard-container-bg" style={backgroundimage}>
        <div className="toolcard-container-bg-overlay"></div>
      </div>
        <div className="toolcard-container-logo">
          <img src={Images.blender} alt="blender logo" />
        </div>
        <div className="toolcard-container-heading">
          <h2>After Effects</h2>
        </div>
      <div className="toolcard-container-content">
        <div className="toolcard-container-content-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu tortor, venenatis non massa vel, faucibus porta erat. Mauris auctor et urna id finibus. Mauris et hendrerit tortor, sit amet tincidunt justo. 
          </p>
        </div>
          <div className="toolcard-container-content-button">
            <PrimaryButton type="default" text="Know More" />
          </div>
      </div>
    </div>
  );
}

export default ToolsCard;
