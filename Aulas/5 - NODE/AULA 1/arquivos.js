const fs = require('node:fs')

fs.writeFileSync (
    "mensagem.txt", 'console.log("Criamos o arquivo com Node.js")'

)

console.log("Arquivo criado com sucesso")