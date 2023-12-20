'use client';
import React from 'react';
// @ts-ignore
import FitText from '@kennethormandy/react-fittext';

export default function HeaderText({ text, compressor }: { text: string; compressor: number; }) {
    return (
        <>
            <h1 className="hello">
                <FitText compressor={compressor}>{text}</FitText>
            </h1>
        </>
    );
}
