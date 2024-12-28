<!-- src/components/Topbar.vue -->
<template>
  <div class="topbar">
    <div class="prev-next-buttons">
      <button type="button" class="fa fas fa-chevron-left"></button>
      <button type="button" class="fa fas fa-chevron-right"></button>
    </div>

    <div class="navbar">
      <ul>
        <li>
          <a href="#">Premium</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Download</a>
        </li>
        <li class="divider">|</li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
      <button type="button">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
};
</script>

<style scoped>
/* 将 Topbar.vue 中的样式复制过来 */
.topbar {
  position: fixed;
  top: 0;
  left: 254.5px;
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