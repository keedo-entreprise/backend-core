
Dev start ;
* Ensure that mongodb is running
* use npm run dev

### kill other docker
`docker ps --filter "status=exited" | awk '{print $1}' | xargs --no-run-if-empty docker rm`