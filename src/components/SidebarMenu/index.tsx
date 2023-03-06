import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import React, { useEffect, useState } from 'react';

import styles from "./styles.module.css";
import { SECTIONS, PARENT_SECTIONS, SECTION_ROUTE_IDS, RequestlyType, PLATFORMS } from "../../constants";
import useRouteContext from '@docusaurus/useRouteContext';
import { useHistory, useLocation } from '@docusaurus/router';


const SidebarMenu = (props) => {
    const router = useHistory();
    const location = useLocation();
    const routeContext = useRouteContext();
    const id = routeContext.plugin.id;
    
    const [parent, setParent] = useState(null);
    const [section, setSection] = useState(null);

    useEffect(() => {
        if(SECTION_ROUTE_IDS.includes(id)) {
            setParent(id.split('_')[0]);
            setSection(id.split('_')[1]);
        }
        
    }, [])

    const handleOnParentChange = (val) => {
        let defaultSection = null;
        PARENT_SECTIONS.map((section) => {
            if(section.id === val) {
                defaultSection = section.defaultChild;
            }
        })

        const routeLink = generateRouteLink(val, defaultSection);
        router.push(routeLink);
        setParent(val);
    }
    
    const handleOnSectionChange = (val) => {
        const routeLink = generateRouteLink(parent, val);
        router.push(routeLink);
        setSection(val);
    }

    const generateRouteLink = (_parent, _section) => {
        const docPath = location.pathname.split("/").splice(3).join("/")

        const tempRouteId = `${_parent}_${_section}`;

        if(SECTION_ROUTE_IDS.includes(tempRouteId)) {
            return `/${_parent}/${_section}/${docPath}`;
        }
    }

    const renderParentSections = () => {
        return (
            <Select.Root value={parent} onValueChange={handleOnParentChange} {...props}>
                <Select.Trigger
                    aria-label="Select Section"
                    className={'sections-menu-trigger'}
                >
                    <Select.Value />
                    <Select.Icon>
                        <ChevronDownIcon className="sections-menu-scrollButton" />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Content className={'sections-menu-content'} position="popper">
                    <Select.ScrollUpButton className="sections-menu-scrollButton">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>

                    <Select.Viewport>
                        <Select.Group>
                            {PARENT_SECTIONS.map(({ id, name, icon }) => (
                                <Select.Item
                                    value={id}
                                    key={id}
                                    className={'sections-menu-item'}
                                >
                                    <Select.ItemText>
                                        <div className="item-text">
                                        {/* {icon && <icon />} */}
                                            <span>{name}</span>
                                        </div>
                                    </Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckIcon className="item-indicator" />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton className="sections-menu-scrollButton">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Root>
        );
    }

    const renderSections = () => {
        return (
            <Select.Root className={styles.sectionsMenu} value={section} onValueChange={handleOnSectionChange} {...props}>
                <Select.Trigger
                    aria-label="Select Section"
                    className={'sections-menu-trigger'}
                >
                    <Select.Value />
                    <Select.Icon>
                        <ChevronDownIcon className="sections-menu-scrollButton" />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Content className={'sections-menu-content'} position="popper">
                    <Select.ScrollUpButton className="sections-menu-scrollButton">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>

                    <Select.Viewport>
                        <Select.Group>
                            {
                                SECTIONS.map(({ id, name, icon: _icon, parent: sectionParent }) => {
                                    if(sectionParent == parent) {
                                        return (<Select.Item
                                            value={id}
                                            key={id}
                                            className={'sections-menu-item'}
                                        >
                                            <Select.ItemText>
                                                <div className="item-text">
                                                    {_icon && <_icon />}
                                                    <span>{name}</span>
                                                </div>
                                            </Select.ItemText>
                                            <Select.ItemIndicator>
                                                <CheckIcon className="item-indicator" />
                                            </Select.ItemIndicator>
                                        </Select.Item>)
                                    }
                                })
                            }
                        </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton className="sections-menu-scrollButton">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Root>
        );
    }

    if(SECTION_ROUTE_IDS.includes(id)) {
        return (
            <div className={styles.multiSectionContainer}>
                <div
                    className={
                        styles.section
                    }
                >
                    <div className={styles.label}>
                        Platform / {
                            parent === RequestlyType.DESKTOP_APP ? 'OS' : 'Browser'
                        }
                    </div>
                    <div className={styles.row}>
                        {renderParentSections()}
                        <span className={styles.sectionsSeperator}>/</span>
                        {renderSections()}
                    </div>
                </div>
            </div>
        );
    }
    
    return null;
}

export default SidebarMenu;