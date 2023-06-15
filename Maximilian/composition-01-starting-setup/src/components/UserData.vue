<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <slot></slot>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],

  setup(props) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const userAge = inject('userAge');

    // context.emit('save-data', 1)

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    return {
      userName,
      userAge,
    };
  },
};
</script>
