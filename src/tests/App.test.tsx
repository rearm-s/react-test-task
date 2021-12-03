import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
    it('should take snapshot', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });
});
