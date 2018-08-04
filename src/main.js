document.addEventListener('DOMContentLoaded', function () {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'src/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });
});


Vue.component('tag-selector', {
  props: ['all-tags'],
  template: document.getElementById('tag-selector'),
});


const app = new Vue({
  el: '#app',
  data: {
    websites: [],
    allTags: [],
    filters: []
  },
  computed: {
    filteredWebsites: function() {
      return this.websites.filter((website) =>
        this.filters.every((tag) =>
          website.tags.includes(tag) || website.uses.includes(tag) || website.license === tag
        )
      );

    }
  },
  created: function() {
    const that = this;
    fetch("websites.yaml")
    .then(response => response.text())
    .then(text => {
      that.websites = jsyaml.load(text);
      that.websites.forEach((website) => {
        website.tags.concat(website.uses).forEach((tag) => {
          if (that.allTags.indexOf(tag) === -1) {
            that.allTags.push(tag);
          }
        });

        if (!!website.license & that.allTags.indexOf(website.license) === -1) {
          that.allTags.push(website.license);
        }
      })
    });
  },
  methods: {
    etAl: (authors) => {
      if (authors.length < 3) {
        return authors.join(", ");
      } else {
        return authors.slice(0, 3).join(", ") + " et al.";
      }
    },
    addRemoveToFilters: function(tag) {
      if (this.filters.indexOf(tag) === -1) {
        this.filters.push(tag);
      } else {
        this.filters = this.filters
        .filter((x) => x !== tag);
      }
    },
    checkActive: function(tag) {
      return this.filters.indexOf(tag) > -1;
    },
    clearAllFilters: function() {
      this.filters = [];
    },
    getTagCount(tag){
            // let count = 0;
            // this.filteredWebsites.forEach(item => {
            //     (item.tag == tag || item.uses == tag)  ? count++ : '';
            // });
            // return count;
          }
        }
      });
