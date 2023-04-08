import { render } from '@testing-library/react';
import { AboutPage } from '../src/lib/about.page';

describe('<AboutPage />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutPage />);
    expect(baseElement).toBeTruthy();
  });
});