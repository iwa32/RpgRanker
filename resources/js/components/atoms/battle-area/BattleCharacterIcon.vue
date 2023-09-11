<template>
  <p class="battle-character-icon">
    <img
      :src="'/PrivateProducts/RpgRanker/images/'+ battleCharacterData.pass +'.png'"
      :alt="battleCharacterData.name"
    >
  </p>
</template>

<script>
export default {
  computed: {
    battleCharacterData() {
      return this.$store.state.battleArea.battleCharacterData
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-character-icon {
  background: #777;
  border-radius: 50%;
  border: 1px solid $contents-color;
  box-shadow: 0 0 0 1px $text-color,
   0 0 0 1px $text-color inset;
  overflow: hidden;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 1;
  width: calc(100% - 10px);
  height: max-content;
  @include tab {
    width: 100px;
  }
  @include pc {
    width: 80px;
  }
}
</style>