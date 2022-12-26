import axios from "axios";

const http=axios.create({
    baseURL:'https://book.youbaobao.xyz:18082/',
    timeout:5000
})

// http.interceptors.response.use(res=>{
//     let {data,meta}=res.data
//     if(meta.status==200||meta.status==201){
//         Message({
//             message: meta.msg,
//             type: 'success'
//         })
//     }
//     // else{
//     //     Message({
//     //         message: meta.msg,
//     //         type: 'error'
//     //     })
//     // }
//     return data
// },error=>{
//     Promise.reject(error)
// })

export default http