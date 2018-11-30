// setup enzyme adapter: https://basarat.gitbooks.io/typescript/docs/testing/jest.html
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.3'
configure({ adapter: new Adapter() })
