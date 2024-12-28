<!-- src/components/Sidebar.vue -->
<template>
  <div class="sidebar">
    <div class="logo">
      <a href="#">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
      </a>
    </div>

    
    <el-menu
    
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#000"
      text-color="#b3b3b3"
      active-text-color="#fff"
    >
      <el-menu-item index="1" @click="navigateTo('/')">
        <i class="el-icon-s-home"></i>
        <span slot="title">Home</span>
      </el-menu-item>

      <el-menu-item index="2" @click="navigateTo('/search')">
        <i class="el-icon-search"></i>
        <span slot="title">Search</span>
      </el-menu-item>

      <el-menu-item index="3" @click="navigateTo('/myartists')">
        <i class="el-icon-document"></i>
        <span slot="title">我的歌手</span>
      </el-menu-item>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>你的音樂庫</span>
        </template>
        <el-menu-item-group>
          
          <el-menu-item index="1-1" @click="navigateTo('/library')"><i class="el-icon-star-on"></i>讚好過的音樂</el-menu-item>
          
        </el-menu-item-group>
        
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-plus"></i>
        <span slot="title">Create Playlist</span>
      </el-menu-item>

      <el-menu-item index="6">
        <i class="el-icon-star-on"></i>
        <span slot="title">Liked Songs</span>
      </el-menu-item>
      
      



    </el-menu>





    
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

    <!-- <div class="navigation">
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
  </div> -->
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
        // 路由跳转方法
        navigateTo(path) {
            if(this.$route.path !== path){ // 检查当前路径是否与目标路径相同
                this.$router.push(path);// 使用Vue Router的push方法进行路由跳转
            }
        },
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      
    },
    
    
};
</script>

<style scoped>

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
</style>