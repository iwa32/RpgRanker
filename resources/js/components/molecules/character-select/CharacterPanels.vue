<template>
  <ul class="character-panels">
    <character-panel 
      v-for="character in characterDisplayNumber"
      :key="character.id"
      :class-name="{ 'active': character.id === characterId }"
      :img-pass="'/PrivateProducts/RpgRanker/images/' + character.pass + '.png'"
      :alt-name="character.name"
      :character-id="character.id"
    ></character-panel>
  </ul>
</template>

<script>
import CharacterPanel from '../../atoms/character-select/CharacterPanel.vue'
export default {
  components: {
    CharacterPanel
  },
  computed: {
    characterId() {
      return this.$store.state.characterSelect.characterId
    },
    characterDisplayNumber() {
      return this.$store.getters['characterSelect/characterDisplayNumber']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-panels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @include tab {
    margin-bottom: 20px;
  }
}
</style>