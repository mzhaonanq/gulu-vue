<template>
  <div class="column" :class="colClass"
  :style="colStyle">
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
      let {span, offset, ipad, narrowPc, pc, wildPc} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(wildPc ? [`col-wild-pc-${wildPc.span}`] : []),
      ]
    },
    colStyle() {
      let {gutter} = this
      return {paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}
    },
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
  @media(min-width: 557px) and(max-width: 768px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

  @media(min-width: 769px) and(max-width: 992px) {
    $claas-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

  @media(min-width: 993px) and (max-width: 1200px) {
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