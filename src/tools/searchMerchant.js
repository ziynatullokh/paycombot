import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'src', 'tools', 'merchants.json')




export default (id) => {
    let data = fs.readFileSync(filePath)
    data = JSON.parse(data)
    for(let i = 0; i < data.result.merchants.length; i++){
        if( data.result.merchants[i]._id == id ){
            return data.result.merchants[i].terminal.account[0].name
        }
    }
    return null
}



