# 🧮 Calculadora React + Vite

Una aplicación de calculadora moderna construida con **React**, **Vite**, **Vitest** y desplegable con **Docker**.

## ✨ Características

- ✅ Interfaz intuitiva y responsive
- ✅ Operaciones matemáticas básicas (suma, resta, multiplicación, división)
- ✅ Validación de entrada robusta
- ✅ Manejo de errores (división por cero)
- ✅ Pruebas unitarias exhaustivas con Vitest
- ✅ Diseño moderno con gradientes
- ✅ Soporte para teclado (Enter para calcular)
- ✅ Dockerizado y listo para producción

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Docker (opcional, para contenedor)

### Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/calculator-app.git
   cd calculator-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

## 📋 Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo con HMR

# Construcción
npm run build           # Crea build optimizado para producción

# Pruebas
npm run test            # Ejecuta pruebas en modo watch
npm run test:run        # Ejecuta pruebas una sola vez
npm run test:ui         # Ejecuta pruebas con interfaz gráfica

# Calidad de código
npm run lint            # Ejecuta ESLint

# Preview
npm run preview         # Previewiza build de producción
```

## 🧪 Pruebas Unitarias

El proyecto incluye pruebas exhaustivas con **Vitest** y **React Testing Library**:

### Archivos de Pruebas
- `src/utils/calculatorUtils.test.js` - Pruebas de la lógica matemática
- `src/Calculator.test.jsx` - Pruebas del componente React

### Ejecución de Pruebas

```bash
# Modo watch (rerun automático)
npm run test

# Ejecución única
npm run test:run

# Con interfaz gráfica
npm run test:ui
```

### Cobertura de Pruebas

Las pruebas cubren:
- ✅ Suma, resta, multiplicación, división
- ✅ División por cero (manejo de errores)
- ✅ Validación de entrada
- ✅ Interacción del usuario (clicks, input)
- ✅ Presionar Enter para calcular
- ✅ Botón de limpiar

## 🐳 Docker

### Construcción de la Imagen

```bash
docker build -t calculator-app .
```

### Ejecución del Contenedor

```bash
docker run -p 3000:3000 calculator-app
```

La aplicación estará disponible en `http://localhost:3000`

### Docker Compose (Opcional)

Crea un archivo `docker-compose.yml`:

```yaml
version: '3.8'

services:
  calculator:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Ejecuta con:
```bash
docker-compose up
```

## 📁 Estructura del Proyecto

```
calculator/
├── src/
│   ├── components/          # Componentes React
│   ├── utils/
│   │   ├── calculatorUtils.js       # Lógica de cálculo
│   │   └── calculatorUtils.test.js  # Pruebas
│   ├── test/
│   │   └── setup.js         # Configuración de pruebas
│   ├── Calculator.jsx       # Componente principal
│   ├── Calculator.css       # Estilos
│   ├── Calculator.test.jsx  # Pruebas del componente
│   ├── App.jsx              # Componente raíz
│   ├── App.css              # Estilos globales
│   ├── main.jsx             # Entrada de la aplicación
│   └── index.css            # CSS global
├── public/                  # Archivos estáticos
├── Dockerfile               # Configuración Docker
├── .dockerignore           # Archivos a ignorar en Docker
├── vite.config.js          # Configuración Vite
├── package.json            # Dependencias del proyecto
└── README.md               # Este archivo
```

## 🎯 Características de la Calculadora

### Operaciones Soportadas

1. **Suma (+)**: Suma dos números
2. **Resta (-)**: Resta el segundo número del primero
3. **Multiplicación (×)**: Multiplica dos números
4. **División (÷)**: Divide el primer número entre el segundo

### Validaciones

- ✅ Ambos números son requeridos
- ✅ Solo se aceptan números válidos
- ✅ No permite división por cero
- ✅ Mensajes de error claros y descriptivos

### Atajos de Teclado

- **Enter**: Calcula el resultado
- **Botón Limpiar**: Limpia todos los campos

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| React | ^19.1.1 | Framework UI |
| Vite | ^7.1.7 | Bundler y dev server |
| Vitest | ^4.0.7 | Framework de pruebas |
| React Testing Library | ^16.3.0 | Utilidades de testing |
| ESLint | ^9.36.0 | Linter |

## 📝 Notas de Desarrollo

### Configuración de Vitest

La configuración de Vitest se encuentra en `vite.config.js`:

```javascript
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/test/setup.js',
}
```

### Configuración de ESLint

El proyecto usa ESLint para mantener la calidad del código. Ejecuta:

```bash
npm run lint
```

## 🐛 Solución de Problemas

### Las pruebas no se ejecutan
```bash
npm install
npm run test:run
```

### El servidor de desarrollo no inicia
```bash
# Verifica que el puerto 5173 esté disponible
# O especifica otro puerto:
npm run dev -- --port 3000
```

### Docker no construye
```bash
# Elimina la caché y reconstruye
docker build --no-cache -t calculator-app .
```

## 📖 Recursos

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vitest Documentation](https://vitest.dev)
- [Docker Documentation](https://docs.docker.com)

## 👨‍💻 Autor

Tu Nombre - [@tuuser](https://github.com/tuuser)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙌 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🔗 Enlace a GitHub

[Ver Repositorio](https://github.com/tu-usuario/calculator-app)
