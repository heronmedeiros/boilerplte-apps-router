import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o componente
    const { container } = render(<Main></Main>)
    //busca o elemento e verifica a existência
    expect(
      screen.getByRole('heading',
        { name: /Vue avançado/i}
      )).toBeInTheDocument()

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
});