import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "antd";
import { AppleOutlined, ReconciliationOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons'

const MyMenu = React.memo((props) => {
  const { Item, SubMenu } = Menu;
  let history = useHistory(); 
  console.log(props);
  const rootSubmenuKeys = ["department", "teacher", "student", "assistant"];
  const [openKeys, setOpenKeys] = useState(["deparment"]);
  const onOpenChangeHandle = (keys) => {
    const lastOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(lastOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(lastOpenKey ? [lastOpenKey] : []);
      history.push("/" + lastOpenKey);
    }
  };
  

  return ( 
    <Menu
      theme="light"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChangeHandle} 
    >
      <SubMenu icon={<AppleOutlined />} title="Department" key="department">
        <Item key="1">SubMenuItem</Item>
        <Item key="2">SubMenuItem</Item>
        <SubMenu title="submenu 2" key="sub2">
          <Item key="3">Submenu 2 item</Item>
          <Item key="4">Submenu 2 item</Item>
        </SubMenu>
      </SubMenu>
      <SubMenu icon={<ReconciliationOutlined />} title="Teacher" key="teacher">
        <Item key="5">Another item 2</Item>
        <Item key="6">Another item 2</Item>
        <Item key="7">Another item 2</Item>
      </SubMenu>
      <SubMenu icon={<TeamOutlined />} title="Student" key="student">
        <Item key="8">Another item 2</Item>
        <Item key="9">Another item 2</Item>
        <Item>Another item 2</Item>
      </SubMenu>
      <SubMenu icon={<SettingOutlined />} title="Assistant" key="assistant">
        <Item key="8">Another item 2</Item>
        <Item key="9">Another item 2</Item>
        <Item>Another item 2</Item>
      </SubMenu>
    </Menu>
  );
});

export default MyMenu;
