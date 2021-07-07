import React from 'react';
import Episodes from './Episodes';
import {render} from '@testing-library/react';
// import App from '../App';
// import Dropdown from 'react-dropdown';

// test('Component Renders', () => {
//     render(<Episodes />)
//   });

test('fake test', () => {
    expect(true).toBeTruthy()
});

test("Episodes component renders", ()=>{
    const {queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>);

    expect(queryAllByTestId("episode").toHaveLength(1));

    rerender(<Episodes episodes={data}/>);
    expect(queryAllByTestId("episode")).toHaveLength(1);
});

const data = [
    {
        id: '1',
        name: "Episode 1"
    }
];