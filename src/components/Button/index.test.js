import React from 'react';
import Button from './index';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'


test("Should not allowed click button if isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner if isLoading is present", () => {
    const { container, getByText } = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
})

test("Should render <a> if link is external", () => {
    const { container } = render(<Button type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> if link is not external", () => {
    const { container } = render(
        <Router>
            <Button type="link" href=""></Button>
        </Router>
    );

    expect(container.querySelector("a")).toBeInTheDocument();
});