<template>
    <div>
        <button @click="showModalWindowEditUser" class="btn btn-primary "><icon :icon="['fas', 'fa-pen-to-square']"/> Editar</button>

    <!--modal editar usuario--> 
      <div v-if="editUser" class="d-flex modal fade show" style="padding-right: 17px; display:block" data-bs-backdrop="static" data-bs-keyboard="false" arial-modal="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content d-flex justify-content-center aling-items-center">
            <div class="modal-header bg-dark ">
              <h5 class="text-white">Editar perfil</h5>
              <button @click="showModalWindowEditUser" type="button" class="btn-close text-white" aria-label="Close"></button>
            </div>
            <div class="modal-body m-2 ">
              <p class="p-2">Nombre</p>
              <input class="form-control  mr-2" type="text" v-model="newName">
              <p class="p-2">Contraseña</p>
              <input class="form-control mr-2" type="text" v-model="newPassword">
              <p class="p-2">Estado</p>
            </div>
            <div class="modal-footer justify-content-center aling-items-center m-2">
              <div class="col-5">
                <button type="submit" class="btn col-lg-12 btn-success mr-2">Aceptar</button>  
              </div>
              <div class="col-5">
                <button @click="showModalWindowEditUser" class="btn col-lg-12 btn-secondary mr-2 ">Volver</button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts" src="./editUser-modal.ts">
</script>

