<template>
  <p class="character-icon">
    <img
      :src="'/PrivateProducts/RpgRanker/images/' + characterPass + '.png'"
      :alt="characterName"
    >
  </p>
</template>

<script>
export default {
  props: {
    characterPass: String,
    characterName: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.character-icon {
  border-radius: 50%;
  box-shadow: 0 0 2px 2px $box-color;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  overflow: hidden;
  @include tab {
    box-shadow: 0 0 4px 4px $box-color;
  }
}
</style>