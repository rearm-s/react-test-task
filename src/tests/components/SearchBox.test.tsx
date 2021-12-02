import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SearchBox } from './../../components';

configure({adapter: new Adapter()});

let employee = 'test';

const handleOnChange = (name: string) => {
    employee = name;
};

const handleOnSearch = () => {
    return null;
};

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
