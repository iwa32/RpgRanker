<template>
  <li class="ranking-list">
    <p class="rank"
      :class="'rank' + totalRank"
    >{{ totalRank }}
    </p>

    <p class="character-icon">
      <img 
        :src="'/PrivateProducts/RpgRanker/images/' + characterPass + '.png'" 
        :alt="characterName + 'のアイコン'">
    </p>

    <div class="battle-data">
      <p class="user-name">{{ userName }}</p>
      <p class="monster-count"
        :class="{ 'defeated-satan': monsterCount === 5}"
      >{{ monsterCountMessage }}
      </p>

      <ul class="total-data">
        <li class="total-turn">{{ 'Turn' + turn }}</li>
        <li class="total-damage">{{ 'Damage' + damage }}</li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    characterPass: String,
    characterName: String,
    userName: String,
    rankNum: Number,
    pageNum: Number,
    monsterCount: Number,
    turn: Number,
    damage: Number
  },
  computed: {
    totalRank() {
      if (this.pageNum >= 2) {
        const rankBaseInPage = this.pageNum * 10 - 10
        return this.rankNum + rankBaseInPage
      } else {
        return this.rankNum
      }
    },
    monsterCountMessage() {
      if (this.monsterCount === 5) {
        return '魔王討伐'
      } else {
        return this.monsterCount + '体討伐'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../sass/app.scss";

.ranking-list {
  border-bottom: 2px solid $border-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  @include tab {
    margin-bottom: 40px;
    padding: 10px;
  }
  .rank {
    color: $accent-color;
    font-weight: bold;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 9%;
    &.rank1 {
      background: url('/PrivateProducts/RpgRanker/images/rank_gold.png') no-repeat center center/cover;
    }
    &.rank2 {
      background: url('/PrivateProducts/RpgRanker/images/rank_silver.png') no-repeat center center/cover;
    }
    &.rank3 {
      background: url('/PrivateProducts/RpgRanker/images/rank_bronze.png') no-repeat center center/cover;
    }
    @include tab {
      font-size: 1.8rem;
      height: 60px;
      width: 60px;
    }
  }
  .character-icon {
    background: $white;
    border: 2px solid $accent-color;
    border-radius: 4px;
    text-align: center;
    max-width: 140px;
    width: 18%;
  }
  .battle-data {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    letter-spacing: .05em;
    padding: 0 3%;
    width: 65.6%;
    .user-name {
      color: $accent-color;
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 1.5;
      margin-bottom: 5px;
      width: 100%;
      @include tab {
        font-size: 2.6rem;
        margin-bottom: 10px;
      }
    }
    .monster-count {
      color: #EAA400;
      font-weight: bold;
      font-size: 5.3vw;
      letter-spacing: .05em;
      text-shadow: 1px 2px 2px #888;
      width: 50%;
      &.defeated-satan {
        color: #7b2cd6;
      }
      @include tab {
        font-size: 3.6rem;
      }
    }
    .total-data {
      color: $text-color;
      font-size: 3.2vw;
      width: 50%;
      @include tab {
        font-size: 2rem;
      }
    }
  }
}
</style>