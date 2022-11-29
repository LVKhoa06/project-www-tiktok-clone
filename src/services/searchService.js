import * as request from '~/utils/httpRequest';
import removeVietnameseTones from '~/utils/utils.js';

export const search = async (q, type = 'less') => {
    try {
        // Nối với baseURL
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });

        const data = res.data.filter((item) => {
            return item.full_name.trim() !== '';
        });
        console.log(res.status);

        return data;
    } catch (error) {
        console.log('Err');
    }
};

export const searchAll = async (q, type = 'less') => {
    try {
        // Nối với baseURL
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return res.data;
    } catch (error) {
        console.log('Err');
    }
};

export const searchRandom = async (q, type = 'less') => {
    try {
        // Nối với baseURL
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        const results = res.data;

        return results;
    } catch (error) {
        console.log('Err');
    }
};

export const searchItem = async (q, type = 'less') => {
    try {
        // Nối với baseURL
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return res.data;
    } catch (error) {
        console.log('Err');
    }
};
