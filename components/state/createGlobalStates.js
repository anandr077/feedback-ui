import { useQueries, useQueryClient } from '@tanstack/react-query';

export function createGlobalStates(queryKey, queryFunction) {
  return function (queryArray, condition = true, id = null) {
    const queryClient = useQueryClient();

    const queries = queryArray
      ? queryArray.map((current) => ({
          queryKey: [queryKey, id ? current[id] : current],
          queryFn: () => queryFunction(id ? current[id] : current),
          refetchInterval: false,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          staleTime: 3600000,
          enabled: condition,
        }))
      : [];

    const results = useQueries({
      queries,
    });

    

    const data = results.map((result) => result.data);
    console.log('createGlobalStatesData', data);
    const isLoadingdata = results.some((result) => result.isLoading);

    function setData(data) {
      queryClient.setQueryData(fullQueryKey, data);
    }

    
    function resetData() {
      queries.forEach((query) => {
        queryClient.invalidateQueries({
          queryKey: query.queryKey,
        });
        queryClient.refetchQueries({
          queryKey: query.queryKey,
        });
      });
    }


    return { data, isLoadingdata, resetData };
  };
}
