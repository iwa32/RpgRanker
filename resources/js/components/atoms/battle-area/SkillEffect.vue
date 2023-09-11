<template>
  <p class="skill-effect">
    <img 
      :src="'/PrivateProducts/RpgRanker/images/' + skillEffectAttribute + '.gif'" 
      alt="スキルのエフェクト"
    >
  </p>
</template>

<script>
export default {
  computed: {
    skillEffectAttribute() {
      return this.$store.state.battleArea.skillEffectAttribute
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.skill-effect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  position: absolute;
  top: -100px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  @include tab {
    top: -200px;
  }
}
</style>