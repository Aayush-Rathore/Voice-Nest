declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_DB_URL: string;
      CORS_ORIGIN: string;
      CLOUD_STORAGE_NAME: string;
      CLOUD_STORAGE_API_KEY: string;
      CLOUD_STORAGE_API_SECRET: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
