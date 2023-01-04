# 1.**自我介绍**

您好，我是计算机专业的面试者薛翔元，今年23岁，我此次应聘的职位是web前端开发职位，在前端行业从业三年了，可以熟悉运用主流框架vue全家桶，以及typescript, javascript,Es6,html,css，

以及小程序开发，大屏可视化等..



# **2.vue2的总结**

## **1.vue是什么？**

vue 是一套用来动态构建用户界面渐进式框架渐进式 Vue可以自底向上逐层的应用

## **2.vue的特点？**

vue的特点 ：遵循MVVM模式，编码整洁，体积小，运行效率高，适合移动/pc 断开发，它本身只关注UI ，也可以引入其他第三方库开发项目，采用组件化模式，提高代码复用率，且代码更好的维护，声明式编码， 让编码人员无需直接操作DOM，提高效率

## **3.目录简介**

vue,config.js ---配置webpack文件(包括配置跨域，请求接口，第三插件配置，rule配置)

package.json -- 
scripts :配置启动命令，打包命令，eslint校验代码命令，
browserslist：浏览器适配配置
devDependencies,dependencies:项目node-moudles大版本的限制
^：最大兼容版本
~：大约在这个版本上下就行
package-lock.json -----：
约束每个node-modules版本下的其他依赖的固定版本
babel.config.js--- :Babel插件设置
gitignore---：忽略文件
Public--:公共入口文件和公共配置
src------：防止组件和axios配置
Assets ：放置图片，img, css,js
components -- 防止其他组件需要的公共组件
router：配置路由表(动态路由，静态路由，权限路由)
store：存放vuex的仓库
Views：防止页面的地方

App.vue 入口的总文件
main.js 实列化vue 挂载

Utils ------所有封装axios，封装token，封装公共方法------工具文件

## **4.vue语法**

1.插值语法 { { } }
2.动态绑定 v-bind  简写 ：
3.条件渲染  v-if   v-else
概念： 控制dom原生的创建和销毁，实现渲染和更新页面
特点： 如果没有v-else的存在，会在dom元素被删除的地方，添加一个标识，在下次进行重新渲染的时候，优先寻找有表示的地方，尽量减少dom的循环和查找

4. v-show  1.通过添加或者移除 display：node 样式进行控制dom元素的显示与隐藏

5. v-for   

   1.key：作用为了防止dom元素的重复渲染，如果index为key的话，会造成页面的多次渲染和渲染不同
   2.diff算法对比节点：同级节点对比，确认和获取每个节点，通过key表示进行对比



## **5.MVVM模型**

MVVM 模型
1.M 模型( model) :data中的数据
2.v 视图（view）模板代码
3.VM 视图模型(viewModel) Vue实例

观察发现 
1.data中所有的属性，最后都出现在了vm身上
2.vm身上所有的属性，及Vue原型上所有属性 在Vue模板中都可以直接使用



## **6.Vue2中数据绑定方式**

1.单向绑定（v-bind）数据只能从data流向页面
2.双向绑定(v-model) 数据不仅能从data流向页面，还可以从页面流向data

备注： 1.双向绑定一般应用再标签元素上
2.v-model:value 可以简写 v-model   
因为v-model 默认收集的就是value值



## 7.**事件的基本使用**

1.使用v-on:xxx 或者@xxx绑定事件，xxx是事件名
2.事件的回调要配置在methods对象中，最终会在vm上
3.methods中配置的函数，不要用箭头函数，否则this就不是vm了
4.methods中配置的函数，都是被Vue所管理的函数，this的指向就是vm 或组件实例对象
5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参



## **8.Vue中事件修饰符**

1.prevent 组织默认事件(常用):链接跳转
2.stop：阻止事件冒泡(常用):父盒子对应子盒子
应用场景:父子组件，给子组件绑定方法的时候用
3.once：事件只触发一次(常用): dialog
4.capture:使用事件的捕获模式：
将冒泡事件改为捕捉模式
5.self：只有event.target是当前操作的元素时才触发事件
6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕
冒泡事件的概念：
当一个事件发生在一个元素上，他会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一致向上到其他祖先上的处理程序

