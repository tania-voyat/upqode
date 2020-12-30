const tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  const player1 = document.querySelector('#player1');
  const player2 = document.querySelector('#player2');
  const player3 = document.querySelector('#player3');

  const yt_player1 = new YT.Player(player1, {
    events: {
      onReady: onPlayerReady,
      onStateChange: yt_player1.pauseVideo(),
    },
  });

  const yt_player2 = new YT.Player(player2, {
    events: {
      onReady: onPlayerReady,
      onStateChange: yt_player2.pauseVideo(),
    },
  });

  const yt_player3 = new YT.Player(player3, {
    events: {
      onReady: onPlayerReady,
      onStateChange: yt_player3.pauseVideo(),
    },
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}

export default onYouTubeIframeAPIReady;
