import moment from "moment"

const tanggalTes = [
    { start: '2024-03-25', end: '2024-04-30', test: '2024-04-28', result: '2024-05-05' },
    { start: '2024-05-10', end: '2024-06-10', test: '', result: '' },
]

const date = new Date()
const now = moment(date)

export function useGetNow(){
    return now.toDate()
}

export function useGetStartTime(): Date|null {
    return tanggalTes.find((e) => moment(e.end) >= now)?.start ?  moment(tanggalTes.find((e) => moment(e.end) >= now)?.start).toDate() : null
}

export function useGetEndTime(): Date|null {
    return tanggalTes.find((e) => moment(e.end) >= now)?.end ?  moment(tanggalTes.find((e) => moment(e.end) >= now)?.end).toDate() : null
}

export function useGetTestTime(): Date|null {
    return tanggalTes.find((e) => moment(e.end) >= now)?.test ?  moment(tanggalTes.find((e) => moment(e.end) >= now)?.test).toDate() : null
}

export function useGetResultTestTime(): Date|null {
    return tanggalTes.find((e) => moment(e.end) >= now)?.result ?  moment(tanggalTes.find((e) => moment(e.end) >= now)?.result).toDate() : null
}

export function useGetWave(): number {
    return moment(tanggalTes[0].test) > now ? 1 : 2
}