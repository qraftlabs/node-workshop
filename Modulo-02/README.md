# Módulo 2 - Eventos

En este módulo aprenderemos a utilizar **eventos** en node.js. Particularmente la clase [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

## Ejercicio 01

Para este ejercicio hemos creado una instancia de un EventEmitter llamado timer. Este timer tiene que emitir el evento elapsed cada 1 segundo. 

Tip: emitir dentro de **setInterval(func, 1000)**

## Ejercicio 02

En este ejemplo ya tenemos nuestro timer funcionando. Lo que queremos hacer es subscribir dos funciones al evento ```elapsed```. La función callMeOnce deberá ser llamada solo la primera vez que el evento ocurra, mientras que countAndShow deberá llamarse cada vez que ocurra el evento.

Tip: [.once](http://nodejs.org/api/events.html#events_emitter_once_event_listener).

## Ejercicio 03

Encapsulemos el timer. La idea de este ejercicio es crear una "clase" Timer y encapsular su funcionalidad, de manera tal que luego podamos crear varias instancias. La consigna es implementar los métodos start y stop

Tip: [setInterval](https://developer.mozilla.org/en-US/docs/DOM/window.setInterval) y [clearInterval](https://developer.mozilla.org/en-US/docs/DOM/window.clearInterval).
