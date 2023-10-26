import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'iohg8iht',
    dataset: 'production',
    apiVersion: '2023-10-23',
    useCdn: false,
    token: `skVqFyVOFKH35Xoa7Mv2EAxym3cYLHxYyanASZ0qLLRkWBxdbtWBCNE5bPvcmhKiH6VEBVFHht2KfKH7ZxZy3lSrhwf75wxcTkSaP2UaGCF8R0Q4tRpv4lyCqlWcDkHouYMFGy8t7FE0LiGNMuGid8afEY0EenHNkuzRpy7vnaTMFGQr117l`
});
