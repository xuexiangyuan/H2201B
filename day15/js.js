function gettime(){
    var date =  new Date();  //创建一个当前日期对象
    y = date.getFullYear(); //年
    yue = date.getMonth() + 1; //月
    ri = date.getDate(); //日
    shi = date.getHours(); //时
    fen = date.getMinutes(); //分
    miao = date.getSeconds(); //秒
    //获取idgettime 然后拼接 插入标签内容
    document.getElementById("gettime").innerHTML = y + "年" + yue + "月" + ri + "日" + "" + shi + ":" + fen + ":" + miao + "\t" ;
};


//    let arr=[
//     {
//         "id":1,
//         "name":"佐菲·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":2,
//         "name":"初代·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":3,
//         "name":"赛文·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":4,
//         "name":"杰克·奥特曼",
//         "sex":"女"
//     },
//     {
//         "id":5,
//         "name":"艾斯·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":6,
//         "name":"泰罗·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":7,
//         "name":"奥特之父",
//         "sex":"男"
//     },
//     {
//         "id":8,
//         "name":"奥特之母",
//         "sex":"女"
//     },
//     {
//         "id":9,
//         "name":"雷欧·奥特曼",
//         "sex":"女"
//     },
//     {
//         "id":10,
//         "name":"阿斯特拉·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":11,
//         "name":"奥特之王",
//         "sex":"男"
//     },
//     {
//         "id":12,
//         "name":"乔尼亚斯·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":13,
//         "name":"爱迪·奥特曼",
//         "sex":"女"
//     },
//     {
//         "id":14,
//         "name":"史考特·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":15,
//         "name":"查克·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":16,
//         "name":"贝斯·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":17,
//         "name":"葛雷·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":18,
//         "name":"帕瓦特·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":19,
//         "name":"哉阿斯·奥特曼",
//         "sex":"男"
//     },
//     {
//         "id":20,
//         "name":"迪迦·奥特曼",
//         "sex":"女"
//     }
//    ]

   //存放随机数
   