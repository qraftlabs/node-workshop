# Módulo 9 - deployment

En esta carpeta se encuentra la aplicación final **the node.js movie db**. 

Esta es la estructura normal de una aplicación en node.js y es igual a la de de un paquete de npm.

En este módulo realizaremos varios ejercicios de deployment.

## Requisitos previos

Instala la herramienta jitsu globalmente:

	npm install -g jitsu

Si aún no tienes cuenta de nodejitsu, puedes registrarte desde la línea de comandos con:

	jitsu signup

Si ya posees cuenta de nodejitsu, intenta loguearte desde la línea de comandos con:

	jitsu login


## Paso 01

Deployar la aplicación con ```jitsu deploy``` y configura los parametros necesarios.

## Paso 02

Como puedes ver, hay un problema con la aplicación y no funciona. Ejecuta ```jitsu logs all``` para ver la causa del problema.

## Paso 03

En este paso configuraremos una base de datos para la aplicación. Ejecuta 

	jitsu help databases

para descubrir la sintaxis necesaria para crear una base de datos de mongodb.

## Paso 04

En el paso anterior creamos una base de datos, ahora necesitamos configurar nuestra aplicación remota para que utilice esta base de datos.

Si observas el archivo ```lib/data/index.js``` notaras que utiliza estas variables de entorno:

*  db_host
*  db_port
*  db_name
*  db_user
*  db_pass


Utilizando el comando ```jitsu env set <clave> <valor>``` podras configurar las variables de entorno. Por ejemplo:

	jitsu env set db_host tuservidordemongo.com

Tip: puedes consultar los datos de conexión a la base que creaste en el Paso 3 utilizando ```jitsu databases list```