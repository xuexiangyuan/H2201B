// 1.先要用promise函数分别获取三个数据
// 2.再用promise函数实现链式调用，进行依赖关系处理

// const fs =require('fs')


// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             if(err)  reject(err)
//             resolve(data)
//         })
//     })
// }

// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./1.md',(err,data)=>{
//             if(err)  reject(err)
//             resolve(data)
//         })
//     })
// }
// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./2.md',(err,data)=>{
//             if(err)  reject(err)
//             resolve(data)
//         })
//     })
// }


// getPeach().then(res=>{
//     console.log(res.toString());
//     return res.toString()
// }).then((data)=>{
//     console.log(data);
//     let result= getTroops().then(res=> res.toString())
//     return result+data
// }).then((data1)=>{
//     console.log(data1,'45');
//     getAgent().then(res=>{
//         console.log(res.toString());
//     })
// })




    // const fs =require('fs')
    
    
    // function getPeach(){
    //     return new Promise(function(resolve,reject){
    //         fs.readFile('./桃花源记.md',(err,data)=>{
    //             if(err)  reject(err)
    //             resolve(data)
    //         })
    //     })
    // }
    
    // function getTroops(){
    //     return new Promise(function(resolve,reject){
    //         fs.readFile('./1.md',(err,data)=>{
    //             if(err)  reject(err)
    //             resolve(data)
    //         })
    //     })
    // }
    // function getAgent(){
    //     return new Promise(function(resolve,reject){
    //         fs.readFile('./2.md',(err,data)=>{
    //             if(err)  reject(err)
    //             resolve(data)
    //         })
    //     })
    // }
    
    
    // getPeach().then(res=>{
    //     console.log(res.toString());
    //     return res.toString()
    // }).then((data)=>{
    //     console.log(data);
    //     let result= getTroops().then(res=> res.toString())
    //     return result+data
    // }).then((data1)=>{
    //     console.log(data1,'89');
    //     getAgent().then(res=>{
    //         console.log(res.toString());
    //     })
    // })
    


    const fs =require('fs')

    function getPeach(){
        return new Promise(function(resolve,reject){
            fs.readFile('./1.md',(err,data)=>{
                if(err) reject(err)
                resolve(data)
            })
        })
    }
    
    function getTroops(){
        return new Promise(function(resolve,reject){
            fs.readFile('./2.md',(err,data)=>{
                if(err) reject(err)
                resolve(data)
            })
        })
    }

    function getAgent(){
        return new Promise(function(resolve,reject){
            fs.readFile('./出师表.md',(err,data)=>{
                if(err) reject(err)
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
        console.log(data1,'134');
        getAgent().then(res=>{
            console.log(res.toString());
        })
    })
