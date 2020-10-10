interface ColorPreset {
  light?: string,
  dark?: string,
}

class StaticReadablePresets {
  private presets: Record<string, ColorPreset> = {};

  setPreset = (name: string, preset: ColorPreset) => {
    this.presets[name] = preset;
  }

  getPreset = (name: string): ColorPreset | undefined => this.presets[name]; 
}

export const ReadablePresets = new StaticReadablePresets();