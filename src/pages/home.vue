<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>TechCel</f7-nav-title>
      <!--filtrar busqueda de acuerdo con los productos-->
      <f7-nav-right>
        <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search"
          icon-md="material:search" />
      </f7-nav-right>
      <f7-searchbar class="searchbar-demo" expandable search-container=".search-list" search-in=".item-title" />
      <f7-list media-list dividers-ios strong-ios outline-ios class="searchbar-not-found">
        <f7-list-item title="Nothing found" />
      </f7-list>
      <f7-nav-title-large>
        <center>TechCel</center>
      </f7-nav-title-large>
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link></f7-link>
      <f7-link></f7-link>
    </f7-toolbar>
    <!-- Page content-->
    <f7-page class="search-list searchbar-found">
      <f7-block-title>PRODUCTOS</f7-block-title>
      <f7-list media-list dividers-ios strong-ios outline-ios>
        <f7-list-item link="#" title="iPhone 14 Pro" after="$1.000" subtitle="Apple"
          text="Una manera mágica de interactuar con tu iPhone. Una funcionalidad de seguridad diseñada para salvar vidas. Una innovadora cámara gran angular de 48 MP. Y una pantalla hasta dos veces más brillante bajo el sol.◊Consultar los avisos legales Todo gracias a la potencia del ultrarrápido chip A16 Bionic.">
          <template #media>
            <img style="border-radius: 8px"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-XgdnMV0XDL44Cqp401aQn6d4ceiIAW7PTJXJwGKR6jFS-66W"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Galaxy S23 Ultra 5G" after="$1.000" subtitle="samsung"
          text="Ahora es más fácil que nunca configurar tu smartphone solo para ti. One UI maximiza la personalización, lo que te permite elegir casi todos los detalles, desde pantallas de bloqueo y temas hasta widgets y notificaciones.">
          <template #media>
            <img style="border-radius: 8px"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUWNXO2IdzQHe2Y0CXmLu7nn3JLoMjIe74-TPmaAvIlDLBgZS0"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Xiaomi 12T Pro" after="$1.000" subtitle="Xiaomi"
          text="La ampliación de memoria solo está disponible cuando hay suficiente espacio de almacenamiento en el dispositivo.
La garantía no cubre mal uso por golpes y/o humedad, mala actualización del sistema y/o cualquier otro caso de mal uso del dispositivo.
El almacenamiento y la RAM disponibles son inferiores a la memoria total debido al almacenamiento del sistema operativo y el software preinstalado en el dispositivo.">
          <template #media>
            <img style="border-radius: 8px"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRoPcxWYidXeJ2jIxSM_kXb2-U-uTm5dNgipmJAnvS08fbGvfXP"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Motorola Edge 30 Ultra" after="$1.000" subtitle="Motorola"
          text="El nuevo motorola edge 30 ultra viene con la plataforma móvil Snapdragon líder en la industria y más avanzada hasta el momento. La plataforma móvil Snapdragon 8+ Gen 1 lidera el camino hacia una nueva era de tecnología móvil premium equipada con 5G">
          <template #media>
            <img style="border-radius: 8px"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSpl86IvxZE39FA-m87cmOpgSJ1RsD_0NlLQDeyNxZ3d8MW1WtH"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Cargador de pared Apple USB-C 20W" after="$1.000" subtitle="Apple"
          text="El adaptador de corriente USB-C de 20 W de Apple es muy rápido y eficiente, así que va de perlas para cargar tus dispositivos en cualquier lugar. 
                Aunque es compatible con cualquier dispositivo con USB-C, Apple recomienda usarlo con el iPad Pro y el iPad Air para lograr un rendimiento óptimo. 
                Puedes usarlo con un iPhone 8 o posterior y aprovechar la carga rápida. El cable de carga se vende por separado.">
          <template #media>
            <img style="border-radius: 8px"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2lB5SvRFxBIgAS3ZuUM7x9Bz4a0eip2ekSCDLb3uWhiwkiGXT"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Cable Apple de USB-C a Conector Lightning (1m) " after="$1.000" subtitle="Apple"
          text="Conecte su iPhone, iPad o iPod con conector Lightning a su Mac compatible con USB-C o Thunderbolt 3 (USB-C) para sincronizar y cargar, o a su iPad compatible con USB-C para cargar.">
          <template #media>
            <img style="border-radius: 8px"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFLEp64qFjFRl6gk2lvHZAj_DqtZ3pSmVoWqbKP5w75fpHmfnh"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Base de Carga Inálambrica Belkin 3 en 1 -" after="$1.000" subtitle="Belkin"
          text="Cargue sus dispositivos Apple más rápido con un soporte de carga potente y de hermoso diseño que cuenta con el último módulo magnético de carga rápida para Apple Watch Series 8 y carga MagSafe oficial de hasta 15 W para su iPhoneContenido de la Caja: BOOST↑CHARGE PRO MagSafe 3-in-1 Wireless Charging Stand with MagSafe
