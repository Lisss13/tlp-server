# README

## Для запуска проекта выполнить следующие команды:
* `docker-compose up -d db`
* `docker-compose up -d web`
* `docker exec -ti (id контейнера) bash` пример `docker exec -ti cc241dcfd29c bash`
### В консоли контейнера
* `rails db:create`
* `rails db:migrate`
* `rails db:seed`
