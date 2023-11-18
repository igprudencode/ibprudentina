'use client'

import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 80%;

    padding: 4rem 0;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    gap: 4rem;

    span{
        font-size: 3.125rem;
        font-weight: 700;
    }

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        align-items: center;

        span{
            font-size: 2.5rem;
        }
    }

    @media screen and (max-width: 720px) {
        gap: 2rem;
    }
`

export const Img = styled.img`
    width: 100%;

    @media screen and (max-width: 1080px) {
        width: 80%;
    }
`

export const TextContent = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    
    gap: 5rem;

    a{
        padding: 1rem 2rem;
        background: none;
        text-decoration: none;

        border: 1px solid #000;
        border-radius: 0.5rem;

        transition: 0.5s;
    }

    a:hover{
        transform: scale(1.1);
    }

    a:visited {
        color: inherit;
    }
`