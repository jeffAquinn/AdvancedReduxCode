import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests (good to use the component name you wish to test)
describe('App', () => {

  // Use 'it' to test a single attribute of a target
  it('show the correct text', () => {

    // create an instance of App
    const component = renderComponent(App);

    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('React simple starter');

  });

});
