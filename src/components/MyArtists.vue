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
            <h1>我的歌手（{{ totalArtists }}）</h1>
            <ul class="artist-list">
              <li v-for="(artist, index) in paginatedArtists" :key="index" class="artist-item" @click="goToArtistDetail(artist.id)">
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
import components from './components.js';

export default {
  name: 'MyArtists',
  components: {
    ...components
  },
  data() {
    return {
      artists: [],
      pageSize: 10,
      currentPage: 1,
      searchQuery: '', // 添加搜索关键词
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
    },
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
    fetchArtists() {
      axios.get('/api/artists')
        .then(response => {
          if (response.data.code === 200) {
            this.artists = response.data.data.list;
          } else {
            console.error('Failed to fetch artists:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching artists:', error);
        });
    },
    searchArtists(query) {
      return this.artists.filter(artist => artist.name.toLowerCase().includes(query.toLowerCase()));
    },
    goToArtistDetail(artistId) {
      this.$router.push({ name: 'ArtistDetail', params: { id: artistId } });
    }
  },
  mounted() {
    this.fetchArtists();
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
  cursor: pointer; /* 添加鼠标悬停时的指针样式 */
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












<!-- <template>
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
            <h1>我的歌手（{{ totalArtists }}）</h1>
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
import components from './components.js';


export default {
  name: 'MyArtists',
  components: {
    ...components
  },
  data() {
    return {
      artists: [
        { name: 'Gareth Emery', albums: 235, mvs: 26, avatar: 'http://p1.music.126.net/9_vLehfxGoOmw8Tyed4DQQ==/109951170124282199.jpg' },
        { name: 'Vylet Pony', albums: 93, mvs: 1, avatar: 'http://p1.music.126.net/1cPZYfouNUg7DLawgCsb4A==/109951166606684712.jpg' },
        { name: 'David Guetta 大卫·库塔', albums: 524, mvs: 231, avatar: 'http://p1.music.126.net/Oou3lGcwi3iNuEdtXMthvg==/109951165434738280.jpg' },
        { name: 'Twillights Dusk', albums: 3, mvs: 0, avatar: 'http://p1.music.126.net/QCyQ9TNP7ywO4jyAMEOXxQ==/109951169742596855.jpg' },
        { name: 'ODESZA', albums: 68, mvs: 19, avatar: 'http://p1.music.126.net/3zIp8oegeIYcpnbPlVn7Yw==/109951169761061933.jpg' },
        { name: 'Peder B. Helland', albums: 122, mvs: 13, avatar: 'http://p1.music.126.net/n87FkZ2N5hPiV5kBU2JPiA==/109951166312331020.jpg' },
        { name: 'Laura Brehm', albums: 75, mvs: 5, avatar: 'http://p1.music.126.net/p0Pt2B0a6-qEk61Zo_VqoA==/18716986439721602.jpg' },
        { name: 'TheFatRat 克里斯蒂安·弗里德里希·约翰内斯·布特纳', albums: 73, mvs: 10, avatar: 'http://p1.music.126.net/Zzh2LO1b20GA1MMcGX840g==/109951169854899378.jpg' },
        { name: 'Kelly Andrew', albums: 39, mvs: 0, avatar: 'http://p1.music.126.net/qex6nDBQ1QqDnUHBOvaeuw==/109951163559513699.jpg' },
        { name: 'Toby Fox 托比·福克斯', albums: 12, mvs: 1, avatar: 'http://p1.music.126.net/1v0s2Vra64EGvHEPfcdj4w==/109951167080689608.jpg' },
        { name: 'S3RL', albums: 344, mvs: 2, avatar: 'http://p1.music.126.net/vp9e4jQLUj-5OzOaB2XKpA==/109951166554755727.jpg' },
        { name: 'Beyond 超越', albums: 139, mvs: 204, avatar: 'http://p1.music.126.net/9aCJYVD0JZ0NckqAn3a_3w==/109951165566993818.jpg' },
        { name: 'yonewaka', albums: 70, mvs: 2, avatar: 'http://p1.music.126.net/guK1WdoDoXZR9ivvT1UQ6Q==/109951167566661804.jpg' },
        { name: 'Rick Astley 理查德 · 艾斯利', albums: 77, mvs: 17, avatar: 'http://p1.music.126.net/MaI4CEQpH-s0NX3LODnA6Q==/109951165683714741.jpg' },
        { name: 'HIBE', albums: 7, mvs: 1, avatar: 'http://p1.music.126.net/IGIjsjrcAGv87x-h4MiS0Q==/109951164612082650.jpg' },
        { name: 'DJ Soviet', albums: 64, mvs: 1, avatar: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg' },
        { name: 'Addliss', albums: 15, mvs: 0, avatar: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg' },
        { name: 'Ben Prunty Music', albums: 2, mvs: 0, avatar: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg' },
        { name: '塞壬唱片-MSR', albums: 213, mvs: 18, avatar: 'http://p1.music.126.net/J8mrQPu9oKSva8ziYrGmJQ==/109951164481886292.jpg' },
        { name: 'Ahrix', albums: 43, mvs: 0, avatar: 'http://p1.music.126.net/cqw3vzXSdGTix9Ot9Q7w-A==/109951169743487748.jpg' },
        { name: 'O-Zone', albums: 21, mvs: 4, avatar: 'http://p1.music.126.net/xUzAsZ0_fKuFhn1meMLXvg==/212205744178253.jpg' },
        { name: 'LukHash', albums: 51, mvs: 1, avatar: 'http://p1.music.126.net/R_uZnbqRZPGTHj2ImE-CLg==/630020162727356.jpg' },
        { name: 'Kyle Xian', albums: 323, mvs: 1, avatar: 'http://p1.music.126.net/twBw99ZnWtrDGo44nl1CJA==/109951163730254269.jpg' },
        { name: 'Various Artists 欧美群星', albums: 1008976, mvs: 931, avatar: 'http://p1.music.126.net/MseTGtzDA9r230WAMWwNGA==/1401877333278177.jpg' },
        { name: 'Cris Velasco', albums: 25, mvs: 1, avatar: 'http://p1.music.126.net/FcJoBZkePz3D9QkVJ5Cedg==/6633353650627402.jpg' },
        { name: 'Darin', albums: 77, mvs: 43, avatar: 'http://p1.music.126.net/r880GkvYhxlI7-XmaCMLBw==/109951166779657304.jpg' },
        { name: 'Skyro', albums: 0, mvs: 8, avatar: 'http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg' },
        { name: 'welphen', albums: 12, mvs: 0, avatar: 'http://p1.music.126.net/Yx0JCVK7NXCVBEFwKxAvJg==/18801648836932571.jpg' },
        { name: 'Vicetone', albums: 139, mvs: 59, avatar: 'http://p1.music.126.net/Ucmd6K_1MdDajm0UJfwXEw==/109951168707700747.jpg' },
        { name: 'Vanguard Sound', albums: 79, mvs: 1, avatar: 'http://p1.music.126.net/KirSrXEN__a9YER9Ou99dw==/3240260768084625.jpg' },

    ],
      pageSize: 10,
      currentPage: 1
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
    }
  },
  mounted() {
    // 组件挂载后执行的代码
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
</style> -->