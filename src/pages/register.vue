<template>
    <f7-page name="register">
        <f7-navbar title="Registrate" back-link="back"></f7-navbar>
        <f7-block-title large>Ingresa tus datos</f7-block-title>
        <f7-list strong-ios dividers-ios inset-ios>
            <f7-list-input 
                label="Nombre" 
                type="text" 
                placeholder="Tu nombre" 
                clear-button
                v-model:value="name"
            ></f7-list-input>

            <f7-list-input 
                label="Apellidos" 
                type="text" 
                placeholder="Tus apellidos" 
                clear-button
                v-model:value="lastName"
            ></f7-list-input>

            <f7-list-input 
                label="Contraseña" 
                type="password" 
                placeholder="Tu contraseña" 
                clear-button
                v-model:value="password"
            ></f7-list-input>

            <f7-list-input 
                label="E-mail" 
                type="email" 
                placeholder="Tu E-mail" 
                clear-button
                v-model:value="email"
            ></f7-list-input>

            <f7-list-input 
                label="Numero" 
                type="text" 
                placeholder="Numero" 
                clear-button
                v-model:value="number"
            ></f7-list-input>

            <f7-button preloader:loading="isLoading2" large fill @click="load2" round> Registrar</f7-button>
        </f7-list>
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
import ContactsListComponent from 'framework7/components/contacts-list';

import { addDocument } from "../js/fb";

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
        const name = ref(null);
        const lastName = ref(null);
        const password = ref(null);
        const email = ref(null);
        const number = ref(null);
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

        const load2 = async () => {
            const form = {
                name: name.value,
                lastName: lastName.value,
                password: password.value,
                email: email.value,
                number: number.value

            }
            isLoading2.value = true;

            let doc = await addDocument("user", form)
            console.log(doc)

            name.value = null,
            lastName.value = null,
            password.value = null,
            email.value = null,
            number.value = null
            if (isLoading2.value) return;
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

            name,
            lastName,
            password,
            email,
            number
        };
    }
};
</script>