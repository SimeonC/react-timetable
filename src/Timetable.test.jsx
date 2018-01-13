import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Timetable from './Timetable';

context('Timetable:', function () {
  it('should render', function () {
    const display = <div>Test the render and build</div>;
    const wrapper = shallow(<Timetable />);
    assert.isOk(wrapper.contains(display));
  });
});