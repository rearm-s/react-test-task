import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { Home } from './../../components';

import store from './../../redux/store';

describe('Home', () => {
    it('snapshot', () => {
        const component = render(<Provider store={store}><Home/></Provider>);
        expect(component).toMatchSnapshot();
    });
});
