import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'
import App from '@/App.vue'
import AboutView from '@/views/AboutView.vue'

describe('Renderiza router', async () => {
  const routerPrueba = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/about',
        name: 'about',
        component: AboutView
      }
    ]
  })

  it('Navega por vista', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    })
    routerPrueba.push({ name: 'about' })
    await routerPrueba.isReady()

    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
