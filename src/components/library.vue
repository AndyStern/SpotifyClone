<template>
  <div class="Bigmain">
    <el-container>
      <el-aside>
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Topbar />
        </el-header>
        <el-main>
          <el-card class="music-player">
            <h2>
              <img src="https://misc.scdn.co/liked-songs/liked-songs-300.jpg" alt="讚好過的音樂" class="liked-songs-icon">
              賞好過的音樂
            </h2>
            <el-table :data="songs" style="width: 100%" @row-click="handleRowClick">
              <el-table-column label="歌曲名" width="300">
                <template slot-scope="scope">
                  <div class="song-info">
                    <img :src="scope.row.cover" alt="Album Cover" class="album-cover" />
                    <span>{{ scope.row.title }}</span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <div v-if="currentSong">
              <h3>{{ currentSong.title }}</h3>
              <audio controls :src="currentSong.url" ref="audio" @ended="nextSong"></audio>
            </div>
            <el-button @click="prevSong">Previous</el-button>
            <el-button @click="nextSong">Next</el-button>
            <el-button @click="play">Play</el-button>
            <el-button @click="pause">Pause</el-button>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import components from './components.js';
import axios from 'axios';

export default {
  name: 'Library',
  components: {
    ...components
  },
  data() {
    return {
      songs: [],
      currentSongIndex: 0,
      isPlaying: false // 添加播放状态变量
    };
  },
  computed: {
    currentSong() {
      return this.songs[this.currentSongIndex] || null;
    }
  },
  mounted() {
    this.fetchSongs();
    // 恢复保存的播放状态和当前歌曲索引
    if (localStorage.getItem('currentSongIndex')) {
      this.currentSongIndex = parseInt(localStorage.getItem('currentSongIndex'), 10);
    }
    if (localStorage.getItem('isPlaying') === 'true') {
      this.play();
    }
    
  },
  beforeDestroy() {
    // 保存当前的播放状态和当前歌曲索引
    localStorage.setItem('currentSongIndex', this.currentSongIndex);
    localStorage.setItem('isPlaying', this.isPlaying);
  },
  methods: {
    fetchSongs() {
      axios.get('/api/music').then(response => {
        this.songs = response.data.songs;
      }).catch(error => {
        console.error('Error fetching songs:', error);
      });
    },
    nextSong() {
      if (this.songs.length > 0) {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        if (this.isPlaying) {
          this.play();
        }
      }
    },
    prevSong() {
      if (this.songs.length > 0) {
        this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
        if (this.isPlaying) {
          this.play();
        }
      }
    },
    play() {
      if (this.$refs.audio) {
        this.$refs.audio.play().then(() => {
          this.isPlaying = true;
        }).catch(error => {
          console.error('Play error:', error);
        });
      }
    },
    pause() {
      if (this.$refs.audio) {
        this.$refs.audio.pause();
        this.isPlaying = false;
      }
    },
    handleRowClick(row) {
      this.currentSongIndex = this.songs.indexOf(row);
      this.play();
    },
    
  }
};
</script>

<style scoped>
.music-player {
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.music-player h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.music-player h2 img.liked-songs-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}

.music-player h3 {
  margin-bottom: 10px;
}

.music-player audio {
  width: 100%;
  margin-bottom: 20px;
}

.music-player .el-button {
  margin: 0 5px;
}

.music-player .el-table {
  margin-bottom: 20px;
}

.music-player .el-table th {
  background-color: #f0f2f5;
}

.music-player .el-table td {
  cursor: pointer;
}

.music-player .el-table tr:hover {
  background-color: #f0f2f5;
}

.music-player .song-info {
  display: flex;
  align-items: center;
}

.music-player .song-info img.album-cover {
  width: 80px; 
  height: 80px; 
  margin-right: 10px;
  border-radius: 8px; /* 可以适当调整圆角以适应更大的尺寸 */
}
</style>