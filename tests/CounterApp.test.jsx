import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../src/CounterApp.jsx";

describe('probando el contenedor <CounterApp />', () => {
    const initialValue = 10
    test('debe hacer match con el snapshoot', () => {
        const {container} = render(<CounterApp/>);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el valor inicial en 100', () => {
        const value = 100
        render(<CounterApp value={value}/>);
        expect(screen.getByText(100)).toBeTruthy()
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe('100');
    })

    test('debe incrementar con el boton +1', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText("11")).toBeTruthy();
    })

    test('debe decrementar con el boton -1', () => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText("9")).toBeTruthy();
    })

    test('debe resetear el contador al valor inicial', () => {
        render(<CounterApp value={initialValue}/>);
        // fireEvent.click(screen.getByText('Reset'))
        // expect(screen.getByText("10")).toBeTruthy();

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText("10")).toBeTruthy();
    })
})