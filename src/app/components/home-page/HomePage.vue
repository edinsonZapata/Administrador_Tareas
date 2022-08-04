<template>
  <div class="w-100 h-100 m-0 p-0 container-view-home">
    <div class="h-100">
      <nav class="d-flex navbar navbar-expand-lg container-view-nav">
        <div class="dropdown">
          <a
            href="#"
            class="d-flex aling-items-center link-white dropdown-toggle text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-person-circle m-3"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="">
          <img src="" alt="" />
          <a class="navbar-brand text-white" href="">UsuarioAdmin</a>
        </div>
        <div action="" class="d-flex p-3">
          <a @click="showModalWindowCloseSesion" class="navbar-brand text-white">Cerrar sesion</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-power mb-3 text-white" viewBox="0 0 16 16">
            <path d="M7.5 1v7h1V1h-1z" />
            <path
              d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
            />
          </svg>
        </div>
        <div>
          <MyModal/>
        </div> 
      </nav>
      <!--  modal   -->
      <div v-if="openModalCloseSesion" class="modal fade show" style="padding-right: 17px; display:block" data-bs-backdrop="static" data-bs-keyboard="false" arial-modal="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5 class="modal-title text-white">¿Desea cerrar sesion?</h5>
              <button type="button" class="btn-close text-white" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center row m-2">
              <div class="col-6 justify-content-center">
                <button class="btn col-lg-12 btn-success mr-2">Aceptar</button>  
              </div>
              <div class="col-6">
                <button @click="showModalWindowCloseSesion" class="btn col-lg-12 btn-secondary mr-2 ">Volver</button>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div v-if="editUser" class="d-flex modal fade show" style="padding-right: 17px; display:block" data-bs-backdrop="static" data-bs-keyboard="false" arial-modal="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h5 class="text-white">Editar perfil</h5>
              <button type="button" class="btn-close text-white" aria-label="Close"></button>
            </div>
            <div class="modal-body row aling-content-center justify-content-center  col-12 m-2">
              <p>Nombre</p>
              <input class="form-control" type="text">
              <p>Contraseña</p>
              <input class="form-control" type="text">
              <p>Estado</p>
            </div>
            <div class="modal-footer aling-items-center m-2">
              <div class="col-5">
                <button class="btn col-lg-12 btn-success mr-2">Aceptar</button>  
              </div>
              <div class="col-5">
                <button @click="showModalWindowEditUser" class="btn col-lg-12 btn-secondary mr-2 ">Volver</button>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex router-view-container">
        <nav
          class="d-flex flex-column flex-shrink-0 p-3 col-md-3 col-lg-2 sticky-top container-view-home-nav"
        >
          <div class="sidebar-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-4">
                <button
                  class="btn btn-toggle align-items-center rounded collapsed col-12 text-white"
                >
                  Pagina inicio
                </button>
              </li>
              <li class="nav-item mb-4">
                <buttom
                  class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white"
                >
                  Lista de tareas
                </buttom>
              </li>
              <li class="nav-item mb-4">
                <buttom
                  class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white"
                >
                  Historial
                </buttom>
              </li>
              <li class="nav-item mb-4">
                <buttom
                  class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white"
                >
                  Configuracion
                </buttom>
              </li>
              <li></li>
            </ul>
          </div>
        </nav>
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-5 main-manager">
          <div class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content info-modal"></div>
            </div>
          </div>
          <div class="container-fluid my-4">
            <h3>Inicio</h3>
          </div>
          <hr>
          <div class="row justify-content-center">
            <div class="col-6 m-3">
              <div class="card shadow-sm">
                <div class="card-header p-3">
                  <h5>Ultimas asignaciones</h5>
                </div>
                <div class="card-body">
                  <p class="card-text">Descripcion:</p>
                </div>
                <div class="card-body">
                  <p class="card-text">Encargados</p>
                </div>
                <div class="card-body">
                  <p class="card-text">Estado</p>
                </div>
              </div>
            </div>
            <div class="col-5 m-3">
              <div class="">
                <div class="card shadow-sm">
                  <div class="card-header p-3">
                    <h5>Agentes conectados</h5>
                  </div>
                  <table class="table m-0 justify-content-center">
                    <thead class="">
                      <th ># Usuarios</th>
                      <th>Nombre</th>
                      <th>Editar</th>
                    </thead>
                    <tbody class="">
                      <tr>
                        <th scope="row">1</th>
                        <td>Usuario_1</td>
                        <td><button @click="showModalWindowEditUser " class="btn btn-primary ">Editar</button></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Usuario_2</td>
                        <td><button @click="showModalWindowEditUser" class="btn btn-primary ">Editar</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <hr>
            <div class="col-10 m-3 p-3">
              <dvi class="card">
              <div class="card-header">Notificaciones</div>
              <div class="card-text w-50 h-50"></div>
              </dvi>
            </div>
          </div>
          <div class=""></div>
        </main>
      </div>
    </div>
  </div>
</template>
<script src="./homePage.ts" lang="ts">
</script>
<style scoped lang="scss">
@import "./homePage.scss";
</style>
