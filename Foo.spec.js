import { mount } from '@vue/test-utils'
import Foo from './Foo'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { createElement } from './__test.utils.env'

// Vue.use(Vuetify)
// const vuetify = new Vuetify()

describe('foo', () => {
  it('1', () => {
    const wrapper = mount(Foo, {
      localVue: Vue,
      attachTo: createElement(),
      // vuetify,
      sync: false,
    })

    expect(wrapper.text()).toMatch(/foo/)

    wrapper.destroy()
  })
})