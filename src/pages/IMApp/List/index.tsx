import React from 'react';

import ListContainer from './ListContainer';
import HeaderContainer from './HeaderContainer';
import Container from './Container';
// import InfiniteScroll from 'react-infinite-scroller';
import {List, Avatar, Input} from 'antd';
import 'antd/dist/antd.css'

export default () => {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <Container>
      <HeaderContainer>
        <Input/>
      </HeaderContainer>
      <ListContainer>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </ListContainer>
    </Container>
  )
}