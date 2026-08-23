export interface WidgetProps {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

export interface WidgetSDK {
  whenReady(): Promise<void>;
  shadowRoot: ShadowRoot;
  getContainer(): Element;
  getProps(): WidgetProps;
  on(event: string, callback: (data: unknown) => void): () => void;
  emit(event: string, data?: unknown): void;
}

// Search result exposed to your React components
export interface SearchHit {
  term: string;
  highlighted: string;
  mediatype: "WEB" | "PRODUCT";
  subtype: string;
  url: string | null;
  title: string | null;
  description: string | null;
  label: string | null;
}

// Raw response types from Siemens Search API
export interface RawWebSuggestion {
  term: string;
  type: string;
  highlighted: string;
}

export interface RawProductDocument {
  title?: string;
  description?: string;
  url?: string;
  label?: string;
}

export interface RawProductSuggestion {
  term: string;
  type: string;
  highlighted: string;
  document?: RawProductDocument;
}

export interface SearchResponse {
  data?: {
    suggestionsWeb?: RawWebSuggestion[];
    suggestionsProduct?: RawProductSuggestion[];
  };
}

// Gainsight Widget Service SDK
export interface WidgetServiceSDK {
  connectors: {
    execute(opts: {
      permalink: string;
      method: string;
      payload?: unknown;
    }): Promise<SearchResponse>;
  };
}

// Gainsight exposes WidgetServiceSDK on the window object
declare global {
  interface Window {
    WidgetServiceSDK: new () => WidgetServiceSDK;
  }
}