## **9.vue的基础指令**

v-for可循环对象数组字符串，key是唯一标识，作用为了防止dom元素的重复渲染，如果index为key的话，会造成页面的多次渲染和渲染不同

v-show通过添加或移除display:none进行显隐藏控制

v-if  v-else-if   v-else  控制dom元素,没有v-else的时候,会在移除dom元素的时候留一个标识,方便下次再次进行显示的时候,首先查看,减少整个DOM循环

v-html 可以渲染标签

v-bind 动态传参

v-cloak 网速慢的时候阻止页面白屏

v-pre 跳过其他节点编译,让使用没有插值语法的加快编译

v-text 直接渲染文本

v-on{

click，change，keyUp，input，blur，keyDown

 }



## **10.常用的按键别名**

回车=>enter
删除=>delete(捕获‘删除’和‘退格’键)
退出=>esc
空格=>space
换行=>tab(特殊，必须配合keydown去使用)
上=>up
下=>down
左=>left
右=>right



## **11.双向数据绑定原理***

当把一个普通的js对象传入vue实例作为data选项，vue讲遍历此对象所有的property，并使用
object.defineProperty 把这些property全部转为getter/setter
这些getter/setter 对用户来说是不可见的，但是在内部他们让Vue能够追踪依赖，在property被访问和修改时通知变更
每个组件实列都对应一个watcher实列，他会在组件渲染的过程中把接触过的数据property记录为依赖，之后当依赖项的setter触发时，会通知watcher，从而使它关联的组件重新渲染



## **12.捕获**

dom事件标准描述了事件传播的三个阶段
1.捕获阶段(capturing phase) --事件（从window）向下走进元素
2.目标阶段(target phase) --事件到达目标元素
3.冒泡阶段(bubbling phase)--事件从元素上开始冒泡



## **13.计算属性****

1.定义：要用的属性不存在，要通过已有属性计算得来
2.原理：底层借助了Object.defineproperty方法提供的getter和setter
3.get函数什么时候执行？
       (1).初次读取时会执行一次，
       (2).当依赖的数据发生改变时会被再次调用
4.计算属性时同步的
5.计算属性具有缓存性
6.优势：于methods实现相比，内部右缓存机制(复用)，效率更高，调试方便
7.备注: 
1.计算属性最终会出现在vm上，直接读取使用即可
2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变

特点：
1.computer具有缓存性
2.computed是同步的，不能进行异步操作
3.数据和属性来源于data数据中，具有多对一的关系



## **14.绑定样式****

class样式
   写法： :class=“xxx” xxx可以是字符串，对象，数组
字符串写法适用于：类名不确定，要动态获取
对象写法适用于：要绑定多个样式，个数不确定，名字也不确定
数组写法适用于：要绑定多个样式，个数确定，名字也确定，但是不确定用不用

2.style样式
  :style=" { fontSize: xxx } "  其中 xxx是动态值
：style=”[ a ，b ]“ 其中 a、b是样式对象



## **15.计算属性和watch的区别**

1.计算属性有缓存，当缓存的依赖发生变化时，重新机计算，返回一个返回值
2.计算属性又getter和setter，默认为getter监听属性不分set和get
3.计算属性用来同步执行计算数据，监听属性可以由异步事件

watch监听
watch的函数名称必须和data中的数据名称一致
watch中的函数有两个参数，前者是newVal(新值)，后者是oldVal(后值)
watch中的函数是不需要调用的
watch 只会监听数据的值是否发生改变，而不会去监听数据的地址是否发生改变，深度监听需要配合deep:true属性使用
immediate：true 一进入页面立即监听



## **16.监听**

