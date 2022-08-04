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
          <a class="navbar-brand text-white">Cerrar sesion</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class="bi bi-power mb-3 text-white" viewBox="0 0 16 16">
            <path d="M7.5 1v7h1V1h-1z" />
            <path
              d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
          </svg>

        </div>
      </nav>
      <div class="d-flex router-view-container">
        <nav class="d-flex flex-column flex-shrink-0 p-3 col-md-3 col-lg-2 sticky-top container-view-home-nav">
          <div class="sidebar-sticky pt-3">
            <ul class="nav flex-column">
              <li class=" container1 nav-item mb-4">
                <button class="btn btn-toggle align-items-center rounded collapsed col-12 text-black">
                  <!-- <svg class="bi me-2" width="16" height="16" >
                <use xlink:href="#home"></use></svg>  -->

                  Inicio
                </button>
              </li>
              <li class=" container2 nav-item mb-4">
                <buttom class="btn btn-toggle alig-items-center rounded collapsed col-12 m-10 text-black">
                  Lista de tareas
                </buttom>
              </li>
              <li class="nav-item mb-2">
                <buttom class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white">
                  Historial
                </buttom>
              </li>
              <li class="nav-item mb-4">
                <buttom class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white">
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
          <div class="container-fluid my-5">
            <h3>Historial</h3>
          </div>
          <div class="row">
            

            <div class="col-25 m-5">
              <div class="">
                <div class="card shadow-sm">
                  <div class="card-header p-5">
                    
                    
                    <table class="table table-bordered border-0">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class=" icon5 bi bi-power mb-5  text-dark" viewBox="0 0 16 16">
            <path d="M7.5 1v7h1V1h-1z" />
            <path
              d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
          </svg>

                      <thead class="thead-dark bg-dark text-white">
                        <tr>
                          <th scope="col">Tema</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Prioridad</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Valoracion</th>
                          <th scope="col">Tiempo Estimado</th>
                          <th scope="col">Encargados</th>

                        </tr>
                        
                      </thead>
                      
                      <tbody>
                       
                        <tr>

                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td> </td>
                          <th scope="row"></th>
                          <td></td>
                          <td> </td>
                          <td></td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td></td>
                          <td></td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>



                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>


                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid text-gray">
              <h3>Ultimos cambios</h3>
            </div>


            <div class="col-25 m-5">
              <div class="">
                <div class="card shadow-sm">
                  <div class="card-header p-5">
                    <table class="table table-bordered border-0">
                      <thead class="thead-dark bg-dark text-white">
                        <tr>
                          <th scope="col">Tema</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Prioridad</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Valoracion</th>
                          <th scope="col">Tiempo Estimado</th>
                          <th scope="col">Encargados</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td></td>
                          <td></td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>


                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>


                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td></td>
                          <td></td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>


                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>


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
  </div>
</template>

<script src="./recordPage.ts" lang="ts"></script>
<style scoped lang="scss">
@import "./recordPage.scss";
</style>
