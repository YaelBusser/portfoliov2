<template>
  <div class="ModalProjet1" v-if="reveleProjet1">
    <div class="overlay" @click="toggleModalProjet1"></div>
    <div class="modal">
      <button class="btn-modal" @click="toggleModalProjet1">
        <i class="fa-solid fa-circle-xmark i"></i>
      </button>
      <div class="blockHeader">
        <h2>Formulaire Inventaire</h2>
        <div class="block-logo">
          <img :src="logo.html" />
          <img :src="logo.css" />
          <img :src="logo.js" />
        </div>
      </div>
      <p class="description">
        Le but de ce projet était de réaliser un formulaire où il était question
        de vérifier les champs que l'utilisateur pouvait remplir en utilisant du
        JavaScript. Puis la possibilité de télécharger les informations
        récupérées du formulaire dans un bloc note. J'ai donc acquis de
        l'expérience en JavaScript natif à travers ce projet.
      </p>
      <p>
        <a href="https://yaelbusser.github.io/form/index.html" target="_blank"
          >Lien du site</a
        >
      </p>
      <p>
        <a href="https://github.com/YaelBusser/form" target="_blank"
          >Lien du github</a
        >
      </p>
      <div class="container-block-img">
        <div class="block-img">
          <button @click="prev" class="btn btn-left">
            <i class="fa-solid fa-chevron-left icon" alt="chevron gauche"></i>
          </button>
          <div
            class="container-slides"
            :style="{
              transform: `translateX(${index}rem)`,
              transition: `${transition}`,
            }"
          >
            <a :href="imgProjet.url1" target="_blank"
              ><img :src="imgProjet.url1" class="img-slides"
            /></a>
            <a :href="imgProjet.url2" target="_blank"
              ><img :src="imgProjet.url2" class="img-slides"
            /></a>
          </div>
          <button @click="next" class="btn btn-right">
            <i class="fa-solid fa-chevron-right icon" alt="chevron droite"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalProjet1",
  props: ["reveleProjet1", "toggleModalProjet1"],
  data() {
    return {
      index: 0,
      transition: "transform 0.2s ease",
      imgProjet: {
        url1: require("@/assets/images/projet1.png"),
        url2: require("@/assets/images/projet1-2.png"),
      },
      logo: {
        html: require("@/assets/images/html.png"),
        css: require("@/assets/images/css.png"),
        js: require("@/assets/images/js.png"),
      },
    };
  },
  methods: {
    next() {
      if (this.index === -20) {
        this.index = 0;
      } else {
        this.index -= 20;
      }
    },
    prev() {
      if (this.index === 0) {
        this.index = -20;
      } else {
        this.index += 20;
      }
    },
  },
};
</script>

<style scoped>
.block-description {
  width: 60%;
}
.container-block-img{
  display: flex;
  justify-content: center;
}
.block-img {
  width: 20rem;
  height: 20rem;
  position: relative;
  overflow: hidden;
  box-shadow: -1px 0px 21px 0px rgba(0,0,0,0.72);
}
.container-slides {
  position: relative;
  display: flex;
}
.img-slides {
  width: 20rem;
}
.btn {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
}
.btn:hover{
  background-color: rgb(8, 253, 216);
}
.btn-left {
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
}
.btn-right {
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
.blockHeader {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.block-logo {
  display: flex;
  justify-content: space-between;
  width: 10rem;
}
.block-logo img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  user-select: none;
}
.description {
  text-align: justify;
  width: 80%;
}
a {
  border-bottom: 1px solid rgb(8, 253, 216);
  color: black;
  transition: 0.25s ease;
}
a:hover {
  color: rgb(8, 253, 216);
}
span {
  font-weight: bold;
}
h2 {
  font-family: "Poppins";
}
p {
  font-family: "Lato";
}
.ModalProjet1 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  z-index: 6;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.modal {
  background-color: white;
  z-index: 2;
  padding: 50px;
  width: 0%;
  height: 80%;
  position: relative;
  border-radius: 10px 10px 10px 10px;
  animation: apparition 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  overflow-y: auto;
}
@keyframes apparition {
  100% {
    opacity: 1;
    width: 60%;
  }
}
.btn-modal {
  position: absolute;
  top: 20px;
  right: 30px;
  width: 33px;
  height: 33px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 100%;
}
.i {
  top: 0;
  left: 0;
  position: absolute;
  font-size: 30px;
  color: red;
  cursor: pointer;
  transition: 0.2s ease-out;
  z-index: 2;
}
.i:hover {
  color: rgb(158, 0, 0);
}
.i:active {
  color: rgb(122, 0, 0);
}
</style>