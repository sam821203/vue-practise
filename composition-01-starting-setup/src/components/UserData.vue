<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <slot></slot>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],

  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })
    
    const userAge = inject('userAge');

    console.log(context);
    
    // context.emit('save-data', 1)

    return {
      userName,
      userAge
    }
  }
}
</script>