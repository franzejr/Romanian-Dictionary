import 'react-native';
import React from 'react';
import DefinitionsList from '../components/DefinitionsList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <DefinitionsList definitions={['a', 'b']} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
