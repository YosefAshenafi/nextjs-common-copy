import React from 'react';

export default function BuildCopyrightYears(yearCreated) {
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <span>
            {yearCreated} {yearCreated != CURRENT_YEAR ? ` - ${CURRENT_YEAR}` : ''}
        </span>
    )
}
