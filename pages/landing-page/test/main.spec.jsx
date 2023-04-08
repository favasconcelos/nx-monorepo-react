import { LandingPage } from '@app/landing-page';
import { render } from '@testing-library/react';

describe('<LandingPage />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandingPage />);
    expect(baseElement).toBeTruthy();
  });
});