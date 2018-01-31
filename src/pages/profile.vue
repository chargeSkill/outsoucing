<template>
    <div class="xjnContainer">
        <!-- 导航栏 -->
        <div class="header">
            Profile
        </div>
        <!-- 用户头像 -->
        <div class="imgBox">
            <div class="left">
                <img src="../images/xjn_profile1.png"  alt="" />
            </div>
            <div class="right">
                <img src="../images/xjn_profile2.png"  alt="" />
                <img src="../images/xjn_profile3.png"  alt="" />
                <img src="../images/xjn_profile4.png"  alt="" />
            </div>
        </div>
        <!-- 用户信息 -->
        <ul class="userInfo">
            <li v-for="(item,index) in userInfo" :key="index">
                <h3>{{item.num}}</h3>
                <p>{{item.name}}</p>
            </li>
        </ul>
        <!-- 关于我 -->
        <div class="about">
            <h3>ABOUT</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia quis nostrud exercitation ullamco laboris...
            </p>
        </div>
        <!-- 联系方式 -->
        <ul class="contanct">
            <li>
                <span class="iconfont icon-facebook"></span>
            </li>
            <li>
                <span class="iconfont icon-twitter"></span>
            </li>
            <li>
                <span class="iconfont icon-google-plus"></span>
            </li>
            <li>
                <img src="../images/xjn_in.png"  alt="" />
            </li>
        </ul>
    </div>
</template>
<script>
    import '../js/rem.js';
    export default {
        data() {
            return {
                userInfo:[
                    {
                       name:"Liked you",
                       num:134 
                    },
                    {
                       name:"You liked",
                       num:112 
                    },
                    {
                       name:"Matched",
                       num:15 
                    }
                ]
            }
        },
        mounted(){

        },
        methods: {
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .xjnContainer{
        width:100%;
        min-height: 100%;
        background:#fff;
        color:#363636;
        box-sizing: border-box;
        overflow:hidden;
    }
    // 导航栏
    .header{
        width:100%;
        height:44px;
        font-size: 17px;
        text-align: center;
        line-height: 44px;
        background: #fff;
    }
    // 用户头像
    .imgBox{
        width:100%;
        height:5.6rem;
        .left{
            width:5.6rem;
            height:100%;
            float:left;
            overflow:hidden;
            margin-right: 1px;
            img{
                width:100%;
            }
        }
        .right{
            overflow:hidden;
            height:100%;
            img{
                display:block;
                width:100%;
                margin-bottom: 1px;
            }
        }
    }
    // 用户个人信息
    .userInfo{
        width:100%;
        height:60px;
        padding:10px 12px;
        box-sizing: border-box;
        display:flex;
        li{
            height:100%;
            flex:1;
            border-right: 1px solid #D7D7D7;
            text-align: center;
            &:nth-last-child(1){
                border-right: 0;
            }
            h3{
                font-size: 18px;
                font-weight: bold;
                color:#363636;
            }
            p{
                font-size: 12px;
                color:#6f6f6f;
            }
        }
    }
    // 关于我
    .about{
        padding: 15px 16px;
        padding-bottom: 0;
        border-top: 15px solid #ECECEC;
        h3{
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        p{  
            font-size: 15px;
            color:#6f6f6f;
            line-height: 1.4em;
            padding-bottom: 20px;
            border-bottom: 1px solid #EBEBEB;
        }
    }
    // 联系方式
    .contanct{
        width:100%;
        height:45px;
        display:flex;
        li{
            flex:1;
            text-align: center;
            line-height: 45px;
            position: relative;
            span{
                font-size: 20px;
                color:#848D99;
            }
            img{
                position: absolute;
                left:50%;
                top: 50%;
                width:22px;
                transform:translate(-50%,-50%);
            }
        }
    }
    
</style>