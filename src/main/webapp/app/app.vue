<template>
  <div id="app" class="wrapper">
          <!-- Sidebar -->
          <nav id="sidebar">
              <div class="sidebar-header">
                  <h3>Bootstrap Sidebar</h3>
              </div>

              <ul class="list-unstyled components">
                  <p>Dummy Heading</p>
                  <li class="active">
                      <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                      <ul class="collapse list-unstyled" id="homeSubmenu">
                          <li>
                              <a href="#">Home 1</a>
                          </li>
                          <li>
                              <a href="#">Home 2</a>
                          </li>
                          <li>
                              <a href="#">Home 3</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">About</a>
                  </li>
                  <li>
                      <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                      <ul class="collapse list-unstyled" id="pageSubmenu">
                          <li>
                              <a href="#">Page 1</a>
                          </li>
                          <li>
                              <a href="#">Page 2</a>
                          </li>
                          <li>
                              <a href="#">Page 3</a>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">Portfolio</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
              </ul>
          </nav>
          <!-- Page Content -->
          <div id="content">
              <ribbon></ribbon>
              <div id="app-header">
                  <jhi-navbar></jhi-navbar>
              </div>
              <div class="container-fluid">
                  <div class="card jh-card">
                      <router-view></router-view>
                  </div>
                  <b-modal id="login-page" hide-footer lazy>
                      <span slot="modal-title" id="login-title" v-text="$t('login.title')">Sign in</span>
                      <login-form></login-form>
                  </b-modal>

                  <jhi-footer></jhi-footer>
              </div>
          </div>

  </div>
</template>

<script lang="ts" src="./app.component.ts">
</script>

<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
    }
    #sidebar {
        min-width: 250px;
        max-width: 250px;
        background: #7386D5;
        color: #fff;
        transition: all 0.3s;
    }

    #sidebar.active {
        margin-left: -250px;
    }

    #content{
        width: 100%;
    }

</style>
