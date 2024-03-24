import api from '@/app/api/http'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useEffect } from 'react'

type UmurAttributes = {
    status: boolean;
}

export default function useCheckAge(date: string): UseQueryResult<AxiosResponse<UmurAttributes>, Error> {
    const umur = useQuery({
        queryKey: ["get-umur"],
        queryFn: () => api.get(`/pajar/age/${date}`),
        enabled: date ? true : false
    })
    useEffect(() => {
        umur.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])
    return umur
}
