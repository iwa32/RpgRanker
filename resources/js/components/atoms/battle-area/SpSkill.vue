<template>
  <p class="sp-skill-active"
    v-if="hasSpSkill"
    @click="useSpSkill(characterSpSkill[0].name, characterSpSkill[0].power, characterSpSkill[0].attribute)"
  >
    <img src="/PrivateProducts/RpgRanker/images/sp-skill-active.png" alt="必殺技発動">
  </p>
</template>

<script>
export default {
  computed: {
    hasSpSkill() {
      return this.$store.state.battleArea.hasSpSkill
    },
    battleCharacterData() {
      return this.$store.state.battleArea.battleCharacterData
    },
    characterSpSkill() {
      return this.battleCharacterData.skills
        .filter( function(skill) {
          return skill.type === 'special'
        })
    },
  },
  methods: {
    //SPスキル
    useSpSkill(skillName, damage, attribute) {
      const skillData = { name: skillName, damage: damage, attribute: attribute }

      this.$store.dispatch('battleArea/useSpSkill', skillData)
    }
  }
}
</script>

<style lang="scss" scoped>
.sp-skill-active {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 2;
  animation: 2s infinite alternate sp-skill-on;
}

@keyframes sp-skill-on {
  from {
    opacity: 0;
  }

  to {
    opacity: .4;
  }
}
</style>