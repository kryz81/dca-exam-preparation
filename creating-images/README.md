### Tworzenie obrazów

**Utworzenie obrazu z wyeksportowanego do pliku kontenera**

```shell script
# run a container
docker run -d --rm --name example-app dca-example-app

# make a dummy change
docker exec -it example-app touch /app/test.txt

# export container as zip file
docker export -o changed-example-app.tar.gz example-app

# use zip file to create a new image (CMD needs to be set again)
docker import --change 'CMD ["node", "/app/src/index"]' changed-example-app.tar.gz changed-example-app

# run a container from the new image and check if the create file is there
docker run -d --rm --name changed-example-app changed-example-app
docker exec -it changed-example-app ls /app
```

**Napisanie wartości zmiennych w Dockerfile**

```
...
ARG APP_PORT=4000

ENV PORT=$APP_PORT
...

# docker build --build-arg APP_PORT=5000
```

**Użycie innego pliku Dockerfile niż domyślny**

```shell
docker build --file Dockerfile.prod .
```
