import { ReactElement } from "react";
import { MdWatchLater, MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";

interface InformationDataProps{
    icon: ReactElement,
    text: string,
    href?: string,
}

interface LinksDataProps {
    text: string,
    href: string,
}

export const InformationData: InformationDataProps[] = [
    {
        icon: <MdLocationPin />,
        text: "Rua Desbravador Ceará, 560 - Vila do Estadio, Pres. Prudente - SP, 19020-660",
        href: "https://www.google.com.br/maps/place/Igreja+Batista+Prudentina/@-22.1167406,-51.3908913,19.72z/data=!4m6!3m5!1s0x9493f4359d66cecf:0x8e56aaa678f31158!8m2!3d-22.1167267!4d-51.3906263!16s%2Fg%2F1ptwl8d6k?entry=ttu"
    },
    {
        icon: <MdLocalPhone />,
        text: "+55 18 99685-2416",
        href: "https://wa.me/5518996852416"
    },
    {
        icon: <MdEmail />,
        text: "igprudentina@gmail.com",
        href: "mailto:igprudentina@gmail.com"
    },
    {
        icon: <MdWatchLater />,
        text: "Domingo - 9h & 19h30"
    },  
]

export const LinksData: LinksDataProps[] = [
    {
        text: 'Sobre Nós',
        href: '',
    },
    {
        text: 'Nossa Historia',
        href: '',
    },
    {
        text: 'Contato',
        href: '',
    }
]