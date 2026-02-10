# Kakidraws - Santiago Nicolás Morelli
## UTN.BA Programación Web Inicial

##### Acerca del proyecto en linea:

  El proyecto en deploy contiene lineas comentadas que son las lineas de conexión y ejecución de comandos
relacionados con la base de datos que por limitaciones del servicio gratuito de Heroku la misma no esta disponible
junto al proyecto. Estas lineas comentadas se encuentran en los archivos 'app.js', '/controladores/auth.js' y
'/routes/auth.js'. Dentro de '/controladores/auth.js' se encuentran los comandos de coneccion a base de datos con
los datos de MI conexión local a modificar a la hora de testear en otro sistema. En el repositorio de GitHub estas
lineas no se encuentran comentadas, sin embargo los datos de conexión si DEBEN SER MODIFICADOS.

##### En cuanto al proyecto en si:

  El proyecto es un portfolio creativo para una amiga. Cuenta con pagina de inicio que redirecciona al resto de las
paginas, pagina de informacion en 'Acerca de mi', pagina con los trabajos en exposición en 'Mis trabajos', una pequeña
tienda que redirecciona a la mensajeria directa de Instagram en 'Comisiones' (esta pagina tambien cuenta con una sección
de comentarios que en deploy se encuentra desactivada por lo antes mencionado a la base de datos pero que conectada a la 
base esta funcional) y una pagina de contacto con formularios de inicio de sesión y registro (tambien desactivados por la
base pero funcionales a la hora de conectar a la base) y redirecciones a las redes sociales de la artista en cuestión.
  El proyecto cuenta con distintos media queries que posibilitan su visualización tanto en monitores full hd (1920x1080)
como en dispositivos moviles de menor resolución.

### Temas aplicados:

- HTML
  
  El cuerpo de la pagina se encuentra desarrollado en su totalidad en este lenguaje.

- CSS

  El estilo de la pagina esta desarrollado en este lenguaje, parte en un archivo aparte 'Style.css' y pequeños fragmentos
dentro de la pagina con el comando 'Style=""'.

- Bootstrap

  La pagina cuenta con elementos de Bootstrap en varias secciones como los formularios y la galeria de 'Mis trabajos'.
Tambien he incluido la función de Bootstrap Icons para el menu desplegable en movil y los iconos de redes sociales en el footer.

- MySQL

  La base de datos fue diseñada con el workspace de MySQL, contiene 2 tablas no relacionales: la primera de usuarios para el
registro y el login (Contiene las columnas: id, usuario, contraseña y email) y la segunda para comentarios (contiene las columnas:
usuario y comentario. No es necesario estar registrado para realizar un comentario).

- JavaScript/NodeJS

  Los comandos de conexión a la base, los comandos de registro, login y comentarios asi tambien como los redireccionamientos a las
distintas paginas (en este caso vistas) estan hechos en este lenguaje. Se utilizaron los modulos de: Express, Express-handlebars,
Cookie-parser, Dotenv, Handlebars, Hbs, Http-errors, Jsonwebtoken, Morgan, Mysql2 y Nodemon.

- Vistas

  El proyecto esta hecho en un sistema de vistas basado en Handlebars.
  
- Google fonts

  La fuente del 'body' y algunos 'h' asi tambien como la fuente del 'logo Kakidraws' fue modificada con Google fonts.
