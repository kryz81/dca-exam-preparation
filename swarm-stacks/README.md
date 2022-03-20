### Użycie swarm stacks

**Wdrożenie stacku z pliku**

```shell
docker stack deploy --compose-file stack.yml mystack
```

**Wyświetlenie services wchodzących w skład stack**

```shell
docker stack services mystack
```

**Wyświetlenie tasków wchodzących w skład stack**

```shell
docker stack ps mystack
```
