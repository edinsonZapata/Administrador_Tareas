<template>
  <div class="w-100 h-100 m-0 p-0 ">
    <div class="d-flex h-100 w-100 aling-items-center justify-content-center container-view-login">
      <div
        class="d-flex h-200 w-100
          container
          border
          rounded
          border-secondary
          container-view-login-data
        "
      >
        <div class="row  container-fluid my-5 mx-4 mx-md-5">
          <form class="row g-3 h-100 form-holder d-xl-flex flex-xl-column justify-content-xl-between animate_animated animate_fadeIn">
            <div class="row aling-items-center justify-content-center mb-3">
                <div class="col d-flex aling-items-center justify-content ">
                    <img src="../img/logo-SmartSoft.png" class="mr-2" width="250" alt="Logo Smartsoft">
                </div>
            </div>
            <div class="col-md-6">
              <label class="form-label">Usuario</label>
              <input type="text" class="form-control" id="" />
            </div>
            <div class="col-sm-6">
              <label class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="" />
            </div>
            <div class="col-12">
              <input type="checkbox" class="form-check-input" id="" />
              <label for="" class="form-check-label"
                >Recordar credenciales</label
              >
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid fixed-bottom mr-3"></div>
  </div>
  
</template>

<script src="./loginVue.ts" lang="ts"></script>
<style scoped lang="scss">
@import "./login-view.scss";
</style>