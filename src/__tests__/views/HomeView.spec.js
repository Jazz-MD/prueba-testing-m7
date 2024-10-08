import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'
import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'

describe('Renderiza router', async () => {
  const routerPrueba = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      }
    ]
  })

  it('Navega por vista', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    })
    routerPrueba.push({ name: 'home' })
    await routerPrueba.isReady()

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })
})
