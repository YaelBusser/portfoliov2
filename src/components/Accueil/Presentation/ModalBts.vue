<template>
  <div class="ModalBts" v-if="revele">
    <div class="overlay" @click="toggleModal"></div>
    <div class="modal">
      <button class="btn-modal" @click="toggleModal">
        <i class="fa-solid fa-circle-xmark i"></i>
      </button>
      <h2>Le BTS SIO, c'est quoi ?</h2>
      <p>
        Le BTS Services informatiques aux organisations participe à la
        production et à la fourniture de services informatiques aux
        organisations.
      </p>
      <p>
        Deux options sont proposées : SISR (Solutions d'Infrastructures Systèmes
        et Réseaux) et SLAM (Solutions Logicielles et Applications Métiers).
        J'ai personellement fait le choix de l'option SLAM.
      </p>
      <p>
        L’option SLAM est destinée à former des professionnels de
        l’environnement des langages et des outils informatiques. Nous
        développons, adaptons et faisons de la maintenance des programmes et des
        solutions applicatives.
      </p>
      <p>
        Dans ce BTS, nous mettons l'accent sur la <span>cybersécurité</span> car
        c'est une pratique primordiale pour un futur informaticien, et surtout
        dans le domaine de l'entreprise.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["revele", "toggleModal"],
};
</script>

<style scoped>
span {
  font-weight: bold;
}
h2 {
  font-family: "Poppins";
}
p {
  font-family: "Lato";
  text-align: justify;
}
.ModalBts {
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
  overflow-y: auto;
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
  padding: 30px;
  
  width: 50%;
  position: relative;
  border-radius: 10px 10px 10px 10px;
  animation: apparition 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes apparition {
  100% {
    opacity: 1;
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