<!-- src/components/PlaylistSection.vue -->
<template>
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
</template>

<script>
export default {
  name: 'PlaylistSection',
  props: {
    playlists: {
      type: Array,
      required: true,
       image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Today\'s Top Hits', description: 'Rema & Selena Gomez are on top of the...' ,
       image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'RapCaviar', description: 'New Music from Lil Baby, Juice WRLD an...',
        
    },
    focusPlaylists: {
      type: Array,
      required: true,
      image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Peaceful Piano', description: 'Relax and indulge with beautiful piano pieces' ,
      image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Deep Focus', description: 'Keep calm and focus with ambient and pos...' ,
        
    },
    moodPlaylists: {
      type: Array,
      required: true,
      image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Mood Booster', description: 'Get happy with today\'s dose of feel-good...' ,
      image: 'https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db', title: 'Feelin\' Good', description: 'Feel good with this positively timeless...' ,
        

    }
  },
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>

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
</style>