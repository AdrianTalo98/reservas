const SHA256 = require("crypto-js/sha256");

const Encriptar = (texto) => {
    return SHA256(texto)
} 

export default Encriptar