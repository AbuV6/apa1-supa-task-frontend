import { expect, it, describe, beforeAll, vi } from 'vitest'
import { submitForm } from './validators'
import { reactive, createApp } from 'vue'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { form } from './formHandler'

describe('testing validator function', () => {
  const app = createApp({})
  beforeAll(() => {
    form.name = 'abu'
    form.age = 22
    form.phone = '07553841895'
    form.email = 'abu@abu.com'
    form.dob = '22/05/2002'
    form.department = 'HR'
    form.mealPref = 'Halal'
    form.travelling = 'Manchester'
    setActivePinia(
      createTestingPinia({
        createSpy: vi.fn,
        initialState: {
          guests: {
            guests: [],
          },
        },
      }),
    )
  })

  it('validator good information', () => {
    expect(submitForm()).toBe(true)
  })
})

describe('testing validator function', () => {
  const app = createApp({})
  beforeAll(() => {
    form.name = 'sonny'
    setActivePinia(
      createTestingPinia({
        createSpy: vi.fn,
        initialState: {
          guests: {
            guests: [],
          },
        },
      }),
    )
  })

  it('validator bad information', () => {
    expect(submitForm()).toBe(false)
  })
})
