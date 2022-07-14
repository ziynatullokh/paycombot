import axios from 'axios'
import getPaymeToken from '#getPaymeToken'

const reason = ["Ошибка в сумме платежа","Ошибка в реквизитах платежа","Ошибка при выборе сервиса/услуги","Двойное списание средств"]

export default async id => {
    try{
        const TOKEN = await getPaymeToken()
        
        if(!TOKEN.success) throw new Error("Token error")
        
        const reasonText = reason[Math.random() * reason.length | 0]
        const data = JSON.stringify({
            "method": "cheque.cancelRequest",
            "params": {
                "id": id,
                "reason": reasonText
            }
        })

        const options = {
            url: "https://payme.uz/api/cheque.cancelRequest",
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
            return { success: true, message: response.result.success}
        }
        throw new Error(response.error.message)
    }catch(error){
        return { success: false, message: error.message}
    }
}