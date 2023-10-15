export class User {
    id: number = 0;
    username: string = ""
    firstname: string = "";
    lastname: string = "";
    phone: string | null = "";
    email: string | null = "";
    isReviewer: boolean = false;
    isAdmin: boolean = false;
}