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

        const keyRemovedStuff = removeVietnameseTones(q).toUpperCase();
        const results = res.data.filter((item) => {
            const removedStuff = removeVietnameseTones(item.full_name).toUpperCase();

            return removedStuff.includes(keyRemovedStuff);
        });

        return results;
    } catch (error) {
        console.log(error);
    }
};
