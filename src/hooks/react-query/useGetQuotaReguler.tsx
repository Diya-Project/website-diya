import api from '@/app/api/http'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import React, { useEffect } from 'react'

export default function useGetQuotaReguler():UseQueryResult<AxiosResponse<any, any>, Error> {
    const reguler  = useQuery({
        queryKey : ["get-kuota"],
        queryFn : ()=> api.get('/pajar/reguler/status'),
    })
    useEffect(()=>{
        reguler.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return reguler
}
