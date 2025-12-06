// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      
      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
          videoId: 'MoIjJXtdYrI', // 최초 재생할 유투브 영상
          playerVars: { //영상 플레이를 제어할 수 있는 베리어블 속성
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'MoIjJXtdYrI' // 반복 재생 하기 위해 loop: 속성을 true 값으로 설정했다면 playlist: 속성 설정을 같이 해줘야 한다. 속성의 내용은 videoId 값을 넣어주면 된다.
          },
          events: {
            onReady: function(event){
              event.target.mute() // 음소거
            }
          }
        });
      }

      // // 4. The API will call this function when the video player is ready.
      // function onPlayerReady(event) {
      //   event.target.playVideo();
      // }

      // // 5. The API calls this function when the player's state changes.
      // //    The function indicates that when playing a video (state=1),
      // //    the player should play for six seconds and then stop.
      // var done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }
      // function stopVideo() {
      //   player.stopVideo();
      // }