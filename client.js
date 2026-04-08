import dgram from "node:dgram"

const socket =dgram.createSocket("udp4")

socket.on("message" ,(a,b)=>{
    console.log(a.toString())
    console.log(b)

})



/*socket.bind({port:4000} ,()=>{

    console.log(socket.address())
    const address =socket.address()
console.log(`listening ${address.port}`)
})
*/
socket.send("HIi Frombb lap NOde.js",4000,"192.168.101.16")