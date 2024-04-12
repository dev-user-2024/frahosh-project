
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import MainSection1 from './main-section-1.component';

it("match with snapshot" , ()=>{
    const Section1 = renderer.create(
    <MemoryRouter>
    <MainSection1 />
    </MemoryRouter>).toJSON();

    expect(Section1).toMatchSnapshot();
})