import React from 'react';
import { 
  Route, 
  Switch, 
  useRouteMatch, 
} from 'react-router-dom';

import Container from './Container';
import ChatItem from './ChatItem';
import OtherItem from './OtherItem';

export default () => {
  const {path} = useRouteMatch();
  
  return (
    <Container>
      <Switch>
        <Route path={`${path}/ChatItem`}>
          <ChatItem/>
        </Route>
        <Route path={`${path}/OtherItem`}>
          <OtherItem/>
        </Route>
      </Switch>
    </Container>
  )
};
