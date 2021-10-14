export interface IPatientCard {
    name: {
        title: string;
        first: string;
        last: string
    };
    gender: string;
    dob: {
        date: string;
    }
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    },
    login: {
        uuid: string;
    },
    email: string;
    phone: string;
    cell: string;
    nat: string;
    location: {
        street: {
            number: number;
            name: string;
        },
        city: string;
        state: string;
        country: string;
    },
    id: {
        name: string;
        value: string;
    },
}