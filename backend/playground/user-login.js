import bcryptjs from 'bcryptjs'; 
async function login(password){
    const passwordInDB = '$2a$10$.XsPn1y.zFf6H1HTUPECT.j4xdgVMsKhRJTpCd9RY3nU/wv47rcKm';
    const isValid = await bcryptjs.compare(password, passwordInDB);
    console.log(isValid);
    // const saltUser = bcryptjs.getSalt(passwordInDB);
    // const newHash = await bcryptjs.hash(password, saltUser); 
    // console.log(newHash == passwordInDB); 
}
login('secret123');