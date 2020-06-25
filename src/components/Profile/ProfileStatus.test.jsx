import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Button component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<ProfileStatus text="SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("");
    });

    test("callback should be called!)", () => {
        const mocCallBack = jest.fn();
        const component = create(<ProfileStatus updateStatus={mocCallBack} status="Harut"/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mocCallBack.mock.calls.length).toBe(1);
    });
});