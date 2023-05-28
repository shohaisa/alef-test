<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <div class="wrapper">
        <div class="logo">
          <img src="/header-Logo_imi_horizontal.png" alt="">
        </div>
        <nav>
          <RouterLink to="/">Форма</RouterLink>
          <RouterLink to="/pre">Превью</RouterLink>
        </nav>
        <div></div>
      </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  max-height: 76px;
  margin-bottom: 30px;
  padding: 0 50px;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
}

.wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: auto;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
nav {
  font-size: 1rem;
  padding: 1rem 0;
}
header {
  display: flex;
  place-items: center;
}

.logo {
  margin: 0 2rem 0 0;
}
</style>
