<template>
    <!--====================  footer area ====================-->
    <div class="footer-area dark-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-content-wrapper section-space--inner--50">
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-3 col-md-12">
                                <FooterAbout />
                            </div>
                            <div class="col-xl-4 col-lg-3 col-md-4">
                                <FooterLink />
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4">
                                <ContactWidget :contactWidgetData="data.footerContactWidget" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-wrapper">
            <div class="footer-copyright text-center">
                
                Copyright © ASNS 2020. All right reserved<br>
               Make with  <i class="fa fa-heart"> </i>  by <a href="https://creativenation.online/">CreativeNation</a> for a better world
            </div>
        </div>
    </div>
    <!--====================  End of footer area  ====================-->
</template>

<script>
    import FooterAbout from '@/components/FooterAbout.vue';
    import FooterLink from '@/components/FooterLink.vue';
    import ContactWidget from '@/components/ContactWidget.vue';

    import data from '../data/footer.json'
    export default {
        components: {
            FooterAbout,
            FooterLink,
            ContactWidget
        },
        data () {
            return {
                data
            }
        }
    };
</script>

<style lang="scss">

</style>