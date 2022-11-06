/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_PORT: string
  readonly VITE_API_VERSION: number
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
