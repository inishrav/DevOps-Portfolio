name: Build and Push Docker Image
run-name: ${{ github.actor }} is running this GitHub Actions with Docker Pipeline 
on:
  push:
    branches:
      - main
jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
    - name: Check out Repository code
      uses: actions/checkout@v2
    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}
    
    - name: Build Docker Image
      run: docker build -t ${{ secrets.DOCKER_USERNAME }}/${{ secrets.DOCKER_IMAGENAME}} .
      
    - name: Push Docker Image
      run: docker push ${{ secrets.DOCKER_USERNAME }}/${{ secrets.DOCKER_IMAGENAME }}
