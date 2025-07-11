 type User = {
    id: number;
    name: string;
    email: string;
};


type Admin = {
    id: number;
    name: string;
    email: string;
    role: string;
};


export const UserList : User[] = [
    { id: 1, name: "John Doe", email: "4kM5T@example.com" },
    { id: 2, name: "Appie", email: "4kM5T@example.com" },
    { id: 3, name: "Manoj", email: "4kM5T@example.com" },
];


export const AdminList : Admin[] = [
    { id: 1, name: "Manoj", email: "manu@gmail.com", role: "admin" },

];