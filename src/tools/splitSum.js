export default (arg) => {
    if(!arg || typeof arg === 'object') return '0'
    arg = typeof arg === 'number' ? '' + arg : arg
    let res = ''
    for(let i=arg.length; i > 0; i--){
        if( i%3 === 0) {
          res = res + ' ' + arg[arg.length-i] 
          continue
        }
        res = res + arg[arg.length-i]
    }
    return res
}