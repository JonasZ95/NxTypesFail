import React from 'react';
import { render } from '@testing-library/react';

import Tablers from './tablers';

describe('Tablers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tablers />);
    expect(baseElement).toBeTruthy();
  });
});
