import { render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o componente
    render(<Main></Main>)
    //busca o elemento e verifica a existência
  })
});