import { readableColor } from "polished";
import { ReadablePresets } from "../ReadablePresets";

export interface HookProps {
  backgroundColor?: string;
  presetName?: string;
}

export const useBackgroundReadableColor = ({ backgroundColor, presetName }: HookProps) => {
  if (!backgroundColor) { return undefined; }
  const preset = presetName && ReadablePresets.getPreset(presetName) || undefined;
  return readableColor(backgroundColor, preset?.light, preset?.dark);
};