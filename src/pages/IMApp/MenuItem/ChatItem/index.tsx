import React from 'react';
import { 
  useHistory,
  useRouteMatch
} from 'react-router-dom';
import {List, Avatar, Input} from 'antd';
import 'antd/dist/antd.css'

import ListContainer from './ListContainer';
import HeaderContainer from './HeaderContainer';
import ItemText from './ItemText';


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

const MenuItem = () => {
  const {replace} = useHistory();
  const {path} = useRouteMatch();
  return (
    <>
      <HeaderContainer>
        <Input/>
      </HeaderContainer>
      <ListContainer>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                replace(`${path}/${index}`)
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<ItemText>{item.title}</ItemText>}
                description={ (
                    <ItemText>"Ant Design, a design language for background applications, is refined by Ant UED Team"</ItemText>
                  )
                }
              />
            </List.Item>
          )}
        />
      </ListContainer>
    </>
  )
} 
export default MenuItem;
