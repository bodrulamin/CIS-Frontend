import { UserType } from "./usertype.enum"

export class User{
    fullname: string = ''
    username: string = ''
    password: string = ''
    phone: string = ''
    
    email: string = ''

    address: string = ''
    usertype: UserType = UserType.citizen 


}
