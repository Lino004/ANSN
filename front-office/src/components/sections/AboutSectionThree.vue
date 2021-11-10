<template>
    <div class="about-section section-space--inner--120">
        <div class="container">
            <div class="row row-25 align-items-center">
                <div class="col-lg-6 col-12 mb-30">
                    <div class="about-image-two">
                        <img src="assets/img/logo/logo.png" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-12 mb-30">
                    <div class="about-content-two">
                        <h3>Bienvenu chez ASNS</h3>
                        <h1>Actions Solidaires Nord Sud.</h1>
                        <h4></h4>
                        <p> Association française déclarée au numéro SIRET :  882 945 074 00012 sis au 23 IMPASSE DU CHARROUX 49300 CHOLET France dont le président excécutif est Charles ZANKLAN. 
                            Crée depuis le 20 mai 2019, l’association comptes plusieurs membres répartis entre la France et les pays membres.
                            Notre objectif principal est, comme nous avons essayé de le mentionner dans notre nom, de favoriser des actions solidaires des pays développés du Nord, en vers les pays moins développés du Sud.
                            Pays où l'accès à l'éducation, à une alimentation saine et équilibré ou à des soins de santé convenable est encore très précaire.</p>
                        <router-link to="/contact" class="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Contactez Nous</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/about.json'
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>