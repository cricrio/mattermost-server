// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import axios from 'axios';

const clientRequest = async ({data = {}, headers, method = 'get', url}) => {
    let response;

    try {
        response = await axios({
            data,
            headers,
            method,
            url,
        });
    } catch (error) {
        // If we have a response for the error, pull out the relevant parts
        if (error.response) {
            response = error.response;
        } else {
            // If we get here something else went wrong, so throw
            throw error;
        }
    }

    return response;
};

export default clientRequest;
