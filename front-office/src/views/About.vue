<template>
    <div class="main-container">

        <Header />

        <AboutSectionThree />

        <TeamMember :teamData="data.team" />

        <Footer />

        <OffCanvasMobileMenu />

        <!-- back to top start -->
        <back-to-top class="scroll-top" bottom="60px">
            <i class="ion-android-arrow-up"></i>
        </back-to-top>
        <!-- back to top end -->
    </div>
</template>

<script>

    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import AboutSectionThree from '../components/sections/AboutSectionThree'
    import Policy from '../components/Policy'
    import Experience from '../components/Experience'
    import FunFact from '../components/FunFact'
    import TeamMember from '../components/sections/TeamMember'
    import Testimonial from '../components/Testimonial'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

    import data from '../data/about.json'
    export default {
        components: {
            Header,
            AboutSectionThree,
            Experience,
            TeamMember,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'About Us',
                        active: true
                    }
                ]
            }
        },
        metaInfo: {
            title: 'ASNS - About Us',
            htmlAttrs: {
                lang: 'fr',
                amp: true
            }
        }
    }
</script>

