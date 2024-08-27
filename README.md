# Encriptador de Texto

Este proyecto es una aplicación web que permite encriptar y desencriptar texto utilizando una serie de reglas predefinidas. El usuario puede ingresar un texto y obtener una versión encriptada que sigue un conjunto de transformaciones simples. La aplicación también incluye un modo oscuro, y permite el uso de una contraseña para encriptar/desencriptar el texto.

## Características

- **Encriptado de Texto:** Convierte texto ingresado en una versión encriptada utilizando reglas de reemplazo.
- **Desencriptado de Texto:** Reconvierte el texto encriptado a su versión original.
- **Contraseña Personalizada:** La aplicación genera una contraseña alfanumérica de 10 caracteres de manera predeterminada, que el usuario puede cambiar según sus necesidades.
- **Modo Oscuro/Claro:** Cambia entre modo claro y oscuro para mejorar la experiencia visual.
- **Diseño Responsivo:** Optimizado para funcionar en dispositivos móviles, tabletas y computadoras de escritorio.
- **Botón de Copiado:** Permite copiar el texto encriptado o desencriptado al portapapeles con un solo clic.

## Tecnologías Utilizadas

- **HTML:** Estructura de la página.
- **CSS:** Estilización y diseño responsivo. Incluye variables CSS para manejo de temas.
- **JavaScript:** Lógica de encriptación/desencriptación y manejo de interacciones del usuario.
- **SweetAlert:** Para mostrar alertas amigables al usuario.

## Cómo Usar

1. **Ingresar Texto:** Escribe el texto que deseas encriptar o desencriptar en el campo de texto proporcionado.
2. **Modificar Contraseña (Opcional):** Cambia la contraseña generada automáticamente si lo deseas, para personalizar el proceso de encriptación.
3. **Encriptar/Desencriptar:** Haz clic en el botón "Encriptar" para convertir el texto ingresado a su versión encriptada, o en "Desencriptar" para revertir el proceso.
4. **Copiar Texto:** Utiliza el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.
5. **Cambiar Modo:** Haz clic en el icono de cambio de modo en la parte superior derecha para alternar entre modo claro y oscuro.

## Ejemplo de Encriptación

Las siguientes reglas se aplican al texto durante la encriptación:

- La letra `e` se convierte en `enter`.
- La letra `i` se convierte en `imes`.
- La letra `a` se convierte en `ai`.
- La letra `o` se convierte en `ober`.
- La letra `u` se convierte en `ufat`.

Por ejemplo, el texto "hola mundo" se encriptaría como "hoberlai munderfat".

## Personalización

### Cambiar Contraseña

El campo de contraseña viene con una cadena alfanumérica de 10 caracteres que puedes modificar a tu preferencia. Esta contraseña se utiliza tanto para encriptar como para desencriptar el texto, asegurando que solo quien conoce la contraseña puede leer el texto encriptado.

### Modo Oscuro/Claro

El diseño incluye variables CSS que permiten cambiar entre modo claro y oscuro de manera fluida, mejorando la accesibilidad y adaptándose a las preferencias del usuario.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar esta aplicación o añadir nuevas funcionalidades, no dudes en crear un _pull request_ o abrir un _issue_.
