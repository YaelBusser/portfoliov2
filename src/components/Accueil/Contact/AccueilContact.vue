<template>
  <div class="AccueilContact" @mouseover="animLettre">
    <header>
      <h2>
        <p data-animation="rubberBand">C</p>
        <p data-animation="rubberBand">o</p>
        <p data-animation="rubberBand">n</p>
        <p data-animation="rubberBand">t</p>
        <p data-animation="rubberBand">a</p>
        <p data-animation="rubberBand">c</p>
        <p data-animation="rubberBand">t</p>
      </h2>
    </header>
    <div class="description">
      <p>
        Vous pouvez me contacter à tout moment, je reste à votre entière
        disposition pour toutes informations complémentaires.
      </p>
    </div>
    <form ref="form" @submit.prevent="sendEmail">
      <div class="item">
        <input
          type="text"
          name="from_name"
          v-model="nom"
          ref="nom"
          id="nom"
          placeholder="Nom"
          :class="v$.nom.$error === true ? 'champs-error' : 'champs'"
        />
        <span
          v-for="error of v$.nom.$errors"
          :key="error.$uid"
          class="errorForm"
        >
          {{ error.$message }}
        </span>
      </div>

      <div class="item">
        <input
          type="email"
          name="from_email"
          ref="mail"
          id="mail"
          v-model="mail"
          placeholder="Mail"
          :class="v$.mail.$error === true ? 'champs-error' : 'champs'"
        />

        <span
          v-for="error of v$.mail.$errors"
          :key="error.$uid"
          class="errorForm"
        >
          {{ error.$message }}
        </span>
      </div>
      <div class="item">
        <textarea
          name="message"
          ref="message"
          id="message"
          v-model="message"
          placeholder="Message"
          :class="v$.message.$error === true ? 'champs-error' : 'champs'"
        ></textarea>

        <span
          v-for="error of v$.message.$errors"
          :key="error.$uid"
          class="errorForm"
        >
          {{ error.$message }}
        </span>

        <input type="submit" value="Envoyer" />
      </div>
      <div>
        <p class="arobas">@</p>
      </div>
    </form>
    <div class="notif" v-if="isNotif">
      <p>Votre message a bien été envoyé !</p>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";
