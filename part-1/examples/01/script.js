const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Hallo Vue",
      time: "Evening",
    };
  },
  /**computed properties */
  computed: {
    greeting() {
      if (this.time === "Morning") {
        return "Good morning";
      } else {
        return "Good evening";
      }
    },
  },

  methods: {
    sayHelloWorld() {
      return "Hello World";
    },
  },
}).mount("#app");
