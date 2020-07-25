Vuetify Bug reproduction

I use this configuration to avoid "Multiple instance of Vue detected" error, and render the component thoroughly so that I can interact with in-component buttons like close button in v-alert.

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { createElement } from './__test.utils.env'

// use Vue instead of createLocalVue
// use Vuetify explicitly
Vue.use(Vuetify)

const vuetify = new Vuetify()

describe('foo', () => {
  it('1', () => {
    const wrapper = mount(Foo, {
      localVue: Vue,
      attachTo: createElement(),
      vuetify,
      sync: false,
    })

    expect(wrapper.text()).toMatch(/foo/)

    wrapper.destroy()
  })
})
```

**Issue:** It works well at Vuetify@~2.2.x, but crashed at 2.3.x

**Expected:** It works well at the latest version.