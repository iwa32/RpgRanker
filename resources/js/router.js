import Vue from 'vue'
import VueRouter from 'vue-router'
import BodyClass from 'vue-body-class'

//router-viewと切り替わるコンポーネントをインポートする
import TopContainer from './components/organisms/top/TopContainer.vue'
import CommonHeader from './components/organisms/common/CommonHeader.vue'
import CommonContainer from './components/organisms/common/CommonContainer.vue'
import CommonFooter from './components/organisms/common/CommonFooter.vue'
import CharacterSelection from './components/organisms/character-select/CharacterSelection.vue'
import BattleArea from './components/organisms/battle-area/BattleArea.vue'
import BattleResult from './components/organisms/battle-result/BattleResult.vue'

Vue.use(VueRouter)

const routes = [
  {
    //トップページ
    path: '/',
    components: {
      contents: TopContainer
    }
  },
  {
    //共通ページ
    path: '/game/',
    meta: { bodyClass: 'page-common' },
    components: {
      header: CommonHeader,
      contents: CommonContainer,
      footer: CommonFooter
    },
    children: [
      {
        path: 'character-selection',
        components: {
          section: CharacterSelection
        }
      },
      {
        path: 'battle/:characterIndex',
        components: {
          section: BattleArea
        },
      },
      {
        path: 'battle-result',
        components: {
          section: BattleResult
        }
      },
      {
        path: 'bbs',
      },
      {
        path: 'ranking',
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.use(BodyClass, router)

export default router