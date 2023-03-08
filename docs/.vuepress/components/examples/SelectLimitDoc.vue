<template>
  <div>
    <ex-select-limit style="width: 400px;margin-top: 10px;"
      v-model="selectedItem"
      placeholder="默认 limit = 30，实际有10000条数据"
      :options="options"
      :limit="30"
    >
    </ex-select-limit>
  </div>
</template>

<script>
export default {
  data() {
    const options = [];
    for (let i = 0; i < 10000; i++) {
      options.push({
        value: "value " + i,
        label: "label " + i,
      });
    }
    return {
      options,
      selectedItem: "",
    };
  },
  methods: {
    filterItemDemox(item, query) {
      console.log("filterItemDemo ", item, query);
      return true;
    },
  },
  watch: {
    selectedItem(value) {
      console.log("selectedItem", value);
    },
  },
};
</script>
<style>
</style>
