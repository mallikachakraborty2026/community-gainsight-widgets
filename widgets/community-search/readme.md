Community-search/
├── App.tsx
├── main.tsx
├── setup-dev.ts
├── types.ts
├── widget.css
├── connector.json
│
├── ErrorBoundary/
│   └── WidgetErrorBoundary.tsx
│
├── Banner/
│   ├── Banner.tsx
│   └── Banner.scss
│
├── Promo/
│   ├── Promo.tsx
│   └── Promo.scss
│
└── Search/
    ├── Search.tsx
    ├── SearchBox.tsx
    ├── SearchButton.tsx
    └── Search.scss
```

### What each file is responsible for

| File                      | Purpose                                                           |
| ------------------------- | ----------------------------------------------------------------- |
| `main.tsx`                | Gainsight SDK initialization, Shadow DOM, React mounting, cleanup |
| `setup-dev.ts`            | Vite/React development Fast Refresh setup                         |
| `App.tsx`                 | Composes Banner + Promo + Search                                  |
| `types.ts`                | Gainsight SDK and widget types                                    |
| `widget.css`              | Shared widget-level styles                                        |
| `connector.json`          | Gainsight API connector definitions, if/when needed               |
| `WidgetErrorBoundary.tsx` | Prevents React errors from taking down the widget                 |
| `Banner.tsx`              | Banner component                                                  |
| `Promo.tsx`               | Promo component                                                   |
| `Search.tsx`              | Search container                                                  |
| `SearchBox.tsx`           | Search input                                                      |
| `SearchButton.tsx`        | Search button                                                     |

Your `main.tsx` still imports:

```tsx
import "./setup-dev";
```

So **don't remove that**.

The important distinction is:

```text id="b2u5v6"
setup-dev.ts
    ↓
Development tooling

main.tsx
    ↓
Gainsight + React lifecycle

App.tsx
    ↓
Your actual widget UI
```

So far, I wouldn't make any changes to `setup-dev.ts`.
