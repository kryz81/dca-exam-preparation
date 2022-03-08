### Odpalanie kontenerów

**Automatyczne opublikowanie portów kontenera na losowych portach hosta**

Wykorzystujemy flagę -P

```shell
docker run -P -d --rm --name example-app dca-example-app
```


**Podłączenie folderu z hosta do kontenera**

```shell
# short version with --volume
docker run --rm --name web -p 8080:80 --volume=$(pwd)/web:/usr/share/nginx/html nginx

# longer version with --mount
docker run --rm --name web -p 8080:80 --mount=type=bind,source=$(pwd)/web,destination=/usr/share/nginx/html nginx
```

**Podłączenie dysku zarządzanego przez docker do kontenera**

```shell
docker volume create my-volume
docker run --rm --name web -p 8080:80 --mount=type=volume,source=my-volume,destination=/usr/share/nginx/html nginx
```

**Nadpisanie domyślnych wartości zmiennych środowiskowych z image**

```shell
docker run --rm --name example-app --env APP_PORT=5000 example-app
```
