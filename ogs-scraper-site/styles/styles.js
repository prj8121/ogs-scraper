import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffcc66',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      backgroundColor: '#ffe6b3',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      borderColor: 'black',
      borderWidth:3,
    },
    button: {
      backgroundColor: '#668cff',
      padding: 1,
      borderRadius: 10,
    },
    iosShadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    bordered: {
      borderColor: 'black',
      borderWidth:2,
    }
});

export default styles;