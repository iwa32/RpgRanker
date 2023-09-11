<template>
  <p class="battle-character-life">
    {{ characterHp }}/{{ battleCharacterDataHp }}
  </p>
</template>

<script>
export default {
  watch: {
    battleCharacterDataHp(hpValue) {
      this.setCharacterHp(hpValue)
    }
  },
  computed: {
    characterHp() {
      return this.$store.state.battleArea.characterHp
    },
    battleCharacterDataHp() {
      return this.$store.state.battleArea.battleCharacterData.hp
    }
  },
  methods: {
    setCharacterHp(hpValue) {
      this.$store.commit('battleArea/setCharacterHp', hpValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-character-life {
  color: $white;
  font-size: 3vw;
  position: relative;
  padding: 4px 0 0 16px;
  text-shadow: 2px 1px 1px $text-color;
  letter-spacing: .08em;
  &:before {
    background: url('/PrivateProducts/RpgRanker/images/heart-icon.png') no-repeat center center/contain;
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    bottom: 0;
    width: 18px;
    height: 18px;
  }
  @include tab {
    font-size: 1.8rem;
    letter-spacing: .2em;
    padding: 0;
    padding-left: 32px;
    &:before {
      top: -8px;
      width: 32px;
      height: 32px;
    }
  }
  @include pc {
    font-size: 1.6rem;
    display: flex;
    padding-left: 28px;
    align-items: center;
    &:before {
      top: 0;
      margin: auto;
      width: 28px;
      height: 28px;
    }
  }
}
</style>