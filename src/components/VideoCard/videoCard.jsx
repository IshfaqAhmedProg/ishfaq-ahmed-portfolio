import '../VideoCard/videoCard.scss'
import VideoCardListElement from './videoCardListElement';
import BGImages from '../Images';
import CustomVideoPlayer from '../CustomVideoPlayer/customVideoPlayer';
function VideoCard() {
    return (
        <div className="videocard-container">
            <div className='videocard-container-title'>
                <h2>Video Title</h2>
            </div>
            <div className="videocard-container-preview">
                <CustomVideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
            </div>
            <div className="videocard-container-list">
                <VideoCardListElement name='nigga' time='16:00' source={BGImages.bg1} date='5/6/2020'/>
                <VideoCardListElement name='nigga' time='16:00' source={BGImages.bg2} date='5/6/2020'/>
                <VideoCardListElement name='nigga' time='16:00' source={BGImages.bg3} date='5/6/2020'/>
                <VideoCardListElement name='nigga' time='16:00' source={BGImages.bg4} date='5/6/2020'/>
            </div>
        </div>
    );
}

export default VideoCard;
