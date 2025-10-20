import useUsers from "@/hooks/useUsers";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UsersScreen = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) return <SafeAreaView><Text>Loading...</Text></SafeAreaView>;
  if (error) return <SafeAreaView><Text>Error loading users</Text></SafeAreaView>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Users</Text>
      {data.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </SafeAreaView>
  );
};

export default UsersScreen;