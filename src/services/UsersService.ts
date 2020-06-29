class UsersService {

    constructor() {
        
    }

    cryptographyPassword(password: string) {
        const crypto = require("crypto");
        const Data = {
            alg : "aes256",
            key : "chaves",
            type : "hex"
        };

        const cipher = crypto.createCipher(Data.alg, Data.key);
        cipher.update(password);
        return cipher.final(Data.type);
    }
}
export default UsersService;