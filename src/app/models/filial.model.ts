export interface Filial {
    id: number,
    number: number,
    filial_name: string,
    created_at: Date,
    updated_at: Date,
    url: string,
    condominiums: [
        {
            id: number,
            first_name: string,
            last_name: string,
            identification: string,
            filial_number: number,
            phone_number: number,
            status: number,
            active: boolean,
            birthday: Date,
            created_at: Date,
            updated_at: Date,
            url: string
        }
    ],
    condominium_childs: [
        {
            id: number,
            first_name: string,
            last_name: string,
            identification: string,
            car_plate: string,
            filial_id: number,
            created_at: Date,
            updated_at: Date,
            url: string
        }
    ],
    authorized_vehicles: [
        {
            id: number,
            car_plate: string,
            brand: string,
            color: string,
            style: string,
            other: string,
            filial_id: number,
            created_at: Date,
            updated_at: Date,
            url: string
        }
    ],
    people: [
        
        {
            id: number,
            first_name: string,
            last_name: string,
            identification: string,
            nationality: string,
            car_plate: string,
            person_type_id: number,
            filial_id: number,
            created_at: Date,
            updated_at: Date,
            url: string,
            person_question: [
                {
                    id: number,
                    person_id: number,
                    question: {
                        id: number,
                        question: string,
                        active: boolean,
                        required: boolean,
                        person_type_id: number,
                        created_at: Date,
                        updated_at: Date
                    },
                    status: boolean,
                    created_at: Date,
                    updated_at: Date,
                    url: string
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
            ]
        }
    ]
}