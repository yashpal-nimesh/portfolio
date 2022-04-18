import htmlIcon from "./images/html.png";
import cssIcon from "./images/css.png";
import javascriptIcon from "./images/javascript.png";
import reactIcon from "./images/react.png";
import reduxIcon from "./images/redux.svg";
import nextIcon from "./images/next-js.svg";
import tailwindIcon from "./images/tailwind.png";
import bootstrapIcon from "./images/bootstrap.png";
import vscodeIcon from "./images/vscode.png";
import githubIcon from "./images/github.png";
import jiraIcon from "./images/jira.png";
import figmaIcon from "./images/figma.svg";
import vercelIcon from "./images/vercel.png";
import restIcon from "./images/rest-api.png";
import graphIcon from "./images/graphql.png";
import postmanIcon from "./images/postman.png";
import apolloIcon from "./images/apollo.png";
import nivoIcon from "./images/nivo.png";
import axiosIcon from "./images/axios.svg";
import draftIcon from "./images/draft.jpg";
import formikIcon from "./images/formik.png";
import jwtIcon from "./images/jwt.png";
import momentIcon from "./images/moment.svg";
import joyrideIcon from "./images/joyride.png";
import onesignalIcon from "./images/onesignal.svg";
import slickIcon from "./images/slick.png";
import sanityIcon from "./images/sanity.png";
import algoliaIcon from "./images/algolia.svg";
import googleIcon from "./images/google.png";
import facebookIcon from "./images/facebook.png";
import lodashIcon from "./images/lodash.png";
import jqueryIcon from "./images/jquery.png";
import handlebarsIcon from "./images/handlebars.png";
import expressIcon from "./images/express.png";
import mongoIcon from "./images/mongo.png";
import herokuIcon from "./images/heroku.png";
import firebaseIcon from "./images/firebase.png";

