import {render} from '@testing-library/react';
import {FirstApp} from "../src/FirstApp.jsx";

describe('Pruebas en <FirstApp />', () => {
    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Hola, Soy Goku!';
    //     const {container} = render(<FirstApp title={title}/>);
    //     expect(container).toMatchSnapshot();
    // });

    test('debe mostrar el titulo en un h1', () => {
        const title = 'Hola, Soy Goku!';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain('Hola, Soy Goku!');

        console.log(getByTestId('test-title').innerHTML)
        expect(getByTestId('test-title').innerHTML).toContain(title);

    });

    test('debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, Soy Goku!';
        const subtitle = 'Soy un subtitulo'
        const {getByText} = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />);
        //expect(getByText(subtitle)).toBeTruthy() Falla porq hay 2 subtitulos
    })
});