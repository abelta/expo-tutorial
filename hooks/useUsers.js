import getUsers from "@/api/getUsers";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export default useUsers;
