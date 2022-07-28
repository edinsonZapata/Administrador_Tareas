<template>
  <div class="w-100 h-100 m-0 p-0">
    <div
      class="d-flex h-100 w-100  justify-content-center container-view-login"
    >
      <div class="h-100 w-100 d-flex rounded container-view-login-data">
        <div class="row container-fluid my-5 mx-4 mx-md-5 ">
          <form class="d-grid gap-4 g-3 h-100  container-view-login-camp">
            <div class="row aling-items-center justify-content-center mb-3">
              <div class="col d-flex aling-items-center justify-content">
                <img
                  src="../img/logo-SmartSoft.png"
                  class="mr-2"
                  width="250"
                  alt="Logo Smartsoft"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-xl-15">
                <div class="form group p-2 mb-md-0 mr-md-1 onfirm-form-group">
                  <label class="form-label">Nombre completo</label>
                  <input type="text" class="form-control " id="nombre" />
                </div>
                <div class="mb-3 col-sm-12">
                  <div class="d-flex flex-column flex-md-row aling-items-end">
                    <div
                      class="form group p-2 mb-md-0 mr-md-1 onfirm-form-group col-sm-6"
                    >
                      <label class="form-label">Cédula</label>
                      <input type="text" class="form-control" id="cedula" />
                    </div>

                    <div class="form group p-2 col-sm-6">
                      <label class="form-label">Correo electrónico</label>
                      <input type="text" class="form-control" id="correo" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex flex-column flex-md-row aling-items-end ">
                    <div class="form group p-2 col-sm-6 ">
                      <label class="form-label">Contraseña</label>
                      <input
                        type="password"
                        class="form-control"
                        id="contraseña"
                      />
                    </div>
                    <div class="form group p-2 col-sm-6">
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
                class="form group d-flex aling-items-center justify-content-start p-3"
              >
                 <input type="checkbox" class="form-check-input" id="" />
                <label for="" class="form-check-label"
                  >Terminos</label
                >
                <link rel="stylesheet" href="" />
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-8 p-3">
              <button type="submit" class="btn btn-primary h-100">
                Ingresar
              </button>
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
