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
          <div class="profile-container">
            <div v-if="artist" class="profile-card">
              <!-- 返回按钮 -->
              <el-button @click="goBack" type="primary" style="margin-bottom: 20px;">返回</el-button>

              <!-- 歌手信息 -->
              <div class="profile-header">
                <div class="avatar">
                  <img :src="artist.avatar || defaultAvatar" alt="Artist Avatar" />
                </div>
                <div class="user-info">
                  <h2>{{ artist.name }}</h2>
                  <p class="username">{{ artist.genre }}</p>
                </div>
              </div>

              <!-- 歌手的热门歌曲 -->
              <div class="profile-details">
                <h3>热门歌曲</h3>
                <ul>
                  <li v-for="(song, index) in artist.topSongs" :key="index">{{ song }}</li>
                </ul>
              </div>
            </div>

            <!-- 未找到歌手提示 -->
            <div v-else id="artist-prompt">
              <p>没有找到歌手信息。</p>
              <el-button @click="goBack" type="primary">返回</el-button>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import components from './components.js';
import { artists } from '../plugins/artists.js'; // 导入歌手数据

export default {
  name: 'ArtistDetail',
  components: {
    ...components
  },
  data() {
    return {
      artist: null,
      defaultAvatar: 'https://example.com/default-avatar.jpg', // 修改为网址头像链接
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'MyArtists' });
    }
  },
  mounted() {
    // 假设通过路由参数获取歌手ID
    const artistId = this.$route.params.id;
    this.artist = artists.find(artist => artist.id === parseInt(artistId));
  }
};
</script>

<style scoped>
/* 这里是组件的样式 */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0f7fa; /* 浅蓝色背景 */
  padding: 20px;
}

.profile-card {
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-10px); /* 鼠标悬停时卡片浮动效果 */
}

/* 歌手头像和信息 */
.profile-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info h2 {
  font-size: 22px;
  font-weight: bold;
  color: #004d40; /* 深绿色文字 */
  margin-bottom: 5px;
}

.user-info .username {
  font-size: 16px;
  color: #00796b; /* 浅绿色文字 */
}

/* 歌手的热门歌曲 */
.profile-details {
  margin-top: 20px;
  text-align: left;
}

.profile-details h3 {
  font-size: 18px;
  font-weight: bold;
  color: #004d40; /* 深绿色文字 */
  margin-bottom: 10px;
}

.profile-details ul {
  list-style-type: none;
  padding-left: 0;
}

.profile-details li {
  font-size: 16px;
  color: #00796b; /* 浅绿色文字 */
  margin-bottom: 8px;
}

/* 适配小屏幕 */
@media (max-width: 500px) {
  .profile-card {
    padding: 20px;
    width: 90%;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .avatar {
    margin-bottom: 15px;
  }
}
</style>