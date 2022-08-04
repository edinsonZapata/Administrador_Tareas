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
                viewBox="0 0 16 16">
                <path d="M7.5 1v7h1V1h-1z" />
                <path
                d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
                />
            </svg>
            </div>
      </nav>

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
                    <buttom class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white">
                    Configuracion
                    </buttom>

                </li>
                <li></li>
                </ul>
            </div>
            </nav>
                
                

               
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-5 main-manager">
                <div class="d-flex mb-5">
                    <button type="button" class="btn btn-primary mr-40  mt-auto m-5 p-4 h-50 d-inline-block">Crear Tarea</button>
                    
                    <div class="col-4 m-3">
                        <div class="">
                            <div class="card shadow-sm justify-content-center">
                                <div class="card-group ">
                                    <div class="card-body borde foo col" >
                                    <p class="card-text text-center">Resuelta</p>
                                    </div>

                                    <div class="card-body foo">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check2-circle text-center" viewBox="0 0 16 16">
                                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="card-group">                    
                                    <div class="card-body borde foo">
                                    <p class="card-text text-center">Pendiente</p>
                                    </div>
                                    <div class="card-body foo">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-exclamation-circle " viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div class="d-flex">
                        
                        <table class="table text-center">
                            <thead class="col-md-9">
                                <tr  class="table-active">
                                <th scope="col">Tema</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Prioridad</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Valoración</th>
                                <th scope="col">Tiempo estimado (días)</th>
                                <th scope="col">Encargados</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr class="table-light">
                                <th scope="row">Especificación</th>
                                <td>Realizar la investigación de las funciones que puede realizar el aplicativo</td>
                                <td>1</td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-center" viewBox="0 0 16 16">
                                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg></td>
                                <td>Especificar como se comunican las tareas entre ellas, definir las necesidades para cumplir cada funcionalidad y definir el usuario al que le estamos apuntando</td>
                                <td>1</td>
                                <td>Angel Portilla, Andrés Perdomo, Juliana Rodríguez</td>
                                <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                <td><button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg></button></td>
                                </tr>
                                
                                <tr class="table-light">
                                <th scope="row">Especificación</th>
                                <td>Definir como se estructuran dichas funcionalidades</td>
                                <td>1</td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-center" viewBox="0 0 16 16">
                                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg></td>
                                <td>Especificar como se comunican las tareas entre ellas, definir las necesidades para cumplir cada funcionalidad y definir el usuario al que le estamos apuntando</td>
                                <td>1</td>
                                <td>Angel Portilla, Andrés Perdomo, Juliana Rodríguez</td>
                                <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                <td><button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg></button></td>
                                </tr>

                                <tr class="table-light">
                                <th scope="row">Especificación</th>
                                <td>Definir objetivos que se deben cumplir para el facil uso del aplicativo</td>
                                <td>2</td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-center" viewBox="0 0 16 16">
                                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg></td>
                                <td>Especificar como se comunican las tareas entre ellas, definir las necesidades para cumplir cada funcionalidad y definir el usuario al que le estamos apuntando</td>
                                <td>1</td>
                                <td>Angel Portilla, Andrés Perdomo, Juliana Rodríguez</td>
                                <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                <td><button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg></button></td>
                                </tr>

                                <tr class="table-light">
                                <th scope="row">Diseño</th>
                                <td>Definir los componentes y como se comunican entre ellos</td>
                                <td>3</td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-center" viewBox="0 0 16 16">
                                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg></td>
                                <td>Especificar como se comunican las tareas entre ellas, definir las necesidades para cumplir cada funcionalidad y definir el usuario al que le estamos apuntando</td>
                                <td>1</td>
                                <td>Angel Portilla, Andrés Perdomo, Juliana Rodríguez</td>
                                <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                <td><button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg></button></td>
                                </tr>
                                <tr class="table-light">
                                <th scope="row">Diseño</th>
                                <td>Realizar un prototipo del aplicativo</td>
                                <td>4</td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-center" viewBox="0 0 16 16">
                                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg></td>
                                <td>Especificar como se comunican las tareas entre ellas, definir las necesidades para cumplir cada funcionalidad y definir el usuario al que le estamos apuntando</td>
                                <td>1</td>
                                <td>Angel Portilla, Andrés Perdomo, Juliana Rodríguez</td>
                                <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                <td><button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg></button></td>
                                </tr>

                                <tr class="table-light">
                                <th scope="row">Diseño</th>
                                <td>Realizar el mockup con la herramienta figma, este sera el diseño final del aplicativo por lo que debe incluir el diseño de cada uno de los componentes</td>
                                <td>5</td>
                                <td> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-center" viewBox="0 0 16 16">
                                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                        </svg></td>
                                <td>Especificar como se comunican las tareas entre ellas, definir las necesidades para cumplir cada funcionalidad y definir el usuario al que le estamos apuntando</td>
                                <td>3</td>
                                <td>Angel Portilla, Andrés Perdomo, Juliana Rodríguez</td>
                                <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                                <td><button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg></button></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>  
    </div>  
</template>

<script src="./listHomework.ts" lang="ts">
</script>
<style scoped lang="scss" >
@import "./listHomework-view.scss";
</style>