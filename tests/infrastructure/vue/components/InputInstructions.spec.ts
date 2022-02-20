import { shallowMount } from '@vue/test-utils';
import InputInstructions from '@/infrastructure/vue/components/InputInstructions.vue';

describe('InputInstructions Component', () => {
  const wrapper = shallowMount(InputInstructions);

  test('Shoud have the essential buttons', () => {
    const buttons = wrapper.findAll('#instructions-panel button');

    expect( buttons.length ).toBe(4);
    expect( buttons[0].text() ).toBe('L');
    expect( buttons[1].text() ).toBe('F');
    expect( buttons[2].text() ).toBe('R');
    expect( buttons[3].text() ).toBe('DEL');
  })

  test('Should add and delete instructions', async() => {
    const [ L, F, R, Del ] = wrapper.findAll('#instructions-panel button');
    const input = wrapper.find('#input-instructions');
    
    await L.trigger('click');
    await F.trigger('click');
    await R.trigger('click');

    if(input.element instanceof HTMLInputElement) {
      expect(input.element.value).toBe('LFR');
    }

    await Del.trigger('click');

    if(input.element instanceof HTMLInputElement) {
      expect(input.element.value).toBe('LF');
    }
  })
})