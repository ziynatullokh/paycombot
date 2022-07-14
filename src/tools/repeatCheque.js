import axios from 'axios'
import getPaymeToken from '#getPaymeToken'

export default async (id,amount) => {
    try{
        const TOKEN = await getPaymeToken()
        
        if(!TOKEN.success) throw new Error("Token error")

        const data = JSON.stringify({
            "method": "cheque.repeat",
            "params": {
                id,
                amount
            }
        })

        const options = {
            url: "https://payme.uz/api/cheque.repeat",
            method:"POST",
            headers:{
                'Content-type': 'application/json',
                'api-session': TOKEN.data
            },
            data
        }

        let response = await axios(options)
        response = await response.data
        
        if(response.result){
            return { success: true, message: response.result.cheque._id}
        }
        throw new Error(response.error.message)
    }catch(error){
        return { success: false, message: error.message}
    }
}