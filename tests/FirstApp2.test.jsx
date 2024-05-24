import {render, screen} from '@testing-library/react';
import {FirstApp} from "../src/FirstApp.jsx";

describe('Pruebas en <FirstApp />', () => {
    const title = 'Hola, Soy Goku!';
    const subtitle = 'Soy un subtitulo'

    test('Debe mostrar el mensaje "Hola, Soy Goku!"', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
    });

    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});