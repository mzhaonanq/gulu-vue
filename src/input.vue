<template>
  <label class="wrapper" :class="{error: error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
    @change="$emit('change',$event.target.value)"
    @input="$emit('input',$event.target.value)"
    @focus="$emit('focus',$event.target.value)"
    @blur="$emit('blur',$event.target.value)"
    />
  <template v-if="error">
      <g-icon :icon="name" class="g-icon"></g-icon>
      <span class="errorMessage">{{ error }}</span>
  </template>
  </label>
 </template>

<script>
import Icon from './icon'

export default {
  name: 'GuluInput',
  components: {'g-icon': Icon},
  props: {
    value: {type: String},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false,},
    error: {type: String},
    name: {type: String, default: ''}
  }
}
</script>

<style lang="scss" >
$button-height: 32px;
$font-size: 14px;
$button-background: #fff;
$button-active-background: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
$box-shadow-color: rgba(0, 0, 0, 0.3);
$box-shadow-error: rgba(220, 69, 61, 0.5);
$border-hover-error: rgb(200, 69, 61);
$border-color-error: #F1453D;
.wrapper {
  font-size: $font-size;vertical-align: middle;display: inline-flex;align-items: center;
  > :not(:last-child){
    margin-right: .5em;
  }
  &.error {
    > input {border-color: $border-color-error;
      &:hover {border-color: $border-hover-error;}
      &:focus {box-shadow: inset 1px 1px $box-shadow-color;outline: none;}
    }
  }
  > input {height: $button-height;border: 1px solid $border-color;font-size: inherit;border-radius: $border-radius;padding: 0 8px;
    &:hover {border-color: $border-color-hover;}
    &:focus {box-shadow: inset 1px 1px $box-shadow-color;outline: none;}
    &[disabled], [readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed;}
  }
}
.g-icon {fill: $border-color-error;}
.errorMessage{color:$border-color-error;}
</style>
