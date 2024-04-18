import ReactPlayer from 'react-player';
function RegularVideo() {
	return (
		<div className='video-wrapper'>
			<ReactPlayer
				url='https://www.youtube.com/watch?v=8kpDC2I_8n0'
				playing
				loop
				className='react-player-regular'
			/>
		</div>
	);
}

export default RegularVideo;
