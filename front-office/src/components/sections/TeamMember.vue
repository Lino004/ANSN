<template>
  <div class="team-member-area section-space--inner--120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-area text-center">
            <h2 class="section-title section-space--bottom--50">Our Team<span class="title-icon"></span></h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="team-member-wrapper">
            <div class="row">
              <!--Team member start-->
              <div class="col-lg-3 col-sm-6 col-12 section-space--bottom--30" v-for="teamMember in teamMemberData" :key="teamMember.id">
                <div class="team">
                  <div class="image">
                    <img :src="teamMember.image" alt="team member image">
                  </div>
                  <div class="content">
                    <h3 class="title">{{ teamMember.name }}</h3>
                    <span>{{ teamMember.designation }}</span>
                    <a :href= teamMember.mailto class="email">{{ teamMember.email }}</a>
                    <div class="social">
                      <a :href="item.link" :class="item.addClass" target="_blank" v-for="item in teamMember.social" :key="item.id">
                        <i :class="item.icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!--Team member end-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { GetAll } from '@/api/equipe'

  export default {    
    data(){

      return {
      
      teamMemberData: [
      {
        image: "assets/img/team/team-1.jpg",
        name: "Charles ZANKLAN",
        designation: "Président",
        email: "asnordsud23@yahoo.com",
        mailto: "mailto:asnordsud23@yahoo.com",
        social: [
          {
            icon: "fa fa-facebook",
            addClass: "facebook",
            link: "https://www.facebook.com"
          },
          {
            icon: "fa fa-twitter",
            addClass: "twitter",
            link: "https://twitter.com"
          },
          {
            icon: "fa fa-linkedin",
            addClass: "linkedin",
            link: "https://www.linkedin.com"
          },
          {
            icon: "fa fa-google-plus",
            addClass: "google",
            link: "https://www.google.com"
          }
        ]
      },
      {
        image: "assets/img/team/team-2.jpg",
        name: "Christelle HERITEAU",
        designation: "Trésorière",
        email: "amourinfinitoujours9@gmai...",
        mailto : "mailto : amourinfinitoujours9@gmail.com",
        social: [
          {
            icon: "fa fa-facebook",
            addClass: "facebook",
            link: "https://www.facebook.com"
          },
          {
            icon: "fa fa-twitter",
            addClass: "twitter",
            link: "https://twitter.com"
          },
          {
            icon: "fa fa-linkedin",
            addClass: "linkedin",
            link: "https://www.linkedin.com"
          },
          {
            icon: "fa fa-google-plus",
            addClass: "google",
            link: "https://www.google.com"
          }
        ]
      },
      
    ]
      }
    },
    async mounted() {
      this.teamMemberData = []
      const res = (await GetAll()).data
      console.log('🚀 ~ file: TeamMember.vue ~ line 117 ~ mounted ~ res', res)
      res.data.forEach(item => {
        this.teamMemberData.push({
          image: item.photo,
          name: `${item.nom} ${item.prenom}`,
          designation: item.post,
          email: item.email,
          mailto: `mailto : ${item.email}`,
          social: [
            {
              icon: "fa fa-facebook",
              addClass: "facebook",
              link: item.facebook
            },
            {
              icon: "fa fa-linkedin",
              addClass: "linkedin",
              link: item.linkedIn
            },
          ]
        })
      });
    }
    
  };
</script>