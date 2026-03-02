# TERCERA SEMANA  

---

## • Password Strength  
**Clasificación:**  Cryptographic Failures
**CWE:**  521

- Para este reto podemos probar realizando un ataque de fuerza bruta.  
- En algunos productos, el reseñador es el propio admin, lo que nos facilita su correo.  
![1.png](./capturas/semana3/1.png)
- Intentamos hacer login con cualquier contraseña interceptando la petición desde **Burp Suite (Proxy)**.  
![2.png](./capturas/semana3/2.png)
- Enviamos la petición interceptada al módulo **Intruder**, que se encargará de automatizar las solicitudes de fuerza bruta.  
![3.png](./capturas/semana3/3.png)
- Descargamos un archivo `.txt` con contraseñas comunes de administrador y lo usamos como diccionario.  
![4.png](./capturas/semana3/4.png)
- Observamos que una de las respuestas devuelve un código `200`, lo que indica que la contraseña es correcta.  
![5.png](./capturas/semana3/5.png)
- Iniciamos sesión con esa contraseña y se completa el reto.  
![6.png](./capturas/semana3/6.png)

---

## • Bjoern's Favorite Pet  
**Clasificación:**  Injection
**CWE:**  89

- Introducimos el correo `bjoern@juice-sh.op` y pulsamos en “He olvidado la contraseña”.  
- Intentamos buscar información, como que vivía en Uetersen y que había desarrollado un juego.  
- Tras bastante investigación, se consulta la solución.  
- Es necesario decodificar el código postal (CP) de Uetersen y después buscar la unificación de códigos postales.  
- La respuesta correcta resulta ser **West-2082**.  
![7.png](./capturas/semana3/7.png)

---

## • GDPR Data Erasure  
**Clasificación:**  Insecure Design
**CWE:**  840

- Iniciamos sesión con una cuenta propia e intentamos borrar los datos.  
![8.png](./capturas/semana3/8.png)
- El servidor devuelve un error `500`.  
- Probamos a iniciar sesión con la inyección:  
- ' or deletedAt IS NOT NULL-- y cualquier contraseña.  
![9.png](./capturas/semana3/9.png)
- Se inicia sesión correctamente.  
- Esto confirma el reto. (Para comprenderlo mejor, conviene haber resuelto previamente el reto de credenciales mediante SQL Injection, donde se recuperan datos de usuarios eliminados).  
![10.png](./capturas/semana3/10.png)

---

## • Reset Jim Password  
**Categorización:**  Cryptographic Failures
**CWE:**  640

- Buscamos el correo de Jim. En la reseña del jugo verde lo podemos encontrar.  
![11.png](./capturas/semana3/11.png)
- Intentamos hacer un reset de contraseña para ver su pregunta de seguridad.  
![12.png](./capturas/semana3/12.png)
- Investigamos más información en la página.  
- En reseñas encontramos referencias relacionadas con **Enterprise**. 
![13.png](./capturas/semana3/13.png) 
- Si se tiene cultura de *Star Trek*, puede asociarse al personaje James T. Kirk (Jim).  
- Visitando su Wikipedia, se descubre que tiene un hermano llamado **George Samuel Kirk**.  
![14.png](./capturas/semana3/14.png)
- Probamos con “Samuel”, ya que es el segundo nombre de su hermano mediano.  
- Completamos los campos y el reto se resuelve.  
![15.png](./capturas/semana3/15.png)

---

## • Login Bjoern  
**Categorización:**  Identification and Authentication Failures
**CWE:**  307

- Como anteriormente logramos iniciar sesión como admin, volvemos a entrar para buscar el correo auténtico de Bjoern.  
![16.png](./capturas/semana3/16.png)
- Con la consola del navegador, hacemos debugging del archivo `main` para buscar alguna función relacionada con OAuth.  
- Observamos que se usa el método `btoa`, que codifica en Base64.  
- Sabiendo esto, realizamos la operación inversa con el correo para obtener la contraseña:  
- Aplicamos `split()`  
- Luego `reverse()`  
- Finalmente `join()`  
![17.png](./capturas/semana3/17.png)
- Después usamos el método `btoa` de `window` para completar la transformación. 
![18.png](./capturas/semana3/18.png) 
- Probamos la contraseña generada y se completa el reto.  
![19.png](./capturas/semana3/19.png) 
![20.png](./capturas/semana3/20.png) 

---