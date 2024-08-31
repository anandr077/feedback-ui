import { useQuery, useQueryClient } from '@tanstack/react-query';

export function createGlobalState(queryKey, queryFunction) {
  return function (id = null, condition = true, time = 3600000 ) {
    const queryClient = useQueryClient();
    const fullQueryKey = id ? [queryKey, id] : [queryKey];

    const { data, isLoading: isLoadingdata } = useQuery({
      queryKey: fullQueryKey,
      queryFn: async () => {
        const result = await (id ? queryFunction(id) : queryFunction());
        return result;
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      keepPreviousData: true,
      enabled: condition,
      staleTime: time,
      cacheTime: time,
    });

    function setData(data) {
      queryClient.setQueryData(fullQueryKey, data);
    }

    function resetData() {
      queryClient.invalidateQueries({
        queryKey: fullQueryKey,
      });
      queryClient.refetchQueries({
        queryKey: fullQueryKey,
      });
    }

    return { data, isLoadingdata, setData, resetData };
  };
}
