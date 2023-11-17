import styled from "styled-components";

export const Container  = styled.section`
    width: 100%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    text-align: center;

    background: var(--blue-300);

    span{
        letter-spacing: .3em;
    }

    @media screen and (max-width: 350px) {
        span{
            letter-spacing: .2em;
        }
    }
`

export const Content = styled.div`
    width: 90%;

    p{
        font-weight: 900;
        font-size: 4.5rem;
    }

    @media screen and (max-width: 350px) {
        p{
            font-weight: 900;
            font-size: 3.5rem;
        }
    }
`