'use client'
import React, { useState } from 'react'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import useGetQuotaReguler from '@/hooks/react-query/useGetQuotaReguler'
import useCheckAge from '@/hooks/react-query/useCheckAge'
import useSendRegister from '@/hooks/react-query/useSendRegister'
import { useRouter } from 'next/navigation'
import useResetGender from '@/hooks/useSetGender'
import DialogForm from '@/templates/DialogForm'
import Dialog from '@/components/Dialog'
import InputForm from '@/components/fields/InputForm'
import RadioForm from '@/components/fields/RadioForm'
import TextAreaForm from '@/components/fields/TextAreaForm'


export default function Pendaftaran() {
  const [tchbeasiswa, setTchBeasiswa] = useState(false)
  const [tchreguler, setTchReguler] = useState(false)
  const [showSave, setShowSave] = useState(false)
  const [showMsg, setShowMsg] = useState(false)
  const [form, setForm] = useState(false)
  const [msgUmur, setMsgUmur] = useState("")
  const [dataPajar, setDataPajar] = useState({})
  const router = useRouter()
  const method = useForm({
    mode: "all",
    resolver: yupResolver(
      yup.object().shape({
        pajar: yup.object().shape({
          nama: yup.string().required("Nama tidak boleh kosong"),
          tempatLahir: yup.string().required("Tempat Lahir tidak boleh kosong"),
          tanggalLahir: yup.string().required("Tanggal Lahir tidak boleh kosong"),
          nik: yup.string().min(16, "Minimal 16 karakter").required("Nik tidak boleh kosong"),
          jenisKelamin: yup.string().oneOf(["L", "W"], "Pilih salah satu").required("Jenis Kelamin tidak boleh kosong"),
          asalSekolah: yup.string().required("Asal Sekolah tidak boleh kosong"),
          jurusan: yup.string().required("Jurusan tidak boleh kosong"),
          alamat: yup.string().required("Alamat tidak boleh kosong"),
          hobi: yup.string().required("Hobi tidak boleh kosong"),
          nomorHp: yup.string().required("No hp tidak boleh kosong"),
          program: yup.string().required("Program tidak boleh kosong"),
        }),
        ortu: yup.object().shape({
          bapak: yup.string().required("Nama Bapak tidak boleh kosong"),
          ibu: yup.string().required("Nama Ibu tidak boleh kosong"),
          wali: yup.string(),
          alamat: yup.string().required("Alamat ortu tidak boleh kosong"),
          nomorHp: yup.string().required("No hp ortu tidak boleh kosong"),
        }),
        informasiTambahan: yup.object().shape({
          pengalaman: yup.string().required("Pengalaman tidak boleh kosong"),
          motivasi: yup.string().required("Motivasi tidak boleh kosong"),
          info: yup.string().required("Info tidak boleh kosong"),
        })
      })
    )
  })
  const watchTanggalLahir = method.watch("pajar.tanggalLahir")
  const watchProgram = method.watch('pajar.program')
  const reguler = useGetQuotaReguler()
  const umur = useCheckAge(watchTanggalLahir)
  const kirim = useSendRegister()
  const send = (e: FieldValues) => {
    console.log(e)
    if (e.pajar.program === "beasiswa") {
      if (umur.data?.data.status) {
        setDataPajar(e)
        kirim.mutate(e)
        setMsgUmur("Pendaftaran Berhasil, silahkan unduh formulir izin belajar")
      }
      else {
        setMsgUmur("Umur tidak memenuhi syarat!")
      }
    }
    else {
      if (reguler.data?.data?.open) {
        setDataPajar(e)
        kirim.mutate(e)
        setMsgUmur("Pendaftaran Berhasil")
      }
      else {
        setMsgUmur("Kuota terpenuhi! Dibuka kembali saat ada peserta yang mengundurkan diri.")
      }
    }
    setShowMsg(true)
    setShowSave(false)
  }
  // useResetGender(method, showMsg)
  console.log(watchProgram)
  return (
    <div>
      <DialogForm show={showMsg} toggle={setShowMsg} msg={msgUmur}>
        <div className={`${msgUmur !== "Umur tidak memenuhi syarat!" ? "block" : "hidden"}`}>
          {watchProgram === 'beasiswa'?
            <button onClick={() => {
              window.open("https://unduh.diyaproject.id/pdf/izinortu2024.pdf")
              router.push("/")
            }} type="button" className='bg-blueDiya text-white hover:bg-whiteDiya hover:text-[#00698f] border hover:border-[#00698f] w-full py-2 mt-2 rounded-md transition-colors ease-in-out duration-300'>Unduh formulir</button>
            :
            <button onClick={() => router.push("/")} type="button" className='bg-blueDiya text-white hover:bg-whiteDiya hover:text-[#00698f] border hover:border-[#00698f] w-full py-2 mt-2 rounded-md transition-colors ease-in-out duration-300'>Kembali ke beranda</button>
          }
        </div>
      </DialogForm>
      <form onSubmit={method.handleSubmit(send)} className='md:mt-[5.5rem] mt-[5rem]'>
        <div className='flex flex-col items-center p-4'>
          <h1 className='text-3xl'>Formulir Pendaftaran</h1>
        </div>
        <div className='md:w-[60vw] w-[95vw] mx-auto md:my-5 my-1 bg-white p-4 rounded-lg shadow-lg shadow-[#42cdff]'>
          <h1 className='font-sans text-lg text-gray-800'>Pilihan Program Kamu</h1>
          <div className='flex justify-between my-3'>
            <div onClick={() => {
              setTchBeasiswa(!tchbeasiswa)
              setTchReguler(false)
              method.setValue("pajar.program", "beasiswa")
            }} className={`border-2 rounded-lg p-3 w-[48%] shadow-lg cursor-pointer transition-colors ease-in-out duration-300 ${tchbeasiswa ? "border-[#00698f] text-[#00698f] font-semibold" : "border-gray-300 text-gray-700"}`}>
              <h1>Bootcamp Beasiswa</h1>
            </div>
            <div onClick={() => {
              setTchReguler(!tchreguler)
              setTchBeasiswa(false)
              method.setValue("pajar.program", "reguler")
            }} className={`border-2 rounded-lg p-3 w-[48%] shadow-lg cursor-pointer transition-colors ease-in-out duration-300 ${tchreguler ? "border-[#00698f] text-[#00698f] font-semibold" : "border-gray-300 text-gray-700"}`}>
              <h1>Bootcamp Reguler</h1>
              <p className={`text-gray-400 text-sm ${tchreguler ? "block" : "hidden"}`}>Silahkan transfer biaya ke no rekening Bank BSI 7135963857 atas nama Lembaga Kursus Diya </p>
            </div>
          </div>
          <div className='my-3'>
            <h1 className='font-sans text-lg text-gray-800 mb-1'>Peserta</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-3'>
              <InputForm id='input-nama' title="Nama" method={method} methodName="pajar.nama" />
              <InputForm id='input-nik' title="Nik" method={method} methodName="pajar.nik" />
              <InputForm id='input-tempat-lahir' title="Tempat Lahir" method={method} methodName="pajar.tempatLahir" />
              <InputForm id='input-tanggal-lahir' title="Tanggal Lahir" method={method} methodName="pajar.tanggalLahir" type="date" />
              <InputForm id='input-alamat-pajar' title="Alamat" method={method} methodName="pajar.alamat" />
              <div>
                <h1 className='font-sans text-gray-700 mb-1'>Jenis Kelamin</h1>
                <div className='flex my-auto md:space-x-0 space-x-2'>
                  <RadioForm method={method} methodName="pajar.jenisKelamin" val="L" title="Pria" />
                </div>
              </div>
              <InputForm id='input-asal-sekolah' title="Asal sekolah" method={method} methodName="pajar.asalSekolah" />
              <InputForm id='input-jurusan' title="Jurusan" method={method} methodName="pajar.jurusan" />
              <InputForm id='input-no-hp-pajar' title="No Hp" method={method} methodName="pajar.nomorHp" />
              <InputForm id='input-hobi' title="Hobi" method={method} methodName="pajar.hobi" />
            </div>
          </div>
          <div>
            <h1 className='font-sans text-lg text-gray-800 mb-1'>Ortu/Wali</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-3'>
              <InputForm id='input-bapak' title="Bapak" method={method} methodName="ortu.bapak" />
              <InputForm id='input-ibu' title="Ibu" method={method} methodName="ortu.ibu" />
              <InputForm id='input-wali' title="Wali (diisi jika ditanggung oleh selain orang tua) " method={method} methodName="ortu.wali" />
              <InputForm id='input-alamat-wali' title="Alamat" method={method} methodName="ortu.alamat" />
              <InputForm id='input-no-hp-wali' title="No hp" method={method} methodName="ortu.nomorHp" />
            </div>
          </div>
          <div>
            <h1 className='font-sans text-lg text-gray-800 mb-1'>Informasi</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-3'>
              <TextAreaForm id='input-pengalaman' title="Pengalaman" method={method} methodName="informasiTambahan.pengalaman" />
              <TextAreaForm id='input-motivasi' title="Motivasi" method={method} methodName="informasiTambahan.motivasi" />
              <TextAreaForm id='input-info' title="Info" method={method} methodName="informasiTambahan.info" />
            </div>
          </div>
          <div className='flex justify-end mt-3 mb-1'>
            <button onClick={() => {
              setShowSave(true)
            }} type="button" className='bg-blueDiya text-white hover:bg-whiteDiya hover:text-[#00698f] border hover:border-[#00698f] px-10 py-2 mt-2 rounded-md transition-colors ease-in-out duration-300'>Kirim formulir</button>
          </div>
          <Dialog show={showSave} toggle={setShowSave} setMargin="md:mt-[35vh] mt-[35vh] ">
            <div className='bg-white md:w-[50vw] w-[90vw] h-full rounded-lg px-3 py-4'>
              <h1 className='mt-8 mb-4 text-center text-xl font-sans'>Apakah isian formulir anda sudah benar?</h1>
              <button type="submit" className='bg-blueDiya text-white hover:bg-whiteDiya hover:text-[#00698f] border hover:border-[#00698f] w-full py-2 mt-2 rounded-md transition-colors ease-in-out duration-300'>Kirim formulir</button>
            </div>
          </Dialog>
        </div>
      </form >
    </div >
  )
}
