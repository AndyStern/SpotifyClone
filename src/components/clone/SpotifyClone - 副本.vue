<template>
    <div>
      <div class="sidebar">
        <div class="logo">
          <a href="#">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
          </a>
        </div>
  
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="fa fa-home"></span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa fa-search"></span>
                <span>Search</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa fas fa-book"></span>
                <span>Your Library</span>
              </a>
            </li>
          </ul>
        </div>
  
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="fa fas fa-plus-square"></span>
                <span>Create Playlist</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa fas fa-heart"></span>
                <span>Liked Songs</span>
              </a>
            </li>
          </ul>
        </div>
  
        <div class="policies">
          <ul>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="main-container">
        <div class="topbar">
          <div class="prev-next-buttons">
            <button type="button" class="fa fas fa-chevron-left"></button>
            <button type="button" class="fa fas fa-chevron-right"></button>
          </div>
  
          <div class="navbar">
            <ul>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li class="divider">|</li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
            <button type="button">Log In</button>
          </div>
        </div>
  
        <div class="playlist-section">
          <div class="spotify-playlists">
            <h2>Spotify Playlists</h2>
            <div class="list">
              <div v-for="(playlist, index) in playlists" :key="index" class="item">
                <img :src="playlist.image" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>{{ playlist.title }}</h4>
                <p>{{ playlist.description }}</p>
              </div>
            </div>
          </div>
  
          <div class="spotify-playlists">
            <h2>Focus</h2>
            <div class="list">
              <div v-for="(focus, index) in focusPlaylists" :key="index" class="item">
                <img :src="focus.image" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>{{ focus.title }}</h4>
                <p>{{ focus.description }}</p>
              </div>
            </div>
          </div>
  
          <div class="spotify-playlists">
            <h2>Mood</h2>
            <div class="list">
              <div v-for="(mood, index) in moodPlaylists" :key="index" class="item">
                <img :src="mood.image" />
                <div class="play">
                  <span class="fa fa-play"></span>
                </div>
                <h4>{{ mood.title }}</h4>
                <p>{{ mood.description }}</p>
              </div>
            </div>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        playlists: [
          { image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Today\'s Top Hits', description: 'Rema & Selena Gomez are on top of the...' },
          { image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'RapCaviar', description: 'New Music from Lil Baby, Juice WRLD an...' },
          // Add more playlists as needed
        ],
        focusPlaylists: [
          { image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Peaceful Piano', description: 'Relax and indulge with beautiful piano pieces' },
          { image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Deep Focus', description: 'Keep calm and focus with ambient and pos...' },
          // Add more focus playlists as needed
        ],
        moodPlaylists: [
          { image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Mood Booster', description: 'Get happy with today\'s dose of feel-good...' },
          { image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Feelin\' Good', description: 'Feel good with this positively timeless...' },
          // Add more mood playlists as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; /* 确保内边距和边框不会增加元素的宽度 */
}

body, html {
  background-color: #121212;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  height: 100%; /* 确保 body 和 html 占满整个视口 */
}

/* 确保侧边栏背景颜色一致 */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 255px;
  background-color: black;
  padding: 24px;
}

.sidebar .logo img {
  width: 200px;
}

.sidebar .navigation ul {
  list-style: none;
  margin-top: 20px;
}

.sidebar .navigation ul li {
  padding: 10px 0px;
}

.sidebar .navigation ul li a {
  color: #b3b3b3;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
}

.sidebar .navigation ul li a:hover,
.sidebar .navigation ul li a:active,
.sidebar .navigation ul li a:focus {
  color: #ffffff;
}

.sidebar .navigation ul li a:hover .fa,
.sidebar .navigation ul li a:active .fa,
.sidebar .navigation ul li a:focus .fa {
  color: #b3b3b3;
}

.sidebar .navigation ul li .fa {
  font-size: 20px;
  margin-right: 10px;
}

.sidebar .navigation ul li a:hover .fa:hover,
.sidebar .navigation ul li a:hover .fa:active,
.sidebar .navigation ul li a:hover .fa:focus {
  color: #ffffff;
}

.sidebar .policies {
  position: absolute;
  bottom: 100px;
}

.sidebar .policies ul {
  list-style: none;
}

.sidebar .policies ul li {
  padding-bottom: 5px;
}

.sidebar .policies ul li a {
  color: #b3b3b3;
  font-weight: 500;
  text-decoration: none;
  font-size: 10px;
}

.sidebar .policies ul li a:hover,
.sidebar .policies ul li a:active,
.sidebar .policies ul li a:focus {
  text-decoration: underline;
}

/* 确保主容器背景颜色一致 */
/*.main-container {
  margin-left: 245px;
  background-color: #121212;
  padding-top: 60px; /* 确保内容不会被固定在顶部的 topbar 遮挡 
}*/
.main-container {
  margin-left: 245px; /* 保持与 sidebar 的间距 */
  background-color: #121212;
  padding-top: 60px; /* 确保内容不会被固定在顶部的 topbar 遮挡 */
  min-height: 100vh; /* 确保至少填满整个视口高度 */
  box-sizing: border-box; /* 确保内边距和边框不会增加元素的宽度 */
}

.topbar {
  position: fixed;
  top: 0;
  left: 254.5px;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: #101010;
  padding: 14px 30px;
  z-index: 1000; /* 确保导航栏在其他内容之上 */
}

.topbar .prev-next-buttons button {
  color: #7a7a7a;
  cursor: not-allowed;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  font-size: 18px;
  border: 0px;
  background-color: #090909;
  margin-right: 10px;
}

.topbar .navbar {
  display: flex;
  align-items: center;
}

.topbar .navbar ul {
  list-style: none;
}

.topbar .navbar ul li {
  display: inline-block;
  margin: 0px 8px;
  width: 70px;
}

.topbar .navbar ul li a {
  color: #b3b3b3;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
}

.topbar .navbar ul li a:hover,
.topbar .navbar ul li a:active,
.topbar .navbar ul li a:focus {
  color: #ffffff;
  font-size: 15px;
}

.topbar .navbar ul li.divider {
  color: #ffffff;
  font-size: 26px;
  margin: 0px 20px;
  width: auto;
}

.topbar .navbar button {
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 30px;
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
  margin-left: 20px;
}

.topbar .navbar button:hover,
.topbar .navbar button:active,
.topbar .navbar button:focus {
  background-color: #f2f2f2;
}

/* 新增的 playlist-section 样式 */
.playlist-section {
  padding: 20px;
  background-color: #121212; /* 确保背景颜色一致 */
  width: 100%; /* 确保宽度自适应 */
  box-sizing: border-box; /* 确保内边距和边框不会增加元素的宽度 */
}

.spotify-playlists {
  padding: 20px 40px;
  background-color: #121212;
  margin-bottom: 40px; /* 添加底部外边距 */
  width: 100%; /* 确保宽度自适应 */
  box-sizing: border-box; /* 确保内边距和边框不会增加元素的宽度 */
}

.spotify-playlists h2 {
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 20px;
}

.spotify-playlists .list {
  display: flex;
  gap: 20px;
  overflow-x: auto; /* 允许水平滚动 */
  width: 100%; /* 确保宽度自适应 */
  box-sizing: border-box; /* 确保内边距和边框不会增加元素的宽度 */
}

.spotify-playlists .list .item {
  min-width: 140px;
  width: 160px;
  padding: 15px;
  background-color: #181818;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover {
  background-color: #252525;
}

.spotify-playlists .list .item img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
}

.spotify-playlists .list .item .play {
  position: relative;
}

.spotify-playlists .list .item .play .fa {
  position: absolute;
  right: 10px;
  top: -60px;
  padding: 18px;
  background-color: #1db954;
  border-radius: 100%;
  opacity: 0;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover .play .fa {
  opacity: 1;
  transform: translateY(-20px);
}

.spotify-playlists .list .item h4 {
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-playlists .list .item p {
  color: #989898;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
}

.spotify-playlists hr {
  margin: 70px 0px 0px;
  border-color: #636363;
}

.preview {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to right, #ae2896, #509bf5);
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
}

.preview h6 {
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 10px;
}

.preview p {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

.preview button {
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 30px;
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
}
</style>