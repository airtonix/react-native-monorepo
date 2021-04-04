declare module 'types' {
  interface Env {
    STAGE: 'local' | 'staging' | 'development';
  }
  const Config: Env;
  export = Config;
}