export default {
  name: "AccueilContact",
  data() {
    return {
      v$: useVuelidate(),
      nom: null,
      mail: null,
      message: null,
      isNotif: false,
    };
  },
  components: {},
  validations() {
    return {
      nom: {
        required: helpers.withMessage(
          "Veuillez renseigner votre nom !",
          required
        ),
        maxLength: helpers.withMessage(
          "Votre nom ne doit pas dépasser 50 caractères !",
          maxLength(50)
        ),
        $autoDirty: true,
      },
      mail: {
        required: helpers.withMessage(
          "Veuillez renseigner votre mail !",
          required
        ),
        email: helpers.withMessage("Votre mail n'est pas valide !", email),
        $autoDirty: true,
      },
      message: {
        required: helpers.withMessage("Veuillez écrire un message !", required),
        maxLength: helpers.withMessage(
          "Votre message ne peut pas dépasser 255 caractères !",
          maxLength(255)
        ),
        $autoDirty: true,
      },
    };
  },
  methods: {
    sendEmail() {
      this.v$.$touch();
      if (
        this.v$.nom.$error ||
        this.v$.mail.$error ||
        this.v$.message.$error ||
        this.nom == null ||
        this.mail == null ||
        this.message == null
      ) {
        this.isNotif = false;
        console.log("error form contact !");
      } else {
        emailjs
          .sendForm(
            "service_cet0l61",
            "template_8cpd12l",
            this.$refs.form,
            "Nbo0Bzq-2nOV6j7t3"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
        console.log("form contact sent !");
        this.isNotif = true;
        setTimeout(() => (this.isNotif = false), 5000);
        (this.nom = null),
          (this.mail = null),
          (this.message = null),
          this.v$.$reset();
      }
    },
  },
};
</script>

<style scoped>
.ok {
  border: 1px solid green;
}
.AccueilContact {
  z-index: 3;
  margin-top: 150px;
  margin-left: 90px;
  position: relative;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80%;
  z-index: 5;
}
.champs {
  margin-top: 1rem;
  width: 50rem;
  border: none;
  border-radius: 5px 5px 5px 5px;
  padding: 1rem;
  outline: none;
  background-color: #2b2b2b;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Lato";
  transition: 1s ease;
}
@keyframes ok {
  to {
    border: 1px solid green;
  }
}
.champs-error {
  margin-top: 1rem;
  width: 50rem;
  border-left: 1px solid rgb(121, 2, 2);
  border-top: 1px solid rgb(121, 2, 2);
  border-right: 1px solid rgb(121, 2, 2);
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  padding: 1rem;
  outline: none;
  background-color: #2b2b2b;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Lato";
  transition: 1s ease;
  z-index: 3;
}
.errorForm {
  border-radius: 0 0 10px 10px;
  transition: 1s ease;
  padding: 1rem;
  color: rgb(255, 255, 255);
  background-color: rgb(121, 2, 2);
  width: 50.1rem;
  font-family: "Lato";
  animation: errorAnim 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  z-index: 0;
  margin-top: -3rem;
}
@keyframes errorAnim {
  to {
    opacity: 1;
    margin-top: 0;
  }
}
textarea {
  resize: none;
  min-height: 10rem;
}
.item {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}
input[type="submit"] {
  padding: 1rem;
  width: 15rem;
  height: 4rem;
  background: none;
  outline: none;
  border: 1px solid rgb(8, 253, 216);
  color: rgb(8, 253, 216);
  font-family: "Lato";
  letter-spacing: 1ch;
  margin-top: 1rem;
  margin-left: 37rem;
  cursor: pointer;
  transition: ease-out 0.4s;
  text-transform: uppercase;
  border-radius: 5px 5px 5px 5px;
}

input[type="submit"]:hover {
  box-shadow: inset 15rem 0 0 0 rgb(8, 253, 216);
  color: black;
}
.champs:-webkit-autofill {
  -webkit-text-fill-color: rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
  transition: background-color 5000s ease-in-out 0s;
}
.notif {
  width: 15rem;
  background-color: rgb(8, 253, 216);
  color: black;
  padding: 1rem;
  font-family: "Lato";
  border-radius: 5px 5px 5px 5px;
  position: fixed;
  bottom: 2rem;
  right: -20rem;
  animation: displayNotif 5s;
  animation-fill-mode: forwards;
}
.description {
  width: 50rem;
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
  left: -1rem;
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
  left: -1rem;
  margin-top: -20px;
}
@keyframes displayNotif {
  10% {
    right: 2rem;
  }
  90% {
    right: 2rem;
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
h2::before {
  margin-top: -10px;
  left: -1rem;
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
  left: -1rem;
  margin-top: 60px;
}
.rubberBand {
  animation: rubberBand 1s;
}
.arobas {
  color: rgba(38, 38, 38, 255);
  font-family: "Poppins";
  font-weight: bold;
  font-size: 25rem;
  margin-block-start: 0;
  margin-block-end: 0;
  position: absolute;
  user-select: none;
  margin-left: 900px;
  margin-top: -600px;
  z-index: -1;
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
@media (max-width: 999px) {
  .description{
    width: 30rem;
  }
  .champs {
    width: 30rem;
  }
  .champs-error {
    width: 30rem;
  }
  .errorForm {
    width: 30.1rem;
  }
  input[type="submit"] {
    margin-left: 17rem;
  }
}
@media (max-width: 640px) {
  .description{
    width: 20rem;
  }
  .champs {
    width: 20rem;
  }
  .champs-error {
    width: 20rem;
  }
  .errorForm {
    width: 20.1rem;
  }
  input[type="submit"] {
    margin-left: 7rem;
  }
}
@media (max-width: 475px) {
  .description{
    width: 12rem;
  }
  .champs {
    width: 12rem;
  }
  .champs-error {
    width: 12rem;
  }
  .errorForm {
    width: 12.1rem;
  }
  input[type="submit"] {
    margin-left: 0rem;
    width: 14rem;
  }
}
</style>