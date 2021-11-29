import styled from "styled-components";
import {Tabs, TabList, Tab, TabPanel } from "react-tabs";


export const WrapperTabs = styled(Tabs)`
    font-size: 120%;
    Width: 50%;
    margin-top: 15px;
` ;

export const WrapperTabsList = styled(TabList)`
    list-style-type: none;
    padding: 5px;
    display: felx;
    margin: 0;
` ;
WrapperTabsList.tabsRoles = 'Tablist';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 9999;
    background-color: "#fff";
    margin: 5px;
    
    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
      }
` ;
WrapperTabsList.tabsRoles = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    display: none;    
    padding: 5px;
    margin-top: -5px;
    border: 1px solid "#ccc";

    &.is-selected {
        display: block;
    }
` ;
WrapperTabsList.tabsRoles = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;