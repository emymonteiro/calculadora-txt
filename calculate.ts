const fs = require('fs')

function filesFolder(){
    const result = fs.readdirSync('./files/') 
    return result
}

function readText(){
    let calculate = 0
    const files = filesFolder()
    files.forEach(el => {
        const result = fs.readFileSync('./files/' + el, 'utf8')
        calculate += Number(result)
    })
    return calculate
}

function writeFile(){
    const result = readText()
    fs.writeFileSync('result.txt', result.toString())
}

writeFile()