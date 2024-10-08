import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ChildComponent.vue', () => {
  it('al hacer click se envía el texto', async () => {
    const wrapper = mount(ChildComponent)
    //ingreso del texto
    await wrapper.find('input').setValue('Texto ingresado')
    //click al botón
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('enviar-texto')[0]).toEqual(['Texto ingresado'])
  })
})
