<script setup lang="ts"></script>
<template>
    <div class="faq-container">
        <div class="faq-left">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <img src="@/assets/images/TheCreature_from_Exanima_copyright_Aitor_Iriarte_Cervera.png" alt="Login">
        </div>
        <div class="faq-right">
            <h2>What is Free Art Academy</h2>
            <h3>We're a small crew of artist creating art training and addons for open source programs like Blender.
            </h3>
            <h2>What will I learn?</h2>
            <h3>Everything! From drawing basics to full advance anatomy knowledge for sculpting. And of course Blender
                too!</h3>
            <h2>What goes into creating a Art Tutorial </h2>
            <h3>A standalone 10-minute video can take up to one week to produce, with an entire art course taking months
                to create.</h3>
            <h2>Where do I start?</h2>
            <h3>Right now! Just keep reading below.</h3>
        </div>
    </div>
</template>
<style scope>
.faq-container {
    display: flex;
    padding-top: 50px;
    padding-left: 20vh;
    /* text-align: center; */
    background-color: rgb(17, 18, 18);
    /* background: linear-gradient(to bottom, #090909, #3e2637); */
    height: fit-content(10%);
}

.faq-left {
    width: 30%;
    text-align: center;
    /* background-color: blue; */
}

.faq-right {
    width: 50%;
    /* text-align: center; */
    /* background-color: red; */
}

.faq-left h2 {
    color: beige;
}

.faq-right h2 {
    color: beige;
    color: #456f99;
}

.faq-right h3 {
    color: beige;
    text-align: justify;
    /* margin-left: 220px; */
}

@media(max-width:480px) {
    .faq-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0;
    }

    .faq-left {
        width: 100vw;
    }

    .faq-left h2 {
        font-size: 6vw;
    }

    .faq-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0;

    }

    .faq-right h2 {
        color: #456f99;
        font-size: 6vw;
        width: 300px;

        margin-left: 0px;
        border-left-width: 0px;
        padding-left: 0px;
        margin-right: 0;
        border-right-width: 0;
        padding-right: 0;


    }

    .faq-right h3 {
        color: beige;
        font-size: 4vw;
        margin-left: 0;
        margin-bottom: 10px;
    }

}
</style>