const skillIcon = [
  {
    icon: htmlIcon,
    link: "https://www.google.com/search?q=html&oq=html&aqs=chrome.0.69i59l4j69i60l3j69i61.1017j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    icon: cssIcon,
    link: "https://www.google.com/search?q=css&oq=css&aqs=chrome..69i57j0i433i512l4j69i60j69i61j69i60.1496j0j9&sourceid=chrome&ie=UTF-8",
  },
  {
    icon: javascriptIcon,
    link: "https://www.google.com/search?q=javascript&ei=2FddYpHIHpqb4-EPr_iewAk&oq=java&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCAAQsQMQQzIHCAAQsQMQQzIECC4QQzIECAAQQzIICAAQgAQQsQMyCAgAEIAEELEDMgcIABCxAxBDMggIABCABBCxAzIICAAQgAQQsQMyBAgAEEM6DgguEIAEELEDEMcBENEDOgUIABCABDoFCC4QgAQ6CAguEIAEELEDSgQIQRgASgQIRhgAUABY8AJgiApoAHABeACAAZgCiAG3BZIBBTAuMy4xmAEAoAEBwAEB&sclient=gws-wiz",
  },
  {
    icon: reactIcon,
    link: "https://www.google.com/search?q=react&ei=GFhdYuT3Mp2X4-EPlauI8AI&ved=0ahUKEwjk44OMzZ33AhWdyzgGHZUVAi4Q4dUDCA4&uact=5&oq=react&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBAgAEEMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDOgoILhCxAxDUAhBDOg4ILhCABBCxAxDHARCjAjoFCAAQgAQ6DQguELEDEMcBENEDEENKBAhBGABKBAhGGABQAFiLCGD7DGgAcAF4AIAB7AGIAZ8HkgEFMC40LjGYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    icon: reduxIcon,
    link: "https://www.google.com/search?q=redux&ei=KVhdYsrcOvqY4-EP5MymiAY&oq=redu&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCAAQsQMQQzIECAAQQzIICAAQgAQQsQMyBwgAELEDEEMyCAgAEIAEELEDMgQIABBDMgcIABCxAxBDMgQIABBDMgQIABBDMggIABCABBCxAzoHCAAQRxCwAzoHCAAQsAMQQzoKCAAQ5AIQsAMYAToSCC4QxwEQ0QMQyAMQsAMQQxgCOg8ILhDUAhDIAxCwAxBDGAI6DQguELEDEMcBENEDEENKBAhBGABKBAhGGAFQ2wVYvwtgtRNoAXABeACAAe0BiAH5BZIBBTAuMy4xmAEAoAEByAERwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz",
  },
  {
    icon: nextIcon,
    link: "https://www.google.com/search?q=nextjs&ei=PlhdYqiVB9ac4-EP5uiV-A8&ved=0ahUKEwiorOedzZ33AhVWzjgGHWZ0Bf8Q4dUDCA4&uact=5&oq=nextjs&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBggAEAoQQzIECAAQQzIECAAQQzIGCAAQChBDMgQIABBDMgQIABBDMgcIABCABBAKMgUIABCABDIHCAAQgAQQCjoHCAAQRxCwAzoHCAAQsAMQQzoKCAAQ5AIQsAMYAToSCC4QxwEQ0QMQyAMQsAMQQxgCOg4ILhCABBCxAxDHARDRAzoICAAQgAQQsQM6CwgAEIAEELEDEIMBOgsILhCABBDHARDRAzoKCC4QxwEQ0QMQQzoKCC4QxwEQowIQQ0oECEEYAEoECEYYAVCfBljcD2CZE2gBcAF4AIAB5wGIAdoHkgEFMC40LjKYAQCgAQHIARHAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz",
  },
  {
    icon: tailwindIcon,
    link: "https://www.google.com/search?q=tailwind&ei=SlhdYpfrDLCM4-EP-OqLmAE&ved=0ahUKEwiXuMmjzZ33AhUwxjgGHXj1AhMQ4dUDCA4&uact=5&oq=tailwind&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBwgAELEDEEMyBwgAELEDEEMyBQgAEIAEMgQIABBDMgQIABBDMggIABCABBCxAzIFCAAQgAQyBAgAEEMyBAgAEEM6BwgAEEcQsAM6BwgAELADEEM6CggAEOQCELADGAE6EgguEMcBENEDEMgDELADEEMYAjoKCAAQsQMQgwEQQzoICAAQsQMQgwE6CwguEIAEEMcBENEDOgsIABCABBCxAxCDAToLCC4QgAQQsQMQ1AI6CwgAEIAEELEDEMkDOgUIABCSA0oECEEYAEoECEYYAVD4mgFYmasBYI2uAWgCcAF4AIAB9QGIAa4LkgEFMC42LjKYAQCgAQHIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz",
  },
  {
    icon: bootstrapIcon,
    link: "https://www.google.com/search?q=bootstrap&oq=bootstrap&aqs=chrome..69i57j69i59l2j0i433i512l2j69i60l3.4380j0j9&sourceid=chrome&ie=UTF-8",
  },
  {
    icon: restIcon,
    link: "https://www.google.com/search?q=rest+api&ei=gVhdYvjSO7uG4-EP7tyMuAc&ved=0ahUKEwi4l5W-zZ33AhU7wzgGHW4uA3cQ4dUDCA4&uact=5&oq=rest+api&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgAEEM6BQguEIAEOgsILhCABBCxAxCDAToICC4QsQMQgwE6CggAELEDEMkDEEM6BQgAEJIDSgQIQRgASgQIRhgAUABYyAtglg9oAHABeACAAYwCiAHxCZIBBTAuNy4xmAEAoAEBwAEB&sclient=gws-wiz",
  },
  {
    icon: graphIcon,
    link: "https://www.google.com/search?q=graphql&ei=mVhdYsHcBJO94-EP7v6yYA&ved=0ahUKEwiBjZfJzZ33AhWT3jgGHW6_DAwQ4dUDCA4&uact=5&oq=graphql&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBAgAEEMyBAgAEEMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEM6CgguEMcBENEDEEM6DQguELEDEMcBENEDEEM6CggAELEDEIMBEEM6BQgAEIAESgQIQRgASgQIRhgAUABY1gpg-A9oAHABeACAAeQBiAHwCJIBBTAuNi4xmAEAoAEBwAEB&sclient=gws-wiz",
  },
];

