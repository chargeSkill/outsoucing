<template>
    <div class="xjnContainer">
        <div class="header">
            Favorites
        </div>
        <div class="pageTit">You liked</div>  
        <ul class="likedCon clearfix">
            <li class="likedList" v-for="(item,index) in list" :key="index" @click="getDetail(item)">
                <div class="avatar">
                    <img :src="item.url" alt="" />
                    <div class="circle" v-if="item.isState"></div>
                </div>
                <p class="likedName">{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list:[
                    {
                        url:require('../images/xjn_avatar1.png'),
                        isState:true,
                        name:"Maybell Dynes"
                    },
                    {
                        url:require('../images/xjn_avatar2.png'),
                        isState:false,
                        name:"Christy Weinstein"
                    },
                    {
                        url:require('../images/xjn_avatar3.png'),
                        isState:false,
                        name:"Kaley Hirano"
                    },
                    {
                        url:require('../images/xjn_avatar4.png'),
                        isState:true,
                        name:"Armanda Febus"
                    },
                    {
                        url:require('../images/xjn_avatar5.png'),
                        isState:true,
                        name:"Nila Hebel"
                    },
                    {
                        url:require('../images/xjn_avatar6.png'),
                        isState:true,
                        name:"Clara Hensen"
                    }
                ]
            }
        },
        mounted(){

        },
        methods: {
            getDetail(item){
                this.$router.push("./profile");
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .xjnContainer{
        width:100%;
        min-height: 100%;
        background:#ECECEC;
        color:#363636;
        box-sizing: border-box;
        overflow:hidden;
    }
    .header{
        width:100%;
        height:44px;
        font-size: 17px;
        text-align: center;
        line-height: 44px;
        background: #fff;
    }
    .pageTit{
        width:100%;
        height:40px;
        border-bottom: 2px solid #363636;
        text-align: center;
        line-height: 38px;
        font-size: 14px;
        background:#fff;
    }
    .likedCon{
        width:100%;
        padding:30px;
        padding-bottom: 10px;
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        box-sizing: border-box;
        .likedList{
            width:113px;
            margin-bottom: 50px;
            .avatar{
                width:100%;
                height:113px;
                overflow:hidden;
                position: relative;
                img{
                    width:100%;
                    height:100%;
                    border-radius: 50%;
                }
                .circle{
                    width:18px;
                    height:18px;
                    border-radius: 50%;
                    background:#4CD964;
                    position: absolute;
                    right:15px;
                    bottom:0;
                }
            }
            .likedName{
                width:100%;
                font-size: 16px;
                margin-top: 14px;
                text-align: center;
            }
        }
    }

</style>