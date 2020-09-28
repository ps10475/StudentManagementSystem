import React, { useState } from "react";
import classes from "./App.module.scss";
import "antd/dist/antd.css";
import { Layout, Button } from "antd";
import { Route, Switch } from "react-router-dom";

import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";

import Logo from "./Component/Sidebar/Logo";
import MyMenu from "./Component/Sidebar/MyMenu";
import Home from "./Container/Home";
import Student from "./Container/Student";
import Department from "./Container/Department";
import Teacher from "./Container/Teacher";
import Assistant from "./Container/Assistant";
function App() {
  const { Header, Content, Sider, Footer } = Layout;
  const [collapse, setCollapse] = useState(false);
  const onClickHandle = () => {
    console.log("object");
    setCollapse(!collapse);
  };
  return (
    <>
      <Layout>
        <Sider
          theme="light"
          className={classes.Sider}
          collapsed={collapse}
          breakpoint="xs" 
          onBreakpoint={broken => {
            setCollapse(broken);
          }}
        >
          {/* logo */}
          <Logo collapsed={collapse} />
          {/* collapse button */}
          <div>
            <Button
              className={classes.CollapseBtn}
              type="primary"
              onClick={onClickHandle}
            >
              {React.createElement(
                collapse ? SwapRightOutlined : SwapLeftOutlined
              )}
            </Button>
          </div>
          {/* Menu */}
          <MyMenu onClickHandle={onClickHandle} />
        </Sider>
        <Layout>
          <Header className={classes.Header}>Header</Header>
          <Content className={classes.Content}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/student" component={Student} />
              <Route path="/department" component={Department} />
              <Route path="/teacher" component={Teacher} />
              <Route path="/assistant" component={Assistant} />
            </Switch>
          </Content>
          <Footer className={classes.Footer}>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