监视属性watch:
定义：
监听的属性必须在data中存在或者定义
特点：
1.当监视的属性变化时，回调函数自动调用，进行相关操作
2.监视的属性必须存在，才能进行监视！
3.监视的两种写法：
(1).new  Vue时传入watch配置
(2).通过vm.$watch监视



深度监视：
(1).Vue中的watch默认不检测对象内部值的改变(一层)
(2).配置deep:true可以检测对象内部值的改变(多层)
(3).一进页面就可以立即监听:immediate:true
(4).没有缓存，且是异步的

备注：
(1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
(2).使用watch时根据数据的具体结构，决定是否采用深度监视



## **17.key的作用**

面试题：react，vue中的key有什么作用？
1.虚拟dom中key的作用：
key是虚拟dom对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟dom】
随后Vue进行【新虚拟dom和【旧虚拟dom】的差异比较

2.对比规则：
(1).旧虚拟dom中找到了与新虚拟dom相同的key
    1.1：若虚拟dom中内容没变，直接使用之前的真是dom
    1.2：若虚拟dom中内容变了，则生成新的真实dom，随后替换掉页面中之前的真实的dom

(2).旧虚拟dom中未找到与新虚拟dom相同的key
   创建新的真实dom，随后渲染到页面

3.用index作为key可以能引发的问题：
1.若对数据进行：逆序添加，逆序删除等破坏顺序操作： 产生没有必要的真实的dom更新==>界面效果没问题，但效率低
2.如果结构中还包含输入类的dom：
会产生错误dom更新==>界面有问题

4.开发中如何去选择key？
1.最好使用每条数据的唯一标识作为key，比如id，手机号，唯一值
2.如果不存在对数据的逆序添加，逆序删除等破坏顺序操作，仅用于渲染列表展示，使用index作为key是没问题的。



## **18.收集表单数据**

若: <input type="text"/>，则v-model收集的是value值，用户输入的就是value值.
若: <input type="radio“/>，则v-model收集的是value值，且要给标签配置value值.
若:<input type="checkbox"/>
1.没有配置input的value属性，那么收集的就是checked (选 or 未选，是布尔值)
2.配置input的value属性:
(1)v-model的初始值是非数组，那么收集的就是checked (选 or 未选，是布尔值
(2)v-model的初始值是数组，那么收集的的就是value组成的数组
备注: v-model的三个修饰符:
Lazy: 失去焦点再收集数据
number: 输入字符串转为有效的数字
trim: 输入首尾空格过滤



## **19.md5加密**

md5加密：
明文：123456
密码：MD5（ddd）
你的登录传给后端的是明文还是密文
1.我是直接明文传输
2.我通过我们约定的加密方式来进行加密，我将密文传给后端，后端存储到数据库为密文，输入的是明文---加密(密文)-->后端-->数据库
3.我加密---



## **20.声明周期**



berforecreate  //实列化基础 new 实列节点
created //配置data数据模板，不能获取到dom元素，能拿到数据
beforeUpdate //监听data在什么时候发生了改变，什么地方，路径， //虚拟节点的对比
updated  //更新dom
beforeMount  //这个时虚拟dom的诞生并且进行对比
mounted  //元素的加载，dom和data都可以获取到



## **21.过滤器分为两种**



1.全局过滤器
2.局部过滤器
过滤器：
定义：对要显示的数据进行特定格式化后再显示
语法：
1.注册过滤器 Vue.filter(name,callback) 
2.使用过滤器：{{xxx | 过滤器名 }}  或者v-bind：属性=”xxx | 过滤器名“
备注：
1.过滤器也可以接收额外参数，多个过滤器也可以串联
2.并没有改变原本的数据，是产生新的对应的数据



## **22.我们学过的指令**

v-bind：单向绑定解析表达式，可以简写位：
v-model:双向数据绑定
v-for： 遍历数组/对象/字符串
v-on: 绑定事件监听，可以简写为@
v-if:条件渲染(动态控制节点是否存在)
v-else:条件渲染 (动态控制节点是否存在)
v-show：条件渲染 (动态控制节点是否展示)
v-text指令：
1.作用：向其所在的节点中渲染文本内容
2.与插值语法的区别：v-text会替换掉节点中的内容，{{xx}} 则不会

v-pre指令：
1.跳过其所在节点的编译过程
2.可利用他跳过，没有使用指令语法，没有使用插值语法的节点，会加快编译



## **23.mvvm mvc mvp对比**

mvc
MVC是模型-视图-控制器，它是MVC、MVP、MVVM这三者中最早产生的框架，其他两个框架是以它为基础发展而来的
MVC的目的就是将M和V的代码分离，且MVC是单向通信，必须通过Controller来承上启下。

MVP
MVP是模型-视图-表示器，是从MVC模式演变而来的。它们的基本思想有相同之处：Model层提供数据，View层负责视图显示，Controller/Presenter层负责逻辑的处理。将Controller改名为Presenter的同时改变了通信方向

mvvm
MVVM是模型-视图-视图模型。MVVM与MVP框架区别在于：MVVM采用双向绑定：View的变动，自动反映在ViewModel

MVVM 模型
1.M 模型( model) :data中的数据
2.v 视图（view）模板代码
3.VM 视图模型(viewModel) Vue实例

观察发现 
1.data中所有的属性，最后都出现在了vm身上
2.vm身上所有的属性，及Vue原型上所有属性 在Vue模板中都可以直接使用



## **24.组件传值**



在子组件标签上绑定动态的自定义属性, 
在子组件里用props来接收，接收方式有三种：

第一种：简写形式：props:['name','age']
第二种对象的简写形式: 
props:{ 
       name:'string',
       age:'number'
}
第三种完整的写法:
props:{
       name:{
           type:string,
           requred:true
     }
}



## **25.每个声明周期都在干什么**



1.beforeCreate 在实例初始化之后，数据观测(data observer) 之前被调用。
2.created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，watch/event 事件回调。这里没有$el
3.beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。
4.mounted el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
5.beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
6.updated 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
7.beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。
8.destroyed Vue 实例销毁后调用。调用后， Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用





## **26.v-if从false-true经历了那些声明周期**



1.v-if 是从false-true经历了那些声明周期
父组件berofeupdate->子组件beforeCarete->子组件created->beforeMount->子组件mounted->父组件update
2.v-if 从true-false经历了那些声明周期
父：beforeUpdate->子组件beforeDestory->子组件destoryed->父组件updated





## **27.minix**



概念：
混入(minix)提供了一种非常灵活的方式,来分发Vue组件中的可复用功能,一个混入对象可以包含任意组件选项，当组件使用混入对象时，所有混入对象的选项将被”混合“进入该组件本身的选项

合并的特点：
当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行合并
比如数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先

执行顺序：混入的先执行，组件的后执行
配置项：minix:['']



## **28.本地存储**

localStorage
关闭页面不会丢失，除非手动删除
seesionStorage
页面关闭后，通过sessionStorage存储的数据也就被清空



## **29.父传子**

第一种方式
在父组件中给子标签绑定自定义事件
<Demo  @atguigu="test"/>
第二种方式
在父组件中使用ref传参
<Demo  @ref="demo"/>
触发自定义事件 this.$emit('atguigu',this.数据)
解绑自定义事件 this.$off('atguigu')



## **30.data为什么是一个函数**

如果data是一个函数的话，这样每复用一次组件，就会返回一份新的data(类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据)
Object是引用数据类型，里面保存的是内存地址，单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果

什么时候是一个对象
Vue开发的应用一般为单页面应用，一般情况下只有一个Vue实例，所以实例中的数据可以在当前项目中共享，所以Vue实例中的data是一个对象



## **31.路由传参**



query和params的区别
1.query传参地址栏是以？形式拼接的，传参的时候标注了参数和参数值，类似于get请求
2.params传参地址栏是以/形式拼接，传参的参数配置是在路由表中，以 : id 这种动态形式进行拼接的(动态路由传参)
3.接收参数的方式不同，$route.params和$route.query进行接收
4.params刷新会丢失传参，query不会
5.params路由跳转对象传参必须以name形式进行跳转

props写法
第一种写法，值为对象，该对象中所有key-value都会以props的形式传给Detail组件
props:{a:1,b:'hello'}
props的第二种写法，值为布尔值，若布尔值为真，就会把路由组件收到的所有props的形式传给Detail组件    //props：true
props第三组写法，值为函数
props($route){
   return{
         id:$route.query.id
    }
}



## **32.路由**



路由
1.key是路径，value是组件
Vue中借助router-link标签实现路由的切换
对SPA应用的理解
1.单页面Web应用
2.整个应用只有一个完整的页面
3.点击页面中的导航链接不会刷新页面，只会做页面的局部更新
4.数据需要通过ajax请求获取

编写路由的三步
1.定义路由组件
2.注册路由
3.使用路由
注意点
1.路由组件通常放在pages文件夹，一般组件通常放在components文件夹
2.通过切换”隐藏“了路由组件，默认是被销毁掉的，需要的时候再去挂载
3.每个组件都有自己的$route属性，里面存储着自己的路由信息
4.整个应用只有一个router，可以通过组件的$router属性获取到
多级路由
配置路由规则，使用children配置项



## **33.导航守卫**



全局守卫 beforeEach 全局前置守卫，afterEach 全局后置守卫

组件守卫 beforeRouteEnter 路由进入之前，beforeRouteLeave 路由离开之前，beforeRouteUpdate 路由更新之前

独享守卫 beforeEnter 路由进入之前

导航守卫的执行顺序 全局前置，单个路由规则的，组件前置守卫，全局解析守卫，后置守卫



## **34.插槽**



插槽内容是在父组件中编译后，在传递给子组件的

默认插槽
子组件   使用  slot 插槽标签  可以上父组件传来的内容进行展示 至于在哪里展示 由子组件决定

具名插槽
在标签上  加一个slot 属性 起一个自定义的名字
在子组件中需要在 slot标签上加上 一个  name属性 名字 就是我们在父组件中自定义的那个名字
还可以在template标签上使用v-slot：footer，就可以把内容插到footer插槽中，但是v-slot必须在template标签使用否则会报错

作用域插槽
作用域插槽是反向传输
在父组件的子组件标签里 template标签上写 scope=“ {games} ” 
在子组件 slot标签里绑定 :games="games"
然后return 里面要写显示的内容



## **35.keep-alive缓存路由**

keep-alive是vue内置的一个组件，而这个组件的作用就是能够缓存不活动的组件，我们能够知道，一般情况下，组件进行切换的时候，默认会进行销毁，如果有需求，某个组件切换后不进行销毁，而是保存之前的状态，那么就可以利用keep-alive来实现
他有两个参数  include 缓存那些组件  exclude不缓存那些组件
跳转页面的时候加了include 数据不会丢失

新增了两个生命周期   actiated 组件激活
deactivated组件失活，可以在这里面清除activated激活的组件



## **36.router-link 的replace属性**

router-link 的replace属性
1.作用：控制路由时操作浏览器历史记录模式
2.浏览器的历史记录保存在一个栈里面，刚打开浏览器在指针指向栈底
3.浏览器的历史记录又两种写入方式:分别为push 和raplace，push时追加历史记录，replace是替换当前记录，路由跳转时候默认为push模式
router-link标签用 to实现页面的跳转 最终会转为a标签



## **37.编程式路由导航**

1.作用：不借助<router-ink>实现路由跳转，让路由跳转更加灵活
this.$router.forward()  //前进
this.$router.back() //后退
this.$router.go() //可前进 也可以后退



## **38.缓存组件路由**

1.作用：让不展示的路由组件保持挂载，不被销毁



## **39.两个新的生命周期函数**

1.作用：路由组件所有独有的两个钩子，用于捕获路由组件的激活状态
2.具体名字：
1.activated 路由组件被激活时触发
2.deactivated 路由组件失活时触发



## **40.路由守卫**

1.作用：对路由进行权限控制
2.分类：全局守卫，独享守卫，组件内守卫
3.全局守卫：
全局前置守卫，初始化时执行，每次路由切换前执行
全局后置守卫，初始化时执行，每次路由切换后执行
4.独享守卫：



## **41.路由器的两种工作模式**

1.对于一个url来说，什么时hash值？ -- #及其后面的内容就是hash值
2.hash值不会包含在HTTP请求中，即：hash值不会带给服务器。

3.hash模式：
1.地址中永远呆着#号，不美观
2.若以后将地址通过第三方手机app分享，若app检验严格，则地址会被标记为不合法
3.兼容性好

4.history模式：
1.地址干净美观
2.兼容性和hash模式相比略差
3.应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题



## **42.addRoute动态路由**

addRoute 添加一条新的路由记录作为现有路由的子路由，如果路由有一个name, 并且已经有一个与之名字相同的路由，就会覆盖他；
动态添加更多的路由规则，参数必须是一个符合routes选项要求的数组



## **43.vuex**

vuex是一个专为vue.js 应用程序开发的状态管理工具，它采用集中式存储管理应用的所有组件的状态



## **44.组件中的使用**

组件的模块的数据： this.$store.state.user
组件中的模块方法： this.$store.commit(方法名，参数)
组件中getters this.$store.getters ' '
组件中actions this.$store.dispatch(方法名，参数)



## **45.映射函数和组件方法的对应关系**

mapState--->this.$store.state
mapActions--->this.$store.dispath
mapGetters-->this.$store.getters
mapMutatuins-->this.$store.commit

1,分模块
mapState(‘模块名/方法名’，值)
mapState(’模块名‘,['方法名'])
不分模块
mapSTATE('方法名','值')
2.使用地方
mapState---->computed
mapActions ---->methods
mapGetters --->computed
mapMutatuins--->methods



## **46.vuex运行原理**

在组件中通过dispatch调用actions中的方法，在actions方法中commits调用mutations方法，在mutations中的方法可以直接操作state中的数据，只有state中的数据发生改变就会立刻响应到组件的视图上(异步)
在组件中通过commit调用mutations中的方法，在mutations中的方法中可以直接操作state中的数据，只有state中的数据发生改变就会立刻响应到组件的视图上(同步)



## **47.如何进行分模块操作**

1.新建modules文件夹，和index.js
2.在modules文件夹中新建一个js文件：列如 user.js
第一种写法
把每一个都分别拆出来，在导出去
第二种写法 一个大对象，包裹着内容，最后把对象导出

namespaced:true是和css的scoped一样
为了解决不同模块命名冲突的问题



## **48.数据变了视图不更新的原因**

数组

1.通过下标的形式修改数组,修改的内容并没有被object.definproty添加getter和setter属性,没有变成响应式的数据,所以无法被检测到

解决办法: 

1. 调用数组的方法: push, unshift,pop
2. Vue.set(target, 下标, 内容) // 全局的使用方法this.$set(和上面一样)

this.$focusUpdated强制更新视图



对象

深层次的对象修改其中的一个对象属性,无法被检测到



## **49.data什么时候是一个函数**

组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象



## **50.data什么时候是对象**

当我们使用 new Vue0 的方式的时候，无论我们将 data 设置为对象还是函数都是可以的，因为 new Vue0 的方式是生成一个根组件，该组件不会复用，也就不存在共享 data 的情况了

什么时候是一个对象
Vue开发的应用一般为单页面应用，一般情况下只有一个Vue实例，所以实例中的数据可以在当前项目中共享，所以Vue实例中的data是一个对象