import { sql } from 'slonik';

export const getAll = sql`
   SELECT * FROM public.articles ORDER BY id ASC 
`;
