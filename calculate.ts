const fs = require('fs')

const config = require('./config.json')

function filesFolder(){
    const result = fs.readdirSync(config.filesPath) 
    return result
}

function readText(){
    let calculate = 0
    const files = config.getCustomFiles !== "" ? config.getCustomFiles : filesFolder()
    files.forEach(el => {
        const result = fs.readFileSync(config.getCustomFiles === "" ? config.filesPath : '' + el, 'utf8')
        calculate += Number(result)
    })
    return calculate
}

function writeFile(){
    const result = readText()
    fs.writeFileSync(config.resultFile, result.toString())
}

writeFile()