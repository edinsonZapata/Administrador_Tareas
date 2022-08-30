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
            <!--Modal eliminar tarea-->
            <div v-if="openModalDeleteHomework" class="modal fade show " style="padding-right: 17px; display:block" data-bs-backdrop="static"
                data-bs-keyboard="false" arial-modal="true">
                <div class="modal-dialog modal modal-dialog-centered">
                    <div class="modal-content d-flex justify-content-center aling-items-center">
                        <div class="modal-header bg-danger" style="height: 25px;">
                            <div class="container-fluid my-4">
                                
                            </div>
                         </div>

                        <div class="modal-body m-2">
                                <div class="container-fluid ">
                                <h2>¿Está seguro que desea eliminar esta tarea?</h2>
                                </div>
                        </div>

                        <div class="modal-footer justify-content-center aling-items-center m-2">
                            <div class="col-5">
                                <a href="../listhomework" type="submit" class="btn btn-danger col-lg-12 mr-4">
                                    Eilminar
                                </a>
                            </div>
                            <div class="col-5">
                                <a @click="showModalWindowDeleteHomework" type="reset" class="btn btn-secondary col-lg-12 mr-2">
                                    Cancelar
                                </a>
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
                                <a class="btn btn-toggle align-items-center rounded collapsed col-12 text-white">

                                    Pagina inicio
                                </a>
                            </li>
                            <li class="nav-item mb-4">
                                <a class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white">
                                    Lista de tareas
                                </a>
                            </li>
                            <li class="nav-item mb-4">
                                <a class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white">
                                    Historial
                                </a>
                            </li>
                            <li class="nav-item mb-4">
                                <a class="btn btn-toggle alig-items-center rounded collapsed col-12 text-white">
                                    Configuracion
                                </a>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </nav>
                <main class="col-md-9 ml-sm-auto col-lg-10 px-md-5 main-manager">
                    <div class="d-flex mb-5">
                        <modalsnewTask class=" d-flex align-items-center col-8">                        
                        </modalsnewTask>                              
                        <div class="col-4 m-3">
                            <div class="">
                                <div class="card shadow-sm justify-content-center">
                                    <div class="card-group">
                                        <div class="card-body border-bottom-0 border border-secondary" style="width: 120px">
                                            <p class="card-text ">Resuelta</p>
                                        </div>

                                        <div class="card-body border-start-0 border border-secondary border-bottom-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                fill="currentColor" class="bi bi-check2-circle text-center"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                <path
                                                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="card-group">
                                        <div class="card-body border-end-0 border border-secondary ">
                                            <p class="card-text " style="width: 88px">Pendiente</p>
                                        </div>
                                        <div class="card-body border border-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                fill="currentColor" class="bi bi-exclamation-circle "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path
                                                    d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
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
                                <tr class="table-active">
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
                                <tr class="table-light" v-for="(task, index) of tasks" :key="index">
                                    <th scope="row">{{task.theme}}</th>
                                    <td>{{task.description}}</td>
                                    <td>1</td>
                                    <td><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                            fill="currentColor" class="bi bi-check2-circle text-center"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                            <path
                                                d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                        </svg></td>
                                    <td>Especificar como se comunican las tareas entre ellas, definir las necesidades
                                        para cumplir cada funcionalidad y definir el usuario al que le estamos apuntando
                                    </td>
                                    <td>1</td>
                                    <td>Angel Portilla, Andrés Perdomo, Juliana Rodríguez</td>
                                    <td><button @click="showModalWindowDeleteHomework" type="button" class="btn btn-danger  mb-3">Eliminar</button></td>                                    
                                    <td><modalseditTask></modalseditTask></td>
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