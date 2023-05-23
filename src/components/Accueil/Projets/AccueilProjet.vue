<template>
  <div class="AccueilProjet" id="projets">
    <div class="block-projets-presentation">
      <header>
        <h2>
          <p data-animation="rubberBand">M</p>
          <p data-animation="rubberBand">o</p>
          <p data-animation="rubberBand">n</p>

          <p data-animation="rubberBand" style="padding-left: 20px">p</p>
          <p data-animation="rubberBand">o</p>
          <p data-animation="rubberBand">r</p>
          <p data-animation="rubberBand">t</p>
          <p data-animation="rubberBand">f</p>
          <p data-animation="rubberBand">o</p>
          <p data-animation="rubberBand">l</p>
          <p data-animation="rubberBand">i</p>
          <p data-animation="rubberBand">o</p>
        </h2>
      </header>
      <div class="description">
        <p>
          Vous pouvez retrouver ici une gallerie des différents projets et
          documentations que j'ai réalisé.
        </p>
      </div>
      <div class="filter">
        <h3 class="listFilter active main" data-filter="tous">Tous</h3>
        <h3 class="listFilter" data-filter="front">Front-end</h3>
        <h3 class="listFilter" data-filter="back">Back-end</h3>
        <h3 class="listFilter" data-filter="lourde">Applications lourdes</h3>
        <h3 class="listFilter" data-filter="lourde">Documentations</h3>
      </div>
      <div class="block-projets">
        <div class="block-projet front">
          <div class="projet1">
            <p class="btnProjet" @click="toggleModalProjet1">
              voir <br />
              projet
            </p>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="block-projet front">
          <div class="projet2">
            <p class="btnProjet" @click="toggleModalProjet1">
              voir <br />
              projet
            </p>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="block-projet back">
          <div class="projet3">
            <p class="btnProjet" @click="toggleModalProjet1">
              voir <br />
              projet
            </p>
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalProjet1
    :reveleProjet1="LeReveleProjet1"
    :toggleModalProjet1="toggleModalProjet1"
  />
</template>
<script>
import $ from "jquery";
import ModalProjet1 from "@/components/Accueil/Projets/ModalProjet1";
export default {
  name: "AccueilProjet",
  components: {
    ModalProjet1,
  },
  data() {
    return {
      LeReveleProjet1: false,
    };
  },
  mounted: function () {
    this.portfolio();
  },
  methods: {
    toggleModalProjet1: function () {
      this.LeReveleProjet1 = !this.LeReveleProjet1;
    },
    animLettre: function () {
      const p = document.querySelectorAll("p");
      p.forEach((e) => {
        const an = e.dataset.animation;
        e.addEventListener("animationend", () => e.classList.remove(an));
        e.addEventListener("mouseover", () => e.classList.add(an));
      });
    },
    portfolio: function () {
      $(".listFilter").removeClass("active");
      $(".main").addClass("active");
      $(document).ready(function () {
        $(".listFilter").click(function () {
          const data = $(this).attr("data-filter");
          if (data == "tous") {
            $(".block-projet").show("500");
          } else {
            $(".block-projet")
              .filter("." + data)
              .show("500");
            $(".block-projet")
              .not("." + data)
              .hide("500");
          }
        });
        $(".listFilter").click(function () {
          $(this).addClass("active").siblings().removeClass("active");
        });
      });
    },
  },
};
</script>

<style scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: white;
  font-family: "Lato";
  position: relative;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.filter h3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.3s ease;
  cursor: pointer;
  border-radius: 3px 3px 3px 3px;
}
.filter h3:hover {
  background-color: rgb(13, 201, 173);
}
.filter h3:active {
  background-color: rgb(7, 129, 111);
}
h3.active {
  background-color: rgb(13, 201, 173);
}
@media (max-width: 1200px) {
  .textPresentation {
    margin-top: 100px;
  }
}
@media (max-width: 1002px) {
  .filter h3 {
    margin-right: 5px;
  }
}
@media (max-width: 425px) {
  .block-projet {
    max-width: 10rem;
    max-height: 10rem;
  }
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
  .projet1:hover .btnProjet {
    max-width: 2rem;
    max-height: 2rem;
    margin-top: -6.5rem;
  }
  .projet2:hover .btnProjet {
    max-width: 2rem;
    max-height: 2rem;
    margin-top: -6.5rem;
  }
  .projet3:hover .btnProjet {
    max-width: 2rem;
    max-height: 2rem;
    margin-top: -6.5rem;
  }
}
.block-projets {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-gap: 1rem;
  max-width: 62rem;
}
.block-projet {
  width: 20rem;
  height: 20rem;
  position: relative;
  overflow: hidden;
}
.btnProjet {
  margin-block-start: 0;
  margin-block-end: 0;
  user-select: none;
  transition: 0.25s ease-in-out;
  opacity: 0;
  letter-spacing: 1ch;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Open Sans";
  background-color: rgb(8, 253, 216);
  padding: 1rem;
  border-radius: 100%;
  width: 0rem;
  height: 0rem;
  cursor: pointer;
  z-index: 3;
}
.projet1 {
  width: 100%;
  height: 20rem;
  background: url("@/assets/images/projet1.png");
  background-size: 100% 20rem;
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.projet2 {
  width: 100%;
  height: 20rem;
  background: url("@/assets/images/projet2.png") no-repeat;
  background-size: 100% 20rem;
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.projet3 {
  width: 100%;
  height: 20rem;
  background: url("@/assets/images/projet3.png") no-repeat;
  background-size: 100% 20rem;
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.projet1:hover {
  transform: scale(1.5);
}
.projet1:hover .btnProjet {
  opacity: 1;
  width: 4rem;
  height: 4rem;
}
.projet2:hover {
  transform: scale(1.5);
}
.projet2:hover .btnProjet {
  opacity: 1;
  width: 4rem;
  height: 4rem;
}
.projet3:hover {
  transform: scale(1.5);
}
.projet3:hover .btnProjet {
  opacity: 1;
  width: 4rem;
  height: 4rem;
}
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
}
.overlay:hover {
  opacity: 0;
}
.block-projets-presentation {
  z-index: 3;
  padding-top: 150px;
  margin-left: 90px;
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
  width: 80%;
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
  margin-top: -25px;
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
</style>