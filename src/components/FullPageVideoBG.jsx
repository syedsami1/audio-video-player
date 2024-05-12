import ReactPlayer from 'react-player';
import Video from '../assets/vid.mp4';

function FullPageVideoBG() {
	return (
		<div className='video-background'>
			<ReactPlayer url={Video} playing loop className='react-player' />
		</div>
	);
}

export default FullPageVideoBG;
