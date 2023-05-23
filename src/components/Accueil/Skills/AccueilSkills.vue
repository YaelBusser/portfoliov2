<template>
  <div class="AccueilSkills" @mouseover="animLettre">
    <div class="block-skills">
      <header>
        <h2>
          <p data-animation="rubberBand">C</p>
          <p data-animation="rubberBand">o</p>
          <p data-animation="rubberBand">m</p>
          <p data-animation="rubberBand">p</p>
          <p data-animation="rubberBand">é</p>
          <p data-animation="rubberBand">t</p>
          <p data-animation="rubberBand">e</p>
          <p data-animation="rubberBand">n</p>
          <p data-animation="rubberBand">c</p>
          <p data-animation="rubberBand">e</p>
          <p data-animation="rubberBand">s</p>
        </h2>
      </header>
      <div class="block-description-et-logo">
        <div class="description">
          <p>
            Depuis que j'ai 16 ans, je m'intéresse aux différents langages de programmation.
          </p>
          <p>
            En <span>front-end</span>, j'ai appris les bases en <span>HTML</span>, <span>CSS</span> et <span>JavaScript natif</span>,
            puis des frameworks tel que <span>Bootstrap</span>, <span>Tailwind</span>, <span>AJAX</span>,
            <span>VueJS 3</span> et <span>React</span>.
          </p>
          <p>
            En <span>back-end</span>, le <span>PHP</span>, avec la gestion de base de donnée <span>(SGBD)</span> MySql,
            le <span>MVC</span> et le framework <span>Laravel</span>.
          </p>
          <p>En <span>devops</span>, pour la mis en place de serveurs <span>MariaDB</span> et <span>web</span> pour une
            intégration continue.</p>
          <p>
            Enfin pour les <span>applications lourdes</span>, le
            <span>C#</span> où j'ai réalisé plusieurs logiciels de gestion d'entreprises fictives.
          </p>
          <p>
            Je me tiens à la pointe de la technologie en utilisant divers sites
            d'informations qu'ils soient professionels ou amateurs. Pour VueJs
            je me suis renseigné directement sur la documentation officielle de
            la toute dernière version CLI (
            <a href="https://vuejs.org/guide/introduction.html" target="_blank"
            >lien</a
            >
            ). Autrement, voici une liste non exhaustive des sites que j'utilise
            personnellement :
            <a href="https://stackoverflow.com/" target="_blank"
            >stackoverflow</a
            >,
            <a href="https://www.youtube.com/c/UnderscoreTalk" target="_blank"
            >underscore</a
            >,
            <a href="https://openclassrooms.com/" target="_blank"
            >openclassrooms</a
            >,
            <a href="https://devblogs.microsoft.com/" target="_blank"
            >devblogs-microsoft</a
            >, <a href="https://dev.to/" target="_blank">dev.to</a>,
            <a href="https://www.developpez.com/" target="_blank"
            >developpez.com</a
            >,
            <a href="https://www.lafermeduweb.net/" target="_blank"
            >lafermeduweb</a
            >, ...
          </p>
        </div>
        <div>
          <p class="skills">Skills</p>
        </div>
        <div class="block-logo">
          <div class="item-logo front-end">
            <h3>Front-end</h3>
            <div>
              <p>Natif</p>
              <div class="imagesSection">
                <img :src="logo.html"/>
                <img :src="logo.css"/>
                <img :src="logo.js"/>
              </div>
            </div>
            <div>
              <p>Framework</p>
              <div class="imagesSection">
                <img :src="logo.bootstrap"/>
                <img :src="logo.tailwind"/>
                <img :src="logo.vuejs"/>
              </div>
            </div>
          </div>
          <div class="item-logo back-end">
            <h3>Back-end</h3>
            <div>
              <p>Natif</p>
              <div class="imagesSection">
                <img :src="logo.php"/>
                <img :src="logo.mysql"/>
              </div>
            </div>
          </div>
          <div class="item-logo objet">
            <h3>Objet</h3>
            <div>
              <p>Natif</p>
              <img :src="logo.csharp"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: {
        html: require("@/assets/images/html.png"),
        css: require("@/assets/images/css.png"),
        js: require("@/assets/images/js.png"),
        php: require("@/assets/images/php.png"),
        mysql: require("@/assets/images/mysql.png"),
        bootstrap: require("@/assets/images/bootstrap.png"),
        tailwind: require("@/assets/images/tailwind.png"),
        vuejs: require("@/assets/images/vuejs.png"),
        csharp: require("@/assets/images/csharp.png"),
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
a {
  color: rgba(255, 255, 255, 0.5);
  transition: 0.5s ease;
}

a:hover {
  color: rgb(8, 253, 216);
  text-decoration: underline rgb(7, 165, 141);
}

.block-description-et-logo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}

.block-logo {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background-color: #181818;
  padding: 1rem;
  border-radius: 10px 10px 10px 10px;
}

.item-logo {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
}

.block-logo img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  user-select: none;
}

.block-logo h3 {
  color: rgb(7, 165, 141);
  font-family: "Poppins";
  font-size: 2rem;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 1rem;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #1d1d1d;
}

.block-logo p {
  color: white;
  font-family: "Lato";
  font-size: 1.5rem;
}

.imagesSection {
  display: flex;
  justify-content: space-between;
}

.back-end .imagesSection {
  display: flex;
  justify-content: center;
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

.block-skills {
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
  width: 40rem;
  margin-right: 1rem;
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

.skills {
  color: rgba(38, 38, 38, 255);
  font-family: "Poppins";
  font-weight: bold;
  font-size: 25rem;
  margin-block-start: 0;
  margin-block-end: 0;
  position: absolute;
  user-select: none;
  margin-left: -200px;
  margin-top: -100px;
  z-index: -1;
}

span {
  color: rgb(8, 253, 216);
}

@media (max-width: 1884px) {
  .block-logo {
    margin-top: 1rem;
    margin-left: 0.5rem;
  }

  .item-logo {
    margin-bottom: 1rem;
  }
}

@media (max-width: 425px) {
  header {
    margin-left: -2rem;
  }

  .block-logo {
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
</style>