import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {
  /*it('debe hacer match con el snapshot', () => {

    const wrapper = shallowMount(Counter)

    expect(wrapper.html()).toMatchSnapshot()
  })*/

  it('h2 debe tener el valor por defecto de "Counter"', () => {
    const wrapper  = shallowMount(Counter)

    const h2Text = wrapper.find('[data-test-id="h2-title"]').text()

    expect(h2Text).toBe('Counter')
  })
})
