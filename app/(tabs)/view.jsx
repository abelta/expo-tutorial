import useVisitedPages from '@/hooks/use-visited-pages';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const ViewScreen = () => {
    const [url, setUrl] = useState('https://google.com');
    const { add: addVisitedPage } = useVisitedPages();

    const navigationStateChange = (navState) => {
        setUrl(navState.url);
        addVisitedPage(navState.url);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>{url}</Text>
            </View>
            <WebView
                source={{ uri: 'https://google.com' }}
                style={{ flex: 1 }}
                onNavigationStateChange={navigationStateChange}
                />
        </SafeAreaView>
    );
}

export default ViewScreen;