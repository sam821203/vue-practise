import { ref, computed, watch } from 'vue';

const useSearch = (items, searchProp) => {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(function () {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      // 這裡使用 items.value 假如傳進來的參數是 ref
      filteredItems = items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  }
};

export default useSearch;