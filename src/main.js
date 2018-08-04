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
          website.allTags.includes(tag)
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
        website.allTags = website.tags.concat(website.uses);
        if (!!website.license) {
          website.allTags.push(website.license);
        }
      });
      that.websites.forEach((website) => {
        website.allTags.forEach((tag) => {
          if (that.allTags.indexOf(tag) === -1) {
            that.allTags.push(tag);
          }
        });
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
    getTagCount: function(tag){
      this.filteredWebsites
            //let count = 0;
            // this.filteredWebsites.forEach(item => {
            //     (item.tag == tag || item.uses == tag)  ? count++ : '';
            // });
            // return count;
          }
        }
      });
