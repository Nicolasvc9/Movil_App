<template>
  <f7-page name="login">
    <f7-navbar title="Inciar Sesion" back-link="Back"></f7-navbar>
    <f7-block>
      <h3>Login</h3>
    </f7-block>
    <f7-list strong-ios dividers-ios inset-ios>
      <f7-list-input
        outline
        label="e-mail"
        floating-label
        type="text"
        placeholder="Your name"
        clear-button
      >
        <template #media>
          <f7-icon :style="{ 'align-selft': 'auto' }" f7="person"></f7-icon>
        </template>
      </f7-list-input>

      <f7-list-input
        outline
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
        clear-button
      >
        <template #media>
          <f7-icon f7="lock"></f7-icon>
        </template>
      </f7-list-input>
      <f7-list-item>
        <f7-button
          large
          fill
          strong
          :style="{
            width: '100%',
          }"
        >
          Ingresar
        </f7-button>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<style>
.list .item-floating-label {
  font-size: 9px !important;
  font-weight: 500;
}
[data-name="login"] .item-input .item-media {
  align-self: auto !important;
}
.inp_set .item-inner {
  padding-right: 0 !important;
}
</style>