const toolIcon = [
  {
    icon: vscodeIcon,
    link: "https://www.google.com/search?q=vscode&oq=vscode&aqs=chrome..69i57j0i433i512j69i59j0i512j0i433i512j0i512l5.4123j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    icon: githubIcon,
    link: "https://www.google.com/search?q=github&ei=NlldYs_0McSH4-EP3fKFsA0&gs_ssp=eJzj4tLP1TcoqiwoyE1XYDRgdGDwYkvPLMkoTQIAWC4HFA&oq=git&gs_lcp=Cgdnd3Mtd2l6EAMYATIHCAAQsQMQQzINCC4QsQMQxwEQ0QMQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzoKCC4QxwEQ0QMQQzoKCAAQsQMQgwEQQ0oECEEYAEoECEYYAFAAWL0CYJUKaABwAXgAgAF-iAHvApIBAzAuM5gBAKABAcABAQ&sclient=gws-wiz",
  },
  {
    icon: jiraIcon,
    link: "https://www.google.com/search?q=jira&ei=RFldYuDXMLSO4-EPgOyyuAc&ved=0ahUKEwjgiYibzp33AhU0xzgGHQC2DHcQ4dUDCA4&uact=5&oq=jira&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBAgAEEMyCAgAEIAEELEDMgQIABBDMgUIABCABDIICAAQgAQQsQMyBAgAEEM6CgguEMcBENEDEEM6CwguEIAEEMcBENEDOg4ILhCABBCxAxDHARDRAzoOCC4QgAQQxwEQrwEQ1AJKBAhBGABKBAhGGABQAFi_BGCMB2gAcAF4AIAB3QGIAcoFkgEFMC4yLjKYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    icon: figmaIcon,
    isFigma: true,
    link: "https://www.google.com/search?q=figma&ei=UlldYvm5OqCG4-EP-OKXsAY&ved=0ahUKEwj5quihzp33AhUgwzgGHXjxBWYQ4dUDCA4&uact=5&oq=figma&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBwgAELEDEEMyBQgAEIAEMgcIABCxAxBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoICAAQgAQQsQM6CwgAEIAEELEDEIMBOgsILhCABBCxAxDUAjoKCC4QxwEQ0QMQQzoKCC4QxwEQowIQQzoNCC4QsQMQxwEQ0QMQQzoKCC4QsQMQ1AIQQzoLCC4QgAQQxwEQrwFKBAhBGABKBAhGGABQAFjnBGDiB2gAcAF4AIAB6QGIAdEFkgEFMC40LjGYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    icon: vercelIcon,
    link: "https://www.google.com/search?q=vercel&ei=X1ldYs7kKsqP4-EPp_-8-Aw&ved=0ahUKEwiOkPKnzp33AhXKxzgGHac_D88Q4dUDCA4&uact=5&oq=vercel&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyCAgAEIAEELEDMgUIABCABDIFCC4QgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAguEIAEELEDOgsILhCABBDHARDRAzoLCC4QgAQQxwEQowI6BAgAEEM6CgguEMcBENEDEEM6CwguEIAEELEDENQCOhEILhCABBCxAxDHARDRAxDUAjoHCAAQgAQQCjoNCC4QgAQQxwEQ0QMQCkoECEEYAEoECEYYAFAAWO4UYPMWaABwAXgAgAHpAYgB4QeSAQUwLjQuMpgBAKABAcABAQ&sclient=gws-wiz",
  },
  {
    icon: postmanIcon,
    link: "https://www.google.com/search?q=postman&ei=cVldYs6BCLaH4-EPgI29wAE&oq=pos&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIICAAQgAQQsQMyBQgAEIAEMggIABCABBDJAzIFCAAQkgMyBQgAEJIDMhEILhCABBCxAxDHARCjAhDUAjIFCAAQgAQ6DgguEIAEELEDEMcBEKMCOgUILhCABDoICAAQsQMQgwFKBAhBGABKBAhGGABQAFjNAmCQCWgAcAF4AIAByAGIAbcDkgEFMC4yLjGYAQCgAQHAAQE&sclient=gws-wiz",
  },
];

