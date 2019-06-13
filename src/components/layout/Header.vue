<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand text-white" href="#">
        <h1>User Management</h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link text-white pb-3" to="/">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link text-white pb-3" to="/about">About</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link text-white pb-3" to="/add">Add user</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.navbar {
  min-height: 15vh;
  background-color: rgb(192, 192, 192);
  text-align: center;
}
.navbar-toggler {
  background-color: rgb(192, 192, 192);
}
</style>
