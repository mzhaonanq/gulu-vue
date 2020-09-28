<template>
  <div class="column" :class="colClass" :style="colStyle">
    <slot></slot>
    </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  return keys.map(key =>['span','offset'].includes(key))
}
export default {
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrowPc, pc, wildPc, createClass} = this
      return [
        ...createClass({span, offset}),
        ...createClass(ipad, 'ipad-'),
        ...createClass(pc, 'pc-'),
        ...createClass(narrowPc, 'narrow-pc-'),
        ...createClass(wildPc, 'wild-pc-'),
      ]
    },
    colStyle() {
      let {gutter} = this
      return {paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}
    },
  },
  methods: {
    createClass(obj, str = '') {
      if (!obj) {
        return []
      }
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`)
      }
      return array
    }
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    wildPc: {
      type: Object,
      validator
    }
  },
}
</script>
<style lang="scss" scoped>
.column{

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media(min-width: 557px){
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

  @media(min-width: 769px){
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

  @media(min-width: 993px){
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

  @media(min-width: 1200px) {
    $class-prefix: col-wild-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
}
</style>