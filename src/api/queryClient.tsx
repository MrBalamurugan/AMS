import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      console.error("Global Query Error:", error?.message);
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: any) => {
      console.error("Global Mutation Error:", error?.message);
    },
  }),

  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
