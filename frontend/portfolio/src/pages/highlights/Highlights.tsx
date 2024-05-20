import { WarningSoon } from '../../components/Warnings/Come_soon'
import { MainContainerHighLights } from './style'

export const HiglightsSoFar= () => {
  return (
    <MainContainerHighLights>
      <h1>
        Destaques do momentos.
      </h1>
      <WarningSoon />
    </MainContainerHighLights>
  )
}