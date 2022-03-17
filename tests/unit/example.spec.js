import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

import HomeView from '../../src/views/HomeView'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('HomeView',  () => {
  const wrapper = shallowMount(HomeView);

  it('correctly get the data', async () => {
      
      expect( await wrapper.vm.hello() ).toBe('Hello World');
  })
})
