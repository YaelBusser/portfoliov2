<template>
  <div class="AccueilMoi" @mouseover="animLettre">
    <div class="block-moi">
      <header>
        <h2>
          <span class="mot1">
            <p data-animation="rubberBand">M</p>
            <p data-animation="rubberBand">o</p>
            <p data-animation="rubberBand">i</p>
            <p data-animation="rubberBand">,</p>
          </span>
          <span class="mot2">
            <p data-animation="rubberBand" style="padding-left: 20px">M</p>
            <p data-animation="rubberBand">o</p>
            <p data-animation="rubberBand">i</p>
            <p data-animation="rubberBand">-</p>
            <p data-animation="rubberBand">m</p>
            <p data-animation="rubberBand">ê</p>
            <p data-animation="rubberBand">m</p>
            <p data-animation="rubberBand">e</p>
          </span>
          <span class="mot3">
            <p data-animation="rubberBand" style="padding-left: 20px">e</p>
            <p data-animation="rubberBand">t</p>
          </span>
          <span class="mot4">
            <p data-animation="rubberBand" style="padding-left: 20px">J</p>
            <p data-animation="rubberBand">e</p>
          </span>
        </h2>
      </header>
      <div class="block-description">
        <div class="description">
          <p>
            Je m'appelle Yaël, j'ai 21 ans et je n'ai pas peur de l'inconnu, je cherche continuellement à apprendre dans
            le domaine de l'informatique remplit de compétences et de concepts qui ne demandent qu'à être acquis.
          </p>
          <p>
            Depuis petit je suis très curieux et passioné par l'informatique, j'aime découvrir de nouvelles
            technologies, comment elles fonctionnent et surtout comment les mettre en pratique. Lorsque je ne comprends
            pas une erreur, j'essaie par tous les moyens d'y remédier et d'en tirer de nouvelles leçons.
          </p>
          <p>
            Mon objectif est simple mais tout aussi passionnant, je souhaite acquérir de l'expérience tout en
            développant des applications concrètes et modernes. L'envie d'apprendre des technologies, de nouvelles
            manières de faire et de réaliser des projets est bien présente car c'est ce que j'aime dans le
            développement.
          </p>
        </div>
        <img :src="moi.img" class="imgMoi"/>
        <div>
          <p class="moi">Moi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moi: {
        img: require("@/assets/images/profil.png"),
      },
    };
  },
  methods: {
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
.Accueilmoi {
  position: relative;
}

.block-description {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.block-moi {
  z-index: 3;
  padding-top: 200px;
  margin-left: 90px;
}

.imgMoi {
  position: absolute;
  width: 100px;
  height: 100px;
  margin-left: 55rem;
  user-select: none;
  animation: animImg 5s alternate;
  animation-iteration-count: infinite;
  transform: rotateX(90deg) rotateZ(-60deg) translate3d(-120px, 0px, 70px);
  box-shadow: -60px 40px 15px 5px rgba(0, 0, 0, 0.4);
  transition: all 0.4s;
  transform-style: flat;
  filter: sepia(27%) brightness(116%) hue-rotate(360deg) saturate(481%) contrast(232%);
  z-index: 0;
  transition: 1s ease;
}

@keyframes animImg {
  to {
    filter: sepia(0%) brightness(100%) hue-rotate(0deg) saturate(100%) contrast(100%);
    transform: scale(4);
    opacity: 0.6;
  }
}

h2 {
  font-size: 3rem;
  font-family: "Poppins";
  font-weight: bold;
  color: rgb(8, 253, 216);
}

h2 p {
  display: inline-block;
  margin-block-start: 0;
  margin-block-end: 0;
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

h2::before {
  margin-top: -10px;
  left: 4.5rem;
  content: "<h2>";
  position: absolute;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
}

h2::after {
  content: "</h2>";
  position: absolute;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
  left: 4.5rem;
  margin-top: 60px;
}

.description {
  width: 40rem;
  z-index: 3;
}

.description p {
  text-align: justify;
  font-size: 1.2rem;
  font-family: "Open Sans";
  color: white;
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
  margin-top: -5px;
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
  margin-top: -20px;
}

.moi {
  color: rgba(38, 38, 38, 255);
  font-family: "Poppins";
  font-weight: bold;
  font-size: 25rem;
  margin-block-start: 0;
  margin-block-end: 0;
  position: absolute;
  user-select: none;
  left: 0;
  margin-top: -300px;
  z-index: -1;
}

@media (max-width: 1350px) {
  .imgMoi {
    margin-left: 40rem;
  }
}

@media (max-width: 1000px) {
  .imgMoi {
    position: relative;
    margin-left: 10rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
}

@media (max-width: 560px) {
  .imgMoi {
    width: 80px;
    height: 80px;
    margin-left: 7rem;
  }
}

@media (max-width: 415px) {
  .imgMoi {
    width: 50px;
    height: 50px;
    margin-left: 5rem;
  }
}

@media (max-width: 425px) {
  header {
    margin-left: -2rem;
  }

  .description {
    margin-left: -2rem;
  }

  h2 p {
    font-size: 40px;
  }

  h2::before {
    margin-left: -2rem;
  }

  h2::after {
    margin-left: -2rem;
  }

  .description::before {
    margin-left: -2rem;
  }

  .description::after {
    margin-left: -2rem;
  }
}

@media (max-width: 625px) {
  .mot4 {
    display: block;
    margin-top: -2rem;
  }

  .mot4 p:nth-child(1) {
    text-indent: -20px;
  }

  h2::after {
    margin-top: -15px;
  }
}

@media (max-width: 550px) {
  .mot3 {
    display: block;
    margin-top: -2rem;
  }

  .mot3 p:nth-child(1) {
    text-indent: -20px;
  }
}

@media (max-width: 480px) {
  .mot2 {
    display: block;
    margin-top: -2rem;
  }

  .mot2 p:nth-child(1) {
    text-indent: -20px;
  }
}
</style>