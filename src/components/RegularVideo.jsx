import React from 'react';
import ReactPlayer from 'react-player';

function MediaCarousel() {
  const mediaURLs = [
    'https://www.youtube.com/watch?v=8kpDC2I_8n0',
    'https://youtu.be/ZQ3G35sgqso?si=-VyYQlRzpJYDU4Ut',
    'https://youtu.be/DEhUQHXbmI8?si=SNtdT_f4VWj47o0Z',
    'https://youtu.be/xRnVxAZ1F8k?si=xUEBtd497p9eRJHw',
    'https://youtu.be/otlGMjNSJNw?si=oxM6hufvGq4SYJVa'
  ];

  return (
    <div className='media-carousel'>
      {mediaURLs.map((url, index) => (
        <ReactPlayer
          key={index}
          url={url}
          playing
          loop
          className='react-player-carousel'
        />
      ))}
    </div>
  );
}

export default MediaCarousel;
