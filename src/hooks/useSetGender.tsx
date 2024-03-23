import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";


export default function useResetGender(method: UseFormReturn<any>, trigger: boolean): void {
    useEffect(() => {
        method.reset({ pajar: { gender: "L" }, ortu: {}, informasiTambahan: {} })
    }, [trigger,method])
}