const libIcon = [
  {
    icon: apolloIcon,
    link: "https://www.google.com/search?q=apollo+client&ei=glldYozjHZqD4-EP6vuvMA&oq=apollo+cli&gs_lcp=Cgdnd3Mtd2l6EAMYADIICAAQgAQQsQMyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQrwEyCAgAEIAEELEDMgUIABCABDIICAAQgAQQyQMyBQgAEJIDMgUIABCSAzILCC4QgAQQxwEQrwE6BAgAEEM6DQguELEDEMcBENEDEEM6CAguELEDEIMBOgUILhCABDoKCC4QxwEQ0QMQQzoQCC4QsQMQxwEQ0QMQ1AIQQzoHCAAQsQMQQzoHCC4QsQMQQzoOCC4QgAQQsQMQxwEQowI6DgguEIAEELEDEMcBENEDOgYIABAWEB46BAgAEA06BggAEA0QCkoECEEYAEoECEYYAFAAWN8iYOQ1aAFwAXgBgAHfAYgBwRCSAQYwLjExLjKYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    icon: nivoIcon,
    isNivo: true,
    link: "https://www.google.com/search?q=nivo&ei=klldYty6Fama4-EPob-B2A8&ved=0ahUKEwjcy4XAzp33AhUpzTgGHaFfAPsQ4dUDCA4&uact=5&oq=nivo&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBwgAELEDEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyDQguEIAEEMcBEK8BEAoyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOg4ILhCABBCxAxDHARDRAzoKCAAQsQMQgwEQQzoLCC4QxwEQrwEQkQI6EQguEIAEELEDEMcBEKMCENQCOgsIABCABBCxAxCDAToICAAQgAQQsQM6DgguEIAEELEDEMcBEKMCOggILhCABBCxAzoFCAAQsQNKBAhBGABKBAhGGABQAFjeBWCHCGgAcAF4AIAB8AGIAc0FkgEFMC4zLjGYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    icon: axiosIcon,
    isNivo: true,
    link: "https://www.google.com/search?q=axios&oq=axios&aqs=chrome.0.69i59l3j0i433i512j69i60l4.1683j0j9&sourceid=chrome&ie=UTF-8",
  },
  {
    icon: draftIcon,
    link: "https://www.google.com/search?q=draftjs&ei=x1ldYpb5IbaY4-EPn4-08A0&ved=0ahUKEwjW-LTZzp33AhU2zDgGHZ8HDd4Q4dUDCA4&uact=5&oq=draftjs&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEIAEEAoyBQgAEIAEMgcIABCABBAKMgcIABCABBAKMgcIABCABBAKMgUIABCABDIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIFCAAQgAQ6BAgAEEM6CwguEIAEEMcBEKMCOggIABCABBCxAzoLCAAQgAQQsQMQgwE6DQguELEDEMcBENEDEEM6BwgAELEDEEM6DgguEIAEELEDEMcBEKMCOggILhCABBCxAzoOCC4QgAQQsQMQxwEQrwFKBAhBGABKBAhGGABQAFjfCmDWDGgAcAF4AIABrQGIAcIGkgEDMC42mAEAoAEBwAEB&sclient=gws-wiz",
  },
  {
    icon: formikIcon,
    link: "https://www.google.com/search?q=formik&ei=2FldYorAHoCa4-EPi4m2qAM&ved=0ahUKEwiKjL_hzp33AhUAzTgGHYuEDTUQ4dUDCA4&uact=5&oq=formik&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEJECMggIABCxAxCRAjIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgUIABCRAjoICAAQgAQQsQM6CwgAEIAEELEDEIMBOgsILhCABBCxAxDUAjoFCAAQsQM6CwguEIAEEMcBEKMCOgsILhCABBDHARDRAzoICC4QgAQQsQNKBAhBGABKBAhGGABQAFjZBmDxCWgAcAF4AIABtwGIAeYGkgEDMC42mAEAoAEBwAEB&sclient=gws-wiz",
  },
  {
    icon: "https://ik.imgkit.net/ikmedia/logo/light_T4buIzohVH.svg",
    isNivo: true,
    link: "https://www.google.com/search?q=imagekit&ei=5lldYubeHf-X4-EPn7SLkAU&oq=imageki&gs_lcp=Cgdnd3Mtd2l6EAMYATIFCAAQgAQyBQgAEIAEMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEMgUIABCABDIHCAAQgAQQCjIFCAAQgAQyBQgAEIAEMgUIABCABDoFCAAQkQI6CAgAEIAEELEDOgsILhCABBCxAxCDAToLCAAQgAQQsQMQgwE6DgguEIAEELEDEMcBENEDOggIABCxAxCDAToLCC4QgAQQxwEQowI6BAgAEEM6CAgAEIAEEMkDOgUIABCSA0oECEEYAEoECEYYAFAAWKQPYN0YaABwAXgAgAHiAYgB_wiSAQUwLjYuMZgBAKABAcABAQ&sclient=gws-wiz",
  },
  {
    icon: jwtIcon,
    link: "https://www.google.com/search?q=jwt&ei=BVpdYqDOEayX4-EP1ey50AM&oq=jwt&gs_lcp=Cgdnd3Mtd2l6EAMYADIICAAQsQMQkQIyCAgAELEDEJECMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBENEDMgUIABCABDIFCAAQgAQ6BQgAEJECOg4ILhCABBCxAxDHARDRAzoFCC4QgAQ6BwgAEMkDEAo6BQgAEJIDOgoIABCxAxCxAxAKOgcIABCxAxAKOgsILhDHARDRAxCRAjoOCC4QgAQQsQMQxwEQrwE6CwguEIAEEMcBEK8BSgQIQRgASgQIRhgAUABYsw9guhtoAHABeAGAAfEBiAHuB5IBBTAuMi4zmAEAoAEBwAEB&sclient=gws-wiz",
  },
  {
    icon: momentIcon,
    link: "https://www.google.com/search?q=moment&ei=E1pdYuiYMbyP4-EP8JOO0A8&ved=0ahUKEwio7uL9zp33AhW8xzgGHfCJA_oQ4dUDCA4&uact=5&oq=moment&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBAgAEEMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBAgAEEMyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOhIILhDHARDRAxDIAxCwAxBDGAI6DgguEIAEEMcBEKMCENQCOg4ILhCABBCxAxDHARDRAzoOCC4QgAQQsQMQxwEQowI6CAguEIAEELEDSgQIQRgASgQIRhgBUPoEWJYLYI0OaAFwAXgAgAHUAYgBiQeSAQUwLjUuMZgBAKABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz",
  },
  {
    icon: "https://raw.githubusercontent.com/react-dropzone/react-dropzone/master/logo/logo.png",
    link: "https://www.google.com/search?q=react+dropzone&ei=KFpdYuTWDL-Z4-EPrc2JSA&oq=react++dro&gs_lcp=Cgdnd3Mtd2l6EAMYADIICAAQsQMQkQIyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BQgAEJECOg4ILhCABBCxAxDHARCjAjoICAAQgAQQsQM6BQguEIAEOgsILhCABBCxAxCDAToECAAQQzoHCAAQsQMQQ0oECEEYAEoECEYYAFAAWMcQYPUYaABwAXgAgAHXAYgB-guSAQUwLjkuMZgBAKABAcABAQ&sclient=gws-wiz",
  },
  {
    icon: joyrideIcon,
    link: "https://www.google.com/search?q=react+joyride&ei=SlpdYuXXNria4-EP0qaQ6AQ&oq=react+jo&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIICAAQgAQQyQMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQ6BwgAELADEEM6DQguEMcBENEDELADEENKBAhBGAFKBAhGGABQ0l5YrmBgmGloA3AAeACAAeIBiAHUApIBBTAuMS4xmAEAoAEByAEKwAEB&sclient=gws-wiz",
  },
  {
    icon: onesignalIcon,
    isDatePicker: true,
    link: "https://www.google.com/search?q=onesignal&spell=1&sa=X&ved=2ahUKEwjr-buwz533AhVSxjgGHZERDa0QBSgAegQIARAy&biw=1294&bih=669&dpr=1",
  },
  {
    icon: "https://react-table.tanstack.com/_next/static/images/logo-light-66d4dd9109004332c863391e6d1cb309.svg",
    isDatePicker: true,
    link: "https://www.google.com/search?q=react-table&biw=1294&bih=669&ei=gFpdYuibJJCf4-EPoMi7oAs&ved=0ahUKEwjo29Kxz533AhWQzzgGHSDkDrQQ4dUDCA4&uact=5&oq=react-table&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToICAAQgAQQsQM6BQguEIAEOgQIABBDOgsILhCABBCxAxCDAToICC4QsQMQgwE6CwgAEIAEELEDEMkDOgUIABCSAzoHCAAQsQMQQ0oECEEYAEoECEYYAFAAWIEWYPEWaABwAXgAgAHOAYgBpwuSAQUwLjkuMZgBAKABAcABAQ&sclient=gws-wiz",
  },
  {
    icon: slickIcon,
    link: "https://www.google.com/search?q=slick&biw=1294&bih=669&ei=pVpdYrmdH6iY4-EP4P2FiAM&ved=0ahUKEwj5g6DDz533AhUozDgGHeB-ATEQ4dUDCA4&uact=5&oq=slick&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBwgAELEDEEMyBwgAELEDEEMyBgguEAoQQzIFCAAQgAQyBwguELEDEEMyBwgAELEDEEM6BwgAEEcQsAM6BwgAELADEEM6BAguEEM6CAgAEIAEELEDSgQIQRgASgQIRhgAUM4EWNYJYPoLaAFwAXgAgAHYAogBwweSAQcwLjMuMS4xmAEAoAEByAEKwAEB&sclient=gws-wiz",
  },
  {
    icon: "https://www.mux.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmux-logo%402x.484f829e.png&w=81&q=75",
    link: "https://www.google.com/search?q=mux&biw=1294&bih=669&ei=sFpdYrbWD6GU4-EPsYy64AY&ved=0ahUKEwi27q_Iz533AhUhyjgGHTGGDmwQ4dUDCA4&uact=5&oq=mux&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCAgAEIAEEMkDOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOhIILhDHARCjAhDIAxCwAxBDGAI6EgguEMcBENEDEMgDELADEEMYAjoMCC4QyAMQsAMQQxgCOgUIABCRAjoOCC4QgAQQsQMQxwEQ0QM6DgguEIAEELEDEMcBEKMCOggILhCABBCxAzoLCC4QgAQQsQMQ1AI6BQguEIAEOgsILhCABBCxAxCDAUoECEEYAEoECEYYAVCYhAFYrIgBYMOOAWgCcAF4AIABmwGIAasDkgEDMC4zmAEAoAEByAESwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz",
  },
  {
    icon: sanityIcon,
    isNivo: true,
    link: "https://www.google.com/search?q=sanity.io&biw=1294&bih=669&ei=1lpdYuOlIuSV4-EP-5CR-As&ved=0ahUKEwjj6NHaz533AhXkyjgGHXtIBL8Q4dUDCA4&uact=5&oq=sanity.io&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEJECMgUIABCRAjIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOhIILhDHARDRAxDIAxCwAxBDGAI6DwguENQCEMgDELADEEMYAjoSCC4QxwEQowIQyAMQsAMQQxgCOgcIABCABBAKSgQIQRgASgQIRhgBUPIFWOQJYN0LaAFwAXgAgAHtAYgB3gSSAQUwLjIuMZgBAKABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz",
  },
  {
    icon: algoliaIcon,
    isNivo: true,
    link: "https://www.google.com/search?q=algolia&biw=1294&bih=669&ei=31pdYoScBOaH4-EPte2H6As&gs_ssp=eJzj4tbP1TcwNCiyNDTKUmA0YHRg8GJPzEnPz8lMBABSjgam&oq=algoli&gs_lcp=Cgdnd3Mtd2l6EAMYADIOCC4QsQMQxwEQ0QMQkQIyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgUIABCRAjoICC4Q1AIQkQI6DgguEIAEELEDEMcBENEDOggILhCxAxCDAToFCC4QgAQ6CAgAEIAEELEDOg4ILhCABBCxAxDHARCjAjoKCC4QxwEQ0QMQQzoICC4QgAQQsQM6CwguEIAEELEDEIMBOggIABCxAxCDAToICAAQsQMQkQI6CwguEIAEELEDENQCOg0ILhCxAxDHARDRAxBDOg4ILhCABBCxAxDHARCvAToHCAAQgAQQCjoLCC4QgAQQxwEQrwFKBAhBGABKBAhGGABQAFiLCmDLEGgAcAB4AIAB9AGIAb4IkgEFMC41LjGYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    icon: googleIcon,
    link: "https://www.google.com/search?q=react-google-login&biw=1294&bih=669&ei=AVtdYuPjD-mM4-EP2_yFuA4&ved=0ahUKEwij6P_uz533AhVpxjgGHVt-AecQ4dUDCA4&uact=5&oq=react-google-login&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBHSgQIQRgASgQIRhgAUNcEWNcEYOAGaABwAngAgAHhAYgB4QGSAQMyLTGYAQCgAQKgAQHIAQjAAQE&sclient=gws-wiz",
  },
  {
    icon: facebookIcon,
    link: "https://www.google.com/search?q=react-facebook-login&biw=1294&bih=669&ei=HFtdYpTbOfmH4-EP-s2F4A0&ved=0ahUKEwiU2Zn8z533AhX5wzgGHfpmAdwQ4dUDCA4&uact=5&oq=react-facebook-login&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAELADEEMyBwgAELADEENKBAhBGABKBAhGGABQAFgAYIEYaAJwAXgAgAEAiAEAkgEAmAEAyAEKwAEB&sclient=gws-wiz",
  },
  {
    icon: lodashIcon,
    link: "https://www.google.com/search?q=lodash&biw=1294&bih=669&ei=HFtdYpTbOfmH4-EP-s2F4A0&oq=lodash&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCAAQsQMQQzIICAAQsQMQkQIyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQ6DgguEIAEELEDEMcBENEDOg4ILhCABBCxAxDHARCjAjoICAAQgAQQsQM6CAgAELEDEIMBOgUIABCRAjoOCC4QgAQQsQMQxwEQrwFKBAhBGABKBAhGGABQAFi_B2CaDmgAcAF4AIABgAKIAekIkgEFMC4zLjOYAQCgAQHAAQE&sclient=gws-wiz",
  },
];

