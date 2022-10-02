console.log("client request...");
console.log("string loading");

const look = new Promise((resolve, rejekt)=>{
    setTimeout (()=>{
        const err = true;

        if (!err){
            const response={
            userName:"user name",
            userAge:"22",
            hobbi:"play Gmae",
            };
            const json = JSON.stringify(response);
            console.log("client get response from  server",json,);

            resolve(response);
        }else{
            rejekt("status code 404, not found");
        }
    },2000);
}).then((res) =>{
    setTimeout(()=>{
        const data = {
         userName:"user name",
         userAge:"22",
         hobbi:"play Gmae"
        };
       const Json = JSON.stringify(data);
       console.log("client get data",Json,data,res);
    },2000)
    return"HELLO";
})
.then((data) =>alert(data))