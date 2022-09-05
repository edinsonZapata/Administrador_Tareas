<template>
  <div class="w-100 h-100 m-0 p-0 container-view-home">
    <div class="h-100">
      <nav class="d-flex navbar navbar-expand-lg container-view-nav">
        <div class="dropdown">
          <a href="#" class="d-flex aling-items-center link-white dropdown-toggle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
              class="bi bi-person-circle m-3" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <!-- <img src="" alt-width="32" height="32" class="rounded-circle me-2"> -->
          </a>
        </div>
        <div class="collapse navbar-collapse" id="">
          <img src="" alt="" />
          <a class="navbar-brand text-white" href="">UsuarioAdmin</a>
        </div>
        <div action="" class="d-flex p-3">
          <a @click="showModalWindowCloseSesion" class="navbar-brand text-white">Cerrar sesion
            <icon :icon="['fas ', 'fa-door-open']" width="35" height="35" />
          </a>
        </div>
        <div>
          <MyModal />
        </div>

      </nav>
    </div>
    <div v-if="openModalCloseSesion" class="modal fade show" style="padding-right: 17px; display:block"
      data-bs-backdrop="static" data-bs-keyboard="false" arial-modal="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-white">¿Desea cerrar sesion?</h5>
            <button @click="showModalWindowCloseSesion" type="button" class="btn-close text-white"
              aria-label="Close"></button>
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

    <div v-if="openModalRefreshRecord" class="modal fade show" style="padding-right: 17px; display:block"
      data-bs-backdrop="static" data-bs-keyboard="false" arial-modal="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-white">Desea restaurar la tarea?</h5>
            <button @click="showModalWindowRefreshRecord" type="button" class="btn-close text-white"
              aria-label="Close"></button>
          </div>
          <div class="modal-body text-center row m-2">
            <div class="col-6 justify-content-center">
              <button class="btn col-lg-12 btn-success mr-2">Aceptar</button>
            </div>
            <div class="col-6">
              <button @click="showModalWindowRefreshRecord" class="btn col-lg-12 btn-secondary mr-2 ">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex router-view-container">
      <nav class="d-flex flex-column flex-shrink-0 p-3 col-md-3 col-lg-2 sticky-top container-view-home-nav">
        <div class="sidebar-sticky pt-3">

          <ul class="nav flex-column">
            <li class="nav-item mb-4">
              <a class="btn btn-toggle align-items-center rounded collapsed col-12 text-white active">
                <icon :icon="['fas', 'fa-house']" />
                Pagina inicio
              </a>
            </li>

            <li class="nav-item mb-4">
              <a class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white" href="../list-homework">
                <icon icon="fa-solid fa-clipboard-list" class="mg-3" />
                Lista de tareas
              </a>
            </li>
            <li class="nav-item mb-4">
              <a class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white " href="record">
                <icon icon="fa-solid fa-business-time" />
                Historial
              </a>
            </li>
            <li class="nav-item mb-4">
              <a class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white" href="../setting">
                <icon icon="fa-solid fa-gear" />
                Configuracion
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main class="col-md-9 ml-sm-auto col-lg-10 px-md-5 main-manager">
        <div class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content info-modal"></div>
          </div>

        </div>
        <div class="container-fluid my-5 ">
          <h3>Historial</h3>
        </div>
        <div class="row">
          <div class="col-20 m-3">
            <div class="">
              <div class="card shadow-sm">
                <div class="card-header p-4">
                  <table class="table table-striped border-0">
                    <thead class="text-white">
                      <tr class=" table-active">
                        <th scope="col">Tema</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Prioridad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Valoracion</th>
                        <th scope="col">Tiempo Estimado</th>
                        <th scope="col">Encargados</th>
                        <th scope="col">Acciones</th>
                      </tr>

                    </thead>
                  <tbody>
                    <tr>
                      <tbody class="" >
                      <tr v-for="(record, index) of records" :key="index">
                        <th scope="row">{{record.Theme}}</th>
                        <td>{{record.description}}</td>                        
                        <td>{{record.priority}}</td>
                        <td>{{record.status}}</td>
                        <td>{{record.assessment}}</td>
                        <td>{{record.estimatedTime}}</td>
                        <td>{{record.managers}}</td>
                        <td><button type="button" class=" buton1 btn btn-primary" @click="showModalWindowRefreshRecord"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                            <path
                              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                            <path fill-rule="evenodd"
                              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                          </svg></button> </td>
                  
                      </tr>                     
                    </tbody>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="container-fluid my-3 ">
          <h3>Ultimos cambios</h3>
        </div>

        <div class="row">
          <div class="col-20 m-3">
            <div class="">
              <div class="card shadow-sm">
                <div class="card-header p-4">
                  <table class="table table-striped border-0">
                    <thead class="text-white">
                      <tr class=" table-active">
                        <th scope="col">Tema</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Prioridad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Valoracion</th>
                        <th scope="col">Tiempo Estimado</th>
                        <th scope="col">Encargados</th>
                        <th scope="col">Acciones</th>
                      </tr>

                    </thead>
                  <tbody>
                    <tr>
                      <tbody class="" >
                      <tr v-for="(record, index) of records" :key="index">
                        <th scope="row">{{record.Theme}}</th>
                        <td>{{record.description}}</td>                        
                        <td>{{record.priority}}</td>
                        <td>{{record.status}}</td>
                        <td>{{record.assessment}}</td>
                        <td>{{record.estimatedTime}}</td>
                        <td>{{record.managers}}</td>
                        <td><button type="button" class=" buton1 btn btn-primary" @click="showModalWindowRefreshRecord"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                            <path
                              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                            <path fill-rule="evenodd"
                              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                          </svg></button> </td>
                  
                        </tr>                     
                    </tbody>
                    </tr>
                  </tbody>
                  </table>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=""></div>
      </main>
    </div>
  </div>

</template>

<script src="./recordPage.ts" lang="ts">
</script>
<style scoped lang="scss" >
@import "./recordPage.scss";
</style>