const otherIcon = [
  {
    icon: jqueryIcon,
    link: "https://www.google.com/search?q=jquery&biw=1294&bih=669&ei=O1tdYvyTMfaY4-EP64iD8AY&ved=0ahUKEwi8nfWK0J33AhV2zDgGHWvEAG4Q4dUDCA4&uact=5&oq=jquery&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBAgAEEMyCAgAEIAEELEDMgQIABBDMgcIABCxAxBDMgQIABBDMgUIABCABDIECAAQQzIICAAQgAQQsQMyCAgAEIAEELEDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFAAWI4OYMkQaABwAXgAgAGDAogBgwmSAQUwLjMuM5gBAKABAcABAQ&sclient=gws-wiz",
  },
  {
    icon: handlebarsIcon,
    link: "https://www.google.com/search?q=handlebars&biw=1294&bih=669&ei=SltdYuHOJ9HF4-EP7bKUuAQ&oq=handl&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQgAQyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyCAgAEIAEELEDMgUIABCABDoOCC4QgAQQsQMQxwEQowI6CwgAEIAEELEDEIMBOgcIABCxAxAKOgoILhDHARDRAxBDOgsILhCABBCxAxDUAjoICC4QgAQQ1AI6BQguEIAEOggILhCABBCxA0oECEEYAEoECEYYAFAAWNIEYPwLaABwAXgAgAGyAYgBuQWSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    icon: expressIcon,
    isMongo: true,
    link: "https://www.google.com/search?q=express&biw=1294&bih=669&ei=VltdYvOsM6CV4-EPgamq8AM&ved=0ahUKEwjzr-eX0J33AhWgyjgGHYGUCj4Q4dUDCA4&uact=5&oq=express&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBAgAEEMyBAgAEEMyCAgAEIAEELEDOg4ILhCABBCxAxDHARCjAjoLCAAQgAQQsQMQgwE6BQgAEIAESgQIQRgASgQIRhgAUABYrQtggA9oAHABeACAAcIBiAHFCJIBAzAuN5gBAKABAcABAQ&sclient=gws-wiz",
  },
  {
    icon: mongoIcon,
    isMongo: true,
    link: "https://www.google.com/search?q=mongodb&biw=1294&bih=669&ei=Y1tdYpKnFIzG4-EPsruH-Ac&oq=mongo&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCAAQsQMQQzIKCC4QsQMQ1AIQQzIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzILCC4QgAQQsQMQ1AIyBAgAEEMyBAgAEEM6CgguEMcBENEDEEM6DgguEIAEELEDEMcBENEDOg4ILhCABBCxAxDHARCjAjoICAAQgAQQsQM6BQgAEIAEOgoILhDHARCjAhBDOgsIABCABBCxAxCDAToHCC4Q1AIQQzoHCAAQyQMQQ0oECEEYAEoECEYYAFAAWJIHYIkSaABwAXgAgAGnAYgBswWSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz",
  },
  {
    icon: herokuIcon,
    isMongo: true,
    link: "https://www.google.com/search?q=heroku&biw=1294&bih=669&ei=cVtdYsmuPJ2e4-EPyqap2Ao&ved=0ahUKEwiJq-Ck0J33AhUdzzgGHUpTCqsQ4dUDCA4&uact=5&oq=heroku&gs_lcp=Cgdnd3Mtd2l6EAMyDQguELEDEMcBENEDEEMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBwgAELEDEEMyCAgAEIAEELEDMgQIABBDMgQIABBDMgQIABBDMgUIABCABDoHCAAQRxCwAzoHCAAQsAMQQzoKCAAQ5AIQsAMYAToSCC4QxwEQ0QMQyAMQsAMQQxgCOgoILhDHARDRAxBDOg4ILhCABBCxAxDHARCjAjoLCAAQgAQQsQMQgwE6BwgAELEDEAo6EQguEIAEELEDEMcBEKMCENQCSgQIQRgASgQIRhgBUPwGWNgOYIwRaAFwAXgAgAHoAYgB9weSAQUwLjQuMpgBAKABAcgBEcABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz",
  },
  {
    icon: firebaseIcon,
    isMongo: true,
    link: "https://www.google.com/search?q=firebase&biw=1294&bih=669&ei=hFtdYuz5MPec4-EP4s2p2As&gs_ssp=eJzj4tbP1TcwNEw2rcwxVmA0YHRg8OJIyyxKTUosTgUAXfkHSA&oq=f&gs_lcp=Cgdnd3Mtd2l6EAEYADIKCC4QxwEQ0QMQQzIECAAQQzIGCAAQChBDMgQIABBDMgcIABCxAxBDMgsIABCABBCxAxCDATIKCC4QxwEQ0QMQQzILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgUIABCABDoHCAAQRxCwAzoHCAAQsAMQQzoKCAAQ5AIQsAMYAToSCC4QxwEQ0QMQyAMQsAMQQxgCOhIILhDHARCjAhDIAxCwAxBDGAI6DQguELEDEMcBENEDEEM6DgguEIAEELEDEMcBENEDSgQIQRgASgQIRhgBUMMGWJsQYMIdaAJwAXgAgAHtAYgBoQOSAQUwLjEuMZgBAKABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz",
  },
];

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">
                Hi! I am Yashpal Nimesh
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="border-gray-200 rounded-lg">
                My Top Skills I have worked on
                <ul role="list" className="">
                  {skillIcon.map((data) => (
                    <a href={data.link} target="_blank">
                      <li className="inline-block m-5">
                        <img
                          src={data.icon}
                          height={50}
                          width={50}
                          style={{ height: data.isFigma ? "50px" : "" }}
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
              <div className="border-gray-200 rounded-lg">
                Tools and Platform I have worked on
                <ul role="list" className="">
                  {toolIcon.map((data) => (
                    <a href={data.link} target="_blank">
                      <li className="inline-block m-5">
                        <img
                          src={data.icon}
                          height={50}
                          width={50}
                          style={{ height: data.isFigma ? "50px" : "" }}
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
              <div className="border-gray-200 rounded-lg">
                Libraries I have used in projects
                <ul role="list" className="">
                  {libIcon.map((data) => (
                    <a href={data.link} target="_blank">
                      <li className="inline-block m-5">
                        <img
                          src={data.icon}
                          height={50}
                          width={50}
                          style={{
                            width: data.isNivo
                              ? "115px"
                              : data.isDatePicker
                              ? "155px"
                              : "",
                          }}
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
              <div className="border-gray-200 rounded-lg">
                Other Skills I was worked on
                <ul role="list" className="">
                  {otherIcon.map((data) => (
                    <a href={data.link} target="_blank">
                      <li className="inline-block m-5">
                        <img
                          src={data.icon}
                          height={50}
                          width={50}
                          style={{
                            width: data.isMongo ? "100px" : "",
                          }}
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
