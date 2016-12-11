# Jekyll page

git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/LPFP/fablab.git
git push -u origin master

[Download](https://github.com/LPFP/LPFP.github.io/archive/master.zip)
or

```bash
git clone https://github.com/LPFP/LPFP.github.io.git
```

```ruby
bundle install --path vendor/bundle
bundle exec jekyll serve
```



### if you need Ruby

```shell
sudo apt-get install ruby-full rubygems
```

```ruby
gem update --system
gem install bundler
```

```shell
cd to this folder
bundle install --path vendor/bundle
bundle exec jekyll serve
```
>ouvrir votre navigateur à l'adresse [http://localhost:4000/](http://localhost:4000/)

# libs

[fullcalendar](https://fullcalendar.io/docs/)
