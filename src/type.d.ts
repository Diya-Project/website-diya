import { FieldValues } from "react-hook-form";

export type InputType = 'text' | 'number' | 'password' | 'date' | 'datetime-local' | 'radio' | 'checkbox'

export type SelectAttributes = {
    value: string | number | null;
    label: string | number | null;
}

export type MethodName = 'pajar' | 'ortu' | 'informasiTambahan' | 'pajar.nama' | 'pajar.tempatLahir' | 'pajar.tanggalLahir' | 'pajar.nik' | 'pajar.jenisKelamin' | 'pajar.asalSekolah' | 'pajar.jurusan' | 'pajar.alamat' | 'pajar.hobi' | 'pajar.nomorHp' | 'pajar.program' | 'ortu.bapak' | 'ortu.ibu' | 'ortu.wali' | 'ortu.alamat' | 'ortu.nomorHp' | 'informasiTambahan.pengalaman' | 'informasiTambahan.motivasi' | 'informasiTambahan.info'

type GenderAttributes = "L"

type PajarAttributes = {
    nama: string;
    tempatLahir: string;
    tanggalLahir: string;
    nik: string;
    jenisKelamin: NonNullable<"L" | "W" | undefined>;
    asalSekolah: string;
    jurusan: string;
    alamat: string;
    hobi: string;
    nomorHp: string;
    program: string;
};

type OrtuPajarAttributes = {
    bapak: string;
    ibu: string;
    wali: string;
    alamat: string;
    nomorHp: string;
}

type InformasiTambahanAttributes = {
    pengalaman: string;
    motivasi: string;
    info: string;
};

export type RegisterAttributes = {
    pajar: PajarAttributes;
    ortu: OrtuPajarAttributes;
    informasiTambahan: InformasiTambahanAttributes
}

export type ResponseAttributes = {
    msg: string;
}

type UseFormReturn = {
    formData: RegisterAttributes;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};


export type FormReturn = UseFormReturn<{
    pajar: PajarAttributes
    ortu: OrtuPajarAttributes;
    informasiTambahan: InformasiTambahanAttributes
}, FieldValues, undefined>