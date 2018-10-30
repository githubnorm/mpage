# Approach with Xampp, GitBash
* see video https://www.youtube.com/watch?v=t5ZedKnWX9E
* install 
    - git bash https://gitforwindows.org/composer
    - get composer https://getcomposer.org/
    - get xampp https://www.apachefriends.org/de/index.html
* see .htaccess file https://github.com/bradtraversy/symphart/blob/master/public/.htaccess
* set up httpd.config, httpd-vhosts.conf, Windows/system32/driver/etc/hosts

> composer create-project symfony/skeleton my-project
> cd my-project code .
> composer require annotations

# Approach with Ubuntu on Win10

## install composer
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-ubuntu-14-04
> composer -v
> sudo apt-get update
> sudo apt-get install curl php5-cli git
> curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
> composer -v

## install PHP 7.2 (on Ubuntu 14.04/16.04)
https://thishosting.rocks/install-php-on-ubuntu/
> php -v
> apt-get update && apt-get upgrade
> apt-get install python-software-properties
> add-apt-repository ppa:ondrej/php
> apt-get update
> apt-get install php7.2
> php -v
> sudo apt-get install php-pear php7.2-dev php7.2-zip php7.2-curl php7.2-gd php7.2-mysql php7.1-mcrypt php7.2-xml libapache2-mod-php7.2 php7.2-mbstring php7.2-unzip

## create a symfony website project
https://symfony.com/download
> composer create-project symfony/website-skeleton my_project (nochache!!)
> sudo composer create-project symfony/website-skeleton my_project
> bash permission "chmod 777 -R /path/to/Dir" https://ss64.com/bash/syntax-permissions.html

messed up with a crappy bug! route not found
https://github.com/api-platform/api-platform/issues/589
