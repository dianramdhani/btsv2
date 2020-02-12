export class Table<T> {
    content: T[];
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: {
        offset?: 0,
        pageNumber?: 0,
        pageSize?: 0,
        paged?: boolean,
        sort?: {
            empty?: boolean,
            sorted?: boolean,
            unsorted?: boolean
        },
        unpaged?: boolean
    };
    size?: number;
    sort?: {
        empty?: boolean,
        sorted?: boolean,
        unsorted?: boolean
    };
    totalElements?: number;
    totalPages?: number;
}