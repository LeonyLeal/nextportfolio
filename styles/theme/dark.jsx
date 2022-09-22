import FacebookSVG      from '../../public/img/socials/dark/facebook.svg'
import FacebookFillSVG  from '../../public/img/socials/facebookFill.svg'
import FigmaSVG         from '../../public/img/socials/dark/figma.svg'
import FigmaFillSVG     from '../../public/img/socials/figmaFill.svg'
import GithubSVG        from '../../public/img/socials/dark/github.svg'
import GithubFillSVG    from '../../public/img/socials/dark/githubFill.svg'
import InstagramSVG     from '../../public/img/socials/dark/instagram.svg'
import InstagramFillSVG from '../../public/img/socials/instagramFill.svg'
import LinkedinSVG      from '../../public/img/socials/dark/linkedin.svg'
import LinkedinFillSVG  from '../../public/img/socials/linkedinFill.svg'
import TwitterSVG       from '../../public/img/socials/dark/twitter.svg'
import TwitterFillSVG   from '../../public/img/socials/twitterFill.svg'
import BtnThemeSVG   from    '../../public/img/btnTheme/dark/themeSvg.svg'
import BtnThemeFillSVG   from    '../../public/img/btnTheme/dark/themeSvgFill.svg'
import backgroundMenu from '../../public/img/menu/dark/menuDark.svg'
import BurgerSVG from '../../public/img/menu/dark/burger.svg'

export const dark = {
  title:  "dark",
  colors: {
    primary: '#252525',
    secondary: '#F4F4F4',
    scroll:"rgba(0, 0, 0, 0.5)",
    aboutMeBackground:  'linear-gradient(180deg,rgba(255, 0, 184, 0) 0%,#ff00b8 17.19%,#ff007a 80.73%,rgba(255, 0, 122, 0) 100%)',
    bubble:'radial-gradient(50% 50% at 50% 50%, #cc0092 0%, #ff4dcc 87.5%)',
},
  social:{
    fb:FacebookSVG,
    fb_fill:FacebookFillSVG,
    fg:FigmaSVG,
    fg_fill:FigmaFillSVG,
    gh:GithubSVG,
    gh_fill:GithubFillSVG,
    ins:InstagramSVG,
    ins_fill:InstagramFillSVG,
    in:LinkedinSVG,
    in_fill:LinkedinFillSVG,
    tw:TwitterSVG,
    tw_fill:TwitterFillSVG,
  },
  btnTheme:BtnThemeSVG,
  btnThemeFill:BtnThemeFillSVG,
  backgroundM:backgroundMenu,
  burger:BurgerSVG,
}

export default dark