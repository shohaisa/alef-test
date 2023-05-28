<script setup>
import { useStore } from "@/store";

const store = useStore()

const user = store.user
</script>

<template>
  <div v-if="user" class="pre">
    <h4 class="pre-title mb-4">Персональные данные</h4>
    <h2 class="pre-name">{{user.name}}, {{user.age + ' лет'}}</h2>
    <h4 v-if="user.childrens.length" class="pre-title mb-4">Дети</h4>
    <div class="children"  >
      <div class="chil" v-for="chil in user.childrens" :key="chil.age">
        <h2 class="chil-item">{{chil.name}}, {{chil.age}}</h2>
      </div>
    </div>
  </div>
</template>

<style>
.pre {
  width: 600px;
  margin: 0 auto;
  font-size: 16px;
}
.pre-title {

}
.pre-name {
  font-weight: 700;
  margin-bottom: 60px;
}
.chil {
  display: grid;
}
.chil-item {
  width: fit-content;
  padding: 10px 20px;
  background-color: rgba(241, 241, 241, 1);
  border-radius: 5px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>