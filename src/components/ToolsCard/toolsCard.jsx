import React from "react";
import "../ToolsCard/toolsCard.scss";
import PrimaryButton from "../Buttons/primaryButton";
import Images from "../Images";
import Descriptions from "../Descriptions";

var backgroundimage,title,logo,descp,gotolink = {};
function ToolsCard(props) {
  switch (props.cardID) {
    case "aftereffects":
        title="After Effects";
        logo=Images.aftereffects;
        descp=Descriptions.templateDesc;
        backgroundimage = {
          backgroundImage: "url(" + Images.bg1 + ")",
          backgroundSize: "cover",
        };
      break;
    case "blender":
        title="Blender";
        logo=Images.blender;
        descp=Descriptions.templateDesc;
        backgroundimage = {
          backgroundImage: "url(" + Images.bg2 + ")",
          backgroundSize: "cover",
        };
      break;
    case "photoshop":
        title="Photoshop";
        logo=Images.photoshop;
        descp=Descriptions.templateDesc;
        backgroundimage = {
          backgroundImage: "url(" + Images.bg3 + ")",
          backgroundSize: "cover",
        };
      break;
    case "illustrator":
        title="Illustrator";
        logo=Images.illustrator;
        descp=Descriptions.templateDesc;
        backgroundimage = {
          backgroundImage: "url(" + Images.bg4 + ")",
          backgroundSize: "cover",
        };
      break;
    case "zbrush":
        title="Z Brush";
        logo=Images.zbrush;
        descp=Descriptions.templateDesc;
        backgroundimage = {
          backgroundImage: "url(" + Images.bg5 + ")",
          backgroundSize: "cover",
        };
      break;
    case "adobexd":
        title="Adobe XD";
        logo=Images.illustrator;
        descp=Descriptions.templateDesc;
        backgroundimage = {
          backgroundImage: "url(" + Images.bg6 + ")",
          backgroundSize: "cover",
        };
      break;
    case "figma":
      logo=Images.figma;
        title="Figma";
        descp=Descriptions.templateDesc;
        backgroundimage = {
          backgroundImage: "url(" + Images.bg7 + ")",
          backgroundSize: "cover",
        };
      break;
    case "vscode":
        title="VS Code";
        logo=Images.vs;
        descp=Descriptions.templateDesc;
        backgroundimage = {
          backgroundImage: "url(" + Images.bg4 + ")",
          backgroundSize: "cover",
        };
      break;
    default:
      title="not found";
      logo=Images.notfound;
      descp=Descriptions.templateDesc;
      backgroundimage = {
        backgroundImage: "url(" + Images.bg4 + ")",
        backgroundSize: "cover",
      };
  }

  return (
    <div className={"toolcard-container " + (props.active ? props.active : "")}>
      <div className="toolcard-container-bg" style={backgroundimage}>
        <div className="toolcard-container-bg-overlay"></div>
      </div>
      <div className="toolcard-container-logo">
        <img src={logo} alt="blender logo" />
      </div>
      <div className="toolcard-container-heading">
        <h2>{title}</h2>
      </div>
      <div className="toolcard-container-content">
        <div className="toolcard-container-content-body">
          <p>
            {descp}
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
