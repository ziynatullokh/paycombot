import axios from 'axios'

export default async (id,cardNumber,cardExpire,OTPCODE) => {
    try{
        const data = JSON.stringify({
            "method": "cheque.pay",
            "params": {
              "id": id,
              "card_id": {
                "number": cardNumber,
                "expire": cardExpire
              },
              "code": OTPCODE
            }
          })

        const options = {
            url: "https://payme.uz/api/cheque.pay",
            method:"POST",
            headers:{'Content-type': 'application/json'},
            data
        }
        
        let response = await axios(options)
        response = await response.data
        if(response.result){
            return 'success'
        }else{
            return response.error.message
        }
    }catch(error){
        return error.message
    }
    
}