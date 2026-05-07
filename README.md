# Tienda Libre - E-commerce Web Application

## 📋 Descripción del Proyecto

**Tienda Libre** es una aplicación web de e-commerce moderna desarrollada como proyecto colaborativo. La plataforma permite a los usuarios explorar productos, buscar artículos específicos, agregar items al carrito y realizar compras de forma intuitiva y fluida. 

El proyecto integra una API externa (FakeStoreAPI) para obtener un catálogo dinámico de productos, proporcionando una experiencia realista de una tienda online funcional.

---

## ✨ Características Principales

- 🛍️ **Catálogo de Productos**: Vista dinámica de productos obtenidos desde API externa
- 🔍 **Buscador en Tiempo Real**: Filtrado instantáneo de productos mientras escribes
- 🛒 **Carrito de Compras Funcional**: Agregar, modificar cantidad y eliminar productos
- 💾 **Persistencia Local**: Carrito guardado en localStorage para mantener datos entre sesiones
- 🎨 **Interfaz Responsive**: Diseño moderno adaptable a dispositivos móviles y desktop
- ✅ **Validaciones y Confirmaciones**: Alertas amigables con SweetAlert2 para operaciones críticas
- 💰 **Cálculo de Totales**: Actualización automática de precios y cantidades

---

## 👥 Equipo de Desarrollo

### 👨‍💻 **Melina Ojeda** | [@melina-ojeda](https://github.com/melina-ojeda)
**Frontend Principal - Lógica de Búsqueda y Visualización**

Melina fue responsable del desarrollo de la interfaz principal y implementó lógica JavaScript compleja para la interacción del usuario. Su trabajo incluyó:

**Lógica JavaScript:**
- **Sistema de Búsqueda en Tiempo Real**: Implementación de event listeners con `addEventListener('input')` que filtran productos dinámicamente
- **Algoritmo de Filtrado**: Lógica con `filter()` y `includes()` para búsqueda case-insensitive en tiempo real
- **Manipulación del DOM**: Renderizado dinámico de cards con template literals
- **Control de Visualización**: Mostrar/ocultar elementos basado en resultados de búsqueda

**Interfaz y Experiencia:**
- Diseño y estructura de la vista principal de la aplicación
- Implementación del navbar con diseño sticky y responsive
- Integración de Bootstrap 5 para componentes UI profesionales
- Optimización de la disposición visual de cards de productos
- Mejoras en la experiencia mobile-first y responsividad general

El trabajo de Melina en lógica de filtrado garantiza que los usuarios puedan encontrar productos eficientemente, mientras que su enfoque en UX/UI hace que la aplicación sea intuitiva y atractiva.

---

### 👨‍💻 **Luis Durand** | [@LuisDurand1](https://github.com/LuisDurand1)
**Carrito de Compras - Lógica de Negocio y Estado**

Luis desarrolló la funcionalidad completa del carrito de compras, implementando lógica JavaScript avanzada para gestionar el estado de la aplicación. Sus contribuciones incluyen:

**Lógica JavaScript (Núcleo):**
- **Servicio de Carrito (`cart.js`)**: Implementación de funciones CRUD (Create, Read, Update, Delete) para gestionar items
- **LocalStorage Persistence**: Lógica de serialización/deserialización JSON con `JSON.stringify()` y `JSON.parse()`
- **Gestión de Cantidad**: Funciones `incrementQuantity()` y `decrementQuantity()` con validaciones de límites
- **Búsqueda y Actualización**: Métodos `find()` y `filter()` para localizar y modificar items específicos

**Interfaz del Carrito:**
- Diseño del drawer lateral (offcanvas) para visualización del carrito
- Badge del carrito con contador que se actualiza en tiempo real
- Sistema de iconos dinámicos (cambio entre cart vacío y lleno)

El trabajo de Luis proporciona la base sólida de lógica de negocio que permite a los usuarios gestionar sus compras de manera confiable y segura.

---

### 👨‍💻 **Germán Galván** | [@gngalvan](https://github.com/gngalvan)
**Integración de API - Lógica de Datos y Renderizado**

Germán fue responsable de la integración con datos externos, implementando lógica JavaScript esencial para obtener y mostrar información. Sus contribuciones incluyen:

