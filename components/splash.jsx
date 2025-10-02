import LottieView from 'lottie-react-native';
import { useRef, useState } from "react";
import { Text, View } from "react-native";

const Splash = ({ onAnimationFinish }) => {
    const [error, setError] = useState(null);
    const animationRef = useRef(null);

    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', marginBottom: 20 }}>
                {error ? `Error: ${error}` : 'Loading...'}
            </Text>
            
            <LottieView
                ref={animationRef}
                source={require('../assets/images/test.json')}
                autoPlay={true}
                loop={false}
                speed={1}
                onAnimationFinish={() => {
                    console.log('Animation finished');
                    onAnimationFinish?.();
                }}
                onError={(err) => {
                    console.log('Lottie Error:', err);
                    setError(err.toString());
                    // Fallback - call onAnimationFinish after error
                    setTimeout(() => onAnimationFinish?.(), 1000);
                }}
                style={{ width: 300, height: 300 }}
                resizeMode="contain"
            />
        </View>
    );
}

export default Splash;
