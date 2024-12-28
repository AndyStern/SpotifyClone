<template>
  <div>
    <el-container>
      <!-- 插入 Sidebar.vue 组件 -->
      <el-aside width="255px">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入 Sidebar.vue 组件
import Sidebar from './Sidebar.vue';

export default {
  name: 'MyComponent',
  components: {
    // 注册 Sidebar 组件
    Sidebar
  },
  data() {
    return {
      // 组件的数据
    };
  },
  methods: {
    // 组件的方法
  },
  mounted() {
    // 组件挂载后执行的代码
  }
};
</script>

<style scoped>
/* 这里是组件的样式 */
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>