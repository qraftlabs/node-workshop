# Módulo 9 - deployment

En esta carpeta se encuentra la aplicación final **the node.js movie db**. 

Esta es la estructura normal de una aplicación en node.js y es igual a la de de un paquete de npm.

En este módulo realizaremos varios ejercicios de deployment.

## Requisitos previos

Podes usar nodejitsu o Windows Azure

### Nodejitsu

Instala la herramienta jitsu globalmente:

	npm install -g jitsu

Si aún no tienes cuenta de nodejitsu, puedes registrarte desde la línea de comandos con:

	jitsu signup

Si ya posees cuenta de nodejitsu, intenta loguearte desde la línea de comandos con:

	jitsu login

### Windows Azure

Create una cuenta de Windows Azure en https://www.windowsazure.com/en-us/. Es gratis pero requiere poner una tarjeta de credito. No cobran nada a menos que remuevas la limitacion. Te dan 10 web sites por 3 meses gratis

Instala el modulo azure globalmente
	
	npm install azure -g

Asocialo con tu cuenta

	azure account download

Esto te va a abrir un browser y va a bajar un archivo con tus credenciales.

	azure account import <archivo-bajado>

# Deployando en Nodejitsu 

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

# Deployando en Windows Azure

## Paso 01

Copiar el contenido de la carpeta Modulo09 a un directorio fuera del lab ya que vamos a utilizar git para deployar y no queremos deployar todos los ejercicios, sino que este solo.

Crear al site y usar git como metodo de deployment (si existe cambiar el nombre)

	azure site create <site>

Setea el password para hacer deployment desde la opcion `Reset Deployment Credentials` del portal

	azure site portal <site>

Commitear el contenido de la carpeta

	git add .
	git commit -m "initial commit"
	git push azure master

## Paso 02

Navega el site que acabaste de deployar

	azure site browse

Como puedes ver, hay un problema con la aplicación y no funciona. Ejecuta ```azure site log download``` para ver la causa del problema. Esto va a generar un archivo `diagnostics.zip` en donde estes parado. Abrilo y fijate la carpeta `LogFiles\nodejs`.

## Paso 03

Para crear una base de datos en la nube en el mismo datacenter que Windows Azure podes usar mongolab. Registrate en <http://mongolab.com> y crea una base de datos

## Pase 04

Ahora configuremos las variables de entorno en Windows Azure para apuntar a esa nueva base de datos. La forma de setear variables es asi:

	azure site config add <var>=<value> <sitename>

Si observas el archivo ```lib/data/index.js``` notaras que utiliza estas variables de entorno:

*  db_host
*  db_port
*  db_name
*  db_user
*  db_pass

Por otro lado, como Windows Azure no soporta websockets todavia, debemos setear el transporte a long polling.

Si te fijas en server.js hay una variable de entorno que si esta definida va a sobreescribir los transportes default

	azure site config add socketiotransports=xhr-polling <site>
