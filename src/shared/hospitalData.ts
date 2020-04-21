import { Hospital } from './hospital';

export class HospitalData{
    id:number;
    hospital_id: number;
    cumulative_local:number;
    cumulative_foreign:number;
    treatment_local: number;
    treatment_foreign:number;
    created_at:string;
    updated_at:string;
    deleted_at:string;
    cumulative_total:number;
    treatment_total:number;
    hospital: Hospital;
}