<template>
  <p class="character-icon">
    <img 
      :src="'/PrivateProducts/RpgRanker/images/' + characterList[characterIndex].pass + '_big.png'" 
      :alt="characterList[characterIndex].name + 'の拡大したアイコン'"
    >
  </p>
</template>

<script>
export default {
  computed: {
    characterList() {
      return this.$store.state.characterSelect.characterList
    },
    characterIndex() {
      return this.$store.getters['characterSelect/characterIndex']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-icon {
  box-shadow: 0 0 1px 1px $box-color;
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  width: 350px;
  height: 350px;
}
</style>