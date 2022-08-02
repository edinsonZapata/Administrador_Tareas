<template>
  <div class="w-100 h-100 m-0 p-0">
<<<<<<< Updated upstream
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
=======
    + <div class="d-flex h-100 w-100 justify-content-center container-view-register">
      <div class="h-100 w-100 d-flex rounded container-view-register-data">
        <div class="row container-fluid my-5 mx-4 mx-md-5">
          <form class="d-grid gap-4 g-3 h-100 container-view-register-camp">
            <div class="row aling-items-center justify-content-center">
              <div class="col d-flex aling-items-center justify-content-center">
                <a href="../login">
                  <img src="@/assets/images/logo-SmartSoft.png" class="mr-2" width="250" alt="Logo Smartsoft" />
                </a>
              </div>
              <div class="row">
                <div class="col-12 col-xl-15">
                  <div class="form group p-2 mb-md-0 mr-md-1 onfirm-form-group p-3">
                    <label class="form-label">Nombre completo</label>
                    <input type="text" class="form-control" id="nombre" />
                  </div>
                  <div class="mb-3 col-sm-12">
                    <div class="d-flex flex-column flex-md-row aling-items-end">
                      <div class="form group p-3 col-sm-6">
                        <label class="form-label">Tipo de documento:</label>
                        <select class="form-select form-control" aria-label="Default select example">
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
                        <input type="password" class="form-control" id="contraseña" />
                      </div>
                      <div class="form group p-3 col-sm-6">
                        <label class="form-label">Confirmar contraseña</label>
                        <input type="password" class="form-control" id="conf-contraseña" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form group d-flex aling-items-center justify-content-start p-2">
                  <input type="checkbox" class="form-check-input p-2" id="" />
                  <label for="" class="form-check-label">
                    He leído y estoy de acuerdo con la
                    <a href="https://smartsoft.com.co/politica-de-privacidad/">política de privacidad y protección de
                      datos
                      personales</a>
                    de SmartSoft Solution S.A.S.
                  </label>
                  <link rel="stylesheet" href="" />
                </div>
                <div class="col-12 col-md-6 col-xl-8 p-3">
                  <button type="submit" class="btn btn-primary h-100">
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
>>>>>>> Stashed changes
          </form>
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
=======
    <div class="container-fluid fixed-bottom mr-3"></div>
>>>>>>> Stashed changes
  </div>


</template>
<style scoped lang="scss">
@import "./register-view.scss";
</style>