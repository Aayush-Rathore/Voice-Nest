declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_DB_URL: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
