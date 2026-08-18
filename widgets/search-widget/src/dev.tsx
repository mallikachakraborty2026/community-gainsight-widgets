import widgetCss from './widget.css?inline'
import { createRoot } from 'react-dom/client'
import { SearchWidget } from './SearchWidget'

const style = document.createElement('style')
style.textContent = widgetCss
document.head.appendChild(style)

const root = document.getElementById('root')!
createRoot(root).render(<SearchWidget />)
