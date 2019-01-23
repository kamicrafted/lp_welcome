<template>
<div class="segments">
  <div v-for="(category, itemIndex) in categories"
    class="segments-item"
    :class="{'active': activeItemId === itemIndex}"
    @click="setActiveItemId(itemIndex)"
    v-bind:key="itemIndex">
    {{category.name}}
  </div>
</div>
</template>

<script>
export default {
  name: 'segments',
  props: ['carouselCategories'],
  data () {
    return {
      activeItemId: 0,
      categories: this.carouselCategories,
    }
  },
  methods: {
    setActiveItemId (itemIndex) {
      this.activeItemId = itemIndex;
      this.$emit('updatedIndex', this.carouselCategories[itemIndex]['name'])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/app';

.segments {
  display: flex;
  @media only screen and (max-width: 710px) {
    max-width: 90%;
    text-align: center;
  }

  
  &-item.active {
      background: $color-blue;
      border: 2px solid transparent;
  }
  &-item:first-child {
    border-radius: 4px 0 0 4px;
    margin-left: 0;
  }

  &-item:nth-child(3) { 
    @media only screen and (max-width: 710px) {
    }
  }


  &-item:last-child {
    border-radius: 0 4px 4px 0;
  }

  &-item:hover {
    z-index: 10;
    background: rgba($color-blue, .6);
    border: 2px solid white;
  }

  &-item {
    position: relative;
    border: 2px solid $color-blue;
    padding: 10px 20px;
    line-height: 1;
    font-weight: 700;
    margin-left: -2px;
    transition: all .15s $ease-out-quad;
    cursor: pointer;
    text-transform: uppercase;
    display: flex;
    justify-items: center;
    align-items: center;

    @media only screen and (max-width: 1024px) {
    }
    @media only screen and (max-width: 710px) {
      font-size: 11px;
    }
  }

  
 
 
}
</style>