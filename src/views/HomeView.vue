<script setup>
import { ref, computed } from 'vue'
import store from '@/store'
import { getInfo } from '@/services/auth'
const tab = ref(false)
const info = ref({
  idTarifa: '',
  tarifa: '',
  concepto: '',
  estatus: '',
  tipoProducto: '',
  tipoDocumento: '',
  diaInicio: '',
  diaFin: '',
  importe: '',
  fh_ultima_modificacion: '',
  aplicativos: ''
})

const dataSearch = ref({})
const resultEmpty = ref(false)

const resultSearchLocal = () => {
  const result = store.getters.getInfo(search.value)
  dataSearch.value = result
}

const resultSearchAPI = () => {
  const objs = {
    idTarifa: search.value
  }
  getInfo(objs).then((response) => {
    try {
      if (response.data.response.tarifas !== undefined) {
        dataSearch.value = response.data.response.tarifas
        resultEmpty.value = true
      } else {
        resultEmpty.value = false
        dataSearch.value = []
      }
    } catch (e) {
      resultEmpty.value = false
      dataSearch.value = []
    }
  })
}

const search = ref('')

const message = ref('')

const selectTab = (value) => {
  tab.value = value
}

const saveInfo = (e) => {
  e.preventDefault()
  if (validateInfo.value) {
    store.commit('addInfo', info.value)
    message.value = 'se guardo exitosamente'
  }
}

const validateInfo = computed(() => {
  if (info.value.idTarifa !== '' && info.value.tarifa !== '' && info.value.concepto !== '' && info.value.estatus !== '' && info.value.tipoProducto !== '' && info.value.tipoDocumento !== '' && info.value.diaInicio !== '' && info.value.diaFin !== '' && info.value.importe !== '' && info.value.fh_ultima_modificacion !== '' && info.value.aplicativos !== '') {
    return true
  }
  return false
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <div class="mt-4">
      <button :class="tab ? 'active': 'normal'" @click="selectTab(true)">Consulta</button>
      <button :class="!tab ? 'active' : 'normal'" @click="selectTab(false)">Alta</button>
    </div>
    <div v-if="!tab" class="d-flex justify-content-start container-fluid mt-4">
      <form @submit="saveInfo">
        <div>
          <label for="" class="mr-3">Ingresa un idTarifa</label>
          <input type="text" v-model="info.idTarifa">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un tarifa</label>
          <input type="text" v-model="info.tarifa">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un concepto</label>
          <input type="text" v-model="info.concepto">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un estatus</label>
          <input type="text" v-model="info.estatus">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un tipoProducto</label>
          <input type="text" v-model="info.tipoProducto">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un tipoDocumento</label>
          <input type="text" v-model="info.tipoDocumento">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un diaInicio</label>
          <input type="text" v-model="info.diaInicio">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un diaFin</label>
          <input type="text" v-model="info.diaFin">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un importe</label>
          <input type="text" v-model="info.importe">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">última modificación</label>
          <input type="text" v-model="info.fh_ultima_modificacion">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Selecciona un aplicativo</label>
          <input type="text" v-model="info.aplicativos">
        </div>
        <div class="mt-4 message">{{message}}</div>
        <button class="mt-2">Guardar</button>
      </form>
    </div>
    <div v-if="tab" class="d-flex justify-content-start container-fluid flex-column mt-4">
      <div class="d-flex align-items-center">
        <div>
          <label for="" class="mr-3">Ingresa un idTarifa</label>
          <input type="text" v-model="search">
        </div>
        <button class="normal normal2 ml-3" @click="resultSearchLocal()">Buscar local</button>
        <button class="normal normal2 ml-3" @click="resultSearchAPI()">Buscar API</button>
      </div>
      <div v-if="dataSearch.length > 0 && resultEmpty" class="mt-3">
        <div>
          <label for="" class="mr-3">Ingresa un idTarifa</label>
          <input type="text" :value="dataSearch[0].idTarifa">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un tarifa</label>
          <input type="text" :value="dataSearch[0].tarifa">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un concepto</label>
          <input type="text" :value="dataSearch[0].concepto">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un estatus</label>
          <input type="text" :value="dataSearch[0].estatus">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un tipoProducto</label>
          <input type="text" :value="dataSearch[0].tipoProducto">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un tipoDocumento</label>
          <input type="text" :value="dataSearch[0].tipoDocumento">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un diaInicio</label>
          <input type="text" :value="dataSearch[0].diaInicio">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un diaFin</label>
          <input type="text" :value="dataSearch[0].diaFin">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Ingresa un importe</label>
          <input type="text" :value="dataSearch[0].importe">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">última modificación</label>
          <input type="text" :value="dataSearch[0].fh_ultima_modificacion">
        </div>
        <div class="mt-3">
          <label for="" class="mr-3">Selecciona un aplicativo</label>
          <input type="text" :value="dataSearch[0].aplicativos">
        </div>
      </div>
      <div v-if="dataSearch.length === 0 && !resultEmpty">
        Sin resultado
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
