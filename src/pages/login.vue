<template>
    <div>
        <!-- connect -->
        <div class="connect">
            <div class="up"></div>
            <div class="btn">CONNECT WITH FACEBOOK</div>
        </div>
        <!-- form box -->
        <div class="from-box">
            <h2><span>SIGN IN</span></h2>
            <div class="email">
                <p>Email</p>
                <input type="email" v-model="email">
                <div class="del" @click="cls('1')"></div>
            </div>
            <div class="password">
                <p>Password</p>
                <input type="password" v-model="password">
                <div class="del" @click="cls('2')"></div>
            </div>
            <p class="forgot">Forgot your password?</p>
        </div>
        <!-- sign in -->
        <div class="signin" @click="signIn">SIGN IN</div>
    </div>
</template>
<script>
    import '../js/rem.js';
    export default {
        data() {
            return {
                email:"184049849980@163.com",
                password:"123456"
            }
        },
        mounted(){

        },
        methods: {
            cls(type){
                if(type === '1'){
                    this.email = "";
                }else if(type === '2'){
                    this.password = "";
                }
            },
            signIn(){
                this.$router.push('./favorites')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    body{
        background:#fff;
        height:100vh;
    }
    .connect{
        height: 2.2rem;
        border-bottom:1px solid #ebebeb;
        .up{
            height:0.8rem;
        }
        .btn{
            width:80%;
            line-height:0.9rem;
            text-align:center;
            border-radius:0.6rem;
            background-image: -webkit-linear-gradient(left,#6a409f,#901eb1);
            color:#fff;
            font-weight: bold;
            font-size:.18rem;
            margin: 0 auto;
        }
    }
    .from-box{
        padding:0.4rem 0.3rem;
        h2{
            text-align:center;
            margin-bottom:0.8rem;
            span{
                font-size:0.36rem;
                color:#363636;
                padding-bottom:0.1rem;
                border-bottom:2px solid #333;
            }
        }
        .email,.password{
            width:90%;
            margin:0.1rem auto;
            position: relative;
            .del{
                content:"";
                width:0.3rem;
                height: 0.3rem;
                position: absolute;
                right: 0.1rem;
                top:0.4rem;
                border-radius:50%;
                background:url(../images/del.png) 100% 100% /cover;
            }
            p{
                color:#6f6f6f;
                font-size:0.2rem;
            }
            input{
                width:100%;
                height:0.6rem;
                border-bottom:1px solid #ebebeb;
            }
        }
        .email{
            margin-bottom:0.1rem;
        }
        .password{
            margin-bottom:1rem;
        }
        .forgot{
            text-align:center;
            color:#6f6f6f;
            font-size:0.24rem;
        }
    }
    .signin{
        width:100%;
        height:0.8rem;
        font-size:0.36rem;
        background:#fd4c9d;
        line-height:.8rem;
        color:#fff;
        text-align:center;
        position: fixed;
        bottom:0;
        left:0;
    }
</style>