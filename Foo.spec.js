import { mount, createLocalVue } from '@vue/test-utils'
import Foo from './Foo'
import Vue from 'vue'

describe('foo', () => {
  it('1', () => {
    const wrapper = mount(Foo, {
      localVue: createLocalVue(),
      sync: false,
    })

    expect(wrapper.text()).toMatch(/foo/)

    wrapper.destroy()
  })
})