import moment from "moment"

const tanggalTes = [
    { start: '2024-03-23', end: '2024-04-23', test: '2024-04-28', result: '2024-05-05' },
    { start: '2024-03-23', end: '2024-04-23', test: '2024-04-28', result: '2024-05-05' },
]

const date = new Date()
const now = moment(date)

export function useGetNow(){
    return now.toDate()
}

export function useGetStartTime(): Date {
    return moment(tanggalTes.find((e) => moment(e.end) >= now)?.start).toDate()
}

export function useGetEndTime(): Date {
    return moment(tanggalTes.find((e) => moment(e.end) >= now)?.end).toDate()
}

export function useGetTestTime(): Date {
    return moment(tanggalTes.find((e) => moment(e.end) >= now)?.test).toDate()
}

export function useGetResultTestTime(): Date {
    return moment(tanggalTes.find((e) => moment(e.end) >= now)?.result).toDate()
}

export function useGetWave(): number {
    return moment(tanggalTes[0].test) > now ? 1 : 2
}