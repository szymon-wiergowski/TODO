export interface Task {
    status: string;
    data: Data[];
}

export interface Data {
    id?: string;
    candidate?: string;
    task?: string;
    is_completed?: number;
    isDeleted?: boolean;
}