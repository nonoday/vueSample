<script>
// import { ref, reactive, computed, watch, markRaw } from 'vue';
// import { useRouter, useRoute, RouterView } from 'vue-router';
import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute, RouterView } from 'vue-router';

// 레이아웃 설정
import { useHead } from '@vueuse/head';
// import favicon from '@/assets/images/common/favicon.ico';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import NoneLayout from '@/layouts/NoneLayout.vue';


export default {
  components: {
    RouterView,
  },
  setup() {
    // html head 셋팅
    useHead({
      title: '공식 웹사이트',
      htmlAttrs: {
        lang: 'ko',
      },
      link: {
        rel: 'icon',
        // href: favicon,
      },
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: '공식 웹사이트',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            '디스크립션 디스크립션 디스크립션 디스크립션 디스크립션 디스크립션 디스크립션 디스크립션 디스크립션',
        },
        {
          name: 'copyright',
          content:
            'copyright(c)2011 Hana Capital Co.,Ltd. All rights reserved.',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
      ],
    });

    // 레이아웃 셋팅
    const route = useRoute();
    const layouts = {
      DefaultLayout,
      NoneLayout,
    };
    const layout = computed(() => {
      const { layout } = route.meta;

      if (route.name) {
        return layout ? layouts[layout] : layouts['DefaultLayout'];
      } else {
        return NoneLayout;
      }
    });

    return {
      layout,
    };
  },
};
</script>

<template>
  <component :is="layout"><RouterView /></component>
</template>

<style lang="scss" scoped></style>
