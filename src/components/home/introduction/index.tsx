'use client'

import { Container, Content, Img } from "./styles";

export default function Introduction() {
    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/landingpage---ibp.appspot.com/o/open-bible-image.jpg?alt=media&token=fd30ab7b-8910-4bd0-9200-d0067fad36ed'

    return(
        <Container>
            <Img src={imageUrl} alt="" width="100%" height="100%" /> 
            <Content>
                Venha ser igreja com a gente!
            </Content>
        </Container>
    )
}