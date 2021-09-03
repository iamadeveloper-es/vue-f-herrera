import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {
  it('debe hacer match con el snapshot', () => {

    const wrapper = shallowMount(Counter)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
