export interface PersonQuestion {
    id: number,
    person_id: number,
    status: boolean,
    created_at: Date,
    updated_at: Date,
    question: {
        id: number,
        question: string,
        active: boolean,
        required: boolean,
        person_type_id: number,
        created_at: Date,
        updated_at: Date
    }
    url: string
}