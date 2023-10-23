'use client'

import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background: var(--grey-500);

    padding: 2rem;
`

export const InformationContainer = styled.div`
    width: 100%;
    max-width: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 4rem 2rem;

    gap: 1.5rem;

    background: var(--grey-300);

    h3{
        color: var(--white);
    }
`

export const InformationItem = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 0.75rem;

    padding: 1rem 2rem;

    a{
        text-decoration: none;

        color: var(--green-500);
    }
`