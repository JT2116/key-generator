export function RandomPassword(digitos) {
    
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    let passwordRandom = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < digitos; i++ ) {
        passwordRandom += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    
    return passwordRandom;
}