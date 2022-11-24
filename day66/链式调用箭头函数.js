const fs =require('fs')

const getPeach=()=>{
    return new Promise(function(resolve,reject){
        fs.readFile('./1.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}

const getTroops=()=>{
    return new Promise(function(resolve,reject){
        fs.readFile('./2.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}

const getAgent=()=>{
    return new Promise(function(resolve,reject){
        fs.readFile('./出居庸关.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}

    
    getPeach().then(res=>{
        console.log(res.toString());
        return res.toString()
    }).then((data)=>{
        console.log(data);
        let result =getTroops().then(res=> res.toString())
        return result +data
    }).then((data1)=>{
        console.log(data1,'39');
        getAgent().then(res=>{
            console.log(res.toString());
        })
    })
