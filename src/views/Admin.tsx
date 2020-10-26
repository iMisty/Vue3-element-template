import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Admin extends Vue {
  // 控制是否浮动左边栏
  private floatLeftBar = false;

  // 调整是否浮动菜单栏
  private changeLeftBarStatus() {
    return (this.floatLeftBar = !this.floatLeftBar);
  }
  // 点击返回首页
  private backToHome() {
    this.$store.commit('changeDisplayNavBar', true);
    return this.$router.push({ path: '/' });
  }

  get leftBarStatus() {
    return this.floatLeftBar ? 'float' : '';
  }

  private created() {
    this.$store.commit('changeDisplayNavBar', false);
  }

  private render() {
    return (
      <div class={`admin ${this.leftBarStatus}`}>
        <section class="admin__left">
          <article class="admin__left--logo">
            <section class="logo" onClick={() => this.backToHome()}>
              <img
                src={require('@/assets/logo.png')}
                alt="Logo"
              />
            </section>
            <section class="type" onClick={() => this.changeLeftBarStatus()}>
              <i class="fa fa fa-ellipsis-h"></i>
            </section>
          </article>
          <article class={`admin__left--nav`}>
            <ul class="admin__left--list">
              <router-link to="/admin" tag="li" class="admin__left--list--nav">
                <i class="fa fa-home"></i>
                <p class="admin__left--list--title">List</p>
              </router-link>
              <router-link
                to="/admin/blog"
                tag="li"
                class="admin__left--list--nav"
              >
                <i class="fa fa-home"></i>
                <p class="admin__left--list--title">List</p>
              </router-link>
              <router-link
                to="/admin/work"
                tag="li"
                class="admin__left--list--nav"
              >
                <i class="fa fa-home"></i>
                <p class="admin__left--list--title">List</p>
              </router-link>
              <router-link
                to="/admin/setting"
                tag="li"
                class="admin__left--list--nav"
              >
                <i class="fa fa-home"></i>
                <p class="admin__left--list--title">List</p>
              </router-link>
            </ul>
          </article>
        </section>
        <section class="admin__wrap">
          <section class="admin__wrap--top">
            <div class="admin__wrap--top--item">
              <i class="fa fa-moon-o"></i>
            </div>
            <div class="admin__wrap--top--item">
              <i class="fa fa-bell-o"></i>
            </div>
            <div class="admin__wrap--top--item avatar">
              <img
                class="avatar-img"
                src={require('@/assets/47161.png')}
                alt="Admin Avatar"
              />
              <p class="avatar-username">Admin</p>
            </div>
          </section>
          <router-view></router-view>
        </section>
      </div>
    );
  }
}
