<script setup>
import { ref } from 'vue'

const result = ref('Results will appear here...')

const getMessages = async () => {
  result.value = 'Loading...'

  try {
    const response = await fetch(`http://localhost:3000/api/messages`)
    if (!response.ok) throw new Error(`Error: ${response.status}`)
    const data = await response.json()

    console.log('Fetched data:', data)

    result.value = JSON.stringify(data, null, 2)
  } catch (error) {
    result.value = `Error: ${error.message}`
  }
}

const postMessage = async () => {
  result.value = 'Loading...'
  try {
    const response = await fetch('/api/messages/api/new_message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Hello from Vue!' }),
    })

    if (!response.ok) throw new Error(`Error: ${response.status}`)
    const data = await response.json()
    result.value = JSON.stringify(data, null, 2)
  } catch (error) {
    result.value = `Error: ${error.message}`
  }
}
</script>

<template>
  <div>
    <RouterView />

    <div>
      <h1>Task 2 Starter Template</h1>
      <button @click="getMessages">Get Messages</button>
      <button @click="postMessage">Post Message</button>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}
</style>
