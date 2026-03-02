# SEGUNDA SEMANA  
## Retos Improper Input Validation  

---

## • Missing Coding  
**Categorización:** Broken Access Control
**CWE:** 79

- Accedemos a **Photo Wall**, donde vemos la imagen del gato sin cargar.  
![1.png](./capturas/semana3/1.png)
- Inspeccionamos la página y buscamos la imagen; observamos la ruta donde debería estar.  
![2.png](./capturas/semana2/2.png)
- Si accedemos a la ruta, no hay ninguna imagen que se corresponda con el `src`. 
![3.png](./capturas/semana2/3.png) 
- Copiamos el enlace del `src` para inspeccionarlo. 
![4.png](./capturas/semana2/4.png) 
- Nos damos cuenta de que hay que cambiar las almohadillas `#` por `%23`, ya que HTML no reconoce `#` en la URL. 
![5.png](./capturas/semana2/5.png)
- Cargamos la URL correcta y veremos la foto real.  
![6.png](./capturas/semana2/6.png)
![7.png](./capturas/semana2/7.png)

---

## • Repetitive Registration  
**Categorización:**  Broken Access Control/ Insecure Design
**CWE:**  840/840

- Accedemos al área de registro. 
![8.png](./capturas/semana2/8.png)
- Rellenamos los campos.  
![9.png](./capturas/semana2/9.png)
- Si después de poner ambas contraseñas cambiamos el campo **Contraseña**, no salta el error de no coincidencia.  
- Al darle a registrarnos, lo acepta. De esta forma se completa el reto.  
![10.png](./capturas/semana2/10.png)

---

## • Zero Stars  
**Categorización:**  Broken Access Control
**CWE:**  285

- Accedemos al formulario de **Reseñas**.
![11.png](./capturas/semana2/11.png)
- Rellenamos el captcha y el comentario, ya que no deja enviarlo directamente.  
![12.png](./capturas/semana2/12.png)
- Vemos que no deja enviarlo, así que inspeccionamos el botón. 
![13.png](./capturas/semana2/13.png) 
- Observamos que el botón tiene el atributo `disabled`.  
- Quitamos el atributo `disabled` y entonces nos dejará enviarlo.  
- Así queda completado el reto.  
![14.png](./capturas/semana2/14.png)

---

## • Empty User Registration  
**Categorización:**  Broken Access Control
**CWE:**  306

- Al intentar resolverlo manualmente no se logra (se prueba borrando `required` y modificando el botón).  
- Se revisa la solución.  
- Descargamos **Burp Suite**. 
![15.png](./capturas/semana2/15.png)
![16.png](./capturas/semana2/16.png)
- Hacemos un POST con los campos rellenados, los vaciamos manualmente en la petición interceptada y enviamos la solicitud.
![17.png](./capturas/semana2/17.png)


---

## • Admin Registration  
**Categorización:**  Broken Access Control
**CWE:**  284

- Probamos a ejecutar peticiones POST al backend para ver si se pueden introducir datos manualmente.  
- Abrimos **Postman** y hacemos una petición POST a posibles URLs. 
![18.png](./capturas/semana2/18.png) 
- Descubrimos que se puede hacer a `api/Users`.  
- Al hacer el POST introduciendo los datos, se completa el reto.  
![19.png](./capturas/semana2/19.png)

---

## • Mintt The Honey Pot  
**Categorización:**  Broken Access Control
**CWE:**  639

- Se consulta la guía de resolución.  
- Es un reto complejo que requiere registrarse en dos plataformas y trabajar con criptomonedas y NFTs de prueba.  

---

## • Deluxe Fraud  
**Categorización:**  Broken Access Control/ Insecure Design
**CWE:**  840

- Nos dirigimos al apartado **Deluxe Membership** de la web.  
- Con la herramienta **DevTools**, activamos el botón de billetera quitándole dos clases CSS para habilitarlo.  
![20.png](./capturas/semana2/20.png)
- Pulsamos continuar y nos dará error.  
- En la pestaña **Network** de DevTools buscamos la petición POST.  
- Editamos la petición en **Burp Suite**, dejando el método de pago vacío, y la reenviamos.  
![21.png](./capturas/semana2/21.png)
![22.png](./capturas/semana2/22.png)
- Una vez realizado esto, el reto se completa.  
![23.png](./capturas/semana2/23.png)

---

## • Payback Time  
**Categorización:**  Broken Access Control
**CWE:**  285

- Añadimos un producto al carrito.  
- En **DevTools → Network**, localizamos el endpoint para modificar el carrito (incluida la cantidad).  
- Copiamos el endpoint de un método PUT y lo usamos en **Postman**.  
![24.png](./capturas/semana2/24.png)
- También obtenemos el token **Bearer** desde Network y lo añadimos en la sección Auth de Postman.  
![25.png](./capturas/semana2/25.png)
- Probamos una petición añadiendo la ID de un producto (por ejemplo, la 10).  
- Nos devuelve un JSON con los datos y vemos el parámetro `quantity`. 
![26.png](./capturas/semana2/26.png) 
- Hacemos un PUT actualizando `quantity` a un valor negativo, por ejemplo `-100`.  
![27.png](./capturas/semana2/27.png)
- Al completar el pedido, aparece que nos deben dinero y se completa el reto.  
![28.png](./capturas/semana2/28.png)

---

## • Upload Size  
**Categorización:**  Software and Data Integrity Failures
**CWE:**  434

- La página solo permite archivos de 100 KiB o menos.  
- Usamos **Postman** para hacer un POST al endpoint `/file-upload`.  
- Seleccionamos un PDF de más de 100 KiB.  
![29.png](./capturas/semana2/29.png)
- Se envía la petición, devuelve un `204` y se completa el reto.  
![30.png](./capturas/semana2/30.png)
![31.png](./capturas/semana2/31.png)

---

## • Upload Type  
**Categorización:**  Software and Data Integrity Failures
**CWE:**  434

- Similar al reto anterior.  
- Hacemos un POST desde **Postman** al endpoint `/file-upload`. 
![32.png](./capturas/semana2/32.png) 
- Subimos, por ejemplo, un documento Word.  
- Devuelve un `204` y el reto queda resuelto.  
![33.png](./capturas/semana2/33.png)

---