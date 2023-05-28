<script setup>
import {reactive} from "vue";
import { useStore } from "@/store";

const store = useStore()

const user = reactive({
  name: '',
  age: '',
  childrens: []
 })

 const rules = reactive({
   required: value => !!value || 'Поля не должно быть пустым',
 })

function addChildren() {
  user.childrens.push({name: '', age: ''})
}
function delChildren(index) {
  user.childrens.splice(index, 1)
}

function onSubmit(arg) {
  if (!arg.name || !arg.age) {
    return
  }
  store.setUser(user)
}
</script>

<template>
  <div class="form">
      <v-sheet class="mx-auto">
        <v-form fast-fail @submit.prevent="onSubmit(user)">
          <h4 class="form-title mb-4">Персональные данные</h4>
          <v-text-field
              variant="outlined"
              v-model="user.name"
              label="Имя"
              :rules="[rules.required]"
          ></v-text-field>

          <v-text-field
              variant="outlined"
              v-model="user.age"
              label="Возраст"
              :rules="[rules.required]"
              type="number"
          ></v-text-field>
          <div class="d-flex justify-space-between align-center mb-4">
            <h4 class="form-title">Дети (макс. 5)</h4>
            <v-btn
                variant="outlined"
                color="blue"
                class="text-none"
                rounded="xl" :disabled="user.childrens.length>=5"
                @click="addChildren"
            >
              <img style="margin-right: 5px" src="/24px-Union.svg"> Добавить ребенка
            </v-btn>
          </div>
          <div v-if="user.childrens" class="form-kids">
            <template v-for="(chil, index) in user.childrens" :key="index">
            <div class="form-children">
              <v-row>
                <v-col>
                  <v-text-field
                    variant="outlined"
                    rounded="xl"
                    v-model="chil.name"
                    label="Имя"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                      variant="outlined"
                      v-model="chil.age"
                      label="Возраст"
                      type="number"
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-btn
                      style="margin-top: 8px"
                      variant="text"
                      color="blue"
                      class="text-none" @click="delChildren(index)"
                  >
                    Удалить
                  </v-btn>
                </v-col>
              </v-row>
            </div>
            </template>
          </div>
          <v-btn color="blue"
                 rounded="xl"
                 class="text-none"
                 type="submit"
          >
            Сохранить
          </v-btn>
        </v-form>
      </v-sheet>

    </div>

</template>

<style>
.form {
  width: 600px;
  margin: 0 auto;
}
.form-children {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
}
.form-title {
  font-size: 16px;
}
</style>
