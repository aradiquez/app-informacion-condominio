export interface People {
    id: number,
    first_name: string,
    last_name: string,
    identification: string,
    nationality: string,
    car_plate: string,
    person_type_id: number,
    person_question: [
        {
            id: number,
            question: string,
            active: boolean,
            required: boolean,
            person_type_id: number,
            created_at: Date,
            updated_at: Date
        }
    ],
    person_schedule: [
        {
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
    ],
    filial_id: number,
    created_at: Date,
    updated_at: Date,
    url: string
}