@echo off
echo Iniciando repositorio y preparando archivos...

:: Inicializa git en la carpeta
git init

:: Agrega TODOS los archivos descargados al bloque de confirmación
git add .

:: Crea el primer commit (confirmación) con todos los archivos
git commit -m "Initial commit - Banquetes Loyal"

:: Renombra la rama principal a 'main'
git branch -M main

:: Vincula tu carpeta local con el repositorio remoto de GitHub
git remote add origin https://github.com/dedalo-integraciones/banquetesloyale.git

:: Sube los archivos a GitHub
echo.
echo Subiendo archivos a GitHub...
git push -u origin main

echo.
echo Proceso terminado. Revisa tu repositorio en GitHub.
pause