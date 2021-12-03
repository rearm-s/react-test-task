import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SearchBox } from './../../components';

configure({adapter: new Adapter()});

const employee = 'test';

const handleOnChange = jest.fn();

const handleOnSearch = jest.fn();

let wrapper: any;

describe('SearchBox', () => {

    beforeAll(() => {
        wrapper = shallow(<SearchBox
            employee={employee}
            onChangeEmployee={() => handleOnChange('testAfterHandler')}
            onSearchEmployee={handleOnSearch}/>);
    });

    it('should take a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
