# Next.js Project with Docker Compose

This is a [Next.js](https://nextjs.org/) project configured to run using Docker Compose.

## Getting Started with Docker Compose

Follow these steps to get your Next.js project up and running with Docker Compose:

## Requisitos

- Docker
- Docker Compose

## Instalación

1. Construye la imagen Docker:

    ```sh
    docker-compose build
    ```

2. Ejecuta la aplicación:

    ```sh
    docker-compose up
    ```

   La aplicación estará disponible en `http://localhost:3000`.

   ## Ejecutar los test
   
   1. ejecutar el comando 

   ```sh
    npm test
    ```
   


## Estructura

/frontend
├── /public
│   └── (archivos estáticos, como imágenes)
├── /src
│   ├── /application
│   │   ├── /services
│   │   │   └── OrderService.ts
│   │   └── /use-cases
│   │       └── useOrder.ts
│   ├── /domain
│   │   ├── /models
│   │   │   ├── Order.ts
│   │   └── /repositories
│   │       └── OrderRepository.ts
│   ├── /infrastructure
│   │   ├── /api
│   │       └── OrderApi.ts
│   ├── /interfaces
│   │   ├── /components
│   │   │   └── OrderList.tsx
│   │   └── /pages
│   │       └── OrderPage.tsx
│   └── /styles
│       └── globals.css
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json