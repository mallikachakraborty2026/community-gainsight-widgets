export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  getProps<T extends Record<string, unknown>>(): T;
  on(event: string, callback: (data: unknown) => void): () => void;
  emit(event: string, data?: unknown): void;
}
