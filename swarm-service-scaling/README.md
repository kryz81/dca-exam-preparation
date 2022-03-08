### Skalowanie service działającej w Swarm

**Skalowanie service z linii poleceń**

```shell
# create a service
docker service create --name example-app-service dca-example-app

# scale service to 3 replicas (it's possible to scale multiple services in one command)
docker service scale example-app-service=3

# or update service and increase replicas number (one service)
docker service update --replicas=2 example-app-service
```

**Ustawienie liczby replik w pliku używanym przez stack**

```yaml
...
services:
  example-app-service:
    image: dca-example-app:latest
    deploy:
      replicas: 3
...
```

Następnie tworzymy stack:

```shell
docker stack deploy --compose-file=stack.yml example-app-stack
```
