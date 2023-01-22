import React from 'react';

import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const Copyright = () => {
    return (
        <div>
             <Typography variant='body2' color={'GrayText'} align='center'>{'Copyright (C) '}
                <Link color={'inherit'} href='https://github.com/LemonMantis5571'>Github</Link>
                {' '}
                {new Date().getFullYear()}
             </Typography>
        </div>
    );
}

export default Copyright;
