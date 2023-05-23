<template>
  <div class="AccueilPresentation" @mouseover="animLettre">
    <span class="baliseHtml"></span>
    <div class="textPresentation">
      <h1 class="phrase1">
        <span class="mot1">
          <p data-animation="rubberBand">S</p>
          <p data-animation="rubberBand">a</p>
          <p data-animation="rubberBand">l</p>
          <p data-animation="rubberBand">u</p>
          <p data-animation="rubberBand">t</p>
          <p data-animation="rubberBand">,</p>
        </span>
      </h1>
      <h1 class="phrase2">
        <span class="mot1">
          <p data-animation="rubberBand">J</p>
          <p data-animation="rubberBand">e</p></span
        >
        <span class="mot2">
          <p data-animation="rubberBand" style="padding-left: 20px">s</p>
          <p data-animation="rubberBand">u</p>
          <p data-animation="rubberBand">i</p>
          <p data-animation="rubberBand">s</p>
        </span>
        <span class="mot3">
          <p data-animation="rubberBand" style="padding-left: 20px">Y</p>
          <p data-animation="rubberBand">a</p>
          <p data-animation="rubberBand">ë</p>
          <p data-animation="rubberBand">l</p>
          <p data-animation="rubberBand">,</p>
        </span>
      </h1>
      <h1 class="phrase3">
        <span class="mot1">
          <p data-animation="rubberBand">É</p>
          <p data-animation="rubberBand">t</p>
          <p data-animation="rubberBand">u</p>
          <p data-animation="rubberBand">d</p>
          <p data-animation="rubberBand">i</p>
          <p data-animation="rubberBand">a</p>
          <p data-animation="rubberBand">n</p>
          <p data-animation="rubberBand">t</p></span
        >
        <span class="mot2">
          <p data-animation="rubberBand" style="padding-left: 20px">e</p>
          <p data-animation="rubberBand">t</p>
        </span>
        <span class="mot3">
          <p data-animation="rubberBand" style="padding-left: 20px">a</p>
          <p data-animation="rubberBand">u</p>
          <p data-animation="rubberBand">t</p>
          <p data-animation="rubberBand">o</p>
          <p data-animation="rubberBand">d</p>
          <p data-animation="rubberBand">i</p>
          <p data-animation="rubberBand">d</p>
          <p data-animation="rubberBand">a</p>
          <p data-animation="rubberBand">c</p>
          <p data-animation="rubberBand">t</p>
          <p data-animation="rubberBand">e</p>
        </span>
      </h1>
      <p class="description">
        Étudiant en BTS SIO<button @click="toggleModal" class="btn-bts">
          <i class="fa-solid fa-circle-question i"></i>
        </button>
      </p>
      <h3><a href="assets/cv.pdf" target="_blank" class="btn-cv">mon CV</a></h3>
      <div class="blockImgScrollDown">
        <a href="#projets" v-smooth-scroll><img :src="urlImgScrollDown" class="imgScrollDown" /></a>
      </div>
    </div>
  </div>
  <ModalBts :revele="LeRevele" :toggleModal="toggleModal" />
</template>

<script>
import ModalBts from "@/components/Accueil/Presentation/ModalBts";
export default {
  components: {
    ModalBts,
  },
  data() {
    return {
      LeRevele: false,
      urlImgScrollDown: require("@/assets/images/scroll.png"),
    };
  },
  methods: {
    toggleModal: function () {
      this.LeRevele = !this.LeRevele;
    },
    animLettre: function () {
      const p = document.querySelectorAll("p");
      p.forEach((e) => {
        const an = e.dataset.animation;
        e.addEventListener("animationend", () => e.classList.remove(an));
        e.addEventListener("mouseover", () => e.classList.add(an));
      });
    },
  },
};
</script>

