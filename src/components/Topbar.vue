
<template>
  <div class="topbar">
    <div class="prev-next-buttons">
      <el-button type="text" class="fa fas fa-chevron-left"></el-button>
      <el-button type="text" class="fa fas fa-chevron-right"></el-button>
    </div>

    <div class="navbar">
      <!-- <el-autocomplete
        v-model="searchQuery"
        :fetch-suggestions="querySearch"
        placeholder="搜索..."
        prefix-icon="el-icon-search"
        @select="handleSelect"
        @blur="handleSearch"
        style="width: 200px; margin-right: 20px;"
      ></el-autocomplete> -->
      <ul>
        <li>
          <router-link to="">Premium</router-link>
        </li>
        <li>
          <router-link to="">支援</router-link>
        </li>
        <li>
          <router-link to="">下載</router-link>
        </li>
        <li>
          <router-link to="/userprofile">個人資料</router-link>
        </li>
        <li class="divider">|</li>
        <li>
          <router-link to="/register">註冊</router-link>
        </li>
      </ul>
      
      <el-button type="primary" @click="navigateTo('/login')">登入</el-button>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Topbar',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    navigateTo(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({ path: '/search', query: { q: this.searchQuery } });
      }
    },
    querySearch(queryString, cb) {
      if (queryString) {
        axios.get(`/api/artists/search?q=${queryString}`)
          .then(response => {
            if (response.data.code === 200) {
              const results = response.data.data.list.map(artist => ({
                value: artist.name,
                id: artist.id
              }));
              cb(results);
            } else {
              console.error('Failed to fetch search results:', response.data.message);
              cb([]);
            }
          })
          .catch(error => {
            console.error('Error fetching search results:', error);
            cb([]);
          });
      } else {
        cb([]);
      }
    },
    handleSelect(item) {
      this.searchQuery = item.value;
      this.handleSearch();
    }
  }
};
</script>

<style scoped>
/* 样式部分保持不变 */
.topbar {
  position: fixed;
  top: 0;
  left: 303px;
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
</style>