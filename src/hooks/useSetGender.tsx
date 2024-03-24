import { FormReturn } from "@/type";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";


export default function useResetGender(method: UseFormReturn<FormReturn>, trigger: boolean): void {
    useEffect(() => {
        method.reset({ pajar: { gender: "L" }, ortu: {}, informasiTambahan: {} })
    }, [trigger, method])
}