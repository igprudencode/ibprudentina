'use client'

import styled from 'styled-components';

export const Container = styled.section`
    height: 80vh;
    background-size: cover;
    position: relative;
`

export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const Content  = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    width: fit-content;
    white-space: nowrap;

    padding: 2rem;

    font-size: 4rem;
    text-align: center;

    color: var(--white);

    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    box-shadow: 0 0.25rem 1.875rem rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    @media screen and (max-width: 1000px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 700px) {
        white-space: pre-wrap;
        width: 80%;
    }
`