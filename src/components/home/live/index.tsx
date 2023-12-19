'use client'

import { Container, Content, Img, TextContent} from "./styles";

export default function Live() {
    const urlLiveImage = 'https://firebasestorage.googleapis.com/v0/b/landingpage---ibp.appspot.com/o/mobile-live-pic.png?alt=media&token=b67b788b-6d1d-44a8-b89c-6da75b3a6275'

    return(
        <Container>
            <Content>
                <Img src={urlLiveImage} alt="Live on device image" />
                <TextContent>
                    <span>Transmissão do culto ao vivo no domingo às 19h30.</span>

                    <a href="https://www.youtube.com/@IgrejaBatistaPrudentina" target="_blank">Assistir</a>
                </TextContent>
            </Content>
        </Container>
    )
}