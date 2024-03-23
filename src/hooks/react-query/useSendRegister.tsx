import api from '@/app/api/http'
import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export default function useSendRegister(): UseMutationResult<AxiosResponse<any, any>, Error, void, unknown> {
    const kirim = useMutation({
        mutationFn: (data) => api.post("/pajar", data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return kirim
}
