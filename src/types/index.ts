export type AppointmentT = {
    id: number|string
    ownerName: string
	petName:string
    aptDate: string
    aptNotes: string
}
export type SortOptionsT = {
	orderBy: "ownerName" | "petName" | "aptDate"
	orderDir: "asc" | "desc"
}