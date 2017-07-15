declare module 'serviceworker-webpack-plugin/lib/runtime' {
  interface IRuntime {
    register: () => Promise<ServiceWorkerRegistration>
  }
  const runtime: IRuntime
  export default runtime
}
