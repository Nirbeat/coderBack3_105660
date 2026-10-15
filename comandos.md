### Ejecutar análisis de codigo con Semgrep
```bash
docker run --rm -v "$(pwd):/src" returntocorp/semgrep semgrep --config=auto /src
```

### Ejecutar análisis paquetes con Trivy
```bash
docker run --rm -v "$(pwd):/scanned-dir" aquasec/trivy fs /scanned-dir
```

### Ejecutar analisis con Sonarqube
## levantar contenedor
```bash
docker run -d --name sonarqube -p 9000:9000 sonarqube:lts-community
```
## analizar
```bash
docker run --rm -v "${PWD}:/usr/src" sonarsource/sonar-scanner-cli 
```