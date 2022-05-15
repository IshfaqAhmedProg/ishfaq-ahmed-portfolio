import React from "react";

function toggleanim(){
  var t=document.getElementById('darklight');
  t.classList.toggle('toggled');
}
export default function Darktolightanim() {
  return (
    // SVG part goes here
    <svg onClick={toggleanim} id="darklight" viewBox="0 0 38 38" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
    <defs>
        <linearGradient id="untitled-bg-fill" x1="0.853554" y1="0.146446" x2="0.146446" y2="0.853554" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop id="untitled-bg-fill-0" offset="0%" stopColor="#9799ff"/>
            <stop id="untitled-bg-fill-1" offset="100%" stopColor="#8bdef8"/>
        </linearGradient>
        <linearGradient id="untitled-moon-fill" x1="0.5" y1="0" x2="0.5" y2="1" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop id="untitled-moon-fill-0" offset="0%" stopColor="#9799ff"/>
            <stop id="untitled-moon-fill-1" offset="100%" stopColor="#8bdef8"/>
        </linearGradient>
    </defs>
    <ellipse id="untitled-bg" rx="19" ry="19" transform="translate(19 19.002481)" fill="url(#untitled-bg-fill)" strokeWidth="0"/>
    <g id="untitled-white-circle_ts" transform="translate(19.000001,19.002481) scale(0.34,0.34)">
        <ellipse id="untitled-white-circle" rx="19" ry="19" transform="translate(0,0.000001)" fill="#fff" strokeWidth="0"/>
    </g>
    <g id="untitled-moon_tr" transform="translate(19.000001,19.002481) rotate(220)">
        <path id="untitled-moon" d="M253.71917,169.57567c0-5.18306,2.4645-9.79051,6.28558-12.71442-2.06104,2.69344-3.28558,6.06093-3.28558,9.71442c0,8.83656,7.16344,16,16,16c3.65349,0,7.02098-1.22454,9.71442-3.28558-2.92391,3.82108-7.53136,6.28558-12.71442,6.28558-8.83656,0-16-7.16344-16-16Z" transform="translate(-269.719173,-169.575672)" opacity="0" fill="url(#untitled-moon-fill)" strokeWidth="0"/>
    </g>
    <g id="untitled-star-spoke1_ts" transform="translate(19,19.002481) scale(1,1)">
        <polygon id="untitled-star-spoke1" points="-11.153599,-16.343168 -8.153599,-10.343168 -14.153599,-10.343168 -11.153599,-16.343168" transform="translate(11.153599,0.628746)" fill="#fff" strokeWidth="0"/>
    </g>
    <g id="untitled-star-spoke2_ts" transform="translate(19,19.002481) rotate(45) scale(1,1)">
        <polygon id="untitled-star-spoke2" points="-11.153599,-16.343168 -8.153599,-10.343168 -14.153599,-10.343168 -11.153599,-16.343168" transform="translate(11.153599,0.628746)" fill="#fff" strokeWidth="0"/>
    </g>
    <g id="untitled-star-spoke3_ts" transform="translate(19,19.002481) rotate(90) scale(1,1)">
        <polygon id="untitled-star-spoke3" points="-11.153599,-16.343168 -8.153599,-10.343168 -14.153599,-10.343168 -11.153599,-16.343168" transform="translate(11.153599,0.628746)" fill="#fff" strokeWidth="0"/>
    </g>
    <g id="untitled-star-spoke4_ts" transform="translate(19,19.002481) rotate(135) scale(1,1)">
        <polygon id="untitled-star-spoke4" points="-11.153599,-16.343168 -8.153599,-10.343168 -14.153599,-10.343168 -11.153599,-16.343168" transform="translate(11.153599,0.628746)" fill="#fff" strokeWidth="0"/>
    </g>
    <g id="untitled-star-spoke5_ts" transform="translate(19,19.002481) rotate(180) scale(1,1)">
        <polygon id="untitled-star-spoke5" points="-11.153599,-16.343168 -8.153599,-10.343168 -14.153599,-10.343168 -11.153599,-16.343168" transform="translate(11.153599,0.628746)" fill="#fff" strokeWidth="0"/>
    </g>
    <g id="untitled-star-spoke6_ts" transform="translate(19,19.002481) rotate(225) scale(1,1)">
        <polygon id="untitled-star-spoke6" points="-11.153599,-16.343168 -8.153599,-10.343168 -14.153599,-10.343168 -11.153599,-16.343168" transform="translate(11.153599,0.628746)" fill="#fff" strokeWidth="0"/>
    </g>
    <g id="untitled-star-spoke7_ts" transform="translate(19,19.002481) rotate(270) scale(1,1)">
        <polygon id="untitled-star-spoke7" points="-11.153599,-16.343168 -8.153599,-10.343168 -14.153599,-10.343168 -11.153599,-16.343168" transform="translate(11.153599,0.628746)" fill="#fff" strokeWidth="0"/>
    </g>
    <g id="untitled-star-spoke8_ts" transform="translate(19,19.002481) rotate(315) scale(1,1)">
        <polygon id="untitled-star-spoke8" points="-11.153599,-16.343168 -8.153599,-10.343168 -14.153599,-10.343168 -11.153599,-16.343168" transform="translate(11.153599,0.628746)" fill="#fff" strokeWidth="0"/>
    </g>
</svg>
      
  )
}