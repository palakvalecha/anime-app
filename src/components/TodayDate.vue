<template>
  <div>
    <div class="date-title-row">
      <div class="card-date">{{ today }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayDate",
  data() {
    return {
      today: this.getFormattedDate(),
    };
  },
  methods: {
    getFormattedDate() {
      const options = { weekday: "long", day: "numeric", month: "long" };
      return new Date().toLocaleDateString("en-US", options);
    },
  },
};
</script>
<style scoped>
.date-title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}
.card-date {
  font-size: 12px;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 0.5px;
}
</style>