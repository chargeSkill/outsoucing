<template>
  <div>
    <div id="loadingToast" v-show="show">
        <!--<div class="weui-mask_transparent"></div>-->
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">{{text}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['show','text']
}
</script>
