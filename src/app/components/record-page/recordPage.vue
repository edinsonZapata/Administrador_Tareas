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
              <li class=" nav-item mb-4">
                <button class="btn btn-toggle align-items-center rounded collapsed col-12 text-black">
                  Inicio
                </button>
              </li>
              <li class=" nav-item mb-4">
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
            <div class="col-12 m-3">
              <div class="">
                <div class="card shadow-sm">
                  <div class="card-header p-5">
                    <table class="table  table-striped  border-0"> 
                      <thead class="text-white">
                        <tr class ="table-active">
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
                         <tr class="tabla" v-for="(record, index) of records" :key="index">
                                    <th scope="row">{{record.theme}}</th>
                                    <td>{{record.description}}</td>
                                    <td>{{record.priority}}</td>
                          <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></td>
                          <td></td>
                          <td>5 horas</td>
                          <td>JJuan Andres perdomo </td>
                          <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>
                           
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                           <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td> </td>
                          <th scope="row"></th>
                          <td></td>
                          <td> </td>
                          <td></td>
                        <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                   <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                                <th scope="row"></th>
                          <td></td>
                          <td></td>
                  <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>
                        </tr>                       
                        <tr>
                          <th scope="row"></th>                         
                          <td></td>
                          <td></td>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                           <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>


                        </tr>
                      </tbody>
                    </table>
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
                  <div class="card-header p-5">               
                    <table class="table table-striped border-0">                     
                      <thead class="text-white">
                        <tr class =" table-active">
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
                          <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>
                           
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                           <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td> </td>
                          <th scope="row"></th>
                          <td></td>
                          <td> </td>
                          <td></td>
                        <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>

                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                   <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                                <th scope="row"></th>
                          <td></td>
                          <td></td>
                  <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>
                        </tr>
                        
                        <tr>
                          <th scope="row"></th>
                          
                          <td></td>
                          <td></td>


                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                           <td><button type="button" class=" buton1 btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></button> </td>


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

<script src="./recordPage.ts" lang="ts">
</script>
<style scoped lang="scss" >
@import "./recordPage.scss";
</style>
