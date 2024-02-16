import bcrypt from "bcrypt";

async function encrypt(p){
    const password=p;
    const encPassword= await bcrypt.hash(password, 10);
    return encPassword;
}

async function comparePass(p,h){
    const password=p;
    const isCorrect=await bcrypt.compare(password,h);
    return isCorrect;
}

export {encrypt,comparePass};
