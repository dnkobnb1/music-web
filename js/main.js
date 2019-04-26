var user=new Vue({
    el:"#user",
    data:{
        logined:false,
        username:''
    },
    mounted:function () {
        this.check();
    },
    methods:{
        check:function () {
            axios.get('/user/islogin').then(function (response) {
                if(response.data.code==200){
                    user.username=response.data.map.user.userName;
                    user.logined=true;
                }
            })
        },
        exit:function () {
            axios.get('/user/exit').then(function () {
                location.reload();
            })
        }
    }
})
var login=new Vue({
    el:"#login_modal",
    data: {
        userEmail:'',
        userPassword:'',
    },
    methods: {
        login:function () {
            axios.post("/user/login",login.$data).then(function (response) {
                if(response.data.code==200){
                    location.reload()
                }else alert("用户名或密码错误!")
            })
        }
    }
})
var register=new Vue({
    el:"#register_modal",
    data:{
        userEmail:'',
        userPassword:'',
        userName:'',
        assure:''
    },
    methods:{
        register:function () {
            axios.post("/user/register",register.$data).then(function (response) {
                if(register.userPassword!=register.assure){
                    alert("确认密码与密码不相等!")
                    return;
                }
                if(response.data.code==200){
                    alert("注册成功，请登录!")
                    location.reload()
                }else alert("注册失败,请重试！")
            })
        }
    }
})
