import fs from 'fs'
import path from 'path'
export default  (error_type, message, fulldata = 'nodata') => {

    const time = new Date().toISOString().slice(0,10)
    const filePath = path.join(process.cwd(), 'log', error_type + time + '.txt')
    const data = '\n\n\nERROR_MESSAGE: ' + message + ' ERROR_TIME: ' + new Date() + '\nFULL_DATA: ' + fulldata

    fs.existsSync(filePath) ? 
    fs.appendFileSync(filePath, data):
    fs.writeFileSync(filePath, data)
}