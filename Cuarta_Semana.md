# CUARTA SEMANA  

---

## • DOM XSS  
**Categorización:**  Injection
**CWE:**  79

- En este reto se presupone que hay que atacar al DOM mediante inyección.  
- Introducimos en el campo de búsqueda una sentencia HTML con código JavaScript para que se inyecte.  
![1.png](./capturas/semana4/1.png)
- Al enviar la búsqueda, salta una alerta en el navegador.  
![1.png](./capturas/semana4/2.png)
- El reto se resuelve cuando se ejecuta el script.  
- Se utilizaron las ayudas porque inicialmente no se tuvo en cuenta que el payload debía usar `` ` `` en lugar de `'`.  
![1.png](./capturas/semana4/3.png)

---

## • Bonus Payload  
**Categorización:**  Injection
**CWE:**  79

- Este reto consiste en algo similar al anterior.  
- Debemos copiar el `iframe` que proporciona Juice Shop en el campo de búsqueda.  
![1.png](./capturas/semana4/4.png)
- Al ejecutarlo, se carga un audio en la página.  
- Con ello, el reto queda resuelto.  
![1.png](./capturas/semana4/5.png)

---

## • Login Admin  
**Categorización:**  Injection
**CWE:**  89
![1.png](./capturas/semana4/6.png)
- Este reto ya se resolvió previamente al realizar el ataque de fuerza bruta.  
- La contraseña encontrada fue `admin123`.  
- También fue necesario iniciar sesión como administrador para completar otros retos.  

---

## • Login Jim  
**Categorización:**  Injection
**CWE:**  89

- Primero averiguamos el correo de Jim, que aparece en la reseña del jugo verde (ya conocido de retos anteriores).  
![1.png](./capturas/semana4/7.png)
- Intentamos iniciar sesión con cualquier contraseña añadiendo al correo `'--`.  
- De esta forma, la comprobación de contraseña se omite mediante inyección SQL.  
- Se accede a la cuenta y el reto queda completado.  
![1.png](./capturas/semana4/8.png)

---

## • Login Bender  
**Categorización:**  Injection
**CWE:**  89

- Es similar al reto anterior.  
- Obtenemos el correo de Bender buscándolo en las reseñas. 
![1.png](./capturas/semana4/9.png) 
- Intentamos iniciar sesión con `bender@juice-sh.op'--` y cualquier contraseña.  
- Se logra el acceso y se completa el reto.  
![1.png](./capturas/semana4/10.png)

---

## • Database Schema  
**Categorización:**  Injection
**CWE:**  89

- Para realizar la inyección SQL, primero debemos identificar qué tipo de base de datos utiliza la aplicación.  
- Utilizamos **Burp Suite** para interceptar la petición que carga los productos.  
![1.png](./capturas/semana4/11.png)
- Enviamos la petición al **Repeater** y probamos con una entrada como `banana'`.  
- El error devuelto permite identificar que la base de datos es **SQLite**.  
![1.png](./capturas/semana4/12.png)
- Visitamos la documentación oficial de SQLite para revisar su sintaxis.  
- Para resolver el reto, realizamos una inyección `UNION SELECT` en la petición GET para listar todas las tablas de la base de datos.  
![1.png](./capturas/semana4/13.png)
![1.png](./capturas/semana4/14.png)

---

## • User Credentials  
**Categorización:**  Cryptographic Failures
**CWE:**  522

- Para resolver este reto es recomendable haber completado el anterior, ya que necesitamos conocer los nombres de las tablas y columnas.  
- Requiere conocimientos de ataque `UNION SELECT`.  
- Con **Burp Suite** interceptamos la URL utilizada anteriormente.  
- Modificamos la consulta para acceder a la tabla `Users`.  
- Seleccionamos columnas como `email` y `password` para simular la extracción de credenciales.  
![1.png](./capturas/semana4/15.png)
- Con ello, el reto se completa.  

---

## • View Basket  
**Categorización:**  Broken Access Control
**CWE:**  639

- Iniciamos sesión con un usuario (por ejemplo, nuestra cuenta).  
- Añadimos productos a la cesta.  
- Inspeccionamos en **Application → Storage** y observamos variables como el precio y el `bid`.  
![1.png](./capturas/semana4/16.png)
- `bid` hace referencia al identificador de la cesta.  
- Si modificamos este parámetro, podríamos acceder al carrito de otro usuario.  
![1.png](./capturas/semana4/17.png)
- Al recargar la página tras modificarlo, aparece la cesta de otro usuario y se completa el reto.  
![1.png](./capturas/semana4/18.png)

---

## • Admin Section  
**Categorización:**  Broken Access Control
**CWE:**  285

- Este reto se resolvió accidentalmente en otro desafío.  
- Siguiendo la lógica de endpoints como `/score-board`, se probó acceder a `/administration`.  
- Se logró acceder al panel de administración.  
![1.png](./capturas/semana4/19.png)

---

## • Forged Feedback  
**Categorización:**  Injection
**CWE:**  89

- Accedemos al formulario de contacto.  
- Por defecto, cada reseña se asocia al usuario autenticado.  
![1.png](./capturas/semana4/20.png)
- Inspeccionamos el HTML del formulario.  
- Encontramos un campo oculto (`hidden`) que guarda el ID del usuario.  
![1.png](./capturas/semana4/21.png)
- Eliminamos el atributo `hidden` para poder modificar el valor.  
![1.png](./capturas/semana4/22.png)
- Introducimos el ID de otro usuario.  
- Se crea una reseña en nombre de otro usuario y se completa el reto.  
![1.png](./capturas/semana4/23.png)


---

## • Manipulate Basket  
**Categorización:**  Broken Access Control
**CWE:**  639

- Similar al reto **View Basket**.  
- Al añadir un producto, inspeccionamos y localizamos el ID de nuestra cesta.  
![1.png](./capturas/semana4/24.png)
- Obtenemos el token desde **DevTools** y lo introducimos en **Postman** para poder autenticar la petición.  
![1.png](./capturas/semana4/25.png)
- Realizamos una petición POST añadiendo un producto, duplicando el ID de usuario (el nuestro y el de otro usuario).  
![1.png](./capturas/semana4/26.png)
- Al ejecutarlo, el producto se añade al carrito con ID 8.  
- De esta forma, el reto se completa.  
![1.png](./capturas/semana4/27.png)

---