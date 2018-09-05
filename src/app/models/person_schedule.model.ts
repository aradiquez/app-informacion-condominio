export interface PersonSchedule {
    id: number,
    person_id: number,
    start_time: Date,
    end_time: Date,
    monday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    thursday: boolean,
    friday: boolean,
    saturday: boolean,
    sunday: boolean,
    holidays: boolean,
    created_at: Date,
    updated_at: Date,
    url: string
}