<template>
  <div class="w-100 h-100 m-0 p-0">
    <div class="d-flex h-100 w-100 aling-items-center justify-content-center container-view-login">
      <div class="h-100 w-100 d-flex rounded container-view-login-data">
        <div class="row container-fluid my-5 mx-4 mx-md-5">
          <form
            class="d-grid gap-4 g-3 h-100 form-holder d-xl-flex flex-xl-column justify-content-xl-between animate_animated animate_fadeIn container-view-login-camp">
            <div class="row aling-items-center justify-content-center mb-3">
              <div class="col d-flex aling-items-center justify-content">
                 <img
                  src="@/assets/images/logo-SmartSoft.png" class="mr-2" width="250" alt="Logo Smartsoft" />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-xl-8">
                <div class="form group p-2">
                  <label class="form-label">Correo electronico</label>
                  <input type="text" class="form-control" id="" />
                </div>
                <div class="form group p-2">
                  <label class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="" />
                </div>
                <div class="form group d-flex aling-items-center justify-content-start p-2">
                  <input type="checkbox" class="form-check-input" id="" />
                  <label for="" class="form-check-label">Recordar credenciales</label>
                </div>
              </div>
               
              <div class="col-12 col-md-6 col-xl-8 p-4">
                <button type="submit" class="btn btn-primary">
                  Ingresar
                </button>
              </div>
              <div class="col h-100 aling-items-center justify-content-center text-center">
                <p>
                  ¿No tienes una cuenta?
                  <br />

                  <a >Crear cuenta</a>
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
