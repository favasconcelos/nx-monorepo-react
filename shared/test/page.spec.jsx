import { Page } from '@app/shared';
import { render } from '@testing-library/react';

describe('<Page />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});