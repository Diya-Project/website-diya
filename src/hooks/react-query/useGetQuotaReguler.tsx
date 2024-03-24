import api from '@/app/api/http'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useEffect } from 'react'

type RegulerAttributes = {
    open: boolean;
}

export default function useGetQuotaReguler(): UseQueryResult<AxiosResponse<RegulerAttributes>, Error> {
    const reguler = useQuery({
        queryKey: ["get-kuota"],
        queryFn: () => api.get('/pajar/reguler/status'),
    })
    useEffect(() => {
        reguler.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return reguler
}
