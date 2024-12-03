/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENAI_API_KEY: string;
  // Outras variáveis de ambiente que você possa ter
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
