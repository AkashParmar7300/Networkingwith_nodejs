import dgram from "node:dgram"

const socket =dgram.createSocket("udp4")

socket.on("message" ,(a,b)=>{
    console.log(a.toString())
    console.log(b)
    socket.send("Meassge recieved successfully " , b.port ,b.address)

})



socket.bind({port:4000} ,()=>{

    console.log(socket.address())
    const address =socket.address()
console.log(`listening ${address.port}`)
})

