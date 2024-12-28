<template>
    <div>
      <!-- 这里是组件的模板部分 -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    // 这里可以添加数据、计算属性、方法等
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
  </style>
  





  


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
    </div>
  </template>
  
  <script>
  import components from './components.js';
  
  export default {
    name: 'Login',
    components: {
      ...components
    },
    // 这里可以添加数据、计算属性、方法等
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
  </style>