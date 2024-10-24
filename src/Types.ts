export interface Tweet {
    id: string;
    content: string;
    userId: string | null;  //idi user
    createdAt: string; //waktu pembuatan 
}



export interface IUser {
    id: string;
    username: string;
    password: string;
    followers: string[];
    following: string[];
}

export interface IRegis {
    id: number;
    username: string;
    email: string;
    password: string;
}