import { Records } from "@/app/models/interfaces/record";
export interface RecordsState{
    records: Records[],
    totalPages: number,
}

export type ExtendedRecordsState = { record?: RecordsState };

export const initialRecordsState: RecordsState = {
    records: [],
    totalPages: 0
}