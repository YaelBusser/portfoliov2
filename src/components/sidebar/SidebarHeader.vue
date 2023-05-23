<template>
  <div class="sidebarHeader">
    <div class="routerLink">
      <router-link to="/" class="items-router">
        <img
          :src="profil.img.url"
          :alt="profil.img.alt"
          :class="imgProfilClass"
        />
        <h1>{{ profil.nom }}</h1>
        <h1>{{ profil.prenom }}</h1>
      </router-link>
    </div>
    <p>{{ profil.statut }}</p>
  </div>
</template>

<script>
export default {
  props: ["profil", "isTest"],
  data() {
    return {
      imgProfilClass: ["imgProfil", "auto", "flex"],
    };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1200px) {
  .item-router h1 {
    margin-left: 10px;
  }
  .items-router {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .routerLink {
    align-items: center;
    left: 0;
  }
  .imgProfil {
    padding: 0;
    margin-top: 0;
  }
  .sidebarHeader {
    max-height: 100%;
  }
  .sidebarResponsive {
    opacity: 0;
    z-index: 0;
  }
}
.routerLink {
  border: 0;
  padding: 0;
  justify-content: center;
  background-color: black;
}
.sidebarHeader {
  background-color: black;
  width: 100%;
  height: 250px;
}
h1 {
  color: white;
  font-family: "Poppins";
  font-size: 1.4em;
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
  user-select: none;
}
.imgProfil {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-top: 1em;
  user-select: none;
}
p {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-family: "Roboto";
  font-size: 0.8em;
}
</style>