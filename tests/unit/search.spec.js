import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

xdescribe('Component', () => {
  describe('Search', () => {
    const wrapper = shallowMount(Search);
    it('check text', async () => {
      await wrapper.find('b-form-input').setValue('Search');
      expect(wrapper.vm.searchText).toBe('Search');
    });
  });
});
