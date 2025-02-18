// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import PostAttachmentContainer, {Props} from './post_attachment_container';
import {screen} from '@testing-library/react';
import {renderWithIntlAndStore} from 'tests/react_testing_utils';
import {DeepPartial} from '@mattermost/types/utilities';
import {GlobalState} from '@mattermost/types/store';

describe('PostAttachmentContainer', () => {
    const baseProps: Props = {
        children: <p>{'some children'}</p>,
        className: 'permalink',
        link: '/test/pl/1',
    };

    const initialState: DeepPartial<GlobalState> = {
        entities: {
            general: {config: {}},
            users: {
                currentUserId: 'user1',
                profiles: {},
            },
            teams: {
                currentTeamId: 'current_team_id',
                teams: {},
            },
            posts: {posts: {}},
            preferences: {myPreferences: {}},

        },

    };

    test('should render correctly', () => {
        renderWithIntlAndStore(
            <PostAttachmentContainer {...baseProps}/>, initialState,
        );

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('attachment attachment--permalink');
        expect(button.children[0]).toHaveClass('attachment__content attachment__content--permalink');

        expect(screen.getByText('some children')).toBeInTheDocument();
    });
});
