import axios from 'axios'
import getPaymeToken from '#getPaymeToken'

export default async (account, account_type, amount, id) => {
    try{
        const TOKEN = await getPaymeToken()
        amount = amount ? amount * 100 : 100000
        
        if(!TOKEN.success) throw new Error("Token error")
        
        const data = JSON.stringify({
            "method": "merchants.get_additional_info",
            "params": {
                "account": {
                    [account_type]: account
                },
                amount,
                id
            }
        })

        const options = {
            url: "https://payme.uz/api/merchants.get_additional_info",
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
            return response.result
        }else{
            return response.error
        }
    }catch(error){
        return {
            code: '-10000'
        }
    }

}