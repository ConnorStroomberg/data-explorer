import { shallowMount } from '@vue/test-utils'
import DataExplorer from '@/components/DataExplorer.vue'

describe('DataExplorer.vue', () => {
  it('renders when passed called', () => {
    const collectionData = {
      meta: {
        label: 'demo entity label'
      }
    }
    const wrapper = shallowMount(DataExplorer, {
      propsData: { collectionData }
    })
    expect(wrapper.text()).toMatch('demo entity label')
  })
})
