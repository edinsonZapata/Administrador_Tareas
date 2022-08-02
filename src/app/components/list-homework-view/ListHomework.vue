<template>
<div class="w-100 h-100 m-0 p-0 container-view-home ">
    <!--Barra Navegación-->
    <nav class="d-flex navbar navbar-expand-lg bg-white ">
        <div class="dropdown">
            <a href="#" class="d-flex aling-items-center link-white dropdown-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle m-3" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <!-- <img src="" alt-width="32" height="32" class="rounded-circle me-2"> -->
            </a>
        </div>
        <div class="collapse navbar-collapse " id="">
            <img src="" alt="">
            <a class="navbar-brand" href="">UsuarioAdmin</a>
        </div>
        <div action="" class="d-flex p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-power mb-3" viewBox="0 0 16 16">
                <path d="M7.5 1v7h1V1h-1z"/>
                <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
            </svg>
            <a class="navbar-brand ">Cerrar sesion</a>
        </div>
    </nav>

    <div class="d-flex flex-column flex-shrink-0 p-3 w-80 h-100 container-view-home">
    <!--Dashboard-->
            <div class="row p-3 container-view-home-nav" style="width: 250px">
                
                    <ul class="list-unstyled ps-0 p-3 " >
                    <li class="nav-item mb-4" >
                    <button class="btn btn-toggle alig-items-center rounded collapsed col-12"><svg class="bi me-2" width="16" height="16" ><use xlink:href="#home"></use></svg> Pagina inicio</button>
                    </li>
                    <li class="nav-item mb-4">
                        <buttom class="btn btn-toggle alig-items-center rounded collapsed col-12">
                            Lista de tareas
                        </buttom>
                    </li>
                    <li class="nav-item mb-4">
                        <buttom class="btn btn-toggle alig-items-center rounded collapsed col-12">
                            Historial
                        </buttom>
                    </li>
                    <li class="nav-item mb-4">
                        <buttom class="btn btn-toggle alig-items-center rounded collapsed col-12">
                            Configuracion
                        </buttom>
                    </li>
                    </ul>
            </div>
            <!--LISTA TAREAS-->
        <div class="modal-content info-modal">
        <button type="button" class="btn btn-primary p-3">Crear Tarea</button>
            <table class="table">
                <thead>
                    <tr  class="table-active">
                    <th scope="col">Tema</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Prioridad</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Valoracion</th>
                    <th scope="col">Tiempo estimado</th>
                    <th scope="col">Encargados</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
        </table>
        </div>
    </div>
     
</div>
</template>

<script src="./listHomework.ts" lang="ts">
</script>
<style scoped lang="scss" >
@import "./listHomework-view.scss";
</style>