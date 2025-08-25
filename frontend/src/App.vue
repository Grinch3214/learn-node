<template>
  <div v-if="result.lenght">
    {{ result }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const result = ref([]);
async function getData() {
  const url = 'http://127.0.0.1:5000';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

onMounted(async () => {
  await getData();
});
</script>
