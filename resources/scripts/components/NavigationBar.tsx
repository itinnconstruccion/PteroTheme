import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLayerGroup, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useStoreState } from 'easy-peasy';
import { ApplicationStore } from '@/state';
import SearchContainer from '@/components/dashboard/search/SearchContainer';
import tw, { theme } from 'twin.macro';
import styled from 'styled-components/macro';
import http from '@/api/http';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import Tooltip from '@/components/elements/tooltip/Tooltip';
import Avatar from '@/components/Avatar';

const RightNavigation = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > .nav-group {
        ${tw`flex items-center bg-transparent rounded-md p-1`};
        gap: 0.25rem;
    }

    & > a,
    & > button,
    & > .navigation-link,
    & .icon-btn {
        ${tw`flex items-center h-9 no-underline text-neutral-300 px-3 cursor-pointer transition-all duration-150 rounded-md`};
    }

    & .icon-btn {
        ${tw`btn-glass`};
        padding: 0.45rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    & a:hover, & button:hover, & .navigation-link:hover {
        ${tw`text-neutral-100`};
    }

    & a.active, & .navigation-link.active {
        box-shadow: inset 0 -3px ${theme`colors.cyan.600`.toString()};
    }
`;

export default () => {
    const name = useStoreState((state: ApplicationStore) => state.settings.data!.name);
    const rootAdmin = useStoreState((state: ApplicationStore) => state.user.data!.rootAdmin);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const onTriggerLogout = () => {
        setIsLoggingOut(true);
        http.post('/auth/logout').finally(() => {
            // @ts-expect-error this is valid
            window.location = '/';
        });
    };

    return (
        <div className={'w-full bg-neutral-900 shadow-md overflow-x-auto'}>
            <SpinnerOverlay visible={isLoggingOut} />
            <div className={'mx-auto w-full flex items-center h-[3.5rem] max-w-[1200px]'}>
                    <div id={'logo'} className={'flex-1 flex items-center gap-4'}>
                        <Link
                            to={'/'}
                            className={
                                'text-2xl font-header px-4 no-underline text-neutral-200 hover:text-neutral-100 transition-colors duration-150'
                            }
                        >
                            {name}
                        </Link>
                        <div className={'hidden sm:block'}>
                            <SearchContainer />
                        </div>
                    </div>

                    <RightNavigation className={'h-full items-center justify-center'}>
                        <div className={'nav-group'}>
                            <Tooltip placement={'bottom'} content={'Dashboard'}>
                                <NavLink to={'/'} exact className={'icon-btn'}>
                                    <FontAwesomeIcon icon={faLayerGroup} />
                                </NavLink>
                            </Tooltip>

                            {rootAdmin && (
                                <Tooltip placement={'bottom'} content={'Admin'}>
                                    <a href={'/admin'} rel={'noreferrer'} className={'icon-btn'}>
                                        <FontAwesomeIcon icon={faCogs} />
                                    </a>
                                </Tooltip>
                            )}
                        </div>

                        <div className={'nav-group'}>
                            <Tooltip placement={'bottom'} content={'Account Settings'}>
                                <NavLink to={'/account'} className={'icon-btn'}>
                                    <span className={'flex items-center w-5 h-5'}>
                                        <Avatar.User />
                                    </span>
                                </NavLink>
                            </Tooltip>

                            <Tooltip placement={'bottom'} content={'Sign Out'}>
                                <button onClick={onTriggerLogout} className={'icon-btn'}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </button>
                            </Tooltip>
                        </div>
                    </RightNavigation>
            </div>
        </div>
    );
};
