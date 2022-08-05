<template>
  <div class="w-100 h-100 m-0 p-0 container-view-home">
    <div class="h-100">
        <!--Barra navegación superior-->
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
            <!-- <img src="" alt-width="32" height="32" class="rounded-circle me-2"> -->
          </a>
        </div>
        <div class="collapse navbar-collapse" id="">
          <img src="" alt="" />
          <a class="navbar-brand text-white" href="">UsuarioAdmin</a>
        </div>
        <div action="" class="d-flex p-3">
          <a class="navbar-brand text-white">Cerrar sesion</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-power mb-3 text-white"
            viewBox="0 0 16 16"
          >
            <path d="M7.5 1v7h1V1h-1z" />
            <path
              d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
            />
          </svg>
        </div>
      </nav>

      <!--Barra navegación vertical-->
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
                  <!-- <svg class="bi me-2" width="16" height="16" >
                <use xlink:href="#home"></use></svg>  -->
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

        <!--Contenido central-->
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-5 main-manager">

           <div class="container-fluid my-4">
            <h3>Crear una nueva tarea</h3>
          </div>
            <hr>
            <div class="rounded">
              <div class="row container-fluid my-5 mx-4 mx-md-5">
                <form class="d-grid gap-4 g-3 h-100 container-view-register-camp">
                  <div class="row aling-items-center justify-content-center">
                    <div class="row">
                      <div class="col-12 col-xl-15  justify-content-center">

                        <div class="mb-3 col-sm-12">
                          <div class="d-flex flex-column flex-md-row aling-items-end">
                            <div class="form group p-3 col-sm-6">
                              <label class="form-label">Tema:</label>
                              <input type="text" class="form-control" id="tema" />

                            </div>
                            <div class="form group p-3 col-sm-6">
                              <label class="form-label">Estado:</label>
                              <!--OPCION TAREA RESUELTA-->
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                <label class="form-check-label" for="exampleRadios2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle text-center" viewBox="0 0 16 16">
                                                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                  </svg>
                                </label>
                              </div>
                            <!--OPCION TAREA PENDIENTE-->
                                    <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                <label class="form-check-label" for="exampleRadios2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle " viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                        </svg>
                                </label>
                              </div>      
                            
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-md-row aling-items-end">
                          <div class="form group p-3 col-sm-6">
                            <label class="form-label">Descripción</label>
                            <textarea class="form-control" id="descripcion" rows="6"></textarea>
                          </div>

                          <div class="">
                              <div class="form group p-3 col-sm-6">
                              <label class="form-label">Valoración</label>
                              <textarea class="form-control" id="valoracion" rows="2" style="width: 390px"></textarea>
                              </div>

                              <div class="form group p-3 col-sm-6">
                                  <label class="form-label">Tiempo Estimado</label>
                                  <input type="date" class="form-control" id="tiempo" style="width: 390px" />
                              </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <div class="d-flex flex-column flex-md-row aling-items-end">
                            <div class="form group p-3 col-sm-6">
                              <label class="form-label">Prioridad</label>
                              <input type="number" class="form-control" id="prioridad"/>
                            </div>
                            <div class="form group p-3 col-sm-6">
                              <label class="form-label">Encargados</label>
                              <input
                                type="text"
                                class="form-control"
                                id="encargados"
                              />
                            </div>

                              
                          </div>

                          <div class="d-flex">
                          <div class=" md-6 p-3">
                              <button href="../list-homework-view/ListHomework.vue" type="submit" class="btn btn-success h-100">
                                  Crear
                              </button>
                          </div>
                              <div class="-md-6  p-3">
                              <button href="../list-homework-view/ListHomework.vue" type="reset" class="btn btn-secondary h-100">
                                  Cancelar
                              </button>
                          </div>
                          </div>
                          
                          

                        </div>
                      </div>
                      
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script src="./createHomework.ts" lang="ts"></script>
<style scoped lang="scss">
@import "./createHomework.scss";
</style>
