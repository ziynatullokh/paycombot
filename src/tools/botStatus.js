import fs from 'fs'
import path from 'path'
import dt from '#dictionary'

export default (lang, update) => {
    const filePath = path.join(process.cwd(), 'src', 'tools', 'botStatus.json')

    if(update === 'status'){
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return data.status
    }
    else if(update === 'disableBot'){
        fs.writeFileSync(filePath, JSON.stringify({ status: false }, null, 4))
        return dt[lang]['disabledBotText']
    }
    else if(update === 'enableBot'){
        fs.writeFileSync(filePath, JSON.stringify({ status: true }, null, 4))
        return dt[lang]['enabledBotText']
    }

}