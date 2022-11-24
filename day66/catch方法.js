// 在链式调用中，catch只能捕获第一个then返回的错误信息
// 在链式调用中想要单独的捕捉每个then的错误信息
// 需要每个then后面去跟随catch来进行捕获

// const fs =require('fs')
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             // if(err)  reject(err)
//             // resolve(data)
//             reject('我是桃花源记的错误信息')
//         })
//     })
// }

// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./1.md',(err,data)=>{
//             // if(err)  reject(err)
//             // resolve(data)
//             reject('我是1的错误信息')
//         })
//     })
// }
// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./2.md',(err,data)=>{
//             // if(err)  reject(err)
//             // resolve(data)
//             reject('我是2的错误信息')
//         })
//     })
// }

// getPeach().then(res=>{
//     console.log(res,'36');
// }).then((data)=>{
//     console.log(data);
//     let result= getTroops().then(res=> res.toString())
//     console.log(result,'40');
// }).then((data1)=>{
//     console.log(data1);
//     getAgent().then(res=>{
//         console.log(res.toString(),'44');
//     })
// }).catch(err=>{
//     console.log(err,'47');
// })



    // const fs =require('fs')
    // function getPeach(){
    //     return new Promise(function(resolve,reject){
    //         fs.readFile('./桃花源记.md',(err,data)=>{
    //             reject('我是桃花源记的错误信息')
    //         })
    //     })
    // }

    // function getTroops(){
    //     return new Promise(function(resolve,reject){
    //         fs.readFile('./1.md',(err,data)=>{
    //             reject('我是1的错误信息')
    //         })
    //     })
    // }

    // function getAgent(){
    //     return new Promise(function(resolve,reject){
    //         fs.readFile('./2.md',(err,data)=>{
    //             reject('我是2的错误信息')
    //         })
    //     })
    // }

    //     getPeach().then(res=>{
    //     console.log(res,'78');
    // }).then((data)=>{
    //     console.log(data);
    //     let result= getTroops().then(res=> res.toString())
    //     console.log(result,'82');
    // }).then((data1)=>{
    //     console.log(data1);
    //     getAgent().then(res=>{
    //         console.log(res.toString(),'86');
    //     })
    // }).catch(err=>{
    //     console.log(err,'89');
    // })





    const fs =require('fs')
    function getPeach(){
        return new Promise(function(resolve,reject){
            fs.readFile('./桃花源记.md',(err,data)=>{
                reject('我是桃花源记的错误信息')
            })
        })
    }

    function getTroops(){
        return new Promise(function(resolve,reject){
            fs.readFile('./1.md',(err,data)=>{
                reject('我是1的错误信息')
            })
        })
    }

    function getAgent(){
        return new Promise(function(resolve,reject){
            fs.readFile('./2.md',(err,data)=>{
                reject('我是2的错误信息')
            })
        })
    }
        getPeach().then(res=>{
        console.log(res,'121');
    }).then((data)=>{
        console.log(data);
        let result= getTroops().then(res=> res.toString())
        console.log(result,'125');
    }).then((data1)=>{
        console.log(data1);
        getAgent().then(res=>{
            console.log(res.toString(),'129');
        })
    }).catch(err=>{
        console.log(err,'132');
    })