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
          <div class="profile-container">
            <div v-if="user" class="profile-card">
              <!-- 用户信息 -->
              <div class="profile-header">
                <div class="avatar">
                  <img :src="user.avatar || defaultAvatar" alt="User Avatar" />
                </div>
                <div class="user-info">
                  <h2>{{ user.name }}</h2>
                  <p class="username">@{{ user.username }}</p>
                </div>
              </div>

              <!-- 用户最喜欢的音乐 -->
              <div class="profile-details">
                <h3>最喜欢的音乐</h3>
                <ul>
                  <li v-for="(music, index) in user.favoriteMusic" :key="index">{{ music }}</li>
                </ul>
              </div>

              <!-- 退出登录按钮 -->
              <button @click="logout">退出登录</button>
            </div>

            <!-- 未登录提示 -->
            <div v-else id="login-prompt">
              <p>没有登录，请先登录。</p>
              <router-link to="/login" class="login-link">去登录</router-link>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import components from './components.js';

export default {
  name: 'UserProfile',
  components: {
    ...components
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('loggedInUser')), // 从本地存储获取用户数据
      defaultAvatar: 'https://example.com/default-avatar.jpg', // 修改为网址头像链接
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('loggedInUser'); // 移除本地存储的用户数据
      this.$router.push('/login'); // 重定向到登录页
    },
  },
  mounted() {
    // 组件挂载后执行的代码
  }
};
</script>

<style scoped>
/* 整体容器样式 */
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

/* 用户头像和信息 */
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

/* 用户最喜欢的音乐 */
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

/* 退出登录按钮 */
button {
  width: 100%;
  padding: 12px;
  background-color: #00acc1; /* 浅蓝色按钮 */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin-top: 20px;
}

button:hover {
  background-color: #0097a7; /* 更深的浅蓝色按钮 */
  transform: scale(1.05);
}

button:active {
  background-color: #00838f; /* 更深的浅蓝色按钮 */
}

/* 登录提示区域 */
#login-prompt {
  text-align: center;
  font-size: 16px;
  color: #004d40; /* 深绿色文字 */
}

.login-link {
  display: inline-block;
  margin-top: 10px;
  padding: 12px 24px;
  background-color: #00acc1; /* 浅蓝色按钮 */
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
}

.login-link:hover {
  background-color: #0097a7; /* 更深的浅蓝色按钮 */
}

.login-link:active {
  background-color: #00838f; /* 更深的浅蓝色按钮 */
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