import { reactive } from 'vue'

// Define form data and table data
export const form = reactive({
  name: '',
  age: '',
  phone: '',
  email: '',
  dob: '',
  department: '',
  mealPref: '',
  travelling: '',
})

export const errors = reactive({
  name: '',
  age: '',
  phone: '',
  email: '',
  dob: '',
  department: '',
  mealPref: '',
  travelling: '',
})

// Reset form
export const resetForm = () => {
  form.name = ''
  form.age = ''
  form.phone = ''
  form.email = ''
  form.dob = ''
  form.department = ''
  form.mealPref = ''
  form.travelling = ''
  errors.name = ''
  errors.age = ''
  errors.email = ''
  errors.phone = ''
  errors.dob = ''
  errors.department = ''
  errors.mealPref = ''
  errors.travelling = ''
}
