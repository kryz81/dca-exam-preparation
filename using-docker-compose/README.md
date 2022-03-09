### Użycie docker compose

**Wyświetlenie listy kontenerów danej service**

```shell
docker compose ps

# lub jeśli nie jesteśmy w katalogu z docker-compose.yml, możemy podać nazwę projektu

# wyświetlenie projektów
docker compose ls

# wyświetlenie kontenerów danego projektu
docker compose -p my_project ps
```

**docker compose flow**

```shell
# create services
docker compose up -d

# check status of services
docker compose ps

# stop services
docker compose stop

# start again
docker compose start

# restart
docker compose restart

# destroy services + resources (without named volumes)
docker compose down

# also destroy named volumes
docker compose down --volumes
```
