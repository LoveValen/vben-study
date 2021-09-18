<template>
  <div class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-content-box">
          <div class="top">客户服务</div>
          <div class="bottom">
            <div class="bottom-img">
              <i class="iconfont icon-kefu"></i>
              <span>在线客服</span>
            </div>
            <div class="bottom-img">
              <i class="iconfont icon-question"></i>
              <span>问题反馈</span>
            </div>
          </div>
        </div>
        <div class="footer-content-box">
          <div class="top">关注我们</div>
          <div class="bottom">
            <div class="bottom-img">
              <i class="iconfont icon-weixin"></i>
              <span>公众号</span>
            </div>
            <div class="bottom-img">
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </div>
          </div>
        </div>
        <div class="footer-content-box">
          <div class="top">下载APP</div>
          <div class="bottom">
            <div class="bottom-img">
              <img src="../../../../design/images/qrcode.jpg" alt="公众号二维码" />
            </div>
            <div class="flex flex-col">
              <div class="flex flex-col items-center" style="padding-bottom: 10px">
                <span>扫描二维码</span>
                <span>立马下载APP</span>
              </div>
              <div class="bottom green">下载页面</div>
            </div>
          </div>
        </div>
        <div class="footer-content-box">
          <div class="top">服务热线</div>
          <div class="flex flex-col items-center last">
            <span style="font-size: 18px; color: #b6b6b6">400-0000-000</span>
            <span>周一至周日 8:00-18:00</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部灰色区域 -->
    <footer>
      <div class="app-footer-bottom">
        <div class="container bottom-border">
          <a href="javascript:;" class="bottom-cotainer">
            <i class="iconfont icon-footer01"></i>
            <i>价格亲民</i>
          </a>
          <a href="javascript:;" class="bottom-cotainer">
            <i class="iconfont icon-footer02"></i>
            <i>物流快捷</i>
          </a>
          <a href="javascript:;" class="bottom-cotainer">
            <i class="iconfont icon-footer03"></i>
            <i>品质新鲜</i>
          </a>
        </div>
      </div>
      <div class="app-footer-bottom">
        <div class="container bottom-border1">
          <ul class="container_content1">
            <li><a href="javascript:;">关于我们</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
            <li><a href="javascript:;">售后服务</a></li>
            <li><a href="javascript:;">配送与验收</a></li>
            <li><a href="javascript:;">商务服务</a></li>
            <li><a href="javascript:;">搜索推荐</a></li>
            <li><a href="javascript:;">友情链接</a></li>
          </ul>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </footer>
    <!-- ref的使用 -->
    <ul class="content-bottom">
      <li
        @click="active = index"
        class="content-bottom-item"
        :class="active === index ? 'centent-bottom-item-active' : ''"
        v-for="(value, index) in dateList"
        :key="index"
        >{{ value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  const dateList = ['年', '月', '日'];
  export default defineComponent({
    setup() {
      const active = ref(0);
      return {
        active,
        dateList,
      };
    },
  });
</script>

<style lang="less" scoped>
  .app-footer {
    background: #fff;
    .footer-content {
      height: 190px;
      display: flex;
      justify-content: space-between;
      &-box {
        position: relative;
        &:not(:first-child) {
          &::after {
            position: absolute;
            top: 50%;
            left: -46px;
            transform: translateY(-50%);
            content: '';
            height: 160px;
            border-left: 1px solid #ededed;
          }
        }
        width: 20%;
        padding: 30px 25px;
        .top {
          text-align: center;
          padding-bottom: 20px;
          font-size: 18px;
          color: #b6b6b6;
        }
        .bottom {
          display: flex;
          justify-content: space-around;
          &-img {
            width: 80px;
            height: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #eee;
            i {
              font-size: 36px;
              color: #666;
            }
          }
          .green {
            padding: 8px 20px;
            background: @xtxColor;
            color: #fff;
            border-radius: 5px;
          }
        }
        .last {
          height: calc(100% - 38px);
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
        span {
          color: #999;
        }
      }
    }
    .content-bottom {
      box-sizing: border-box;
      width: 210px;
      display: flex;
      align-items: center;
      height: 40px;
      margin: 0 auto;
      padding: 6px 10px;
      border-radius: 20px;
      background: tomato;
      color: #fff;
      &-item {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .centent-item-active {
        color: #333;
        background: skyblue;
        border-radius: 20px;
        transition: all 0.2s;
      }
    }
    &-bottom {
      height: 170px;
      background: #333;
      .bottom-border {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        border-bottom: 1px solid #999;
        .bottom-cotainer {
          display: flex;
          justify-content: center;
          width: 33%;
          color: #fff;
          font-size: 28px;
          align-items: center;
          .iconfont {
            font-size: 45px;
            margin-right: 8px;
          }
        }
      }

      .bottom-border1 {
        padding: 30px 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      .container {
        &_content1 {
          display: flex;
          height: 53px;
          justify-content: flex-end;
          align-items: center;
          li {
            display: flex;
            align-items: center;
            height: 20px;
            border-left: 1px solid #999;
            font-size: 14px;
            &:first-child {
              border-left: none;
            }
            a {
              padding: 0 15px;
              color: #999;
            }
          }
        }
        p {
          color: #999;
        }
      }
    }
  }
</style>
