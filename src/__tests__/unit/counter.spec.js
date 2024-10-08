import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('Counter store', () => {
  //define pinia
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Valor inicial', () => {
    const counterStore = useCounterStore()
    expect(counterStore.count).toBe(0) //prueba unitaria
  })

  it('aumentar y disminuir el contador', () => {
    const counterStore = useCounterStore()

    counterStore.increment() //suma 1
    expect(counterStore.count).toBe(1)

    counterStore.decrement() // resta uno
    expect(counterStore.count).toBe(0)
  })
})
