<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button>Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <!-- 檢查是否有錯 -->
      <p v-else-if="!isLoading && errorMsg">{{ errorMsg }}</p>
      <!-- 檢查是否有資料 -->
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found!
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorMsg: null,
    };
  },
  methods: {
    loadExperiences() {
      // 告訴使用者正在載入資料
      this.isLoading = true;
      this.errorMsg = null;

      let url =
        'https://vue-http-demo-2ee3a-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json';

      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          // 當資料傳回來後，告訴使用者載入完成
          this.isLoading = false;

          const results = [];
          for (const id in data) {
            results.push({
              id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.errorMsg = 'Failed to fetch data!';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
