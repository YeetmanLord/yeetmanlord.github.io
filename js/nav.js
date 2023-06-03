'use strict'

function NavSection({ links, currentLink }) {
    let linkList = links.map((link) => {
        let cls = "nav-link" + (link.text == currentLink ? " active" : "");
        if (link.hasSubLinks) {
            return <li key={link.id}>{link.text}<NavSection links={link.subLinks} /></li>;
        } else {
            return <li key={link.id}><a href={link.link} target={link.outside ? "_blank" : "_self"} className={cls}>{link.text}</a></li>;
        }
    });

    return <ul>{linkList}</ul>;
}

let links = [
    {
        id: 0, // React requires a unique key for each element in a list
        hasSubLinks: false,
        text: "Home",
        link: "\/"
    },
    {
        id: 1, // React requires a unique key for each element in a list
        hasSubLinks: true,
        text: "Projects",
        subLinks: [
            {
                id: 0, // React requires a unique key for each element in a list
                hasSubLinks: false,
                text: "SoManyEnchants",
                link: "https://www.curseforge.com/minecraft/mc-mods/enchants",
                outside: true
            },
            {
                id: 1, // React requires a unique key for each element in a list
                hasSubLinks: false,
                text: "RayCastUtility",
                link: "https://www.spigotmc.org/resources/raycastutility.105956/",
                outside: true
            },
            {
                id: 2,
                hasSubLinks: false,
                text: "ZetaCore",
                link: "https://www.spigotmc.org/resources/%CE%B6etacore.107426/",
                outside: true
            },
            {
                id: 3,
                hasSubLinks: false,
                text: "ReflectionAPI",
                link: "https://www.spigotmc.org/resources/reflectionapi.107418/",
                outside: true
            },
        ]
    },
    {
        id: 2, // React requires a unique key for each element in a list
        hasSubLinks: true,
        text: "Documentation",
        subLinks: [
            {
                id: 0, // React requires a unique key for each element in a list
                hasSubLinks: false,
                text: "ZetaCore",
                link: "\/docs/ZetaCore/"
            },
            {
                id: 1, // React requires a unique key for each element in a list
                hasSubLinks: false,
                text: "BedwarsZeta",
                link: "\/docs/BedwarsZeta/"
            },
            {
                id: 2, // React requires a unique key for each element in a list
                hasSubLinks: false,
                text: "ReflectionAPI",
                link: "\/docs/ReflectionAPI/"
            },
            {
                id: 3, // React requires a unique key for each element in a list
                hasSubLinks: false,
                text: "RayCastUtility",
                link: "\/docs/RayCastUtility/"
            }
        ]
    },
    {
        id: 3, // React requires a unique key for each element in a list
        hasSubLinks: true,
        text: "Resources",
        subLinks: [
            {
                id: 0, // React requires a unique key for each element in a list
                hasSubLinks: false,
                text: "API examples",
                link: "\/resources/ApiExamples"
            }
        ]
    }
]

const lookup = {
    "/index.html": "Home",
    "/": "Home",
    "/docs/ZetaCore.html": "ZetaCore",
    "/docs/BedwarsZeta.html": "BedwarsZeta",
    "/docs/ReflectionAPI.html": "ReflectionAPI",
    "/docs/RayCastUtility.html": "RayCastUtility",
    "/resources/ApiExamples.html": "API examples",
    "/docs/ZetaCore": "ZetaCore",
    "/docs/BedwarsZeta": "BedwarsZeta",
    "/docs/ReflectionAPI": "ReflectionAPI",
    "/docs/RayCastUtility": "RayCastUtility",
    "/resources/ApiExamples": "API examples"
}

function Nav({ currentLink }) {
    let linkList = links.map((link) => {
        let cls = "nav-link" + (link.text == currentLink ? " active" : "");
        if (link.hasSubLinks) {
            return <li key={link.id}>{link.text}<NavSection currentLink={currentLink} links={link.subLinks} /></li>;
        } else {
            return <li key={link.id}><a href={link.link} target={link.outside ? "_blank" : "_self"} className={cls}>{link.text}</a></li>;

        }
    });

    return <ul>{linkList}</ul>;
}

const rootNode = document.getElementById('nav-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<Nav currentLink={lookup[window.location.pathname]} />);