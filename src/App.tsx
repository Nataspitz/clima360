import { ClimateProvider } from "./contexts/ClimateContext"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <ClimateProvider>
        <RoutesMain />
      </ClimateProvider>
    </>
  )
}

export default App
