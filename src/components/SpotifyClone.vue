<template>
  <div class="Bigmain">
    <!-- 这里是组件的模板部分 -->
    <el-container>
      <el-aside>
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Topbar />
        </el-header>
        <el-main>
          <div class="main-container">
            <PlaylistSection :playlists="playlists" :focusPlaylists="focusPlaylists" :moodPlaylists="moodPlaylists" />
          </div>
        </el-main>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import components from './components.js';

export default {
  components: {
    ...components
  },
  data() {
    return {
      playlists: [
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000021e7418d0160d4fcc68ed961e', title: 'Today\'s Top Hits', description: 'Rema & Selena Gomez are on top of the...' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000020e169268a673a4c9e6148d55', title: 'RapCaviar', description: 'New Music from Lil Baby, Juice WRLD an...' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000021e7418d0160d4fcc68ed961e', title: 'Today\'s Top Hits', description: 'Rema & Selena Gomez are on top of the...' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000020e169268a673a4c9e6148d55', title: 'RapCaviar', description: 'New Music from Lil Baby, Juice WRLD an...' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000021e7418d0160d4fcc68ed961e', title: 'Today\'s Top Hits', description: 'Rema & Selena Gomez are on top of the...' },
       
        // Add more playlists as needed
      ],
      focusPlaylists: [
        { image: 'https://image-cdn-fa.spotifycdn.com/image/ab67706f0000000283da657fca565320e9311863', title: 'Peaceful Piano', description: 'Relax and indulge with beautiful piano pieces' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000023c7d405bc186c136f0d69832', title: 'Deep Focus', description: 'Keep calm and focus with ambient and pos...' },
        { image: 'https://image-cdn-fa.spotifycdn.com/image/ab67706f0000000283da657fca565320e9311863', title: 'Peaceful Piano', description: 'Relax and indulge with beautiful piano pieces' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000023c7d405bc186c136f0d69832', title: 'Deep Focus', description: 'Keep calm and focus with ambient and pos...' },
        { image: 'https://image-cdn-fa.spotifycdn.com/image/ab67706f0000000283da657fca565320e9311863', title: 'Peaceful Piano', description: 'Relax and indulge with beautiful piano pieces' },
        
        // Add more focus playlists as needed
      ],
      moodPlaylists: [
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000028191cc41d8585df6170b3e5e', title: 'Mood Booster', description: 'Get happy with today\'s dose of feel-good...' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f00000002ab781467051aeba33fca1d20', title: 'Feelin\' Good', description: 'Feel good with this positively timeless...' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000028191cc41d8585df6170b3e5e', title: 'Mood Booster', description: 'Get happy with today\'s dose of feel-good...' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f00000002ab781467051aeba33fca1d20', title: 'Feelin\' Good', description: 'Feel good with this positively timeless...' },
        { image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706f000000028191cc41d8585df6170b3e5e', title: 'Mood Booster', description: 'Get happy with today\'s dose of feel-good...' },
       
        // Add more mood playlists as needed
      ]
    };
  }
};
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

.Bigmain {
  height: 100%;
  background-color: black; /* 设置背景颜色为黑色 */
  color: white; /* 设置字体颜色为白色 */
}

.el-container {
  height: 100%;
}

.el-aside {
  height: 100%;
}

.el-header {
  height: 60px !important; /* 根据实际需求调整 */
  background-color: black; /* 设置头部背景颜色为黑色 */
  color: white; /* 设置头部字体颜色为白色 */
}

.el-main {
  padding: 0; /* 移除默认内边距 */
  background-color: black; /* 设置主要内容区域背景颜色为黑色 */
  color: white; /* 设置主要内容区域字体颜色为白色 */
}

.main-container {
  height: 100%;
  padding: 20px; /* 可选：添加一些内边距 */
}

.el-table {
  background-color: black; /* 设置表格背景颜色为黑色 */
  color: white; /* 设置表格字体颜色为白色 */
}

.el-table th, .el-table td {
  background-color: black; /* 设置表格单元格背景颜色为黑色 */
  color: white; /* 设置表格单元格字体颜色为白色 */
}

.el-table::before {
  background-color: black; /* 设置表格边框颜色为黑色 */
}
</style>