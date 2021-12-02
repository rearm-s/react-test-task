import { render } from '@testing-library/react';

import App from '../App';

describe('App', () => {
    it('should take snapshot', () => {
        const component = render(<App/>);
        expect(component).toMatchSnapshot();
    });
});
