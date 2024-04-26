import { useMutation, useQueryClient } from "@tanstack/react-query"
import { supabase } from "../supabase"

export default function(argumentId) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (like) => {
      return supabase.from('likes').upsert(like)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likeCount', argumentId] })
    },
  })
}