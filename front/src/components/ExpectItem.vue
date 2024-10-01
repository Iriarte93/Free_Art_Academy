<script setup lang="ts"></script>
<template>
    <div class="expect">
        <h1>WHAT TO EXPECT AS A FREE ART ACADEMY MEMBER</h1>
        <h2>
            We go way beyond video tutorials. We are a community of creatives that are passionate about learning
            computer graphics and supporting each other.</h2>
    </div>
</template>
<style scope>
.expect {
    display:flex;
    flex-direction: column;
    padding-top: 50px;
    text-align: center;
    /* background-color: rgb(17, 18, 18); */
    background: linear-gradient(to bottom, #090909, #3e2637);
    height: 30vh;
}

.expect h1 {
    color: rgb(255, 255, 255);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.expect h2 {
    color: rgb(165, 165, 165);
    max-width: 800px;
    margin: auto;
}

@media (max-width: 480px) {
    .expect h1{
        font-size:6vw;
    }
    .expect h2{
        font-size:3vw;
    }
}
</style>