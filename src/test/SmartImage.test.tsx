import { render } from '@testing-library/react';
import { SmartImage } from '../SmartImage';
import '@testing-library/jest-dom';

test('renders img with alt and lazy loading', () => {
  const { getByAltText } = render(
    <SmartImage src="img.jpg" alt="Example" />
  );
  const img = getByAltText('Example') as HTMLImageElement;
  expect(img).toBeInTheDocument();
  expect(img.getAttribute('data-loading')).toBe('lazy');
});