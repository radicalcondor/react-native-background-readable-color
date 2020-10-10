import faker from 'faker';
import { useBackgroundReadableColor } from '../hooks/useBackgroundReadableColor';
import { ReadablePresets } from '../ReadablePresets';

describe('BackgroundReadableColor package', () => {

    describe('ReadablePresets', () => {
        it('should set/get the preset correctly', () => {
            const presetName = faker.random.word();
            const colorPreset = {
              light: faker.random.word(),
              dark: faker.random.word(),
            };
            ReadablePresets.setPreset(presetName, colorPreset);
            expect(ReadablePresets.getPreset(presetName)).toEqual(colorPreset);
        });

        it('should return undefined if preset is not set', () => {
          expect(ReadablePresets.getPreset(faker.random.word())).toEqual(undefined);
        });
    });
    
    describe('useBackgroundReadableColor hook', () => {    
      it('should return white on black background', () => {
        const props = {
          backgroundColor: '#000',
          presetName: undefined,
        }

        const color = useBackgroundReadableColor(props);

        expect(color).toBe('#fff');
      });

      it('should return black on white background', () => {
        const props = {
          backgroundColor: '#fff',
          presetName: undefined,
        }

        const color = useBackgroundReadableColor(props);

        expect(color).toBe('#000');
      });

      it('should return undefined if no backgroundColor is passed', () => {
        const props = {
          backgroundColor: undefined,
          presetName: undefined,
        }

        const color = useBackgroundReadableColor(props);

        expect(color).toBeUndefined();
      });

      it('should return preset.light on white background', () => {
        const presetName = 'RED';
        const preset = {
          dark: '#ff9c9c',
          light: '#6d0000',
        }
        ReadablePresets.setPreset(presetName, preset);

        const props = {
          backgroundColor: '#fff',
          presetName,
        };

        const color = useBackgroundReadableColor(props);

        expect(color).toBe(preset.light);
      });

      it('should return preset.dark on black background', () => {
        const presetName = 'RED';
        const preset = {
          dark: '#ff9c9c',
          light: '#6d0000',
        }
        ReadablePresets.setPreset(presetName, preset);

        const props = {
          backgroundColor: '#000',
          presetName,
        };

        const color = useBackgroundReadableColor(props);

        expect(color).toBe(preset.dark);
      });
    });
});


