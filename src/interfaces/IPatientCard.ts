export interface IPatientCard {
    id: number;
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
    }
}