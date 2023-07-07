<template>
  <form>
    <div class="help">
      <slot name="help"></slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <button class="buttons">
      <slot name="buttons"></slot>
    </button>
    <slot></slot>
  </form>
</template>