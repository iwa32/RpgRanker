<template>
  <p class="battle-monster">
    <img
      :class="{ 'battle-monster__motion': monsterMotion } "
      :src="'/PrivateProducts/RpgRanker/images/' + battleMonsterData.pass + '.png'"
      :alt="battleMonsterData.name"
    >
  </p>
</template>

<script>
export default {
  computed: {
    battleMonsterData() {
      return this.$store.state.battleArea.battleMonsterData
    },
    monsterMotion() {
      return this.$store.state.battleArea.monsterMotion
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-monster {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  max-width: 200px;
  margin: 0 auto 20px;
  &__motion {
    animation: enemy-motion .1s  infinite;
  }
  @keyframes enemy-motion {
    0% { transform: translate(0px, 0px) rotateZ(0deg) }
    25% { transform: translate(2px, 2px) rotateZ(1deg) }
    50% { transform: translate(0px, 2px) rotateZ(0deg) }
    75% { transform: translate(2px, 0px) rotateZ(-1deg) }
    100% { transform: translate(0px, 0px) rotateZ(0deg) }
  }

  @include tab {
    transform: scale(1.4,1.4);
  }
}
</style>