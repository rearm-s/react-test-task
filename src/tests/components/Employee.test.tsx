import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Employee } from './../../components';

import store from './../../redux/store';

describe('Employee', () => {
    it('snapshot', () => {
        const name = 'John Hartman';
        const component = render(
            <Router>
                <Provider store={store}>
                    <Route path={name}>
                        <Employee/>
                    </Route>
                </Provider>
            </Router>
        );
        expect(component).toMatchSnapshot();
    });
});
