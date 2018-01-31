/**
 * Created by Administrator on 2016/10/27.
 */
// fontSize ：html中的font-size
// designwidth :设计稿的宽度
// relwidth：当前浏览器的宽度
// relfontSize :计算出实际的在html 中的font-size
/*window.onresize=function () {

}*/
function fontsize(designwidth){
    function fontSizeFun() {
        var fontSize=100;
        var relwidth=document.documentElement.clientWidth;
        var relfontSize=fontSize*relwidth/designwidth+'px';
        document.getElementsByTagName('html')[0].style.fontSize=relfontSize;
    }
    fontSizeFun();
    window.onresize=fontSizeFun;
}
fontsize(750)