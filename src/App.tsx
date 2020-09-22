/*
 * @Author: Miya
 * @Date: 2020-09-21 16:57:09
 * @LastEditTime: 2020-09-22 18:23:28
 * @LastEditors: Miya
 * @Description: 入口页面
 * @FilePath: \LandingPage\src\App.tsx
 * @Version: 1.0
 */
import { Component, Vue } from 'vue-property-decorator';
import { Router } from '@/config/router.config';
import { Index } from './config/index.config';
@Component({})
export default class App extends Vue {
  private navLogo = Index.navbar.logo;
  private transparentNav = true;

  private get getTransparentNav() {
    return this.transparentNav ? '' : 'fixed';
  }

  private mounted() {
    const screenHeight = window.screen.height;
    console.log(`当前设备屏幕高度：${screenHeight}`);
    // // 检测滑动
    // this.$nextTick(() => {
    //   window.addEventListener('scroll', () => {
    //     const top = document.documentElement.scrollTop;
    //     console.log(top);
    //     if (top < screenHeight - 164) {
    //       this.transparentNav = true;
    //       return;
    //     }
    //     this.transparentNav = false;
    //   });
    // });
  }

  private render() {
    return (
      <div id="app">
        <nav class={`app__navigation ${this.getTransparentNav}`}>
          <div class="container">
            <div class="app__navigation--logo">
              <img src={this.navLogo}></img>
            </div>
            <div class="app__navigation--nav">
              {Router.map(item => {
                return (
                  <router-link
                    class="app__navigation--item"
                    to={item.link}
                    tag="section"
                  >
                    {item.text}
                    {/* {item.child ? (
                  <ul class={`app__navigation--item-sub ${this.aa}`}>
                    {item.child.map(childitem => {
                      return (
                        <router-link
                          class={`app__navigation--item-child`}
                          to={`${item.link}${childitem.link}`}
                          tag="li"
                        >
                          {childitem.text}
                        </router-link>
                      );
                    })}
                  </ul>
                ) : null} */}
                  </router-link>
                );
              })}
            </div>
          </div>
        </nav>
        <div class="app__view">
          <router-view></router-view>
        </div>
      </div>
    );
  }
}
