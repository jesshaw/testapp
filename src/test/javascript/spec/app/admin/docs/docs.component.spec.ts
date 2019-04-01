import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import LxmDocs from '@/admin/docs/docs.vue';
import LxmDocsClass from '@/admin/docs/docs.component';

import * as config from '@/shared/config/config';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);

describe('LxmDocs', () => {
  let lxmDocs: LxmDocsClass;
  let wrapper: Wrapper<LxmDocsClass>;

  beforeEach(() => {
    wrapper = shallowMount<LxmDocsClass>(LxmDocs, {
      i18n,
      localVue
    });
    lxmDocs = wrapper.vm;
  });

  it('should be a Vue instance', async () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
