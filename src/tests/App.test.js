import React from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";


describe('App test', () => {

    test("Can has a message", () => {
        render(<App/>);
        expect(screen.getByText('ARG Framework')).toBeInTheDocument();
    });
});