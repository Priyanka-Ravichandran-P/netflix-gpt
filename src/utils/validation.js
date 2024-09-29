export const isInputValid = (email, password, name, isSignUP) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidName = /([a-zA-Z\s]+)/.test(name);

    if(isSignUP && (!isValidName)) return "User Name is Incorrect";
    if(!isEmailValid) return "Email is Incorrect";
    if(!isPasswordValid) return "Password is Incorrect";

    return null;

}