const { createApp, ref, computed } = Vue;

const app = createApp({
  setup() {
    const perspective = ref(100);
    const rotateX = ref(0);
    const rotateY = ref(0);
    const rotateZ = ref(0);

    const box = computed(() => {
      return {
        transform: `perspective(${perspective.value}px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) rotateZ(${rotateZ.value}deg)`,
      }
    })

    const reset = () => {
      perspective.value = 100;
      rotateX.value = 0;
      rotateY.value = 0;
      rotateZ.value = 0;
    }

    const copy = async () => {
      let text = `transform: ${box.value.transform};`

      await navigator.clipboard.writeText(text);

      alert('CSS Copied to Clipboard!');
    }

    return {
      perspective,
      rotateX,
      rotateY,
      rotateZ,
      box,
      reset,
      copy
    }
  }
})

app.mount("#app");