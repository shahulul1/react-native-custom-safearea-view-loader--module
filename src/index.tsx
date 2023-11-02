import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  View,
  StatusBar,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import { type Edges, SafeAreaView} from 'react-native-safe-area-context';

export type SafeAreaProps = {
  translucent?: boolean;
  darkContent?: boolean;
  backgroundColor?: string;
  showLoadingIndicator?: boolean;
  children?: JSX.Element;
  edges?: Edges;
  style?: StyleProp<ViewStyle>;
  indicatorColor?: string;
  indicatorSize?: number | 'small' | 'large'
  hidden?: boolean
};

const CustomSafeAreaViewLoader = (props: SafeAreaProps) => {

  return (
    <>
      <StatusBar
        translucent={props.translucent ? props.translucent : false}
        barStyle={props.darkContent ? 'dark-content' : 'light-content'}
        backgroundColor={
          props.backgroundColor ? props.backgroundColor : 'black'
        }
        hidden={props.hidden}
      />
      <SafeAreaView
        pointerEvents = {props.showLoadingIndicator ? 'none' : 'auto'}
        edges={props.edges ? props.edges : ['right', 'left']}
        style={[
          styles.container,
          {backgroundColor: props.showLoadingIndicator ? 'rgba(0,0,0,0.2)': 'white'},
          props.style,
        ]}>
        {props.showLoadingIndicator ? (
          <View style={styles.loader}>
            <ActivityIndicator size={props.indicatorSize ?? "large"} color={props.indicatorColor ?? "white"} />
          </View>
        ) : null}
        {props.children}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    zIndex: 999,
    height: 50,
    width: 50,
    left: Dimensions.get('window').width / 2 - 25,
    top: Dimensions.get('window').height / 2 - 25,
    position: 'absolute',
  },
});
export default CustomSafeAreaViewLoader;
