import { render, screen } from '@testing-library/react'

describe('Header Test', () => {
  it('should render correctly the component', () => {
    render(<Header />);

    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
  })
});