<template>
  <div class="battle-container"
    :style="`background: url('/PrivateProducts/RpgRanker/images/${battleMonsterData.field}.jpg') no-repeat center center/cover;`"
  >
    <battle-monster></battle-monster>

    <skill-effect-display></skill-effect-display>

    <!-- ログ -->
    <battle-log></battle-log>

    <!-- キャラクター情報 -->
    <battle-character></battle-character>
  </div>
</template>

<script>
import BattleMonster from '../../atoms/battle-area/BattleMonster.vue'
import SkillEffectDisplay from '../../molecules/battle-area/SkillEffectDisplay.vue'
import BattleLog from '../../atoms/battle-area/BattleLog.vue'
import BattleCharacter from '../../organisms/battle-area/BattleCharacter.vue'
export default {
  components: {
    BattleMonster,
    SkillEffectDisplay,
    BattleLog,
    BattleCharacter
  },
  computed: {
    battleMonsterData() {
      return this.$store.state.battleArea.battleMonsterData
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";
.battle-container {
  border: 2px solid $base-color;
  border-radius: 4px;
  box-shadow: 0 0 0 1px $text-color;
  margin: 0 auto;
  padding: 40px 5px 5px;
  @include tab {
    padding: 40px 20px 10px;
  }
  @include pc {
    width: 680px;
  }
}

</style>