<template>
    <div :class="reseauxClass">
        <a :href="social.linkedin" target="_blank"><i class="fa-brands fa-linkedin-in"/></a>
        <a :href="social.github" target="_blank"><i class="fa-brands fa-github"/></a>
        <a :href="social.twitter" target="_blank"><i class="fa-brands fa-twitter"/></a>
    </div>
</template>

<script>
export default {
    props: ["social"],
    data(){
        return{
            reseauxClass: ["flex", "reseaux"]
        }
    }
}
</script>

<style scoped>
    a{
        color: rgba(255,255,255,0.5);
        transition: 0.2s ease-out;
        width: 20px;
        font-size: 1.3em;
    }
    a:hover{
        color: rgb(8, 253, 216);
    }
    .reseaux{
        width: 100%;
        margin-bottom: auto;
        justify-content: center;
    }
    .reseaux a{
        margin-right: 15px;
    }
</style>