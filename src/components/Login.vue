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
          <!-- 登录容器，应用背景渐变 -->
          <div class="login-container" :style="{ background: backgroundGradient }">
            <div class="login-box">
              <!-- 标题，应用文本颜色 -->
              <h2 :style="{ color: textColor }">登录</h2>
              <!-- 登录表单 -->
              <form @submit.prevent="handleLogin">
                <!-- 用户名输入框，应用文本颜色、边框颜色、背景颜色等样式 -->
                <div class="input-group">
                  <label :style="{ color: textColor }" for="username">用户名:</label>
                  <input v-model="username" type="text" id="username" :placeholder="`请输入用户名`" required :style="{ borderColor: inputBorderColor, color: textColor, backgroundColor: inputBackgroundColor }" />
                </div>
                <!-- 密码输入框，应用相同样式 -->
                <div class="input-group">
                  <label :style="{ color: textColor }" for="password">密码:</label>
                  <input v-model="password" type="password" id="password" :placeholder="`请输入密码`" required :style="{ borderColor: inputBorderColor, color: textColor, backgroundColor: inputBackgroundColor }" />
                </div>
                <!-- 登录按钮，应用背景颜色、文本颜色等样式 -->
                <button type="submit" :style="{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }">登录</button>

                <!-- 错误消息，应用错误颜色 -->
                <div v-if="errorMessage" class="error" :style="{ color: errorColor }">{{ errorMessage }}</div>
              </form>

              <!-- 注册按钮，应用文本颜色、链接颜色等样式 -->
              <div class="register-link">
                <p :style="{ color: textColor }">还没有账号？ <router-link to="/register" :style="{ color: linkColor }">注册</router-link></p>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import components from './components.js';
import { users } from '@/plugins/users'; // 导入模拟用户数据

export default {
  name: 'Login',
  components: {
    ...components
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '', // 错误消息
      color1: '',
      color2: '',
      backgroundGradient: '',
      textColor: '',
      inputBorderColor: '',
      inputBackgroundColor: '',
      buttonBackgroundColor: '',
      buttonTextColor: '',
      errorColor: '',
      linkColor: ''
    };
  },
  methods: {
    /**
     * 处理登录逻辑
     * 查找用户，如果用户存在且密码正确，则将用户信息保存在本地并跳转到个人中心
     * 否则，显示错误消息
     */
    handleLogin() {
      // 查找用户
      const user = users.find(
        (user) => user.username === this.username && user.password === this.password
      );

      if (user) {
        // 如果用户存在且密码正确
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // 将用户信息保存在本地
        this.$router.push('/userprofile'); // 登录成功后跳转到个人中心
      } else {
        this.errorMessage = '用户名或密码错误'; // 登录失败
      }
    },
    /**
     * 设置深色主题颜色
     * 定义背景渐变、文本颜色、输入框边框颜色等
     */
    setGrayDarkColors() {
      this.color1 = '#333333'; // 深灰色
      this.color2 = '#666666'; // 灰色
      this.backgroundGradient = `linear-gradient(135deg, ${this.color1}, ${this.color2})`;
      this.textColor = '#000000'; // 黑色
      this.inputBorderColor = '#999999'; // 浅灰色
      this.inputBackgroundColor = '#444444'; // 深灰色
      this.buttonBackgroundColor = '#555555'; // 深灰色
      this.buttonTextColor = '#ffffff'; // 白色
      this.errorColor = '#ff4d4d'; // 红色
      this.linkColor = '#ffcc00'; // 黄色
    }
  },
  mounted() {
    this.setGrayDarkColors(); // 组件挂载后设置颜色
  }
};
</script>

<style scoped>
/* 背景渐变色 */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 360px;
  max-width: 100%;
  text-align: center;
}

/* 输入框 */
.input-group {
  margin-bottom: 20px;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

.input-group input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(37, 117, 252, 0.5);
}

/* 提交按钮 */
button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1e60c6;
}

button:active {
  background-color: #1a4b9f;
}

/* 错误提示 */
.error {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}

/* 注册链接样式 */
.register-link {
  margin-top: 20px;
  font-size: 14px;
}

.register-link p {
  margin: 0;
}

.register-link a {
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>