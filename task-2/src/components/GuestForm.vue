<script setup lang="ts">
import { computed } from 'vue'
import { form } from './helpers/formHandler'
import { errors } from './helpers/formHandler'
import { resetForm } from './helpers/formHandler'
import { selectedCardId } from './helpers/cardData'
import { submitForm } from './helpers/validators'
import { isUpdateMode } from './helpers/cardData'
</script>

<template>
  <form @submit.prevent class="guest-form">
    <label>
      Name:
      <input v-model="form.name" type="text" />
      <span class="guest-form__error">{{ errors.name }}</span>
    </label>
    <label>
      Age:
      <input v-model="form.age" type="text" />
      <span class="guest-form__error">{{ errors.age }}</span>
    </label>
    <label>
      Phone:
      <input v-model="form.phone" type="text" />
      <span class="guest-form__error">{{ errors.phone }}</span>
    </label>
    <label>
      <label>
        Email:
        <input v-model="form.email" type="email" />
        <span class="guest-form__error">{{ errors.email }}</span>
      </label>
      Date of Birth:
      <input v-model="form.dob" type="text" />
      <span class="guest-form__error">{{ errors.dob }}</span>
    </label>

    <label>
      Department:
      <select v-model="form.department">
        <option value="">Select Department</option>
        <option value="HR">HR</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>
      <span class="guest-form__error">{{ errors.department }}</span>
    </label>

    <label>
      Meal Preference:
      <select v-model="form.mealPref">
        <option value="">Select Meal Preference</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Non-vegetarian">Non-Vegetarian</option>
        <option value="Halal">Halal</option>
        <option value="Kosher">Kosher</option>
        <option value="Gluten-free">Gluten-Free</option>
      </select>
      <span class="guest-form__error">{{ errors.mealPref }}</span>
    </label>

    <label>
      Travelling From:
      <select v-model="form.travelling">
        <option value="">Select Travelling From</option>
        <option value="Manchester">Manchester</option>
        <option value="London">London</option>
      </select>
      <span class="guest-form__error">{{ errors.travelling }}</span>
    </label>

    <button @click="submitForm">{{ isUpdateMode ? 'Update' : 'Add' }}</button>
    <button @click="resetForm">Reset</button>
  </form>
</template>

<style scoped lang="scss">
.guest-form {
  max-width: 500px;
  margin: 20px auto;
  padding: 25px;
  background: linear-gradient(135deg, #2e3192, #1bffff); // Moneysupermarket Gradient
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  color: #fff;

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-bottom: 14px;

    input,
    select {
      padding: 12px;
      border: 2px solid rgba(255, 255, 255, 0.6);
      border-radius: 8px;
      font-size: 16px;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      transition: all 0.3s ease-in-out;

      &:focus {
        border-color: #ff00ff; // Pink highlight effect
        outline: none;
        box-shadow: 0 0 5px rgba(255, 0, 255, 0.5);
      }
    }
  }

  &__error {
    font-size: 0.9rem;
    color: #ff5252;
    margin-top: 4px;
  }

  button {
    width: 100%;
    padding: 14px;
    font-size: 18px;
    font-weight: bold;
    color: #1bffff;
    background: #2e3192;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 12px;
    text-transform: uppercase;

    &:hover {
      background: #ff00ff;
      color: #fff;
    }

    &:nth-child(2) {
      background: #ff5252;

      &:hover {
        background: #d32f2f;
      }
    }
  }
}
</style>
