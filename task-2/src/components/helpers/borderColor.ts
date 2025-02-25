import { computed } from 'vue'

export const borderColor = computed(() => {
  return this.travelling === 'Manchester'
    ? '#FFFF00'
    : this.travelling === 'London'
      ? '#FF0000'
      : ''
})
