// const fs =require('fs')

// function P(url){
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// P('./桃花源记.md').then(res=>{
//     // console.log(res.toString()); 
//     return res.toString()
// })
// .then((data)=>{
//     console.log(data);
//     P('./出师表.md').then(res=>{
//         // console.log(res.toString()); 
//     })
// })
// .then(()=>{
//     P('./出居庸关.md').then(res=>{
//         // console.log(res.toString()); 
//     })
// })



    // const fs =require('fs')

    // function P(url){
    //     return new Promise(function(resolve,reject){
    //         fs.readFile(url,(err,data)=>{
    //             if(err) reject(err)
    //             resolve(data)
    //         })
    //     })
    // }

    // P('./桃花源记.md').then(res=>{
    //     // console.log(res.toString()); 
    //     return res.toString()
    // })
    // .then((data)=>{
    //     console.log(data);
    //     P('./出师表.md').then(res=>{
    //         // console.log(res.toString()); 
    //     })
    // })
    // .then(()=>{
    //     P('./出居庸关.md').then(res=>{
    //         // console.log(res.toString()); 
    //     })
    // })


    

    const fs =require('fs')

    function P(url){
        return new Promise(function(resolve,reject){
            fs.readFile(url,(err,data)=>{
                if(err) reject(err)
                resolve(data)
            })
        })
    }

    P('./桃花源记.md').then(res=>{
        return res.toString()
    })
    .then((data)=>{
        console.log(data);
        P('./出师表.md').then(res=>{
        })
    })
    .then(()=>{
        P('./出居庸关.md').then(res=>{ 
        })
    })
