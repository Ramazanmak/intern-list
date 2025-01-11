<script setup>
import MyHeader from '../components/CommonHeader.vue';
import MyFooter from '../components/CommonFooter.vue';
import internList from '../assets/intern-list.json' with {type:'json'}

import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'



const route = useRoute()

const internData = internList.find((item) => item.id == route.params.userId);

</script>

<template>
    <MyHeader>  </MyHeader>
    <main>
        <section>
            <div class="info-block">
                <h2> {{ internData.name }}, 23 года</h2>
                <h3> Направление:  {{ internData.direction }} </h3>
                <h4> Контактные данные: </h4>
    
                <ul id="contacts">
                    <li class="contact-item">
                       Номер: <a tel: href="+7(777)777-77-77" target="_blank"> +7(777)777-77-77</a>
                    </li>
                    <li class="contact-item">
                       Почта: <a mailto: href="example@mail.ru" target="_blank"> example@mail.ru</a>
                    </li>
                    <li class="contact-item">
                       Telegram: <a href="https://t.me/example" target="_blank"> @Example_tg</a>
                    </li>
                </ul>
            </div>
            <picture>
                <source type="image/webp" srcset="../assets/imgs/default-int-photo.webp">
                <img src="../assets/imgs/default-int-photo.jpg" alt="profile-photo">
            </picture>
           
        </section>
        <h2 class="section-name"> Личная информация </h2>
        <section>
            <h4> Навыки </h4>
            <ul class="skills-list">
                <li v-for="skill in internData.skills" :key="skill"> {{ skill }}</li>
            </ul>

            <h4> О себе:</h4>
            <p>
                {{ internData.about }}
            </p>
        </section>
        
    </main>

    <MyFooter></MyFooter>
</template>

<style scoped>

    main{
        padding:20px 10%;
        text-align:left;
    }
    a{
        text-decoration: none;
        color:rgb(208, 135, 0)
    }
    a:active{
        color:rgb(59, 43, 102)
    }
    section{
        color:rgb(59, 43, 102);
        background-color:#fff;
        padding:20px 70px;
        margin-bottom:30px;
        border:2px solid rgb(59, 43, 102);
        border-radius:30px;
        box-shadow:0 0 10px -3px rgb(59, 43, 102);
    }
    section:first-of-type{
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
    }

    section:hover{
        border-color:orange;
        box-shadow:0 0 10px -3px orange;
        transition-duration:250ms;
    }

    #contacts{
        list-style-type:none;
        line-height:2em;
        padding-left:10px;
    }

    img{
        border-radius:20px;
    }

    .section-name{
        padding-left:20px;
        color:rgb(59, 43, 102);
    }


    .skills-list{
        list-style-type:none;
        padding:0;
        line-height:12  0%;
        display:flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    .skills-list > li{
        background-color:rgb(211, 207, 207);
        color:rgb(59, 43, 102);
        margin:2px 5px;
        padding:3px;
    }

</style>