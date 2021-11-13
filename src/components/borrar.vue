<template>
    
      <b-container  style="position: relative;">
  
   <b-card class="col-md-3 ml-1 mt-3 shadow-lg mb-3 p-2 bg-dark rounded" style="min-width: 310px;"> 
    <b-badge class="p-1" variant="danger" style="width: 100%;">
     <p>borrar nota &nbsp;</p>
    </b-badge>
     <b-card class="bg-dark rounded" style="min-height: 300px; max-height: 390px; overflow:auto; border: none;">
   <b-row class="mt-2">
          <b-col>
              <b-badge class="mt-1" style="width: 40%;" variant="danger" ><b-icon icon="bricks"></b-icon> nombre</b-badge>
               <br>
               <input  v-model="nombre" class="mt-1 mb-3" style=" outline:0; border:none; border-radius:7px;" placeholder="minimo 4 caracteres" type="text" minlength="4">
          </b-col>
          </b-row>
         <b-row class="mt-2">
          <b-col>
               <b-badge class="mt-1" style="width: 40%;" variant="warning" ><b-icon icon="bricks"></b-icon>ID</b-badge>
               <br>
               <input v-model="id" class="mt-1 mb-3" style=" outline:0; border:none; border-radius:7px;"  type="text" minlength="4">
           </b-col>
          </b-row>
           <b-button variant="danger" class="mt-2" @click="charge"> <b-icon variant="white" icon="trash-fill"></b-icon> </b-button>
                                                  
         
     </b-card>       
      <div id="alt"></div>
    </b-card>
            
  
   </b-container>

</template>


<script>
export default {
    name: 'borrar',
    data(){
      return {
         nombre: '',
         id: '',
         url: this.GLOBAL.API
      }
    },
    methods: {
      async charge() {
        if(this.charge != undefined && this.id != 0)
        {
          await this.axios.delete(`${this.url}delete?id=${this.id}`);
           this.alert('alt','borrado o ignorado al buscar se actualiara la lista =.=');
          this.nombre = '';
          this.id = '';
           this.$root.$emit('borra');
        } else{
          this.alert('alt','los datos son incorrectos o estan vacios!');
  
        }
      },
       alert(id,any){
           const desk = document.getElementById(id);
             const alert = document.createElement('div');
             alert.setAttribute('id','alerta');
             alert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                         ${any}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="document.getElementById('alt').removeChild(document.getElementById('alerta'));">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`; 

             desk.appendChild(alert);
           this.$root.$emit('refresh');
        }
    }
}
</script>
