'use client'

import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--grey-500);

    @media screen and (max-width: 880px) {
        padding: 2rem 0;
    }
`

export const ContentContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    gap: 2rem;

    @media screen and (max-width: 880px) {
        width: 100%;

        flex-direction: column;
    }
`

export const InformationContainer = styled.div`
    width: 100%;
    height: min-content;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 10rem 5rem;

    gap: 1.5rem;

    background: var(--grey-300);

    h3{
        color: var(--white);
    }

    @media screen and (max-width: 1000px) {
        padding: 10rem 3rem;
    }

    @media screen and (max-width: 960px) {
        padding: 10rem 2rem;
    }

    @media screen and (max-width: 880px) {
        padding: 2rem;

        max-width: 100%;
    }

    @media screen and (max-width: 375px) {
        max-width: none;

        padding: 1rem;
    }
`

export const InformationItem = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 0.75rem;

    a{
        color: var(--white);
        text-decoration: none;
    }

    svg{
        min-width: 20px;
        height: auto;

        color: var(--green-500);
    }
`

export const LinksContainer = styled.div`
    width: fit-content;

    font-family: var(--quicksand);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 0.75rem;

    padding: 4rem 2rem;

    a{
        text-decoration: none;
        white-space: nowrap;

        color: var(--green-500);
    }

    @media screen and (max-width: 880px) {
        padding: 2rem;

        gap: 2rem;
    }
`

export const MapContainer = styled.div`
    width: 100%;

    padding: 4rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;

    h3{
        align-self: flex-start;
    }

    p{
        font-size: 0.75rem;
    }

    @media screen and (max-width: 880px) {
        padding: 2rem;

        width: 100%;
    }
`