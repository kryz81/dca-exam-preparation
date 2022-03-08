### Użycie sieci

**Utworzenie sieci z podaniem własnej podsieci**

```shell
docker network create --subnet=20.0.0.0/24 --gateway=20.0.0.1 mynetwork
```

**Utworzenie kontenera działającego w danej sieci**

```shell
docker run --name example --network=mynetwork nginx
```

**Podpięcie sieci do uruchomionego już kontenera**

```shell
docker network connect mynetwork nfinx
```

**Odłączenie sieci z uruchomionego kontenera**

```shell
docker network disconnect mynetwork nfinx
```

