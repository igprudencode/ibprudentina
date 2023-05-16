"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  background: var(--grey-500);
`;

export const LogoContainer = styled.div`
  max-width: 50px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  a {
    font-family: "Montserrat", sans-serif;
    color: #f3f3f3;
    text-decoration: none;

    transition: 0.4s;

    :hover {
      filter: brightness(0.8);
    }
  }
`;

export const MediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  gap: 1rem;

  button {
    background: transparent;
    border: none;

    transition: 0.4s;

    svg {
      height: 25px;
      width: 25px;
      color: #f3f3f3;
      width: 100%;
    }
  }
`;

export const InstagramButton = styled.button`
  :hover {
    transition: 0.2s;

    color: #c13584;
  }
`;

export const SpotifyButton = styled.button`
  :hover {
    transition: 0.2s;

    color: #1db954;
  }
`;

export const FacebookButton = styled.button`
  :hover {
    transition: 0.2s;

    color: #4267b2;
  }
`;

export const YoutubeButton = styled.button`
  :hover {
    transition: 0.2s;

    color: #ff0000;
  }
`;
