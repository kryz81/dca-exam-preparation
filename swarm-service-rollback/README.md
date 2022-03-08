### Rollback service do poprzedniej wersji

**Rollback service z linii poleceń**

```shell script
# create a service
docker service create --name example-app-service dca-example-app

# update the image of the service
docker service update --image=dca-example-app:v2 example-app-service

# rollback
docker service rollback example-app-service
```
