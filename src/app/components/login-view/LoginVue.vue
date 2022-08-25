<template>
  <div class="w-100 h-100 m-0 p-0">
    <div class="d-flex h-100 w-100 aling-items-center justify-content-center container-view-login">
      <div class="h-100 w-100 d-flex rounded aling-items-center container-view-login-data">
        <div class="row container-fluid my-5 mx-4 mx-md-5">
          <form
            class="d-grid gap-4 g-3 h-100 form-holder d-xl-flex flex-xl-column justify-content-xl-between animate_animated animate_fadeIn container-view-login-camp"
            @submit.stop.prevent="loginSubmit">
            <div class="row aling-items-center justify-content-center tp-3">
              <div class="col d-flex aling-items-center  justify-content-center">
                 <img
                  src="@/assets/images/logo-SmartSoft.png" class="mr-2" width="250" alt="Logo Smartsoft" />
              </div>
            </div>
            <div class="row aling-items-center ">
              <div class="col-12 col-xl-12 ">
                <div class="form group p-2 aling-items-center">
                  <label class="form-label justify-content-center">Correo electronico</label>
                  <input  type="text" id="username" placeholder="Correo electronico" class="form-control" @keyup="onInvalidCredentialsChange" v-model="email" required />
                </div>
                <div class="form group p-2">
                  <label class="form-label">Contraseña</label>
                  <input   @keyup="onInvalidCredentialsChange" v-model="password" id="password" :type="showPassword ? 'text' : 'password'" placeholder="Contraseña" class="form-control no-right-bordered" required />
                </div>
                <div class="form group d-flex aling-items-center justify-content-start p-2">
                  <input type="checkbox" class="form-check-input" id="" />
                  <label for="" class="form-check-label">Recordar credenciales</label>
                </div>
              </div>
               
              <div class="col-12 col-md-6 col-xl-8 p-4">
                <button type="submit" class="btn btn-primary" v-if="!isLoading">
                  Ingresar
                </button>
              </div>
              <div class="col h-100 aling-items-center justify-content-center text-center">
                <p>
                  ¿No tienes una cuenta?
                  <br />

                  <a href="../register">Crear cuenta</a>
                </p>
              </div>
              </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid fixed-bottom mr-3"></div>
  </div>
</template>

<script src="./loginVue.ts" lang="ts">
</script>
<style scoped lang="scss">
@import "./login-view.scss";
</style>
