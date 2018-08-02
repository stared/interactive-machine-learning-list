# interactive-machine-learning-list

A collaborative list of interactive Machine Learning, Deep Learning and Statistics websites.
Started by [Piotr Migdał](https://p.migdal.pl/), but anyone is encouraged to contribute!
It is a simple no-build Vue.js website:

* [/p.migdal.pl/interactive-machine-learning-list/](https://p.migdal.pl/interactive-machine-learning-list/)

Feel invited to Pull Request other interactive visualizations (check [websites.yaml](https://github.com/stared/interactive-machine-learning-list/blob/master/websites.yaml))! :)

...aaand if you want to create such visualizations by yourself, see [In Browser AI](http://eepurl.com/dBJCfP).

## What goes there?

Still I am thinking what is the best criterion.

For sure things that are front-end (i.e. JavaScript within browser).
For things using backend (when you can see solution, but it uses some PyTorch/TF/etc code on a server) I am still debating, but I lean on being more inclusive. In this context:

* make sure it has some didactic value (otherwise ALL services using ML would qualify)
* add `backend-dependent` in `uses`

Strong preference for open-source solutions (so people can reuse it and learn from code), though it is not a requirement. Though, mention repo and open source license only when it is directly relevant (vs additional materials such as exercises for a book, or Python algorithm).

## Other lists

* [Explorable Explanations](http://explorabl.es/)
* [Distill](https://distill.pub/)
* [Explained Visually](http://setosa.io/ev/)

## Inspirations

Read [Explorable Explanations](http://worrydream.com/ExplorableExplanations/) by Bret Victor.

Inspirations for collecting and displaying content:

* [Science-based games - a collaborative list](https://github.com/stared/science-based-games-list) - a list I started (maybe I will turn it int something interactive as well)
* [Kaggle Past Solutions](http://ndres.me/kaggle-past-solutions/) - a searchable compilation of Kaggle past solutions
  * source: [EliotAndres/kaggle-past-solutions](https://github.com/EliotAndres/kaggle-past-solutions)
* [D3 Discovery](https://d3-discovery.net/) - finding D3 plugins with ease
  * source: [https://github.com/wbkd/d3-discovery](https://github.com/wbkd/d3-discovery)


## Design

Main layout and styling developed by [Jakub Fogel](https://github.com/fogelkuba)

## TO DO

(You are invited to constribute)

* Descriptions of sites
* Better writeup link
* Tags semantically
* Write-up in a different way
* Tag counts
* Intersection, not sum, of tags
* Some sorting (alphabetical?)
* Share button
* Code refactoring :)
