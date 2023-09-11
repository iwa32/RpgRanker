import { OK
} from '../util.js'
const characterSelect = {
    namespaced: true,
    state: {
        characterList: [{}],
        characterId: 1,
        startCharacterNum: 0,
        endCount: 3 //キャラクター画面の最大表示数
    },
    getters: {
        //キャラクターごとの配列インデックス
        characterIndex(state) {
            return state.characterId - 1
        },
        characterDisplayNumber(state) {
            return state.characterList
                .slice(state.startCharacterNum, state.endCount)
        }
    },
    mutations: {
        setCharacterList(state, data) {
            state.characterList = data
        },
        selectedCharacter(state, characterId) {
            state.characterId = characterId
        },
        nextCharacter(state) {
            state.startCharacterNum++
            state.endCount++
        },
        prevCharacter(state) {
            state.startCharacterNum--
            state.endCount--
        }
    },
    actions: {
        async getCharacterList({
            commit
        }) {
            const response = await axios.get('/api/character-list')

            if (response.status !== OK) {
                this.$store.commit('error/setCode', response.status)
                return false
            }

            commit('setCharacterList', response.data)
        }
    }
}
export default characterSelect
