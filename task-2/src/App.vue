<script setup>
import { ref } from "vue"; // Import ref for reactivity

const result = ref("Results will appear here..."); // Declare result

const getMessages = async () => {
  result.value = "Loading...";
  try {
    const response = await fetch("https://organic-spoon-69vxq75v6jxxh59p-5173.app.github.dev/api/messages");
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    result.value = JSON.stringify(data, null, 2);
  } catch (error) {
    result.value = `Error: ${error.message}`;
  }
};

const postMessage = async () => {
  result.value = "Loading...";
  try {
    const response = await fetch("https://organic-spoon-69vxq75v6jxxh59p-5173.app.github.dev/api/new_message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Hello from Vue!" }),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    result.value = JSON.stringify(data, null, 2);
  } catch (error) {
    result.value = `Error: ${error.message}`;
  }
};
</script>

<template>
  <div>
    <h1>Task 2 Starter Template</h1>
    <button @click="getMessages">Get Messages</button>
    <button @click="postMessage">Post Message</button>
    <p>{{ result }}</p>
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


