<script setup>
import { ref } from 'vue'

const texto = ref('')
const emit = defineEmits(['enviar.texto'])

function enviarTexto() {
  emit('enviar-texto', texto.value)
}
</script>
<template>
  <div>
    <input type="text" v-model="texto" />
    <button @click="enviarTexto">Enviar</button>
  </div>
</template>
