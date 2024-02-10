declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_DB_URL: string;
      PORT: number;
      DB_NAME: string;
      SALT_ROUNDS: number;
      CORS_ORIGIN: string;
      CLOUD_STORAGE_NAME: string;
      CLOUD_STORAGE_API_KEY: string;
      CLOUD_STORAGE_API_SECRET: string;
      ACCESS_TOKEN_KEY: string;
      ACCESS_TOKEN_EXPIRY: string;
      REFRESH_TOKEN_KEY: string;
      REFRESH_TOKEN_EXPIRY: string;
      TEMP_TOKEN_KEY: string;
      TEMP_TOKEN_EXPIRY: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      EMAIL: string;
      PASS: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
