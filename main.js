document.addEventListener('DOMContentLoaded', function () {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particlesjs-config.json', function () {
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
            let websites = this.websites,
                results = [],
                filters = this.filters;

            if (!this.filters.length) {
                return websites;
            } else {
                websites.filter(function(site) {
                    filters.forEach( filter => {
                        if  ( site.tags.includes(filter) ||  site.uses.includes(filter) ) {
                            results.push(site);
                        }
                    })
                });
                return results;
            }
        }
    },
    created: function() {
        const that = this;
        fetch("websites.yaml")
            .then(response => response.text())
            .then(text => {
                that.websites = jsyaml.load(text);
                that.websites.forEach((website) =>
                    website.tags.concat(website.uses).forEach((tag) => {
                        if (that.allTags.indexOf(tag) === -1) {
                            that.allTags.push(tag);
                        }
                    })
                )
            });
    },
    methods: {
        etAl: (authors) => {
            if (authors.length < 3) {
                return authors.join(", ");
            } else {
                return authors.slice(0, 3).join(", ") + "et al.";
            }
        },
        addToFilters: function(tag) {
            if (this.filters.indexOf(tag) === -1) {
                this.filters.push(tag);
            }
        },
        checkActive: function(tag) {
            return this.filters.indexOf(tag)
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


