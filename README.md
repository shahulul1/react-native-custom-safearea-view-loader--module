# react-native-custom-safearea-view-loader--module

This package can be used for loader to show in the middle of screen

## Installation

```sh
npm install react-native-custom-safearea-view-loader--module
```

## Usage

```js
import CustomSafeAreaView from 'react-native-custom-safearea-view-loader--module';;

// ...
export default function() {
 const [showLoader,setShowLoader] = useState(false)

return (
    <CustomSafeAreaView 
    indicatorColor='red' 
    showLoadingIndicator= {showLoader} 
    edges={['top']}
    
    >
    {
        //...child element of a screen
    }
    </CustomSafeAreaView>
)
}

```
## Properties
 translucent?: boolean; //Status Bar '\n'
 darkContent?: boolean; // Status Bar
 backgroundColor?: string; // Status Bar background color
 showLoadingIndicator?: boolean;
 children?: JSX.Element;
 edges?: Edges;
 style?: StyleProp<ViewStyle>; // Container Style
 indicatorColor?: string;
 indicatorSize?: number | 'small' | 'large'

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
