import React from 'react';
import Episodes from './Episodes';
import {render} from '@testing-library/react'


test('Component Renders', () => {
    render(<Episodes />)
  })

test('fake test', () => {
    expect(true).toBeTruthy()
});