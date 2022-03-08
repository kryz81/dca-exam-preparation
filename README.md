# dca-exam-preparation
(POLISH ONLY) Moje zasoby i ćwiczenia przygotowujące do zdania egzaminu DCA

### Budowa przykładowej aplikacji

* w katalogu ```_example_app```
* odpalić: ```docker build --tag dca-example-app --no-cache .```
* odpalenie z nadpisanymi zmiennymi środowiskowymi: ```docker run --rm --name dca-example-app -p 4000:5000 -e APP_PORT=5000 -e NODE_ENV=test dca-example-app```
