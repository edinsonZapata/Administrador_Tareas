import { StatusTask } from "@/app/enums";
import { Records } from "@/app/models/interfaces/record";
export interface RecordsState{
    records: Records[],
    totalPages: number,
    status: StatusTask[]
}

export type ExtendedRecordsState = { records?: RecordsState };

export const initialRecordsState: RecordsState = {
    records: [],
    totalPages: 0,
    status:  []
}