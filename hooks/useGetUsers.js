import { useQuery } from "@tanstack/react-query"
import { supabase } from "../supabase"

export default function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return await supabase
      .from('profiles')
      .select(`id, full_name, avatar_url, bio, ai`);
    },
  })
}
