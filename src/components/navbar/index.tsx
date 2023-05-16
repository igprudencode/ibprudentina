import { BsInstagram, BsFacebook, BsSpotify, BsYoutube } from "react-icons/bs";

import IBP_Lopo from "../../assets/ibp_logo.png";

import {
  Container,
  FacebookButton,
  LinksContainer,
  LogoContainer,
  MediaContainer,
  SpotifyButton,
  YoutubeButton,
  InstagramButton,
} from "./styles";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <Container>
      <LogoContainer>
        <Image src={IBP_Lopo} width={50} alt="IBP Logo" />
      </LogoContainer>
      <LinksContainer>
        <Link href="#" prefetch>
          Nossa Historia
        </Link>
        <Link href="#" prefetch>
          Agenda
        </Link>
        <Link href="#" prefetch>
          Contato
        </Link>
      </LinksContainer>
      <MediaContainer>
        <InstagramButton>
          <Link
            href="https://www.instagram.com/igrejaprudentina/"
            target="_blank"
          >
            <BsInstagram />
          </Link>
        </InstagramButton>
        <FacebookButton>
          <Link
            href="https://www.facebook.com/igrejaprudentina/"
            target="_blank"
          >
            <BsFacebook />
          </Link>
        </FacebookButton>
        <SpotifyButton>
          <Link
            href="https://open.spotify.com/show/3jJwtQcXLMWcPvnOIIL2fu"
            target="_blank"
          >
            <BsSpotify />
          </Link>
        </SpotifyButton>
        <YoutubeButton>
          <Link
            href="https://www.youtube.com/IgrejaBatistaPrudentina"
            target="_blank"
          >
            <BsYoutube />
          </Link>
        </YoutubeButton>
      </MediaContainer>
    </Container>
  );
}
//
