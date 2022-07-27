<template>
  <div class="w-100 h-100 m-0 p-0">
    <div class="d-flex h-100 w-100 aling-items-center justify-content-center container-view-login">
      <div class="h-100 w-100 d-flex  container-view-login-data">
        <div class="row container-fluid my-5 mx-4 mx-md-5">
          <form>
            <div
              class="row g-3 h-100 form-holder d-xl-flex flex-xl-column justify-content-xl-between animate_animated animate_fadeIn container-view-login-camp">
              <div class="row aling-items-center justify-content-center mb-3">
                <div class="col d-flex aling-items-center justify-content">
                  <img src="../img/logo-SmartSoft.png" class="mr-2" width="250" alt="Logo Smartsoft" />
                </div>
              </div>
            </div>
          
          <form class="row g-3">
            <div class="col-md-8">
              <label for="inputEmail4" class="form-label">Nombre Completo</label>
              <input type="name" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6">
              <label for="cedula" class="form-label">cedula</label>
              <input type="text" class="form-control" id="cedula">
            </div>
            <div class="col-6">
              <label for="input password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="input password">
            </div>
            <div class="col-6">
              <label for="Correo" class="form-label"> Correo Eelectronicco</label>
              <input type="email" class="form-control" id="Correo">
            </div>
            <div class="col-md-6">
              <label for="input password" class="form-label">Confirmar contraseña</label>
              <input type="password" class="form-control" id="input password">
            </div>
            <div class="col-md-4">

            </div>

            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                  He leído y estoy de acuerdo con la política de privacidad y protección de datos personales de
                  SmartSoft Solutions SAS.
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary"> registro</button>
          </div>    
           
            <div class="col-12">
              
          <a href="Ya tengo una cuenta"></a>
          </div> </form> 
          </form>
        </div>
      </div>
    </div>
  </div>


</template>

<script src="./registerVue.ts" lang="ts"></script>
<style scoped lang="scss">
@import "./register-view.scss";
</style>