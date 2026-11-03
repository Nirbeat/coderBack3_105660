import swaggerJSDoc from "swagger-jsdoc";

const swaggerOpts = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "AdoptMe",
            description: "Documentación de la API para adopción de mascotas"
        }
    },
    apis: ["src/docs/**/**.yaml"]
}

export const swaggerSpec = swaggerJSDoc(swaggerOpts);