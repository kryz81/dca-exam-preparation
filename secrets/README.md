### Użycie docker secrets

**Utworzenie secret**

```shell
# with secret value typed in the console
echo "12345" | docker secret create mypass -

# from file with value
docker secret create mypass2 mypass.txt
```

**Podpięcie secret do service**

```shell
# create a service and mount secret
docker service create --name example-service --secret mypass dca-example-app

# check if secret mounted and readable
docker exec $(docker ps --filter name=example -q) cat /run/secrets/mypass

# try to remove secret - it cannot be removed as long as a service uses it
docker secret rm mypass # error
```

**Użycie secrets w pliku docker-compose**

```yaml
...
services:
  example:
    image: dca-example-app:v1
    secrets:
      - mypass

secrets:
  mypass:
    file: mypass.txt
```
