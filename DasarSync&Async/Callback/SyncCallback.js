function main (param1, param2, callback){
    console.log(param1,param2)
    callback()
}

function myCallback(){
    console.log('hello from callback')
}

main(1, 2, myCallback)

// Output:
// 1 2
// hello from callback