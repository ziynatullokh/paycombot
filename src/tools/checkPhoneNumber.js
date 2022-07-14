const regExp = {
    uzmobile : /(99|95|77)[0123456789][0-9]{6}$/,
    // humans : /(33)[0123456789][0-9]{6}$/,
    mobiuz : /(97|88)[0123456789][0-9]{6}$/,
    beeline : /(90|91)[0123456789][0-9]{6}$/,
    ucell : /(93|94)[0123456789][0-9]{6}$/,
    perfectum : /(98)[0123456789][0-9]{6}$/,
    
}


const merchant_id = {
    uzmobile : "55478199d2c4830936e6c832",
    mobiuz : "549981c05ae5eca82d1b4661",
    beeline : "545c7ecd5ae5eca82d1b462f",
    ucell : "545e1b1e5ae5eca82d1b4630",
    perfectum : "545e1cae5ae5eca82d1b4631"
}




export default function (value) {
    value = value.length === 12 ? value.slice(3) : value
    for(let i in regExp){
        if(regExp[i].test(value)){
            return merchant_id[i]
        }
    }
}