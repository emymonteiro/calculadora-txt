const fs = require('fs')
const path = require('path')

const configPath = path.join(process.cwd(), './config.json');
const config = JSON.parse(fs.readFileSync(configPath));

function filesFolder(){
    const result = fs.readdirSync(config.filesPath) 
    return result
}

function readText(){
    let calculate = 0
    const files = config.getCustomFiles.length > 0 ? config.getCustomFiles : filesFolder()
    files.forEach(el => {
        const filter = config.getCustomFiles.length == 0 ? config.filesPath : ''
        const result = fs.readFileSync(filter + el, 'utf8')
        calculate += Number(result)
    })
    return calculate
}

function writeFile(){
    const result = readText()
    fs.writeFileSync(config.resultFile, result.toString())
}

writeFile()