**Lógica JavaScript (Datos):**
- **Servicio de API (`api.js`)**: Implementación de función `async/await` con `fetch()` para llamadas HTTP
- **Manejo de Promesas**: Gestión correcta de promesas con `.then()` para procesamiento asincrónico
- **Gestión de Errores**: Try-catch y validación de respuesta HTTP con `response.ok`
- **Transformación de Datos**: Conversión de JSON a objetos JavaScript utilizables

**Componentes de Producto:**
- Desarrollo de las cards individuales con información detallada
- Implementación del modal para visualizar información completa de productos
- Estructura visual con imagen, título, descripción y precio
- Integración con carrito para permitir agregar productos

El trabajo de Germán asegura que los datos se obtengan de manera eficiente desde la API, se procesen correctamente y se presenten al usuario de forma clara y accesible.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Framework CSS**: Bootstrap 5.3.3
- **Iconos**: Bootstrap Icons 1.11.3
- **API Externa**: FakeStore API
- **Almacenamiento**: localStorage (Web Storage API)
- **Alertas**: SweetAlert2
- **Módulos**: ES6 Modules (import/export)

---

## 🚀 Instrucciones de Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/usuario/lab-appwebcliente.git
   ```

2. **Abrir en navegador**
   - Abrir `index.html` en un navegador web moderno

3. **Navegar por la aplicación**
   - Explorar productos en el catálogo principal
   - Usar el buscador para filtrar por nombre
   - Hacer click en productos para ver detalles
   - Agregar al carrito desde el modal de detalles
   - Gestionar carrito: aumentar/disminuir cantidad, eliminar items
   - Finalizar compra o vaciar carrito según corresponda

---

## 📁 Estructura del Proyecto

```
lab-appwebcliente/
├── index.html                 # Página principal
├── style.css                  # Estilos personalizados
├── README.md                  # Este archivo
└── src/
    ├── app.js                 # Lógica principal de la aplicación
    └── services/
        ├── api.js             # Servicio de integración con API
        └── cart.js            # Servicio de gestión de carrito
```

---

## 💡 Características de Desarrollo

- ✅ Separación de responsabilidades (Servicios y lógica de presentación)
- ✅ Modularización de código con ES6 Modules
- ✅ LocalStorage para persistencia sin backend
- ✅ Manejo robusto de errores
- ✅ Validaciones de datos antes de operaciones críticas
- ✅ Interfaz responsive y accesible
- ✅ Animaciones y transiciones suaves

---

## 🎓 Implementación de Lógica JavaScript

Este proyecto demuestra el dominio integral de JavaScript por parte del equipo, implementando conceptos avanzados en diferentes capas de la aplicación:

### **Métodos de Array y Manipulación de Datos**
- `filter()` - Búsqueda y filtrado de elementos
- `find()` - Localización de items específicos
- `reduce()` - Cálculo de agregados y totales
- `forEach()` - Iteración y procesamiento de colecciones
- `includes()` - Búsqueda dentro de strings

### **Manipulación Avanzada del DOM**
- `addEventListener()` - Captura de eventos de usuario
- `querySelector()` / `getElementById()` - Selección de elementos
- `innerHTML` - Renderizado dinámico de contenido HTML
- `classList` - Manipulación de estilos de forma programática
- `closest()` - Búsqueda de elementos padre (event delegation)
- `setAttribute()` / `getAttribute()` - Control de atributos dinámicos

### **APIs Nativas del Navegador**
- **Web Storage API**: `localStorage` para persistencia (getItem, setItem, removeItem)
- **Fetch API**: Llamadas HTTP a servidor externo
- **JSON API**: Serialización y deserialización de datos

### **Programación Asincrónica y Control de Flujo**
- `async/await` - Manejo elegante de operaciones asincrónicas
- Promesas con `.then()` - Encadenamiento de operaciones
- `try/catch` - Manejo robusto de errores
- Callbacks - Funciones de retorno en listeners

### **Validaciones y Lógica Condicional**
- Condicionales complejos para control de flujo
- Validación de estados y prevención de operaciones inválidas
- Manejo seguro de valores nullables/undefined
- Algoritmos de búsqueda y filtrado

### **ES6+ Características Modernas**
- **Template Literals** - Generación dinámica de HTML
- **Arrow Functions** - Sintaxis limpia en callbacks
- **Destructuring** - Extracción de propiedades
- **Módulos ES6** - Organización de código con import/export
- **Spread Operator** - Manipulación de arrays y objetos