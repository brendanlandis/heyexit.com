'use client';
import React from 'react';

export default function HeaderText({ text, compressor }: { text: string; compressor: number }) {
    return (
        <>
            <h1>{text}</h1>
        </>
    );
}
