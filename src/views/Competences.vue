<template>
  <div class="competences">
    <div class="baliseHtmlStart"></div>
    <AccueilSkills class="accueilSkills" />
    <div class="baliseHtmlEnd"></div>
  </div>
</template>

<script>
import AccueilSkills from "@/components/Accueil/Skills/AccueilSkills";
export default {
  components: {
    AccueilSkills,
  },
};
</script>

<style scoped>
.accueilSkills{
    margin-top: -150px;
}
.competences {
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
  .competences {
    margin-left: 0px;
  }
}
.baliseHtmlStart {
  margin-top: 1rem;
  width: 100%;
  height: 50px;
  position: relative;
}
.baliseHtmlStart::before {
  content: "<html>";
  margin-left: 30px;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.2);
}
.baliseHtmlStart::after {
  content: "<body>";
  position: absolute;
  left: 50px;
  top: 25px;
  user-select: none;
  font-family: "La belle aurore";
  font-weight: lighter;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
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