import React from "react";
import VideoCard from "../../../components/VideoCard/videoCard";
import "./MyWorks.scss";
const MyWorks = () => {
  return (
    <div className="myWorks">
      <div className="myWorks-title">
        <h1>
          My <span>Works</span>
        </h1>
      </div>
      <div className="myWorks-mograph card">
        <VideoCard cardTitle="Motion Graphics"/>
      </div>
      <div className="myWorks-ux card">
        <h3>UI/UX</h3>
      </div>
      <div className="myWorks-website card">
        <h3>Website</h3>
      </div>
      <div className="myWorks-prodshow card">
        <h3>Products Showcase</h3>
      </div>
      <div className="myWorks-illustration card">
        <h3>Illustrations</h3>
      </div>
      <div className="myWorks-videos card">
      <VideoCard cardTitle="Videos"/>
      </div>
      <div className="myWorks-3d card">
        <h3>3D</h3>
      </div>
    </div>
  );
};

export default MyWorks;
