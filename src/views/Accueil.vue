<template>
  <div class="accueil">
    <AccueilPresentation />
    <AccueilProjet />
    <AccueilMoi />
    <AccueilSkills />
    <AccueilContact />
    <div class="baliseHtmlEnd"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import AccueilPresentation from "@/components/Accueil/Presentation/AccueilPresentation";
import AccueilMoi from "@/components/Accueil/Moi/AccueilMoi";
import AccueilSkills from "@/components/Accueil/Skills/AccueilSkills";
import AccueilProjet from "@/components/Accueil/Projets/AccueilProjet";
import AccueilContact from "@/components/Accueil/Contact/AccueilContact";
export default {
  name: "Accueil",
  data() {
    return {
      key: 0,

    };
  },
  components: {
    AccueilPresentation,
    AccueilMoi,
    AccueilSkills,
    AccueilProjet,
    AccueilContact,
  },
  methods: {
    reload() {
      this.key++;
    },
  },
};
</script>

<style>
.accueil {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  margin-left: 12em;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
}
@media (max-width: 1200px) {
  .accueil {
    margin-left: 0;
  }
}
.baliseHtmlEnd {
  margin-top: 1rem;
  width: 100%;
  height: 50px;
  position: relative;
}
.baliseHtmlEnd::before {
  content: "</body>";
  margin-left: 50px;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.2);
}
.baliseHtmlEnd::after {
  content: "</html>";
  position: absolute;
  left: 30px;
  top: 25px;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
}
</style>