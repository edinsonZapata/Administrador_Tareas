<template>
  <div class="w-100 h-100 m-0 p-0">
    <div class="d-flex h-100 w-100 aling-items-center justify-content-center container-view-login">
      <div class="h-100 w-100 d-flex  container-view-login-data">
        <div class="row container-fluid my-5 mx-4 mx-md-5">
          <form
            class="row g-3 h-100 form-holder d-xl-flex flex-xl-column justify-content-xl-between animate_animated animate_fadeIn container-view-login-camp">
            <div class="row aling-items-center justify-content-center mb-3">
              <div class="col d-flex aling-items-center justify-content">
                <img src="../img/logo-SmartSoft.png" class="mr-2" width="250" alt="Logo Smartsoft" />

          <form class="d-grid gap-4 g-3 h-100 container-view-register-camp">
            <div class="row aling-items-center justify-content-center ">
              <div class="col d-flex aling-items-center justify-content-center">
                <a href="../login">
                <img
                  src="@/assets/images/logo-SmartSoft.png"
                  class="mr-2"
                  width="250"
                  alt="Logo Smartsoft"
                />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-xl-8">
                <div class="form group">
                  <label class="form-label">Nombre completo</label>
                  <input type="text" class="form-control" id="nombre" />
                </div>


                <div class="form group">
                  <label class="form-label">Cédula</label>
                  <input type="number" class="form-control" id="cedula" />
                </div>

                <div class="form group">
                  <label class="form-label">Correo electrónico</label>
                  <input type="email" class="form-control" id="correo" />
                </div>

                <div class="form group">
                  <label class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="password" />
                </div>
                
                <div class="form group">
                  <label class="form-label">Confirma contraseña</label>
                  <input type="password" class="form-control" id="conf-password" />
                </div>

                <div class="form group d-flex aling-items-center justify-content-start">
                  <input type="checkbox" class="form-check-input" id="termYcond" />
                  <label for="" class="form-check-label">He leído y estoy de acuerdo con la política de privacidad y protección de datos personales de  SmartSoft Solutions S.A.S</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-xl-8 ">
                <button type="submit" class="btn btn-primary h-100">Registrarse</button>

                <div class="mb-3 col-sm-12">
                  <div class="d-flex flex-column flex-md-row aling-items-end">
                    <div class="form group p-3 col-sm-6">
                      <label class="form-label">Tipo de documento:</label>
                      <select
                        class="form-select form-control"
                        aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Cédula</option>
                        <option value="2">Tarjeta de Identidad</option>
                        <option value="3">Cédula de extranjería</option>
                      </select>
                    </div> 
                      <div class="form group p-3 col-sm-6">
                        <label class="form-label">Número de documento</label>
                        <input type="text" class="form-control" id="cedula" />
                      </div>
                                      
                  </div>
                </div>
                 <div class="d-flex flex-column flex-md-row aling-items-end">   
                    <div class="form group p-3 col-sm-6">
                      <label class="form-label">Correo electrónico</label>
                      <input type="text" class="form-control" id="correo" />
                    </div>
                    <div class="form group p-3 col-sm-6">
                      <label class="form-label">Confirmar correo electrónico</label>
                      <input type="text" class="form-control" id="correo" />
                    </div>
                  </div>
                <div class="mb-3">
                  <div class="d-flex flex-column flex-md-row aling-items-end">
                    <div class="form group p-3 col-sm-6">
                      <label class="form-label">Contraseña</label>
                      <input
                        type="password"
                        class="form-control"
                        id="contraseña" />
                    </div>
                    <div class="form group p-3 col-sm-6">
                      <label class="form-label">Confirmar contraseña</label>
                      <input
                        type="password"
                        class="form-control"
                        id="conf-contraseña"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="form group d-flex aling-items-center justify-content-start p-2">
                <input type="checkbox" class="form-check-input p-2" id=""/>
                <label for="" class="form-check-label "> 
                  He leído y estoy de acuerdo con la <a href="https://smartsoft.com.co/politica-de-privacidad/">política de privacidad y protección de datos personales</a> de SmartSoft Solution S.A.S.
                </label>
                <link rel="stylesheet" href="" />
              </div>
             <div class="col-12 col-md-6 col-xl-8 p-3">
              <button type="submit" class="btn btn-primary h-100">
                Ingresar
              </button>
            </div>
            </div>
            <div class="col h-100 aling-items-center justify-content-center text-center">
              <p>
                ¿Ya tienes una cuenta?
                <br />
                <a href="">Iniciar Sesión</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid fixed-bottom mr-3"></div>
  </div>
</template>

<script src="./registerVue.ts" lang="ts"></script>
<style scoped lang="scss">
@import "./register-view.scss";
</style>