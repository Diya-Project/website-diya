import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

export default function useCheckAge(date: string) {
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
