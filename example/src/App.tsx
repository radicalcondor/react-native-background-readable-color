import * as React from 'react';
import { View, Text} from 'react-native';
import BackgroundReadableColorText, { ReadablePresets, 
  ReadableBackgroundColor 
}  from '@radicalcondor/react-native-background-readable-color';
import styled from 'styled-components/native';

const Container = styled.View<{
  bgColor?: string;
}>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({bgColor}) => bgColor || 'transparent'}
`;

const ColorButton = styled.TouchableOpacity<{
  bgColor?: string;
}>`
  width: 30px;
  height: 30px;
  border-width: 1px;
  border-color: black;
  background-color: ${({bgColor}) => bgColor || 'white'};
  align-items: center;
  justify-content: center;
`;

const ClearColorIcon = styled.View`
  height: 3px;
  width: 125%;
  background-color: red;
  transform: rotate(45deg);
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: purple;
  margin-top: 30px;
`;

const StyledTextWithColorProps = styled(StyledText)<{
  color?: string;
}>`
  color: ${({color}) => color ? color : 'orange'};
`;

const StyledTextWithColorPropsPink = styled(StyledText)<{
  color?: string;
}>`
  color: ${({color}) => color ? color : 'pink'};
`;

const colors = [
  undefined,
  'white',
  'black',
  'red',
  'brown',
  'yellow',
  'purple',
  'green',
  'blue',
  'grey',
  'pink',
  'orange',
];

ReadablePresets.setPreset('RED', {
  dark: '#ff9c9c',
  light: '#6d0000',
});

export default function App() {
  const [bgColor, setBgColor] = React.useState<string | undefined>();

  return (
    <Container bgColor={bgColor}>
      <BackgroundReadableColorText backgroundColor={bgColor} render={Text}>
          BLACK
      </BackgroundReadableColorText>
      <BackgroundReadableColorText backgroundColor={bgColor} render={StyledText}>
          PURPLE
      </BackgroundReadableColorText>
      <BackgroundReadableColorText backgroundColor={bgColor} render={StyledText} presetName='RED'>
          PURPLE PRESET
      </BackgroundReadableColorText>
      <ReadableBackgroundColor
          backgroundColor={bgColor}
          useMemo
          render={(color?: string) => <Text style={{color: color || 'cyan'}}>CYAN</Text>}
      />
      <ReadableBackgroundColor
          backgroundColor={bgColor}
          useMemo
          render={(color?: string) => <StyledTextWithColorProps color={color}>ORANGE</StyledTextWithColorProps>
        }
      />
      <ReadableBackgroundColor
          backgroundColor={bgColor}
          presetName='RED'
          useMemo
          render={(color?: string) => <StyledTextWithColorProps color={color}>ORANGE PRESET</StyledTextWithColorProps>
        }
      />
      <ReadableBackgroundColor 
        backgroundColor={bgColor}
        render={(color) => (
            <View>
              <Text style={{color: color || 'green'}}>GREEN</Text>
              <StyledTextWithColorPropsPink color={color}>PINK</StyledTextWithColorPropsPink>
            </View>
          )
        } 
      />
      <ReadableBackgroundColor 
        backgroundColor={bgColor}
        presetName='RED'
        render={(color) => (
            <View>
              <Text style={{color: color || 'white'}}>WHITE PRESET</Text>
              <StyledTextWithColorPropsPink color={color}>PINK PRESET</StyledTextWithColorPropsPink>
            </View>
          )
        } 
      />
      <View style={{flexDirection: 'row', marginTop: 30}}>
          {
            colors.map(color => (
              <ColorButton key={color || 0} bgColor={color} onPress={() => setBgColor(color)}>
                {!Boolean(color) && <ClearColorIcon />}
              </ColorButton>
            ))
          }
      </View>
    </Container>
  );
}