import api from '@/app/api/http'
import { ResponseAttributes } from '@/type'
import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { FieldValues } from 'react-hook-form'



export default function useSendRegister(): UseMutationResult<AxiosResponse<ResponseAttributes>, Error, FieldValues, unknown> {
    const kirim = useMutation({
        mutationFn: (data: FieldValues) => api.post("/pajar", data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return kirim
}
