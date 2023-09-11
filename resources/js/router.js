//環境によってページのプレフィックスを変更する。
import {
    API_PREFIX
} from './util.js'

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
import BbsArea from './components/organisms/bbs-area/BbsArea.vue'
import RankingArea from './components/organisms/ranking-area/RankingArea.vue'
import LoginRegister from './components/organisms/login-register/LoginRegister.vue'
import ThanksArea from './components/organisms/thanks-area/ThanksArea.vue'
import SystemError from './components/organisms/system/System.vue'
import NotFound from './components/organisms/errors/NotFound.vue'

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
        //システムエラー
        path: '/500',
        components: {
            contents: SystemError
        }
    },
    {
        //共通ページ
        path: '/game/',
        meta: {
            bodyClass: 'page-common'
        },
        components: {
            header: CommonHeader,
            contents: CommonContainer,
            footer: CommonFooter
        },
        children: [{
                path: 'character-selection',
                components: {
                    section: CharacterSelection
                }
            },
            {
                path: 'battle/:characterId',
                components: {
                    section: BattleArea
                }
            },
            {
                path: 'battle-result',
                components: {
                    section: BattleResult
                }
            },
            {
                path: 'bbs',
                components: {
                    section: BbsArea
                }
            },
            {
                path: 'ranking',
                components: {
                    section: RankingArea
                }
            },
            {
                path: 'login-register',
                components: {
                    section: LoginRegister
                }
            },
            {
                path: 'thanks',
                components: {
                    section: ThanksArea
                }
            }
        ]
    },
    {
        //ページが存在しない時
        path: '/*',
        components: {
            contents: NotFound
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: API_PREFIX,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
    routes
})
Vue.use(BodyClass, router)

export default router
