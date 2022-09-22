<template>
  <div class="w-100 h-100 m-0 p-0">
    <div
      class="d-flex h-100 w-100 justify-content-center container-view-register"
    >
      <div class="h-100 w-100 d-flex rounded container-view-register-data">
        <div class="row container-fluid my-5 mx-4 mx-md-5">
          <form class="d-grid gap-4 g-3 h-100 container-view-register-camp" @submit.stop.prevent="userRegistry">
            <div class="row aling-items-center justify-content-center">
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
              <div class="row">
                <div class="col-12 col-xl-15">
                  <div
                    class="form group p-2 mb-md-0 mr-md-1 onfirm-form-group p-3"
                  >
                    <label class="form-label">Nombre completo</label>
                    <input type="text" class="form-control" id="name" v-model="users.name" required/>
                  </div>

                  <div class="mb-3 col-sm-12">
                    <div class="d-flex flex-column flex-md-row aling-items-end">
                      <div class="form group p-3 col-sm-6">
                        <label class="form-label">Tipo de documento:</label>
                        <div class="input-group">
                          <select class="form-select form-control custom-select" v-model="users.typeDocument" required >
                            <option v-if="!isTypeDocument" value="">Seleccione el tipo</option>
                             <option v-for="(documentType, index) in typeDocuments"
                              :value="documentType"
                              :key="index">
                            {{ documentType }}
                          </option>
                          </select>
                        </div>
                      </div>
                     <div class="form group p-3 col-sm-6">
                        <label for="documentNumber" class="form-label">Número de documento</label>
                        <input  type="text" class="form-control" id="numberDocument" min="100000" v-model="users.numberDocument"  required/>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column flex-md-row aling-items-end">
                    <div class="form group p-3 col-sm-6">
                      <label class="form-label">Correo electrónico</label>
                      <input type="text" class="form-control" id="email" v-model="users.email" required />
                    </div>
                    <div class="form group p-3 col-sm-6">
                      <label class="form-label"
                        >Confirmar correo electrónico</label
                      >
                      <input type="text" class="form-control" id="confirmemail" v-model="users.confemail" required />
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex flex-column flex-md-row aling-items-end">
                      <div class="form group p-3 col-sm-6">
                        <label class="form-label">Contraseña</label>
                        <div class="input-group ">
                        <input
                          type="password"
                          class="form-control"
                          :class="{'is-invalid': !isValidPassword}"
                          :disabled="!isPassword"
                          id="password"
                          v-model="users.password" required
                        />
                        <div class="input-group-append">
                           <span class="input-group-text pointer p-2" :class="{'invalid-input-append': !isValidPassword}" @click="toggleShowPassword">
                             <icon v-if="showPassword" icon="eye" style="color: var(--main-gray)"/>
                             <icon v-else icon="eye-slash" style="color: var(--main-gray)"/>
                          </span>   
                        </div>
                       </div>
                      </div>
                      
                     <div class="form group p-3 col-sm-6">
                        <label class="form-label">Confirmar contraseña</label>
                        <div class="input-group ">
                        <input
                          type="password"
                          class="form-control"
                          id="confirmpass"
                          v-model="users.confPassword"
                          :class="{'is-invalid': !equalPasswords}"
                          :disabled="!isPassword"
                          autocomplete="off" 
                           required
                        />              
                        <div class="input-group-append">       
                          <span class="input-group-text pointer p-2" :class="{'invalid-input-append': !equalPasswords}" @click="toggleShowConfirmationPassword">
                            <icon v-if="showConfirmationPassword" icon="eye" style="color: var(--main-gray)"/>
                            <icon v-else icon="eye-slash" style="color: var(--main-gray)"/>
                          </span>  
                        </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="form group d-flex aling-items-center justify-content-start p-2"
                >
                  <input type="checkbox" class="form-check-input p-2" id="" />
                  <label for="" class="form-check-label">
                    He leído y estoy de acuerdo con la
                    <a href="https://smartsoft.com.co/politica-de-privacidad/"
                      >política de privacidad y protección de datos
                      personales</a
                    >
                    de SmartSoft Solution S.A.S.
                  </label>
                  <link rel="stylesheet" href="" />

                  <label for="" class="form-label text-center"><a href="../login">Prefiero iniciar sesión</a></label>
                </div>
                <div class="col-12 col-md-6 col-xl-8 p-3">
                  <button :disabled="!isValidPassword || loading" type="submit" class="btn btn-primary h-100">
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
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