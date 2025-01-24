import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles'

import Home from './screens/Home'
import { CatalogContextProvider } from './context/CatalogContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CatalogContextProvider>
      <GlobalStyles />
      <Home />
    </CatalogContextProvider>
  </StrictMode>
)
