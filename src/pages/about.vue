<template>
  <f7-page name="about">
    <f7-navbar title="Nosotros" back-link="Back"></f7-navbar>
    <f7-block-title>Proyecto TechCel</f7-block-title>
    <f7-block strong>
      <p>Tienda de celulares util para apliacciones moviles y de escritorio creda para el
        Proyecto de programacion movil, creado y diseñado por los integrantes de este grupo.
      </p>
    </f7-block>
    <f7-block>
      <f7-block-title>Integrantes del Grupo</f7-block-title>
      <f7-list simple-list dividers-ios strong outline>
        <f7-list-item title="Nicolas Vargas" />
        <f7-list-item title="Jhohan Silva" />
        <f7-list-item title="Yurany Bermudez" />
        <f7-list-item title="Jaime Salazar" />
        <f7-list-item title="Justin Batista" />
      </f7-list>
    </f7-block>
  </f7-page>
</template>
<script>
import {
  f7Navbar,
  f7Page,
  f7BlockTitle,
  f7Block,
  f7List,
  f7ListItem,
  f7ListGroup,
  f7BlockFooter,
  f7Icon,
  f7Toggle,
} from 'framework7-vue';

export default {
  components: {
    f7Navbar,
    f7Page,
    f7BlockTitle,
    f7Block,
    f7List,
    f7ListItem,
    f7ListGroup,
    f7BlockFooter,
    f7Icon,
    f7Toggle,
  },
};
</script>
