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
      </el-container>
    </el-container>

    <!-- 新增的注册表单部分 -->
    <div class="register-container">
      <div class="register-box">
        <h2>注册</h2>
        <form @submit.prevent="handleRegister">
          <!-- 用户名 -->
          <div class="input-group">
            <label for="username">用户名:</label>
            <input v-model="username" type="text" id="username" placeholder="请输入用户名" required :class="{'input-error': errorMessage}" />
            <span v-if="errorMessage && !username" class="error-message">请输入用户名</span>
          </div>
          
          <!-- 密码 -->
          <div class="input-group">
            <label for="password">密码:</label>
            <input v-model="password" type="password" id="password" placeholder="请输入密码" required :class="{'input-error': errorMessage}" />
            <span v-if="errorMessage && !password" class="error-message">请输入密码</span>
          </div>
          
          <!-- 确认密码 -->
          <div class="input-group">
            <label for="confirmPassword">确认密码:</label>
            <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="确认密码" required :class="{'input-error': errorMessage}" />
            <span v-if="errorMessage && password !== confirmPassword" class="error-message">密码和确认密码不匹配</span>
          </div>
    
          <!-- 头像上传 -->
          <div class="input-group">
            <label for="avatar">头像:</label>
            <input type="file" id="avatar" @change="handleAvatarChange" accept="image/*" />
            <div v-if="avatar" class="avatar-preview">
              <img :src="avatar" alt="头像预览" />
            </div>
          </div>
    
          <!-- 自定义音乐输入 -->
          <div class="input-group">
            <label for="favoriteMusic">请输入你喜欢的音乐（多个音乐用逗号分隔）:</label>
            <input v-model="favoriteMusicInput" type="text" id="favoriteMusic" placeholder="例如：Bohemian Rhapsody, Stairway to Heaven" />
          </div>
    
          <!-- 提交按钮 -->
          <button type="submit">注册</button>
          
          <!-- 错误信息 -->
          <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { users } from '@/plugins/users'; // 引入用户数据
import components from './components.js';

export default {
  name: 'RegisterPage',
  components: {
    ...components
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      avatar: null, // 存储用户上传的头像
      favoriteMusicInput: '', // 用户输入的音乐名称
      favoriteMusic: [], // 存储用户选择的收藏音乐（转化后的数组）
      errorMessage: '', // 错误消息
    };
  },
  methods: {
    handleAvatarChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.avatar = URL.createObjectURL(file); // 创建头像的本地URL
      }
    },
    handleRegister() {
      // 检查用户名是否已存在
      const userExists = users.some((user) => user.username === this.username);
      if (userExists) {
        this.errorMessage = '用户名已存在，请选择其他用户名';
        return;
      }

      // 检查密码是否匹配
      if (this.password !== this.confirmPassword) {
        this.errorMessage = '密码和确认密码不匹配';
        return;
      }

      // 处理用户输入的音乐字符串
      const favoriteMusicArray = this.favoriteMusicInput.split(',').map(music => music.trim()).filter(music => music);

      // 将新用户添加到用户列表
      const newUser = {
        id: users.length + 1,  // 根据现有用户数生成新ID
        username: this.username,
        password: this.password,
        name: this.username,  // 用户名作为姓名
        avatar: this.avatar || '@/assets/default-avatar.png', // 如果用户没有上传头像，使用默认头像
        favoriteMusic: favoriteMusicArray, // 用户选择的收藏音乐
      };

      users.push(newUser); // 将新用户保存到模拟的数据中

      // 注册成功后跳转到登录页面
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: gray; /* 浅灰色背景 */
  font-family: 'Roboto', sans-serif;
}

.register-box {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
  border: 1px solid #e0e0e0;
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333333;
}

.input-group {
  margin-bottom: 20px;
  position: relative;
}

label {
  display: block;
  font-size: 16px;
  color: #555555;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid #cccccc;
  margin-top: 5px;
  font-size: 16px;
  background-color: #ffffff;
  transition: all 0.3s;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

button {
  width: 100%;
  padding: 14px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #ff0000;
  font-size: 14px;
  position: absolute;
  bottom: -20px;
  left: 0;
  font-weight: bold;
}

.error {
  color: #ff0000;
  margin-top: 10px;
}

.avatar-preview {
  margin-top: 10px;
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  border-radius: 50%;
}

.avatar-preview img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>