import axios from 'axios'
import fs from 'fs'
import path from 'path'

export default async () => {
    try{
        let data = fs.readFileSync(path.join(process.cwd(), 'src', 'tools', 'paymeToken.json'), 'utf-8')
        data = JSON.parse(data || null)
        

        if(data?.expired + 900000 < Date.now() || !data){
            const data = JSON.stringify({
                "method": "users.log_in",
                "params": {
                    "login": "339097068",
                    "password": "221134"
                }
            })

            const options = {
                url: 'https://payme.uz/api/users.log_in',
                method: 'POST',
                headers: { 
                    'Content-type': 'application/json',
                    'user-agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36",
                    'device':"62b81b5db80be61347af9ffc; Dh3mxskscgC7nuHJ#Mo4mNFZvyeosX10yiAZsUBUhJTJf@UdqjbaHPm%KzrWY6YW;"
                },
                data
            }
            
            let response = await axios(options)

            if(!response.data.result.success && !response.headers['api-session']){
                throw new Error("Invalid token")
            }
            const TOKEN = {
                token:response.headers['api-session'],
                expired: Date.now()
            }
            fs.writeFileSync(path.join(process.cwd(), 'src', 'tools', 'paymeToken.json'), JSON.stringify(TOKEN, null,4))
            
            return { 
                success: true,
                message: 'OK',
                data: TOKEN.token
            }
        }
        return { 
            success: true,
            message: 'OK',
            data: data.token
        }
    }catch(error){
        return { 
            success: false,
            message: error.message,
            data: '' 
        }
    }

}
