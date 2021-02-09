import * as Helpers from './utility';
import Person from './person';

export function Validate(){
    const user = new Person();
    user.forenames = Helpers.getValue("forename");
    user.surname = Helpers.getValue("surname");
    user.nickname = Helpers.getValue("nickname");
    user.email = Helpers.getValue("email");
    user.password = Helpers.getValue("password")

    let message: string = "";
    //Validate forename
    if (user.forenames.length < 1){
        message = "Forenames need to be more than one letter.";
        Helpers.logger(message);
    }
    if (user.surname.length < 2){
        message = "Surname needs to be more than two letters.";
        Helpers.logger(message);
    }
    if (user.email.length < 4){
        message = "email needs to be more than four letters and must have an @ sign.";
        Helpers.logger(message);
    } else if(user.email.indexOf('@')<0){
        message = "email needs to be more than four letters and must have an @ sign.";
        Helpers.logger(message);
    }
    if (user.password.length >= 4){
        let passwordCheck: boolean = (user.password === Helpers.getValue("confirm_password"));
        if(!passwordCheck) {
            message = "Password needs to be more than four letters and should match.";
            Helpers.logger(message);
        }
    }else{
        message = "Password needs to be more than four letters and should match."
        Helpers.logger(message);
    }
}