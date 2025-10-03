import useVisitedPages from '@/hooks/use-visited-pages';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const HistoryPage = () => {
    const { pages } = useVisitedPages();

    const renderHistoryItem = ({ item }) => (
        <TouchableOpacity style={{
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
        }}>
            <Text style={{
                fontSize: 16,
                color: '#007AFF',
            }} numberOfLines={1}>
                {item.url || item}
            </Text>
            <Text style={{
                fontSize: 12,
                color: '#666',
                marginTop: 4,
            }}>
                {item.visitedAt ? new Date(item.visitedAt).toLocaleString() : 'Recently visited'}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>History</Text>
            {pages.length > 0 ? (
                <FlatList
                    data={pages}
                    keyExtractor={(item, index) => item.id || index.toString()}
                    renderItem={renderHistoryItem}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>
                    <Text style={{ fontSize: 16, color: '#666' }}>
                        No pages visited yet
                    </Text>
                </View>
            )}
        </View>
    );
};

export default HistoryPage;
