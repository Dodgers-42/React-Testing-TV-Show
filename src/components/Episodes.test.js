import React from 'react';
import Episodes from './Episodes';
import {render} from '@testing-library/react'


// test('Component Renders', () => {
//     render(<Episodes />)
//   });

test('fake test', () => {
    expect(true).toBeTruthy()
});

test("Episodes component renders", ()=>{
    const {queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>);

    expect(queryAllByTestId("episode").toHaveLength(1));
});

const data = [
    {
        id: '1',
        name: "Episode 1"
    }
];