<style scoped>
.AccueilPresentation {
  position: relative;
  border: 0.1px solid rgba(0, 0, 0, 0);
}
.blockImgScrollDown {
  height: 75px;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-left: -4rem;
}
.imgScrollDown {
  width: 50px;
  height: 75px;
  animation: animscroll 2s;
  animation-iteration-count: infinite;
}
@keyframes animscroll {
  50% {
    margin-top: -50px;
  }
}
h3 {
  width: 200px;
}
.btn-cv {
  padding: 15px;
  font-size: 15px;
  font-family: "Poppins";
  cursor: pointer;
  border: 1px solid rgb(8, 253, 216);
  transition: ease-out 0.4s;
  color: rgb(8, 253, 216);
  text-transform: uppercase;
  margin-top: 50px;
  display: block;
  text-align: center;
}
.btn-cv:hover {
  box-shadow: inset 200px 0 0 0 rgb(8, 253, 216);
  color: black;
}
.btn-bts {
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
}
.i {
  top: 0;
  left: 0;
  position: absolute;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: 0.2s ease-out;
}
.i:hover {
  color: rgb(8, 253, 216);
}
.textPresentation {
  z-index: 1;
  margin-top: 200px;
  margin-left: 90px;
}
@media (max-width: 1200px) {
  .textPresentation {
    margin-top: 100px;
  }
}
@media (max-width: 500px) {
  .textPresentation {
    font-size: 13px;
  }
}
@media (max-width: 425px) {
  .textPresentation {
    font-size: 11px;
    margin-left: 60px;
  }
  .phrase2 .mot3 {
    display: block;
    margin-top: -2rem;
  }
  .phrase2 .mot3 p:nth-child(1) {
    text-indent: -20px;
  }
  .baliseHtml::before {
    margin-left: -20px;
  }
  .baliseHtml::after {
    margin-left: -20px;
  }
  h1:nth-child(1)::before {
    margin-left: -2rem;
  }
  h1:nth-child(3)::after {
    margin-left: -2rem;
  }
  .description::before {
    margin-left: -2rem;
  }
  .description::after {
    margin-left: -2rem;
  }
}
@media (max-width: 375px) {
  .textPresentation {
    font-size: 10px;
  }
  .phrase2 .mot3 {
    display: block;
    margin-top: -2rem;
  }
  .phrase2 .mot3 p:nth-child(1) {
    text-indent: -20px;
  }
}
@media (max-width: 865px) {
  .phrase3 .mot3 {
    display: block;
    margin-top: -2rem;
  }
  .phrase3 .mot3 p:nth-child(1) {
    text-indent: -20px;
  }
  h1:nth-child(3)::after {
    margin-top: -1rem;
  }
}
.baliseHtml::before {
  content: "<html>";
  top: 15px;
  left: 30px;
  position: absolute;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.2);
}
.baliseHtml::after {
  content: "<body>";
  top: 35px;
  left: 50px;
  position: absolute;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
}
h1 {
  color: white;
  font-size: 4em;
  font-family: "Poppins";
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: -25px;
}
h1 p {
  display: inline-block;
  margin-block-start: 0;
  margin-block-end: 0;
}
h1 p:hover {
  color: rgb(8, 253, 216);
}
.rubberBand {
  animation: rubberBand 1s;
}
@keyframes rubberBand {
  0% {
    transform: scale3d(1, 1, 1);
  }
  35% {
    transform: scale3d(1.25, 0.75, 1);
  }
  45% {
    transform: scale3d(0.75, 1, 1);
  }
  60% {
    transform: scale3d(1.2, 0.8, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
.phrase1::before {
  margin-top: -10px;
  left: 4.5rem;
  content: "<h1>";
  position: absolute;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
}
.phrase3::after {
  content: "</h1>";
  position: absolute;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
  left: 4.5rem;
  margin-top: 80px;
}
.description {
  margin-top: 40px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5em;
  font-family: "Inconsolata";
  display: flex;
  align-items: center;
}
.description::before {
  content: "<p>";
  position: absolute;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
  left: 4.5rem;
  margin-top: -50px;
}
.description::after {
  content: "</p>";
  position: absolute;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
  left: 4.5rem;
  margin-top: 50px;
}
</style>