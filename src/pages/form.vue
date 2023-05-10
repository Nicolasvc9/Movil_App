<template>
  <f7-page name="form">
    <f7-navbar title="Registrate" back-link="Back"></f7-navbar>

    <f7-block-title>Ingresa tus datos</f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input label="Nombre" type="text" placeholder="Tu nombre"></f7-list-input>

      <f7-list-input label="Apellidos" type="text" placeholder="Tu apellido"></f7-list-input>

      <f7-list-input label="E-mail" type="text" placeholder="E-mail"></f7-list-input>

      <f7-list-input label="Contraseña" type="text" placeholder="Contraseña"></f7-list-input>

      <f7-list-input label="Numero de telefono" type="text" placeholder="Numero"></f7-list-input>

      <f7-list-input label="Genero" type="select">
        <option>Masculino</option>
        <option>Femenino</option>
        <option>No especificar
        </option>
      </f7-list-input>

      <f7-list-input label="Fecha de Nacimiento" type="date" placeholder="Birth day"
        defaultValue="2014-04-30"></f7-list-input>
    </f7-list>
    <f7-block strong outline-ios>
      <p class="grid grid-cols-2 grid-gap">
        <f7-button preloader :loading="isLoading2" large fill @click="load2"> Registrar </f7-button>
      </p>
    </f7-block>
  </f7-page>
</template>
<script>
import { ref } from 'vue';
import {
  f7Navbar,
  f7Page,
  f7BlockTitle,
  f7Block,
  f7List,
  f7ListButton,
  f7Button,
  f7Segmented,
} from 'framework7-vue';

export default {
  components: {
    f7Navbar,
    f7Page,
    f7BlockTitle,
    f7Block,
    f7List,
    f7ListButton,
    f7Button,
    f7Segmented,
  },
  setup() {
    const activeStrongButton = ref(0);
    const isLoading1 = ref(false);
    const isLoading2 = ref(false);

    const load1 = () => {
      if (isLoading1.value) return;
      isLoading1.value = true;
      setTimeout(() => {
        isLoading1.value = false;
      }, 4000);
    };

    const load2 = () => {
      if (isLoading2.value) return;
      isLoading2.value = true;
      setTimeout(() => {
        isLoading2.value = false;
      }, 4000);
    };

    return {
      activeStrongButton,
      isLoading1,
      isLoading2,
      load1,
      load2,
    };
  },
};
</script>