# Usa la imagen oficial de Node.js como base
FROM node:18

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y los paquetes
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto en el que Next.js escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
