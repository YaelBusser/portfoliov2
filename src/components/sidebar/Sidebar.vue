<template>
  <div class="sidebar" :class="{ sidebarResponsive: isClickResponsive }">
    <SidebarHeader :profil="monProfil" />
    <SidebarBody />
    <SidebarFooter :social="mesReseaux" />
  </div>
  <div
    class="hamburger"
    :class="{ active: hamburgerResponsive }"
    @click="toggleHamburger"
  >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</template>

<script>
import SidebarHeader from "@/components/sidebar/SidebarHeader";
import SidebarBody from "@/components/sidebar/SidebarBody";
import SidebarFooter from "@/components/sidebar/SidebarFooter";
export default {
  components: {
    SidebarHeader,
    SidebarBody,
    SidebarFooter,
  },
  data() {
    return {
      hamburgerResponsive: false,
      isClickResponsive: true,
      monProfil: {
        nom: "Yaël",
        prenom: "Busser",
        img: {
          alt: "Ma photo de profil",
          url: require("@/assets/images/profil.png"),
        },
        statut: "Étudiant en BTS SIO",
      },
      mesReseaux: {
        linkedin: "https://www.linkedin.com/in/yael-busser-00376518a/",
        github: "https://github.com/YaelBusser",
        twitter: "https://twitter.com/YaelBusser53200",
      },
    };
  },
  methods: {
    toggleHamburger: function () {
      this.hamburgerResponsive = !this.hamburgerResponsive;
      this.isClickResponsive = !this.isClickResponsive;
    },
  },
  watch: {
    $route: {
      handler: function () {
        this.hamburgerResponsive = false;
        this.isClickResponsive = true;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
.sidebar {
  width: 12em;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  position: fixed;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.hamburger {
  display: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 30px;
  z-index: 11;
}
@media (max-width: 1200px) {
  .hamburger {
    display: block;
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-16px) rotate(-45deg);
  }
  .sidebar {
    transition: 0.5s;
    width: 100%;
  }
  .sidebarResponsive {
    opacity: 0;
    z-index: 0;
  }
}
.bar {
  display: block;
  width: 35px;
  height: 5px;
  margin-top: 0.5rem;
  transition: all 0.3s ease-in-out;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
}
</style>
