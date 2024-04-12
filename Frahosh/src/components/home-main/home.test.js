
import React from 'react';

import renderer from 'react-test-renderer';
import Hi from './sample';

it("match with snapshot" , ()=>{
    const Section1 = renderer.create(<Hi />).toJSON();

    expect(Section1).toMatchSnapshot();
})