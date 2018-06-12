const app = new Vue({
  el: '#app',
  data: {
    websites: []
  },
  created: function () {
    const that = this;
    fetch("websites.yaml")
      .then(response => response.text())
      .then(text => that.websites = jsyaml.load(text));
  },
  methods: {
    etAl: (authors) => {
      if (authors.length < 3) {
        return authors.join(", ");
      } else {
        return authors.slice(0, 3).join(", ") + "et al.";
      }
    }
  }
});
