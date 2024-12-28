
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
          <div class="Myart">
            <h1>搜索结果（{{ totalArtists }}）</h1>
            <ul class="artist-list">
              <li v-for="(artist, index) in paginatedArtists" :key="index" class="artist-item">
                <div class="artist-info">
                  <img :src="artist.avatar" :alt="artist.name" class="artist-avatar" />
                  <div class="artist-details">
                    <h2>{{ artist.name }}</h2>
                    <div class="info">
                      <p>专辑: {{ artist.albums }}个</p>
                      <p>MV: {{ artist.mvs }}个</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalArtists"
              :page-size="pageSize"
              :current-page="currentPage"
              @current-change="handlePageChange"
            />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
import Sidebar from './Sidebar.vue'; // 确保正确导入 Sidebar 组件
import Topbar from './Topbar.vue'; // 确保正确导入 Topbar 组件

export default {
  name: 'SearchResults',
  components: {
    Sidebar,
    Topbar
  },
  data() {
    return {
      artists: [],
      pageSize: 10,
      currentPage: 1,
      searchQuery: ''
    };
  },
  computed: {
    totalArtists() {
      return this.artists.length;
    },
    paginatedArtists() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.artists.slice(start, end);
    }
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
    fetchArtists(query) {
      axios.get(`/api/artists/search?q=${query}`)
        .then(response => {
          if (response.data.code === 200) {
            this.artists = response.data.data.list;
          } else {
            console.error('Failed to fetch artists:', response.data.message);
            this.artists = [];
          }
        })
        .catch(error => {
          console.error('Error fetching artists:', error);
          this.artists = [];
        });
    }
  },
  mounted() {
    this.searchQuery = this.$route.query.q || '';
    if (this.searchQuery) {
      this.fetchArtists(this.searchQuery);
    }
  },
  watch: {
    '$route.query.q'(newQuery) {
      this.searchQuery = newQuery;
      this.currentPage = 1; // 重置分页
      if (this.searchQuery) {
        this.fetchArtists(this.searchQuery);
      } else {
        this.artists = [];
      }
    }
  }
};
</script>

<style scoped>
.Bigmain {
  background-color: black; /* 设置背景颜色为黑色 */
  color: white; /* 设置文字颜色为白色，以便在黑色背景上可见 */
  padding: 20px;
}

.Myart {
  margin: 0;
  float: left; /* 设置左浮动 */
  width: 100%; /* 确保宽度占满父容器 */
}

h1 {
  font-size: 2.5em; /* 增加 h1 的字体大小 */
  margin: 0 0 10px 0; /* 添加底部间距 */
}

.artist-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.artist-item {
  background-color: gray; /* 设置歌手个人主题为灰色 */
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px; /* 添加间距 */
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 默认垂直排列 */
}

.artist-item .artist-info {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
}

.artist-item .artist-avatar {
  width: 50px; /* 设置头像宽度 */
  height: 50px; /* 设置头像高度 */
  border-radius: 50%; /* 设置头像为圆形 */
  margin-right: 10px; /* 添加右侧间距 */
}

.artist-item .artist-details {
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 垂直排列 */
}

.artist-item h2 {
  margin: 0;
  font-size: 1.2em;
}

.artist-item .info {
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: row; /* 水平排列 */
  justify-content: center; /* 居中对齐 */
  margin-top: 5px; /* 添加顶部间距 */
}

.artist-item .info p {
  margin: 0;
  margin-right: 10px; /* 添加右侧间距，使它们紧挨在一起 */
}

.artist-item .info p:last-child {
  margin-right: 0; /* 最后一个元素不需要右侧间距 */
}
</style>