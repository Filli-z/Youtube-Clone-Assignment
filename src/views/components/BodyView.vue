<template>
  <q-page-container>
    <q-page padding>
      <div class="q-gutter-md row items-start">
        <div v-for="(item, index) in videos" :key="index">
          <q-img class="rounded-borders" :src="item.main" style="width: 430px; height: 250px" />
          <div class="row q-pt-md">
            <div class="col-1">
              <q-avatar size="24px">
                <img :alt="item.chanal" :src="item.icon" />
              </q-avatar>
            </div>
            <div class="col-11">
              <div class="column">
                <div class="col text-weight-bold text-h6">{{ item.title }}</div>
                <div class="col text-grey">{{ item.chanal }}</div>
                <div class="col text-grey">{{ item.views }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { ref } from 'vue'
import mountains from '../../assets/mountains.jpg'
import parallax2 from '../../assets/parallax2.jpg'
import parallax1 from '../../assets/parallax1.jpg'
import quasar from '../../assets/quasar.jpg'

const videos = ref([
  { main: mountains, icon: quasar, title: '뉴스1', chanal: '뉴스채널1', views: '100회' },
  { main: mountains, icon: quasar, title: '뉴스2', chanal: '뉴스채널2', views: '321회' },
  { main: mountains, icon: quasar, title: '뉴스3', chanal: '뉴스채널3', views: '231회' },
  { main: mountains, icon: quasar, title: '뉴스4', chanal: '뉴스채널4', views: '111회' },
  { main: mountains, icon: quasar, title: '뉴스4', chanal: '뉴스채널4', views: '111회' },
  { main: parallax2, icon: quasar, title: '뉴스1', chanal: '뉴스채널1', views: '22회' },
  { main: parallax2, icon: quasar, title: '뉴스2', chanal: '뉴스채널2', views: '12회' },
  { main: parallax1, icon: quasar, title: '뉴스1', chanal: '뉴스채널2', views: '131회' }
])
</script>

<style lang="sass"></style>