AC AdapterIPHONE: iPhone 14 Pro Max, iPhone 14 Pro, iPhone 14 Plus, iPhone 14, iPhone 13 Pro Max, iPhone 13 Pro, iPhone 13, iPhone 13 mini, iPhone 12 Pro Max, iPhone 12 Pro, iPhone 12, iPhone 12 miniWATCH: Watch SE (40mm), Watch SE (44mm), Watch Series 7 (41mm), Watch Series 7 (45mm), Watch Series 8 (41mm), Watch Series 8 (45mm), Watch Ultra (49mm)AIRPODS">
          <template #media>
            <img style="border-radius: 8px"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcNts3uDoSeV6iol_YjodenyiEw4Z869lf_DaKbfaEJ2lpyVws"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Cargador de pared 37W USB-C 25W + USB-A 12W" after="$1.000" subtitle="Belkin"
          text="Este cargador cuenta con la certificación USB-C PD 3.0 y ofrece velocidades de carga rápidas de hasta 0-50 % en 30 minutos. Está diseñado con un tamaño compacto que se adapta a cualquier entorno. Perfecto para hogares u oficinas">
          <template #media>
            <img style="border-radius: 8px"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUn8SPp2VQKOngMZSTFEwU5rXwosjOOA4EX4lEL3GZdnfHDCJA"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="AirPods (3ra generación) con carga MagSafe" after="$1.000" subtitle="Apple"
          text="Los AirPods no pesan nada y ofrecen un ajuste anatómico. Se colocan en el ángulo perfecto para darte un mayor confort y llevar el sonido directamente a tus oídos. Además, son un 33 % más cortos que los AirPods (2.ª generación) e incluyen un sensor de presión que te permite controlar la música y las llamadas fácilmente.">
          <template #media>
            <img style="border-radius: 8px"
              src="https://tiendasishop.com/media/catalog/product/m/m/mme73am_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="AirPods Pro (2da Generación)" after="$1.000" subtitle="Apple"
          text="Conecte su iPhone, iPad o iPod con conector Lightning a su Mac compatible con USB-C o Thunderbolt 3 (USB-C) para sincronizar y cargar, o a su iPad compatible con USB-C para cargar.">
          <template #media>
            <img style="border-radius: 8px"
              src="https://tiendasishop.com/media/catalog/product/a/i/airpods_pro_2nd_gen_pdp_image_position-2__usen.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Audífonos Jabra In Ear inalámbroc Elite 3 Bluetooth" after="$1.000" subtitle="Jabra"
          text="Jabra Elite 3 están hechos para dar nueva vida a tu música. Diseñados para ofrecer graves intensos y completos, un potente sonido personalizable y 4 micrófonos para llamadas nítidas donde quiera que vayas. Te brindan hasta 21 horas de autonomía con el estuche de carga.Con 7 horas de autonomía en los audífonos y un total de 28 horas con el estuche. Una carga rápida de 10 minutos te brinda 1 hora de reproducciónContenido de la Caja">
          <template #media>
            <img style="border-radius: 8px"
              src="https://tiendasishop.com/media/catalog/product/1/0/100-91410001-60.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x"
              width="80" />
          </template>
        </f7-list-item>
        <f7-list-item link="#" title="Audífonos Beats Solo3 Wireless Headphones" after="$1.000" subtitle="Beats"
          text="Los auriculares Beats Solo3 Wireless ofrecen una experiencia de reproducción prémium con gran precisión acústica para disfrutar de un sonido claro, nítido y equilibrado.">
          <template #media>
            <img style="border-radius: 8px"
              src="https://tiendasishop.com/media/catalog/product/m/x/mx432_av4.jpeg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=2%202x"
              width="80" />
          </template>
        </f7-list-item>
      </f7-list>
    </f7-page>
  </f7-page>
</template>
<script>
import {
  f7Searchbar,
  f7List,
  f7ListItem,
  f7Link,
  f7NavRight,
  theme,
} from 'framework7-vue';
import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';
import { firestore } from "../js/fb"
import { collection, addDoc } from "firebase/firestore";

export default {
  components: {
    f7Navbar,
    f7Page,
    f7BlockTitle,
    f7Searchbar,
    f7List,
    f7ListItem,
    f7Link,
    f7NavRight,
  },
  data() {
    return {
      theme,
    };
  },
  async created() {
    try {
      const docRef = await addDoc(collection(firestore, "users"), {
        first: "",
        last: "",
        email: "",
        password: "",
        phone: "",
        gen: "",
        born: ""
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
};
</script>