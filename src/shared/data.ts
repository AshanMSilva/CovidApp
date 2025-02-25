import { HospitalData } from './hospitalData';

export class Data{
    update_date_time: string;
    local_total_cases:string;
    local_new_cases:number;
    local_total_number_of_individuals_in_hospitals: number;
    local_deaths:number;
    local_new_deaths:number;
    local_recovered:number;
    local_active_cases:number;
    global_new_cases: number;
    global_total_cases:number;
    global_deaths: number;
    global_new_deaths:number;
    global_recovered: number;
    hospital_data: HospitalData[];
}