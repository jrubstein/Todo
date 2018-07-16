import { renderIndex } from "../src/AppRederer";

describe('App renderer test', () => {
    it('Should render the template', () => {
        const page = renderIndex()
        expect(page).toMatchSnapshot()
    })
    it('Should have the app.js file', () => {
        const page = renderIndex()
        expect(page.indexOf('/js/app.js') > 0).toBeTruthy()
    })
})