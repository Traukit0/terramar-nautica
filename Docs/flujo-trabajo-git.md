# Flujo de Trabajo con Git y Vercel (Terramar Náutica)

Este documento describe el flujo de trabajo profesional recomendado para el desarrollo y despliegue del proyecto.

---

## Ramas principales
- **main** → Rama de producción. Desplegada automáticamente en Vercel.
- **develop** → Rama de integración. Aquí se fusionan todas las features antes de ir a producción.
- **feature/** → Ramas para nuevas funcionalidades o cambios específicos.

---

## Flujo de trabajo

### 1. Crear una rama de feature
Siempre crear una nueva rama a partir de `develop`:

```bash
git checkout develop
git pull
git checkout -b feature/nombre-de-la-feature
```

Ejemplo:
```bash
git checkout -b feature/footer develop
```

---

### 2. Hacer cambios y commit
Después de editar los archivos:

```bash
git add .
git commit -m "Descripción clara del cambio"
git push -u origin feature/nombre-de-la-feature
```

---

### 3. Pull Request (PR) hacia develop
1. En GitHub → pestaña **Pull Requests**.  
2. Crear un PR con:  
   - Base: `develop`  
   - Compare: `feature/nombre-de-la-feature`  
3. Revisar y hacer **merge**.

---

### 4. Integración a producción
Cuando la rama `develop` esté estable y probada:

1. Crear un PR con:  
   - Base: `main`  
   - Compare: `develop`  
2. Hacer merge.  
3. **Vercel desplegará automáticamente** la nueva versión.

---

## Buenas prácticas
- Usar mensajes de commit claros y específicos.  
- Mantener las ramas de feature pequeñas y enfocadas.  
- Borrar ramas de feature en GitHub tras fusionarlas.  
- Nunca hacer commits directamente en `main`.

---

## Resumen del flujo
```
feature → develop → main → Vercel
```
