<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{success: theme==='success',danger: theme==='danger'}">
      <slot>
        default
      </slot>
      <slot name="links"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header','content','theme'],
  name: "ModalVue",
  methods: {
    closeModal(){
      this.$emit("close");
    }
  }
}
</script>

<style>
  .backdrop{
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }

  .modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background-color: white;
    border-radius: 10px;
  }
  
  .success{
    background-color: green;
    color: white;
  }

  .danger{
    background-color: #ff0090;
    color: white;
  }
</style>