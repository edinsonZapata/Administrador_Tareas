<template>
    <!--Modal eliminar tarea-->
    <div v-if="openModalDeleteHomework" class="modal fade show " style="padding-right: 17px; display:block"
        data-bs-backdrop="static" data-bs-keyboard="false" arial-modal="true">
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

    <!--Modal crear tarea-->
     <div id="modalCreateHomework" v-if="openModalCreateHomework" class="modal fade show " style="padding-right: 17px; display:block" data-bs-backdrop="static"
                data-bs-keyboard="false" arial-modal="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content d-flex justify-content-center aling-items-center">
                        <div class="modal-header bg-dark">
                            <div class="container-fluid my-4">
                                <h3 class="text-white">Crear una nueva tarea</h3>
                            </div>
                        </div>
                        <div class="modal-body m-2 ">
                            <div class="container-fluid ">
                                <form class="">
                                    <div class="mb-3 col-sm-12">
                                        <div class="d-flex  flex-md-row aling-items-end">
                                            <div class="form group p-3 col-sm-6 row">
                                                <label class="form-label">Tema:</label>
                                                <input type="text" class="form-control" id="tema" />

                                            </div>
                                            <div class="form group p-3 col-sm-6 modal-lg">
                                                <label class="form-label">Estado:</label>
                                                <!--OPCION TAREA RESUELTA-->
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios"
                                                        id="exampleRadios2" value="option2">
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            fill="currentColor" class="bi bi-check2-circle text-center"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                            <path
                                                                d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                                        </svg>
                                                    </label>
                                                </div>
                                                <!--OPCION TAREA PENDIENTE-->
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios"
                                                        id="exampleRadios2" value="option2">
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            fill="currentColor" class="bi bi-exclamation-circle "
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                            <path
                                                                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
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
                                            <div class=" ">
                                                <div class="form group p-3 .col-xl-12" style="width:360px ;">
                                                    <label class="form-label">Valoración</label>
                                                    <textarea class="form-control" id="valoracion" rows="2"></textarea>
                                                </div>

                                                <div class="form group p-3 .col-xl-12" style="width:360px ;">
                                                    <label class="form-label">Tiempo Estimado</label>
                                                    <input type="date" class="form-control" id="tiempo" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="d-flex flex-column flex-md-row aling-items-end">
                                                <div class="form group p-3 col-sm-6">
                                                    <label class="form-label">Prioridad</label>
                                                    <input type="number" class="form-control" id="prioridad" />
                                                </div>
                                                <div class="form group p-3 col-sm-6">
                                                    <label class="form-label">Encargados</label>
                                                    <input type="text" class="form-control" id="encargados" />
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center aling-items-center m-2">
                            <div class="col-2">
                                <a href="../listhomework" type="submit" class="btn btn-primary col-lg-6 mr-4">
                                    Crear
                                </a>
                            </div>
                            <div class="col-5">
                                <a @click="showModalWindowCreateHomework" type="reset" class="btn btn-secondary col-lg-6 mr-2">
                                    Cancelar
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    <!--Modal editar tarea-->
    <div v-if="openModalEditHomework" class="modal fade show " style="padding-right: 17px; display:block"
        data-bs-backdrop="static" data-bs-keyboard="false" arial-modal="true">
        <div class="modal-dialog modal-lg modal-dialog-centered"  v-for="(task, index) of tasks"  :key="index">
            <div class="modal-content d-flex justify-content-center aling-items-center">
                <div class="modal-header bg-dark">
                    <div class="container-fluid my-4">
                        <h3 class="text-white">Editar Tarea</h3>
                    </div>
                </div>
                <div class="modal-body m-2 ">
                    <div class="container-fluid ">
                        <form class="">
                            <div class="mb-3 col-sm-12">
                                <div class="d-flex  flex-md-row aling-items-end">
                                    <div class="form group p-3 col-sm-6 row">
                                        <label class="form-label">Tema:</label>
                                        <input type="text" class="form-control " id="tema" /> {{ task.theme }}

                                    </div>
                                    <div class="form group p-3 col-sm-6 modal-lg">
                                        <label class="form-label">Estado:</label>
                                        <!--OPCION TAREA RESUELTA-->
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios"
                                                id="exampleRadios2" value="option2">
                                            <label class="form-check-label" for="exampleRadios2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-check2-circle text-center"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                    <path
                                                        d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                                </svg>
                                            </label>
                                        </div>
                                        <!--OPCION TAREA PENDIENTE-->
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios"
                                                id="exampleRadios2" value="option2">
                                            <label class="form-check-label" for="exampleRadios2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    fill="currentColor" class="bi bi-exclamation-circle "
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                                </svg>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-column flex-md-row aling-items-end">
                                    <div class="form group p-3 col-sm-6">
                                        <label class="form-label">Descripción</label>
                                        <textarea class="form-control" id="descripcion"
                                            rows="6">{{ task.description }}</textarea>
                                    </div>
                                    <div class=" ">
                                        <div class="form group p-3 .col-xl-12" style="width:360px;">
                                            <label class="form-label">Valoración</label>
                                            <textarea class="form-control" id="valoracion" rows="2"></textarea>
                                        </div>

                                        <div class="form group p-3 .col-xl-12" style="width:360px;">
                                            <label class="form-label">Tiempo Estimado</label>
                                            <input type="date" class="form-control" id="tiempo" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="d-flex flex-column flex-md-row aling-items-end">
                                        <div class="form group p-3 col-sm-6">
                                            <label class="form-label">Prioridad</label>
                                            <input type="number" class="form-control" id="prioridad" />
                                        </div>
                                        <div class="form group p-3 col-sm-6">
                                            <label class="form-label">Encargados</label>
                                            <input type="text" class="form-control" id="encargados" />
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer justify-content-center aling-items-center m-2">
                    <div class="col-5">
                        <a href="../listhomework" type="submit" class="btn btn-success col-12 mr-4">
                            Editar
                        </a>
                    </div>
                    <div class="col-5">
                        <a @click="showModalWindowEditHomework" type="reset" class="btn btn-secondary col-12 mr-2">
                            Cancelar
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script src="./modalsHomework.ts" lang="ts"></script>
<script src="../list-homework-view/listHomework.ts" lang="ts"></script>